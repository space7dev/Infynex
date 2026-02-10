'use client'

import { useState } from 'react'
import { Loader2 } from 'lucide-react'
import { submitContactForm } from '@/lib/contactApi'

export default function ContactSection() {
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    mobile_number: '',
    message: '',
    website: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setErrorMessage('')

    try {
      await submitContactForm({
        full_name: formData.full_name,
        email: formData.email,
        mobile_number: formData.mobile_number,
        message: formData.message,
        website: formData.website,
        source: 'contact-section',
      })
      setIsSubmitted(true)
      setFormData({
        full_name: '',
        email: '',
        mobile_number: '',
        message: '',
        website: '',
      })
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Map Column */}
            {/* <div className="order-2 lg:order-1 h-[400px] lg:h-auto">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6136.70313439851!2d-75.578387!3d39.731753!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd335b582bad%3A0x25608305828fbd1!2sInfynex%20Solutions!5e0!3m2!1sen!2sin!4v1728361631280!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '533px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Infynex Location"
                className="w-full h-full"
              />
            </div> */}

            {/* Form Column */}
            <div className="order-1 lg:order-2 p-8 md:p-12 lg:p-16">
              <h6 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How Can We Help You?
              </h6>
              <p className="text-gray-600 mb-8">
                Get in touch with us and make your <strong className="text-gray-900">business thrive!</strong>
              </p>
              {isSubmitted && (
                <p className="mb-4 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-700">
                  Thanks! We will get back to you shortly.
                </p>
              )}
              {errorMessage && (
                <p className="mb-4 rounded-lg bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorMessage}
                </p>
              )}

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Full Name */}
                <div className="form-group">
                  <input
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Mobile Number */}
                <div className="form-group">
                  <input
                    type="text"
                    name="mobile_number"
                    value={formData.mobile_number}
                    onChange={handleChange}
                    placeholder="Mobile Number With Country Code"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                {/* Project Description */}
                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Project Description"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>

                <input
                  type="text"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Hidden Fields */}
                <input type="hidden" name="utm_source" value="organic" />
                <input type="hidden" name="utm_medium" value="" />
                <input type="hidden" name="utm_campaign" value="Infynex" />
                <input type="hidden" name="utm_term" value="" />
                <input type="hidden" name="lead_source" value="" />

                {/* Submit Button */}
                <div className="form-group">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit'
                    )}
                  </button>
                </div>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
