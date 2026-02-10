import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'
import { createAuthToken, setAuthCookie } from '@/lib/auth'

export const runtime = 'nodejs'

const resetSchema = z.object({
  token: z.coerce.string().min(10),
  password: z.coerce.string().min(8),
})

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ detail: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = resetSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { detail: 'Invalid form data.', errors: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { token, password } = parsed.data
  const tokenHash = crypto.createHash('sha256').update(token).digest('hex')

  const record = await prisma.passwordResetToken.findFirst({
    where: {
      tokenHash,
      usedAt: null,
      expiresAt: { gt: new Date() },
    },
    include: { user: true },
  })

  if (!record) {
    return NextResponse.json({ detail: 'Invalid or expired token.' }, { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 10)

  await prisma.$transaction([
    prisma.user.update({
      where: { id: record.userId },
      data: { passwordHash },
    }),
    prisma.passwordResetToken.update({
      where: { id: record.id },
      data: { usedAt: new Date() },
    }),
  ])

  const authToken = createAuthToken({
    userId: record.user.id,
    email: record.user.email,
    name: record.user.name,
  })

  if (!authToken) {
    return NextResponse.json({ detail: 'Auth not configured.' }, { status: 500 })
  }

  const response = NextResponse.json({ status: 'ok' })
  setAuthCookie(response, authToken)
  return response
}
