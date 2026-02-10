import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { createAuthToken, setAuthCookie } from '@/lib/auth'

export const runtime = 'nodejs'

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const name = typeof payload?.name === 'string' ? payload.name : ''
  const email = typeof payload?.email === 'string' ? payload.email : ''
  const password = typeof payload?.password === 'string' ? payload.password : ''

  if (!name || !email || !password) {
    return NextResponse.json({ error: 'All fields are required.' }, { status: 400 })
  }

  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  const existing = await prisma.user.findUnique({ where: { email } })
  if (existing) {
    return NextResponse.json({ error: 'Account already exists.' }, { status: 409 })
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
    return NextResponse.json({ error: 'Unable to create session.' }, { status: 500 })
  }

  const response = NextResponse.json({ status: 'ok' })
  setAuthCookie(response, token)
  return response
}
