import crypto from 'crypto'
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

const RESET_TOKEN_TTL_MS = 1000 * 60 * 60

const sha256 = (value: string) =>
  crypto.createHash('sha256').update(value).digest('hex')

export async function POST(request: Request) {
  const payload = await request.json().catch(() => null)
  const email = typeof payload?.email === 'string' ? payload.email : ''

  if (!email) {
    return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
  }

  const user = await prisma.user.findUnique({ where: { email } })
  if (user) {
    const rawToken = crypto.randomBytes(32).toString('hex')
    const tokenHash = sha256(rawToken)
    const expiresAt = new Date(Date.now() + RESET_TOKEN_TTL_MS)

    await prisma.passwordResetToken.create({
      data: {
        tokenHash,
        expiresAt,
        userId: user.id,
      },
    })

    const resendKey = process.env.RESEND_API_KEY
    const resendFrom = process.env.RESEND_FROM_EMAIL
    const baseUrl =
      process.env.NEXT_PUBLIC_SITE_URL || request.headers.get('origin') || ''

    if (resendKey && resendFrom && baseUrl) {
      const resetUrl = `${baseUrl}/auth/reset-password?token=${rawToken}`
      const message = {
        from: resendFrom,
        to: email,
        subject: 'Reset your admin password',
        html: `<p>Reset your password by visiting <a href="${resetUrl}">${resetUrl}</a>.</p>`,
      }

      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(message),
      })
    }
  }

  return NextResponse.json({ status: 'ok' })
}
