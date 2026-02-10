'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setLoading(true)

    const response = await fetch('/api/auth/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password }),
    })

    setLoading(false)

    if (response.ok) {
      router.push('/admin/emails')
      return
    }

    const data = await response.json().catch(() => ({}))
    setError(data.detail || 'Unable to create account.')
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Create account</h1>
        <p className="mt-2 text-sm text-slate-600">Set up your admin access.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">Name</label>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
          </div>
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
            {loading ? 'Creating account...' : 'Create account'}
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="text-blue-600">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
