'use client'

import { useState } from 'react'
import { Calendar, Mail, MapPin, MessageCircle, Phone } from 'lucide-react'
import { submitContactForm } from '@/lib/contactApi'

const phoneContacts = [
  {
    country: 'USA',
    number: '+1-234-206-0062',
    flag: 'https://www.suffescom.com/assets/img/new_suffes_images/usa-flag.svg',
  },

]

const emailContacts = [
  { label: 'Sales', email: 'idea@Infynex.agency' },
  { label: 'Jobs', email: 'career@Infynex.agency' },
  { label: 'Billing', email: 'payment@Infynex.agency' },
]

const instantLinks = [
  {
    label: 'WhatsApp',
    href: 'https://wa.me/+16468468220',
    icon: MessageCircle,
  },
  {
    label: 'Book a Meeting',
    href: 'https://calendly.com/team-Infynex/30min',
    icon: Calendar,
  },
]

const ratings = [
  {
    name: 'Clutch',
    rating: '4.9/5',
    logo: '/contact/1.webp',
  },
  {
    name: 'G2',
    rating: '5/5',
    logo: '/contact/2.webp',
  },
  {
    name: 'Upwork',
    rating: '4.9/5',
    logo: '/contact/3.webp',
  },
  {
    name: 'GoodFirms',
    rating: '4.9/5',
    logo: '/contact/4.webp',
  },
]

const addresses = [
  {
    country: 'USA',
    company: 'Infynex Solutions Inc.',
    address: '600 N Broad Street, Suite 5 #3858, Middletown, DE 19709',
    flag: 'https://www.Infynex.com/assets/img/new_suffes_images/usa-flag.svg',
  },
  {
    country: 'USA',
    company: 'Infynex Solutions Inc.',
    address: '600 3rd Ave, New York, NY 10016, United States',
    flag: 'https://www.Infynex.com/assets/img/new_suffes_images/usa-flag.svg',
    mapLink: 'https://share.google/gWmpqIySnZg6u6zMz',
  },
  {
    country: 'UAE',
    company: 'Infynex Solutions Dubai',
    address:
      'Building 14, Level 8, Business Bay, Bay Square, Dubai, United Arab Emirates',
    flag: 'https://www.Infynex.com/assets/img/new_suffes_images/dubai-flag.webp',
    mapLink: 'https://maps.app.goo.gl/ffg8xPCCH5wzwF6E8',
    companyLink: 'https://www.Infynex.com/mobile-app-development-company-dubai',
  },
  {
    country: 'India',
    company: 'Infynex Solutions Pvt. Ltd.',
    address: 'D-256, Phase 8A, Industrial Area, SAS Nagar, Punjab 160062',
    flag: 'https://www.Infynex.com/assets/img/new_suffes_images/india-flag.svg',
    mapLink: 'https://maps.app.goo.gl/E37JN6NcvwfKFt959',
  },
  {
    country: 'Singapore',
    company: 'Infynex Solutions Inc.',
    address: 'Cecil St, #7th, 182 Frasers Tower floor, Singapore 069547',
    flag: 'https://www.Infynex.com/assets/img/new_suffes_images/singapore-flag.svg',
    mapLink: 'https://maps.app.goo.gl/1SNEXJzNcfAVy37M7',
  },
  {
    country: 'UK',
    company: 'Infynex Solutions Inc.',
    address: '18 King William St, London EC4N 7BP, United Kingdom',
    flag: 'https://www.Infynex.com/assets/img/new_suffes_images/uk-flag.svg',
    mapLink: 'https://maps.app.goo.gl/dr3n7efJi7vYReRC8',
  },
]

