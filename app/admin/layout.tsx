import type { ReactNode } from 'react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { AUTH_COOKIE, verifyAuthToken } from '@/lib/auth'

type AdminLayoutProps = {
  children: ReactNode
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const token = cookies().get(AUTH_COOKIE)?.value
  const user = token ? verifyAuthToken(token) : null

  if (!user) {
    redirect('/auth/login')
  }

  return <>{children}</>
}
