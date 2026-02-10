import { NextResponse } from 'next/server'
import { z } from 'zod'
import bcrypt from 'bcryptjs'
import { prisma } from '@/lib/prisma'
import { createAuthToken, setAuthCookie } from '@/lib/auth'

export const runtime = 'nodejs'

const loginSchema = z.object({
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

  const parsed = loginSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { detail: 'Invalid form data.', errors: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { email, password } = parsed.data
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return NextResponse.json({ detail: 'Invalid credentials.' }, { status: 401 })
  }

  const matches = await bcrypt.compare(password, user.passwordHash)
  if (!matches) {
    return NextResponse.json({ detail: 'Invalid credentials.' }, { status: 401 })
  }

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
