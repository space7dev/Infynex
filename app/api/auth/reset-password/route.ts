import crypto from 'crypto'
import bcrypt from 'bcryptjs'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

const sha256 = (value: string) =>
  crypto.createHash('sha256').update(value).digest('hex')

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const token = typeof payload?.token === 'string' ? payload.token : ''
  const password = typeof payload?.password === 'string' ? payload.password : ''

  if (!token || !password) {
    return NextResponse.json({ error: 'Token and password are required.' }, { status: 400 })
  }

  if (password.length < 8) {
    return NextResponse.json({ error: 'Password must be at least 8 characters.' }, { status: 400 })
  }

  const tokenHash = sha256(token)
  const resetToken = await prisma.passwordResetToken.findFirst({
    where: {
      tokenHash,
      usedAt: null,
      expiresAt: { gt: new Date() },
    },
  })

  if (!resetToken) {
    return NextResponse.json({ error: 'Invalid or expired token.' }, { status: 400 })
  }

  const passwordHash = await bcrypt.hash(password, 10)
  await prisma.user.update({
    where: { id: resetToken.userId },
    data: { passwordHash },
  })

  await prisma.passwordResetToken.update({
    where: { id: resetToken.id },
    data: { usedAt: new Date() },
  })

  return NextResponse.json({ status: 'ok' })
}
