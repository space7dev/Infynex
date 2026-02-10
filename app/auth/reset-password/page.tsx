'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

export default function ResetPasswordPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const token = searchParams.get('token') || ''

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setMessage('')

    if (!token) {
      setError('Reset token is missing.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setLoading(true)

    const response = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token, password }),
    })

    setLoading(false)

    if (response.ok) {
      setMessage('Password updated. Redirecting...')
      setTimeout(() => router.push('/admin/emails'), 800)
      return
    }

    const data = await response.json().catch(() => ({}))
    setError(data.detail || 'Unable to reset password.')
  }

  return (
    <div className="min-h-screen bg-slate-50 px-6 py-12 text-slate-900">
      <div className="mx-auto w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-semibold">Reset password</h1>
        <p className="mt-2 text-sm text-slate-600">Choose a new password.</p>

        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label className="text-sm font-medium text-slate-700">New password</label>
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-2 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
              required
            />
          </div>
          <div>
            <label className="text-sm font-medium text-slate-700">Confirm password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(event) => setConfirmPassword(event.target.value)}
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
            {loading ? 'Updating...' : 'Update password'}
          </button>
        </form>
      </div>
    </div>
  )
}
