'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

type ResetPasswordFormProps = {
  token: string
}

export default function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter()
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState('')
  const [status, setStatus] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setError('')
    setStatus('')

    if (!token) {
      setError('Invalid or missing reset token.')
      return
    }

    if (!password || password.length < 8) {
      setError('Password must be at least 8 characters long.')
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ token, password }),
      })

      if (!response.ok) {
        const payload = await response.json().catch(() => null)
        throw new Error(payload?.error || 'Unable to reset password.')
      }

      setStatus('Password updated. Redirecting to login...')
      setPassword('')
      setConfirmPassword('')
      setTimeout(() => {
        router.push('/auth/login')
      }, 1200)
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Unable to reset password.'
      setError(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
      <label className="block text-sm font-medium text-slate-700">
        New password
        <input
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          autoComplete="new-password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          placeholder="Create a new password"
          required
          type="password"
          value={password}
        />
      </label>

      <label className="block text-sm font-medium text-slate-700">
        Confirm password
        <input
          className="mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-slate-400"
          autoComplete="new-password"
          name="confirmPassword"
          onChange={(event) => setConfirmPassword(event.target.value)}
          placeholder="Repeat the new password"
          required
          type="password"
          value={confirmPassword}
        />
      </label>

      {status && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
          {status}
        </div>
      )}
      {error && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {error}
        </div>
      )}

      <button
        className="w-full rounded-xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
        disabled={isSubmitting}
        type="submit"
      >
        {isSubmitting ? 'Updating...' : 'Update password'}
      </button>

      <div className="text-center text-sm text-slate-600">
        <Link className="hover:text-slate-900" href="/auth/login">
          Back to sign in
        </Link>
      </div>
    </form>
  )
}
