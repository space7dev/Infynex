'use client'

import { useState } from 'react'
import Link from 'next/link'
import { submitContactForm } from '@/lib/contactApi'

const trustedLogos = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/iso.webp',
    alt: 'ISO',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/aws-icon.svg',
    alt: 'AWS',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/open-ai-icon.svg',
    alt: 'OpenAI',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/fox.webp',
    alt: 'Fox',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/market-watch.webp',
    alt: 'Market Watch',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/google-partner-logo.webp',
    alt: 'Google Partner',
  },
]

const serviceCards = [
  {
    title: 'Smart Contract Development',
    description:
      'Hire our smart contract programmers to deliver tailored blockchain logic for your platform.',
  },
  {
    title: 'Smart Contract Audit',
    description:
      'Audit and secure smart contracts with dedicated experts and enterprise-grade reviews.',
  },
  {
    title: 'Smart Contract Optimization',
    description:
      'Optimize contract performance, gas usage, and system efficiency at scale.',
  },
  {
    title: 'Smart Contract for dApp',
    description:
      'Deploy resilient contract layers for decentralized applications and user control.',
  },
  {
    title: 'Smart Contract for DEX',
    description:
      'Build secure decentralized exchanges using Ethereum, EOS, and other chains.',
  },
  {
    title: 'Smart Contract for Digital Wallet',
    description:
      'Develop smart wallet contracts for advanced custody and asset management.',
  },
  {
    title: 'DAO Smart Contracts',
    description:
      'Create decentralized governance frameworks with transparent smart contracts.',
  },
  {
    title: 'Smart Contract for Ethereum',
    description:
      'Launch Ethereum smart contracts for robust, enterprise-grade use cases.',
  },
  {
    title: 'Smart Contract for NFT Marketplace',
    description:
      'Enable NFT minting, trading, and ownership flows with secure contract logic.',
  },
  {
    title: 'Integrate Smart Contracts with React',
    description:
      'Connect smart contracts to React experiences with intuitive user flows.',
  },
  {
    title: 'Integrate Smart Contracts with Node.js',
    description:
      'Build scalable back-end services that integrate seamlessly with smart contracts.',
  },
]

const topPercentReasons = [
  {
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract-dedicated-managment.webp',
    title: 'Dedicated Management',
    description:
      'Experienced teams closely monitor delivery to ensure precision and quality.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract-market-analysis.webp',
    title: 'Free Market Analysis',
    description:
      'Receive a detailed analysis and cost blueprint for your smart contract venture.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract-simple-execution.webp',
    title: 'Simple Execution',
    description:
      'Clear, consistent communication keeps delivery straightforward and timely.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract-no-hidden-charge.webp',
    title: 'No Hidden Charges',
    description:
      'Transparent billing ensures every detail stays aligned with your agreement.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract-flexible-hiring-model.webp',
    title: 'Flexible Hiring Models',
    description:
      'Select the engagement model that best fits your budget and timeline.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract-non-disclosure-agreement.webp',
    title: 'Non-Disclosure Agreement',
    description:
      'Protect your ideas with secure NDAs and confidentiality practices.',
  },
]

const industries = [
  {
    title: 'Healthcare',
    description:
      'Streamline payments, telemedicine, and records with secure smart contracts.',
  },
  {
    title: 'Retail and Ecommerce',
    description:
      'Automate supply chain workflows and improve delivery accuracy.',
  },
  {
    title: 'Travel and Tourism',
    description:
      'Automate bookings, refunds, and itinerary updates through smart logic.',
  },
  {
    title: 'Fintech',
    description:
      'Enable secure wallets, POS systems, and financial automation.',
  },
  {
    title: 'Education',
    description:
      'Track performance, deliver content, and reduce admin workload.',
  },
  {
    title: 'Media and Entertainment',
    description:
      'Automate royalty payments and protect creative ownership.',
  },
  {
    title: 'Automotive',
    description:
      'Modernize document workflows and reduce fraud with automation.',
  },
  {
    title: 'Publishing and Advertising',
    description:
      'Deliver automated billing, reporting, and secure engagement systems.',
  },
  {
    title: 'Real Estate',
    description:
      'Minimize paperwork and accelerate property transactions.',
  },
  {
    title: 'Energy and Sustainability',
    description:
      'Automate energy trading and demand-response programs.',
  },
  {
    title: 'Government and Public Services',
    description:
      'Deliver transparent contracts for public accountability and compliance.',
  },
  {
    title: 'ISVs and Product Companies',
    description:
      'Build secure, reliable contract systems for product ecosystems.',
  },
]

