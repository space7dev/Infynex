import { NextResponse } from 'next/server'
import { z } from 'zod'
import { prisma } from '@/lib/prisma'

export const runtime = 'nodejs'

const contactSchema = z.object({
  full_name: z.coerce.string().trim().min(2),
  email: z.coerce.string().trim().email(),
  mobile_number: z.coerce.string().trim().optional().or(z.literal('')),
  message: z.coerce.string().trim().min(2),
  website: z.coerce.string().trim().optional().or(z.literal('')),
  source: z.coerce.string().trim().optional(),
})

const normalizePayload = (payload: Record<string, unknown>) => {
  const fullName =
    payload.full_name ?? payload.fullName ?? payload.name ?? payload.fullname ?? ''
  const mobileNumber =
    payload.mobile_number ?? payload.mobileNumber ?? payload.phone ?? payload.mobile ?? ''
  const message = payload.message ?? payload.project_description ?? ''

  return {
    full_name: String(fullName).trim(),
    email: String(payload.email ?? '').trim(),
    mobile_number: String(mobileNumber).trim(),
    message: String(message).trim(),
    website: payload.website ? String(payload.website).trim() : '',
    source: payload.source ? String(payload.source).trim() : undefined,
  }
}

type RateState = { count: number; resetAt: number }

const rateStore = new Map<string, RateState>()

const getRateLimit = () => Number(process.env.CONTACT_RATE_LIMIT ?? '5')
const getRateWindowMs = () => Number(process.env.CONTACT_RATE_WINDOW ?? '600') * 1000

const getClientIp = (request: Request) => {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) {
    return forwarded.split(',')[0]?.trim() || 'unknown'
  }
  return request.headers.get('x-real-ip') || 'unknown'
}

const isRateLimited = (clientIp: string) => {
  const limit = getRateLimit()
  const windowMs = getRateWindowMs()
  const now = Date.now()

  const entry = rateStore.get(clientIp)
  if (!entry || entry.resetAt <= now) {
    rateStore.set(clientIp, { count: 1, resetAt: now + windowMs })
    return false
  }

  if (entry.count >= limit) {
    return true
  }

  entry.count += 1
  rateStore.set(clientIp, entry)
  return false
}

const parseRequestBody = async (request: Request) => {
  const contentType = request.headers.get('content-type') || ''
  if (contentType.includes('application/json')) {
    return request.json()
  }

  if (contentType.includes('application/x-www-form-urlencoded') || contentType.includes('multipart/form-data')) {
    const formData = await request.formData()
    return Object.fromEntries(formData.entries())
  }

  return request.json()
}

export async function POST(request: Request) {
  let payload: unknown
  try {
    payload = await parseRequestBody(request)
  } catch (error) {
    return NextResponse.json({ detail: 'Invalid request body.' }, { status: 400 })
  }

  const normalized =
    payload && typeof payload === 'object'
      ? normalizePayload(payload as Record<string, unknown>)
      : payload

  const parsed = contactSchema.safeParse(normalized)
  if (!parsed.success) {
    return NextResponse.json(
      { detail: 'Invalid form data.', errors: parsed.error.flatten() },
      { status: 400 }
    )
  }

  const data = parsed.data
  if (data.website) {
    const origin = request.headers.get('origin') || ''
    const referer = request.headers.get('referer') || ''
    const cleanedWebsite = data.website.trim()
    const trustedPrefixes = [origin, referer]
      .filter(Boolean)
      .map((value) => value.replace(/\/$/, ''))

    const isTrusted = trustedPrefixes.some((prefix) => cleanedWebsite.startsWith(prefix))
    if (!isTrusted) {
      return NextResponse.json({ detail: 'Invalid submission.' }, { status: 400 })
    }
  }

  const clientIp = getClientIp(request)
  if (isRateLimited(clientIp)) {
    return NextResponse.json({ detail: 'Too many requests.' }, { status: 429 })
  }

  const userAgent = request.headers.get('user-agent') || undefined
  try {
    await prisma.contactSubmission.create({
      data: {
        fullName: data.full_name,
        email: data.email,
        mobileNumber: data.mobile_number || '',
        message: data.message,
        source: data.source,
        clientIp,
        userAgent,
      },
    })
  } catch (error) {
    console.error('Failed to store contact submission', error)
  }

  const resendKey = process.env.RESEND_API_KEY
  const fromEmail = process.env.RESEND_FROM_EMAIL
  const recipient = process.env.CONTACT_RECIPIENT || 'david@dragondev.agency'

  if (!resendKey || !fromEmail) {
    return NextResponse.json({ detail: 'Email service not configured.' }, { status: 500 })
  }

  const body = [
    `Name: ${data.full_name}`,
    `Email: ${data.email}`,
    `Phone: ${data.mobile_number || 'N/A'}`,
    data.source ? `Source: ${data.source}` : null,
    'Message:',
    data.message,
    `IP: ${clientIp}`,
  ]
    .filter(Boolean)
    .join('\n')

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${resendKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [recipient],
      subject: 'New contact form submission',
      text: body,
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    return NextResponse.json({ detail: `Email failed: ${errorText}` }, { status: 502 })
  }

  return NextResponse.json({ status: 'ok' })
}
