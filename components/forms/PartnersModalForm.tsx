'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/contactApi'

export default function PartnersModalForm() {
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
        source: 'partners-modal',
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
    <form className="common_form" method="POST" noValidate onSubmit={handleSubmit}>
      {isSubmitted && (
        <p className="mb-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-700">
          Thanks! We will reach out soon.
        </p>
      )}
      {errorMessage && (
        <p className="mb-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {errorMessage}
        </p>
      )}
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Full Name"
          name="full_name"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          name="email"
          required
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Mobile Number With Country Code"
          name="mobile_number"
          required
        />
      </div>
      <div className="form-group">
        <textarea
          cols={5}
          className="form-control"
          placeholder="Your Main Skill"
          name="message"
          required
        />
      </div>
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="form-group">
        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
        </button>
      </div>
    </form>
  )
}
