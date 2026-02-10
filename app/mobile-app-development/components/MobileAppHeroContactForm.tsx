'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/contactApi'

export default function MobileAppHeroContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await submitContactForm({
        full_name: String(formData.get('full_name') || ''),
        email: String(formData.get('email') || ''),
        mobile_number: String(formData.get('mobile_number') || ''),
        message: String(formData.get('message') || ''),
        website: String(formData.get('website') || ''),
        source: 'mobile-app-development-hero',
      })
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="rounded-3xl border border-white/15 bg-white/10 p-6 text-white backdrop-blur">
      <h3 className="font-[var(--font-space-grotesk)] text-2xl">Talk to our experts</h3>
      <p className="mt-2 text-sm text-white/70">Get a tailored plan for your next app.</p>
      <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50"
          placeholder="Full Name"
          type="text"
          name="full_name"
          required
        />
        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50"
          placeholder="Email"
          type="email"
          name="email"
          required
        />
        <input
          className="w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50"
          placeholder="Mobile Number With Country Code"
          type="text"
          name="mobile_number"
          required
        />
        <textarea
          className="min-h-[120px] w-full rounded-xl border border-white/20 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/50"
          placeholder="Your Project Description"
          name="message"
          required
        />
        <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-xl bg-white px-4 py-3 text-sm font-semibold text-slate-900 disabled:opacity-70"
        >
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
        </button>
        {errorMessage && <p className="text-sm text-red-200">{errorMessage}</p>}
      </form>
    </div>
  )
}
