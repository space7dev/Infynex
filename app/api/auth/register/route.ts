import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { createAuthToken, setAuthCookie } from '@/lib/auth'

export const runtime = 'nodejs'

const registerSchema = z.object({
  name: z.coerce.string().trim().min(2),
  email: z.coerce.string().trim().email(),
  password: z.coerce.string().min(8),
})

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ detail: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = registerSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { detail: 'Invalid form data.', errors: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { name, email, password } = parsed.data
  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ detail: 'Email already in use.' }, { status: 409 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  const user = await prisma.user.create({
    data: {
      name,
      email,
      passwordHash,
    },
  })

  const token = createAuthToken({
    userId: user.id,
    email: user.email,
    name: user.name,
  })

  if (!token) {
    return NextResponse.json({ detail: 'Auth not configured.' }, { status: 500 })
  }

  const response = NextResponse.json({ status: 'ok' })
  setAuthCookie(response, token)
  return response
}
