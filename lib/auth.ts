import jwt from 'jsonwebtoken'
import type { NextResponse } from 'next/server'

export const AUTH_COOKIE = 'infynex_auth'

export type AuthUser = {
  userId: string
  email: string
  name: string
}

const getJwtSecret = () => process.env.AUTH_JWT_SECRET || ''

const getSessionDays = () => Number(process.env.AUTH_SESSION_DAYS ?? '7')

export const createAuthToken = (user: AuthUser) => {
  const secret = getJwtSecret()
  if (!secret) {
    return null
  }

  return jwt.sign(user, secret, { expiresIn: `${getSessionDays()}d` })
}

export const verifyAuthToken = (token: string) => {
  const secret = getJwtSecret()
  if (!secret) {
    return null
  }

  try {
    return jwt.verify(token, secret) as AuthUser
  } catch {
    return null
  }
}

export const setAuthCookie = (response: NextResponse, token: string) => {
  const maxAge = getSessionDays() * 24 * 60 * 60
  response.cookies.set(AUTH_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge,
  })
}

export const clearAuthCookie = (response: NextResponse) => {
  response.cookies.set(AUTH_COOKIE, '', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: 0,
  })
}
