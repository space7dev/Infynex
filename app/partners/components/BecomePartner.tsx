'use client'

import React, { useState } from 'react';
import { partnerBenefits, partnerBadges } from '@/lib/partnersData';
import { submitContactForm } from '@/lib/contactApi';

export default function BecomePartner() {
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
        source: 'become-partner',
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
    <section className="customer-sec-padd-new pt-0 suffesco-start-custm">
      <div className="container">
        <div className="row suffesv3-heading-bottom-padd">
          <div className="col-lg-12 col-xs-12">
            <h2 className="partners-section-title text-center">Become Our Partner</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-xs-12">
            <ul className="custom-app-dev-start-conver">
              {partnerBenefits.map((benefit) => (
                <li key={benefit} className="suffesv3-sub-para">
                  {benefit}
                </li>
              ))}
            </ul>
            <div className="custom-app-dev-clients">
              {partnerBadges.map((badge) => (
                <img
                  key={badge.src}
                  src={badge.src}
                  alt={badge.alt}
                  className="img-responsive partners-badge"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-xs-12">
            <div className="form_sec" id="taxi_form">
              <div className="wrap_step_form query_form">
                <h5 className="mb-1 text-center text-lg font-semibold text-slate-800">
                  Ready To Start Your Business?
                </h5>
                <p className="mb-6 text-center text-sm text-slate-500">Leave Your Details Below</p>
                {isSubmitted && (
                  <p className="mb-4 rounded-md bg-green-50 px-3 py-2 text-center text-sm text-green-700">
                    Thanks! We will reach out soon.
                  </p>
                )}
                {errorMessage && (
                  <p className="mb-4 rounded-md bg-red-50 px-3 py-2 text-center text-sm text-red-700">
                    {errorMessage}
                  </p>
                )}
                <div className="common_trigger_form">
                  <form className="common_form space-y-4" method="POST" noValidate onSubmit={handleSubmit}>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full rounded-md border border-[#d6d6d6] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-[#ff3b30] focus:outline-none focus:ring-2 focus:ring-[#ff3b30]/20"
                        placeholder="Full Name"
                        name="full_name"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        className="form-control w-full rounded-md border border-[#d6d6d6] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-[#ff3b30] focus:outline-none focus:ring-2 focus:ring-[#ff3b30]/20"
                        placeholder="Email"
                        name="email"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control w-full rounded-md border border-[#d6d6d6] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-[#ff3b30] focus:outline-none focus:ring-2 focus:ring-[#ff3b30]/20"
                        placeholder="Mobile Number With Country Code"
                        name="mobile_number"
                        required
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        cols={5}
                        className="form-control min-h-[120px] w-full rounded-md border border-[#d6d6d6] bg-white px-4 py-3 text-sm text-slate-600 placeholder:text-slate-400 focus:border-[#ff3b30] focus:outline-none focus:ring-2 focus:ring-[#ff3b30]/20"
                        placeholder="Your Main Skill"
                        name="message"
                        required
                      />
                    </div>
                    <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                    <div className="form-group">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn btn-primary w-full rounded-md bg-[#ff3b30] py-3 text-sm font-semibold text-white hover:bg-[#e3342f] disabled:opacity-70"
                      >
                        {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
