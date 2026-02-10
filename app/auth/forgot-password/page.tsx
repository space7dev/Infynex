'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')
    setLoading(true)

    const response = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    })

    setLoading(false)

    if (response.ok) {
      setMessage('If the email exists, a reset link has been sent.')
      return
    }

    const data = await response.json().catch(() => ({}))
    setError(data.detail || 'Unable to send reset email.')
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Forgot password</h1>
        <p className="mt-2 text-sm text-slate-600">
          Enter your email to receive a reset link.
        </p>

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

          {error ? <p className="text-sm text-red-600">{error}</p> : null}
          {message ? <p className="text-sm text-green-600">{message}</p> : null}

          <button
            type="submit"
            className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
            disabled={loading}
          >
            {loading ? 'Sending link...' : 'Send reset link'}
          </button>
        </form>

        <div className="mt-6 text-sm text-slate-600">
          <Link href="/auth/login" className="text-blue-600">
            Back to sign in
          </Link>
        </div>
      </div>
    </div>
  )
}
