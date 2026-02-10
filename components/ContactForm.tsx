'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Loader2, CheckCircle } from 'lucide-react'
import { submitContactForm } from '@/lib/contactApi'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(10, 'Please enter a valid phone number').optional().or(z.literal('')),
  company: z.string().optional(),
  service: z.string().min(1, 'Please select a service'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  website: z.string().optional(),
})

type ContactFormData = z.infer<typeof contactSchema>

const services = [
  'Mobile App Development',
  'Blockchain Development',
  'AI & Machine Learning',
  'Product Development',
  'Hire Developers',
  'Project Rescue',
  'Other',
]

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setErrorMessage('')

    try {
      const composedMessage = [
        `Service: ${data.service}`,
        data.company ? `Company: ${data.company}` : null,
        data.message,
      ]
        .filter(Boolean)
        .join('\n')

      await submitContactForm({
        full_name: data.name,
        email: data.email,
        mobile_number: data.phone || '',
        message: composedMessage,
        website: data.website,
        source: 'contact-form',
      })

      setIsSuccess(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000)
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Success Message */}
      {isSuccess && (
        <div className="flex items-center space-x-2 rounded-lg bg-green-50 p-4 text-green-800 animate-fade-in">
          <CheckCircle className="h-5 w-5" />
          <span>Thank you! We&apos;ll get back to you soon.</span>
        </div>
      )}
      {errorMessage && (
        <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-secondary-900">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input
          {...register('name')}
          type="text"
          id="name"
          className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="John Doe"
        />
        {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-secondary-900">
          Email Address <span className="text-red-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="john@example.com"
        />
        {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
      </div>

      {/* Phone & Company */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-2 block text-sm font-medium text-secondary-900">
            Phone Number
          </label>
          <input
            {...register('phone')}
            type="tel"
            id="phone"
            className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="+1 (555) 123-4567"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div>
          <label htmlFor="company" className="mb-2 block text-sm font-medium text-secondary-900">
            Company Name
          </label>
          <input
            {...register('company')}
            type="text"
            id="company"
            className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
            placeholder="ABC Corp"
          />
        </div>
      </div>

      {/* Service */}
      <div>
        <label htmlFor="service" className="mb-2 block text-sm font-medium text-secondary-900">
          Service Interested In <span className="text-red-500">*</span>
        </label>
        <select
          {...register('service')}
          id="service"
          className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
        {errors.service && <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-secondary-900">
          Message <span className="text-red-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={6}
          className="w-full rounded-lg border border-secondary-300 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500"
          placeholder="Tell us about your project..."
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>}
      </div>

      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('website')} />

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
            Sending...
          </span>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  )
}
