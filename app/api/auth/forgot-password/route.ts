import { NextResponse } from 'next/server'
import { z } from 'zod'
import crypto from 'crypto'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

const forgotSchema = z.object({
  email: z.coerce.string().trim().email(),
})

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ detail: 'Invalid request body.' }, { status: 400 })
  }

  const parsed = forgotSchema.safeParse(payload)
  if (!parsed.success) {
    return NextResponse.json(
      { detail: 'Invalid form data.', errors: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const { email } = parsed.data
  const user = await prisma.user.findUnique({ where: { email } })
  if (!user) {
    return NextResponse.json({ status: 'ok' })
  }

  const ttlMinutes = Number(process.env.PASSWORD_RESET_TTL_MINUTES ?? '60')
  const expiresAt = new Date(Date.now() + ttlMinutes * 60 * 1000)

  const rawToken = crypto.randomBytes(32).toString('hex')
  const tokenHash = crypto.createHash('sha256').update(rawToken).digest('hex')

  await prisma.passwordResetToken.create({
    data: {
      userId: user.id,
      tokenHash,
      expiresAt,
    },
  })

  const resendKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'
  const baseUrl = siteUrl.replace(/\/$/, '')
  const resetUrl = `${baseUrl}/auth/reset-password?token=${rawToken}`

  if (!resendKey || !fromEmail) {
    return NextResponse.json({ detail: 'Email service not configured.' }, { status: 500 })
  }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [email],
      subject: 'Reset your password',
      text: `Use this link to reset your password: ${resetUrl}`,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json({ detail: `Email failed: ${errorText}` }, { status: 502 })
  }

  return NextResponse.json({ status: 'ok' })
}