const techStack = [
  {
    title: 'Supported Environment',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/crypto-technoloy-supported-environment.webp',
  },
  {
    title: 'Containerization',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/cyrpto-technology-containerization.webp',
  },
  {
    title: 'Cryptocurrencies',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/cryto-technology-cryptocurrencies.webp',
  },
  {
    title: 'API Integration',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/crypto-technology-api-integration.webp',
  },
  {
    title: 'Transactional Component',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/crypto-technology-transactional-component.webp',
  },
  {
    title: 'Network and Security',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/crypto-technology-network-security.webp',
  },
  {
    title: 'Ledgers',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/crypto-technology-ledger.webp',
  },
  {
    title: 'Languages',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/crypto-technology-language.webp',
  },
]

const whyBest = [
  {
    image: 'https://www.Infynex.com/assets/img/remote-developers/high-end-expertise.svg',
    title: 'High-end Expertise',
    description:
      'Senior engineers with strong command of Ethereum, React, and blockchain security.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/remote-developers/world-wide-network.svg',
    title: 'Worldwide Network',
    description:
      'Global delivery across 150+ regions with full remote support.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/remote-developers/reputedly-recognized.svg',
    title: 'Reputedly Recognized',
    description:
      'Client reviews and retention prove consistent, high-quality delivery.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/remote-developers/end-to-end-service.svg',
    title: 'End-to-End Services',
    description:
      'From discovery to deployment, we stay aligned through every milestone.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/remote-developers/state-of-art-tool.svg',
    title: 'State-of-the-art Tools',
    description:
      'Modern tools, frameworks, and methodologies keep delivery secure and efficient.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/remote-developers/turnkey-solutions.svg',
    title: 'Turnkey Solutions',
    description:
      'Launch-ready solutions that stay cost-effective and user-friendly.',
  },
]

const pricingModels = [
  {
    title: 'Hire Dedicated Developers',
    icon:
      'https://www.Infynex.com/assets/img/remote-developers/smart-contract-developer-hire-dedicated-developer.svg',
    description:
      'Hire dedicated smart contract developers and scale confidently.',
    points: [
      'Communication: Skype, Mail, Phone, Slack, Chatbot',
      'Hiring period: Right away',
      'No hidden charges',
    ],
  },
  {
    title: 'Extended Team',
    icon:
      'https://www.Infynex.com/assets/img/remote-developers/smart-contract-developer-fixed-price.svg',
    description:
      'Let our team manage delivery with stable pricing and expert oversight.',
    points: [
      'Communication: Skype, Mail, Phone, Slack, Chatbot',
      'Hiring period: Right away',
      'No hidden charges',
    ],
    highlighted: true,
  },
  {
    title: 'Project Based Price Model',
    icon:
      'https://www.Infynex.com/assets/img/remote-developers/smart-contract-developer-hourly.svg',
    description:
      'Flexible hourly or fixed models for early-stage or evolving needs.',
    points: [
      'Communication: Skype, Mail, Phone, Slack, Chatbot',
      'Hiring period: Right away',
      'No hidden charges',
    ],
  },
]

export default function HireSmartContractDeveloperPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await submitContactForm({
        full_name: String(formData.get('full_name') || ''),
        email: String(formData.get('email') || ''),
        mobile_number: String(formData.get('mobile_number') || ''),
        message: String(formData.get('message') || ''),
        website: String(formData.get('website') || ''),
        source: 'hire-smart-contract',
      })
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="text-white">
            <h1 className="text-4xl font-semibold md:text-5xl">
              Hire <span className="text-orange-400">Smart Contract Developer</span>
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              We are a leading blockchain solutions provider offering smart contract development and
              audit services that enhance security, transparency, and business growth.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Get Started
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h5 className="text-lg font-semibold text-slate-900">Talk to our experts</h5>
            <p className="mt-2 text-sm text-slate-500">
              Share your requirements and receive a free consultation.
            </p>
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="full_name"
                required
                placeholder="Full Name"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
              <input
                type="email"
                name="email"
                required
                placeholder="Email"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
              <input
                type="text"
                name="mobile_number"
                required
                placeholder="Mobile Number With Country Code"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Your Main Skill"
                className="w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
              />
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              >
                {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
            {trustedLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              What We Do
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900">
              Blockchain-based Smart Contract Developers Shaping the Technology
            </h2>
            <p className="mt-4 text-slate-600">
              We deliver reliable smart contracts with high-end security and performance. Our
              developers build custom solutions that align with your business goals.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Explore More
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/new_suffes_images/Infynex-about-icons.webp"
              alt="Smart contract developers"
              className="w-full max-w-sm"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-smart-contract-leading-smart.webp"
              alt="Hire smart contract developer"
              className="w-full max-w-md"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              What We Aim
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">
              Hire Experienced Smart Contract Developers
            </h3>
            <p className="mt-4 text-slate-600">
              We deliver smart contracts with advanced security, automation, and transparency.
              Our teams support you from ideation to deployment.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              Hire Remote Smart Contract Developers
            </p>
            <h2 className="mt-4 text-3xl font-semibold">
              Smart Contract Solutions with Dedicated Experts
            </h2>
            <p className="mt-4 text-slate-200">
              Our smart contract experts build custom solutions on Ethereum, Solana, Cardano, and
              other leading blockchains. Improve security, decentralization, and performance.
            </p>
            <p className="mt-4 text-slate-200">
              We deliver cost-effective solutions tailored to every business size with full
              lifecycle support.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/smart-contract-developer-new-benchmark.webp"
              alt="Smart contract benchmark"
              className="w-full max-w-md"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Smart Contract Services
            </p>
            <h3 className="mt-4 text-3xl font-semibold text-slate-900">
              Services Offered by Our Smart Contract Experts
            </h3>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serviceCards.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-100 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600">
                  <span className="text-lg font-semibold">SC</span>
                </div>
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{service.description}</p>
                <Link
                  href="/contact"
                  className="mt-4 inline-flex items-center text-sm font-semibold text-orange-600"
                >
                  Get in Touch
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center text-white">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-400">
              We Are Creating Legacy
            </p>
            <h3 className="mt-4 text-3xl font-semibold">
              Why Our Smart Contract Developers Are in the Top 1%
            </h3>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {topPercentReasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl bg-white p-6 text-slate-900">
                <img
                  src={reason.image}
                  alt={reason.title}
                  className="h-40 w-full rounded-xl object-cover"
                />
                <h4 className="mt-4 text-lg font-semibold">{reason.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hire-smart-contract.webp"
              alt="Hire smart contract developer"
              className="w-full max-w-md"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-slate-900">
              Hire Our Smart Contract Developers
            </h3>
            <p className="mt-4 text-slate-600">
              Our developers and management team are available 24/7 to support your ideas and
              deliver smart contract solutions with speed and confidence.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Industries
            </p>
            <h4 className="mt-4 text-3xl font-semibold text-slate-900">
              Smart Contract Developers for Major Blockchain Industries
            </h4>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="rounded-2xl border border-slate-100 p-6 shadow-sm"
              >
                <h5 className="text-lg font-semibold text-slate-900">{industry.title}</h5>
                <p className="mt-2 text-sm text-slate-600">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Core Competencies
            </p>
            <h4 className="mt-4 text-3xl font-semibold text-slate-900">Tech Stack</h4>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                <h5 className="text-sm font-semibold text-slate-900">{item.title}</h5>
                <img
                  src={item.image}
                  alt={item.title}
                  className="mx-auto mt-4 h-32 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-white">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h5 className="text-2xl font-semibold">
              Book Your Slot to Get Expert Guidance for Your Business
            </h5>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Why We Are Best
            </p>
            <h4 className="mt-4 text-3xl font-semibold text-slate-900">
              Our Smart Contract Programmers Lead Blockchain Development in USA
            </h4>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyBest.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-6">
                <img src={item.image} alt={item.title} className="h-16 w-16" />
                <h5 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h5>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Engagement Models
            </p>
            <h4 className="mt-4 text-3xl font-semibold text-slate-900">
              Hire Our Smart Contract Developers as You Like
            </h4>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingModels.map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl border p-6 shadow-sm ${
                  model.highlighted
                    ? 'border-orange-500 bg-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <img src={model.icon} alt={model.title} className="h-14 w-14" />
                <h5 className="mt-4 text-lg font-semibold text-slate-900">{model.title}</h5>
                <p className="mt-3 text-sm text-slate-600">{model.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {model.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${
                    model.highlighted
                      ? 'bg-orange-600 text-white'
                      : 'border border-slate-300 text-slate-700'
                  }`}
                >
                  Hire Us Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
