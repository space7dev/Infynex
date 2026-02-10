'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    })

    setLoading(false)

    if (response.ok) {
      router.push('/admin/emails')
      return
    }

    const data = await response.json().catch(() => ({}))
    setError(data.detail || 'Unable to sign in.')
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Sign in</h1>
        <p className="mt-2 text-sm text-slate-600">Welcome back to Infynex admin.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Email</label>
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
          </div>

          {error ? <p className="text-sm text-red-600">{error}</p> : null}

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            disabled={loading}
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between text-sm text-slate-600">
          <Link href="/auth/forgot-password" className="text-blue-600">
            Forgot password?
          </Link>
          <Link href="/auth/register" className="text-blue-600">
            Create account
          </Link>
        </div>
      </div>
    </div>
  )
}