export default function ContactPage() {
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
        source: 'contact-page',
      })
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      setIsSubmitted(false)
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-300">
            Contact Us
          </p>
          <h1 className="mt-4 text-3xl font-semibold md:text-5xl">Contact Us</h1>
          <p className="mx-auto mt-4 max-w-4xl text-base text-slate-200 md:text-lg">
            Infynex Solutions Inc. partners with ambitious teams to build
            future-ready products. We deliver tailored development solutions
            aligned with your vision, cultural values, and growth goals.
          </p>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <h2 className="text-2xl font-semibold md:text-3xl">Talk To Us</h2>
              <p className="mt-3 text-slate-600">
                Connect with our teams by phone, email, or instant channels.
              </p>

              <div className="mt-8 space-y-6">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <div className="flex items-center gap-3">
                    <Phone className="h-6 w-6 text-slate-700" />
                    <h3 className="text-lg font-semibold">Contact</h3>
                  </div>
                  <ul className="mt-4 space-y-3 text-sm text-slate-600">
                    {phoneContacts.map((phone) => (
                      <li key={phone.number} className="flex items-center gap-3">
                        <img
                          src={phone.flag}
                          alt={phone.country}
                          className="h-4 w-6 rounded-sm object-cover"
                        />
                        <a
                          href={`tel:${phone.number.replace(/\D/g, '')}`}
                          className="font-semibold text-slate-800"
                        >
                          {phone.number}
                        </a>
                        <span className="text-xs text-slate-500">
                          ({phone.country})
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <Mail className="h-6 w-6 text-slate-700" />
                    <h3 className="text-lg font-semibold">Emails</h3>
                  </div>
                  <ul className="mt-4 space-y-2 text-sm text-slate-600">
                    {emailContacts.map((email) => (
                      <li key={email.label}>
                        <span className="font-semibold text-slate-800">
                          {email.label}:
                        </span>{' '}
                        <a
                          href={`mailto:${email.email}`}
                          className="text-slate-700 hover:text-slate-900"
                        >
                          {email.email}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* <div className="rounded-3xl border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <MessageCircle className="h-6 w-6 text-slate-700" />
                    <h3 className="text-lg font-semibold">Get in touch instantly</h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {instantLinks.map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 hover:border-slate-400"
                      >
                        <link.icon className="h-4 w-4" />
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div> */}
              </div>
            </div>

            <div className="rounded-3xl bg-slate-900 p-8 text-white">
              <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-slate-300">
                Happy to Assist You
              </p>
              <h3 className="mt-4 text-center text-2xl font-semibold">
                Tell us about your project
              </h3>
              {errorMessage && (
                <p className="mt-4 rounded-xl bg-red-500/10 px-4 py-3 text-center text-sm text-red-100">
                  {errorMessage}
                </p>
              )}

              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <input
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number With Country Code"
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
                <textarea
                  name="message"
                  placeholder="Your Main Skill"
                  rows={5}
                  required
                  className="w-full rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />

                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* <div className="rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3 text-xs text-slate-300">
                  reCAPTCHA placeholder
                </div> */}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300 disabled:opacity-70"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </button>

                {isSubmitted && (
                  <p className="text-center text-sm text-emerald-300">
                    Thanks for reaching out. We will respond within 24 hours.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16 text-center">
          <h3 className="text-xl font-semibold text-slate-800 md:text-2xl">
            We are recognized across leading review platforms
          </h3>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {ratings.map((rating) => (
              <div
                key={rating.name}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <img
                  src={rating.logo}
                  alt={rating.name}
                  className="mx-auto h-12 object-contain"
                />
                <p className="mt-4 text-lg font-semibold text-slate-800">
                  {rating.rating}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-slate-700" />
            <h3 className="text-2xl font-semibold">Our Locations</h3>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {addresses.map((location) => (
              <div
                key={`${location.country}-${location.address}`}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={location.flag}
                    alt={location.country}
                    className="h-6 w-6 rounded-full object-cover"
                  />
                  {location.mapLink ? (
                    <a
                      href={location.mapLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm font-semibold text-slate-800"
                    >
                      {location.country}
                    </a>
                  ) : (
                    <span className="text-sm font-semibold text-slate-800">
                      {location.country}
                    </span>
                  )}
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">
                  {location.companyLink ? (
                    <a
                      href={location.companyLink}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-slate-700"
                    >
                      {location.company}
                    </a>
                  ) : (
                    location.company
                  )}
                </h4>
                <p className="mt-3 text-sm text-slate-600">{location.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12273.40194236751!2d-75.5785216!3d39.7317773!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6fd335b582bad%3A0x25608305828fbd1!2sInfynex%20Solutions!5e0!3m2!1sen!2sin!4v1704432289063!5m2!1sen!2sin"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Infynex Solutions map"
            />
          </div>
        </div>
      </section> */}
    </div>
  )
}
