import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createAuthToken, setAuthCookie } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const email = typeof payload?.email === 'string' ? payload.email : ''
  const password = typeof payload?.password === 'string' ? payload.password : ''

  if (!email || !password) {
    return NextResponse.json({ error: 'Email and password are required.' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
  }

  const isValid = await bcrypt.compare(password, user.passwordHash)
  if (!isValid) {
    return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 })
  }

  const token = createAuthToken({
    userId: user.id,
    email: user.email,
    name: user.name,
  })

  if (!token) {
    return NextResponse.json({ error: 'Unable to create session.' }, { status: 500 })
  }

  const response = NextResponse.json({ status: 'ok' })
  setAuthCookie(response, token)
  return response
}
