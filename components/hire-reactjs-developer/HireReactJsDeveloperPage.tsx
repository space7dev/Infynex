'use client'

import { useState } from 'react'
import Link from 'next/link'
import { submitContactForm } from '@/lib/contactApi'

const trustedLogos = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/forbes.webp',
    alt: 'Forbes',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/entrepreneur_logo.webp',
    alt: 'Entrepreneur',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/inc-2.webp',
    alt: 'Inc',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/cnbc.webp',
    alt: 'CNBC',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/huffington.webp',
    alt: 'Huffington Post',
  },
]

const whyChooseReact = [
  {
    title: 'High Speed',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-high-speed.svg',
  },
  {
    title: 'Better Performance',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-better-performance.svg',
  },
  {
    title: 'Compatibility',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-compatibility.svg',
  },
  {
    title: 'Easy to Test',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-easy-to-learn.svg',
  },
  {
    title: 'SEO Optimized',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-seo-optimization.svg',
  },
  {
    title: 'Cross-platform Support',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-cross-platform-support.svg',
  },
]

const reactAdvantages = [
  {
    title: 'Cross-platform support',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-cross-platform-support.svg',
  },
  {
    title: 'Stunning developer tools',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-developer-tool.svg',
  },
  {
    title: 'Simple layout planning',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-layout-planning.svg',
  },
  {
    title: 'Incredibly equipped',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-incredibly-equipped.svg',
  },
  {
    title: 'Easier JavaScript coding',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-java-script-code.svg',
  },
  {
    title: 'Easy template designing',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-template-design.svg',
  },
]

const InfynexReasons = [
  {
    title: 'Qualified Developers',
    description:
      '20+ experienced ReactJS developers delivering high-performing web and mobile apps.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-qualfied-developer.svg',
  },
  {
    title: 'Proven Track Record',
    description:
      'Dozens of successful ReactJS projects delivered across global clients.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-proven-track-record.svg',
  },
  {
    title: '24/7 Technical Assistance',
    description:
      'Around-the-clock support for technical queries and delivery alignment.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-technical-assistance.svg',
  },
  {
    title: 'Complete Transparency',
    description:
      'Clear milestones and continuous updates with regular feedback loops.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-complete-transparency.svg',
  },
  {
    title: 'Code Standards',
    description:
      'Fully tested code standards aligned with business requirements.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-code-standards.svg',
  },
  {
    title: 'On-time Delivery',
    description:
      'Delivery under strict timelines with consistent quality assurance.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-on-time-delivery.svg',
  },
  {
    title: 'Flexible Hiring Models',
    description:
      'Flexible models designed to match your ReactJS development needs.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-flexible-hiring.svg',
  },
  {
    title: 'Beyond Support',
    description:
      'Continuous support and maintenance to improve performance over time.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-beyond-support.svg',
  },
]

const capabilities = [
  {
    title: 'Custom ReactJS App Development',
    description:
      'Build interactive custom apps with a dedicated ReactJS team.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/custom-react-js.svg',
  },
  {
    title: 'ReactJS eCommerce App Development',
    description:
      'Develop scalable ecommerce apps for high conversion performance.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/e-commerce-app-react-js.svg',
  },
  {
    title: 'ReactJS Maintenance and Support',
    description:
      '24/7 maintenance for existing web apps and APIs.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/maintance-support-react-js.svg',
  },
  {
    title: 'ReactJS Audio/Video Call and Chat',
    description:
      'Enable real-time audio, video, and chat features in web apps.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/audio-video-call-react.svg',
  },
  {
    title: 'Enterprise App Development Using ReactJS',
    description:
      'Robust enterprise-grade apps tailored to business needs.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/enterprise-app-development-react.svg',
  },
  {
    title: 'Chatbot Development Using ReactJS',
    description:
      'AI-driven chatbots with voice assistant-ready interfaces.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/chatboat-development-react.svg',
  },
  {
    title: 'Social Media and Interactive ReactJS Apps',
    description:
      'High-engagement social and interactive platforms.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/social-media-app-react.svg',
  },
  {
    title: 'ReactJS Scalable Learning Platforms',
    description:
      'Learning platforms designed to scale with your audience.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/scalable-learning-platform-react.svg',
  },
  {
    title: 'ReactJS IoT Web App Development',
    description:
      'IoT-ready web applications built on ReactJS.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/iot-web-app-react-js.svg',
  },
  {
    title: 'Payment Gateway Integration',
    description:
      'Secure payment integrations for new or existing applications.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/payment-gateway-react-js.svg',
  },
  {
    title: 'ReactJS Migration and Integration',
    description:
      'Smooth migrations and integrations without data loss.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/migration-integration-react-js.svg',
  },
  {
    title: 'API Development with ReactJS',
    description:
      'Microservices-driven APIs aligned to your web architecture.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/api-development-react-js.svg',
  },
]

const pricingPlans = [
  {
    title: 'Part-time Hiring',
    hours: '80 hours/Month',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-part-time-hiring.svg',
  },
  {
    title: 'Full-Time Hiring',
    hours: '160 hours/Month',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-full-time-hiring.svg',
    highlighted: true,
  },
  {
    title: 'Hourly Hiring',
    hours: 'As Per Requirement',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-hourly-hiring.svg',
  },
]

const industries = {
  left: [
    {
      title: 'Healthcare',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-healthcare.svg',
    },
    {
      title: 'Tours and Travels',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-tour-travels.svg',
    },
    {
      title: 'e-Learning',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-e-learning.svg',
    },
    {
      title: 'Fintech',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-fintech.svg',
    },
  ],
  right: [
    {
      title: 'Retail',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-retail.svg',
    },
    {
      title: 'Manufacturing and Logistics',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-manufacturing-logistics.svg',
    },
    {
      title: 'eCommerce',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-ecommerce.svg',
    },
    {
      title: 'Supply Chain',
      icon: 'https://www.Infynex.com/assets/img/new_suffes_images/react-js-supply-chain.svg',
    },
  ],
}

const frameworks = [
  {
    title: 'Create React App',
    description:
      'Pre-configured tooling for building, testing, and launching React apps.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-create-react-app.svg',
  },
  {
    title: 'Material Kit React',
    description:
      'A UI kit with 1k+ components for polished interfaces.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-material-kit-react.svg',
  },
  {
    title: 'Shards React',
    description:
      'Modern design system with customizable components.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-shards-react.svg',
  },
  {
    title: 'React DnD',
    description:
      'Drag-and-drop interfaces built with HTML5 APIs.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-react-dnd.svg',
  },
  {
    title: 'React Bootstrap',
    description:
      'Accessible components and thousands of Bootstrap themes.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-react-bootstrap.svg',
  },
  {
    title: 'React Suite',
    description:
      'Enterprise-ready component libraries for large systems.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-react-suite.svg',
  },
  {
    title: 'PrimeReact',
    description:
      'UI components optimized for mobile experiences.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-prime-react.svg',
  },
  {
    title: 'Onsen UI',
    description:
      'iOS and Android styling with automatic platform themes.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-onsen-ui.svg',
  },
  {
    title: 'Styled Components',
    description:
      'Reusable components with scoped CSS syntax.',
    icon: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjs-styled-components.svg',
  },
]

const awards = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/appsters-awards.webp',
    alt: 'Appsters Awards',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/inc500.webp',
    alt: 'Inc 500',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/bma-logo.webp',
    alt: 'BMA',
  },
]

const ratings = [
  {
    rating: '4.8/5',
    description:
      'Top-rated mobile application development company on Clutch.',
    name: 'Clutch.co',
    logo: 'https://www.Infynex.com/assets/img/new_suffes_images/clutch.webp',
  },
  {
    rating: '4.9/5',
    description: 'Top-rated on Upwork with 94% job success.',
    name: 'upwork.com',
    logo: 'https://www.Infynex.com/assets/img/new_suffes_images/upwork.webp',
  },
  {
    rating: '4.9/5',
    description: 'Rated 4.9/5 on Goodfirms by clients.',
    name: 'goodfirms.co',
    logo: 'https://www.Infynex.com/assets/img/new_suffes_images/goodf.webp',
  },
]

const partnerships = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/firebase-logo.webp',
    alt: 'Firebase',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/stripe-logo.webp',
    alt: 'Stripe',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/cloude-fare-logo.webp',
    alt: 'Cloudflare',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/google-map-logo.webp',
    alt: 'Google Maps',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/pay-u-logo.webp',
    alt: 'PayU',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/klarna-logo.webp',
    alt: 'Klarna',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/paystack-logo.webp',
    alt: 'Paystack',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/twilio-logo.webp',
    alt: 'Twilio',
  },
]

const stats = [
  {
    value: '13+',
    label: 'of experience',
  },
  {
    value: '250+ Experts',
    label: 'of technology',
  },
  {
    value: '1500+ Projects',
    label: 'delivered to clients',
  },
  {
    value: 'ISO Certified',
    label: 'Dev Company',
  },
  {
    value: '1k+ Clients',
    label: 'worldwide',
  },
]

export default function HireReactJsDeveloperPage() {
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
        source: 'hire-reactjs',
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
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div className="text-white">
            <h1 className="text-4xl font-semibold md:text-5xl">
              <span className="text-orange-400">ReactJS App</span> Development Company
            </h1>
            <p className="mt-4 text-lg text-slate-200">
              Infuse ReactJS to build highly interactive web and mobile apps. Our dedicated
              developers deliver seamless user interfaces with modern frameworks and tools.
            </p>
          </div>
          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h5 className="text-lg font-semibold">Ready to start your business?</h5>
            <p className="mt-2 text-sm text-slate-500">Leave your details below.</p>
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

      <section className="py-12">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="text-2xl font-semibold">
            Trusted By <span className="text-orange-500">The Best</span>
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-6">
            {trustedLogos.map((logo) => (
              <img key={logo.alt} src={logo.src} alt={logo.alt} className="h-10 w-auto" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/new_suffes_images/web-app-development-js.webp"
              alt="Web App Development with ReactJS"
              className="w-full max-w-md rounded-3xl object-cover"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold">Web App Development With ReactJS</h3>
            <p className="mt-4 text-slate-600">
              We deliver custom ReactJS web apps across healthcare, fintech, and more. Our team
              builds scalable, fast, and business-driven apps that meet specific objectives.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h4 className="text-3xl font-semibold">
            Why Choose ReactJS for <span className="text-orange-500">Web App Development</span>
          </h4>
          <p className="mt-3 text-slate-600">
            Level up your business with ReactJS web development.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseReact.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <img src={item.icon} alt={item.title} className="mx-auto h-12 w-12" />
                <p className="mt-4 text-sm font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <div className="mb-8 flex items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-white">
            <span>Hire Dedicated ReactJS Developer</span>
            <Link href="/contact" className="rounded-full bg-orange-500 px-4 py-2 text-sm">
              Get Started
            </Link>
          </div>
          <h4 className="text-3xl font-semibold">Some Additional Advantages of ReactJS</h4>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {reactAdvantages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <img src={item.icon} alt={item.title} className="mx-auto h-12 w-12" />
                <p className="mt-4 text-sm font-semibold">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h4 className="text-3xl font-semibold">
            Why Choose Infynex for <span className="text-orange-400">ReactJS Web Development</span>
          </h4>
          <p className="mt-3 text-slate-200">
            We deliver highly-driven apps with excellent user interfaces.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {InfynexReasons.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/10 p-5 text-left">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
                <h5 className="mt-3 text-base font-semibold">{item.title}</h5>
                <p className="mt-2 text-sm text-slate-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-6 flex items-center justify-center gap-3 rounded-full bg-slate-900 px-6 py-3 text-white">
            <span>Hire Remote ReactJS Developer</span>
            <Link href="/contact" className="rounded-full bg-orange-500 px-4 py-2 text-sm">
              Get Started
            </Link>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Hire Dedicated <span className="text-orange-500">Full-Stack ReactJS Developers</span>
            </h2>
            <p className="mt-3 text-slate-600">
              Emerging capabilities for custom, enterprise, and interactive app experiences.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="flex justify-center">
              <img
                src="https://www.Infynex.com/assets/img/new_suffes_images/react-js-developer.webp"
                alt="Hire Dedicated Full-Stack ReactJS Developers"
                className="w-full max-w-md rounded-3xl object-cover"
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {capabilities.slice(0, 4).map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                  <h5 className="mt-3 text-sm font-semibold">{item.title}</h5>
                  <p className="mt-2 text-xs text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.slice(4).map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                <img src={item.icon} alt={item.title} className="h-10 w-10" />
                <h5 className="mt-3 text-sm font-semibold">{item.title}</h5>
                <p className="mt-2 text-xs text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-3xl font-semibold">
            Flexible Pricing Model - Hire Dedicated ReactJS Developer
          </h3>
          <p className="mt-3 text-slate-600">
            Pay only for what you use with flexible hiring packages.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl border p-6 ${
                  plan.highlighted ? 'border-orange-500 bg-white shadow-lg' : 'border-slate-200 bg-white'
                }`}
              >
                <img src={plan.icon} alt={plan.title} className="h-12 w-12" />
                <h4 className="mt-4 text-lg font-semibold">{plan.title}</h4>
                <p className="mt-2 text-sm text-slate-600">
                  <strong>Working hours:</strong> {plan.hours}
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong>Communication:</strong> Skype, Mail, Phone, Slack, Chatbot
                </p>
                <p className="mt-2 text-sm text-slate-600">
                  <strong>Hiring period:</strong> Right Away
                </p>
                <Link
                  href="/contact"
                  className="mt-6 inline-flex w-full justify-center rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white"
                >
                  Hire Us Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h3 className="text-3xl font-semibold">
            Hire Remote ReactJS Developer For <span className="text-orange-500">All Industry Verticals</span>
          </h3>
          <div className="mt-10 grid gap-8 md:grid-cols-[1fr_1.2fr_1fr] md:items-center">
            <div className="space-y-4">
              {industries.left.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.title} className="h-10 w-10" />
                    <h6 className="text-sm font-semibold">{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src="https://www.Infynex.com/assets/img/new_suffes_images/hiring-react.webp"
                alt="Hire Remote ReactJS Developer"
                className="w-full max-w-sm rounded-3xl object-cover"
              />
            </div>
            <div className="space-y-4">
              {industries.right.map((item) => (
                <div key={item.title} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center gap-3">
                    <img src={item.icon} alt={item.title} className="h-10 w-10" />
                    <h6 className="text-sm font-semibold">{item.title}</h6>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-8 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
          >
            Get Started
          </Link>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h4 className="text-3xl font-semibold">
              React <span className="text-orange-500">JavaScript Frameworks</span>
            </h4>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {frameworks.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <img src={item.icon} alt={item.title} className="h-12 w-12" />
                <h6 className="mt-4 text-base font-semibold">{item.title}</h6>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h5 className="text-2xl font-semibold">Our Awards</h5>
          <div className="mt-6 grid gap-6 sm:grid-cols-3">
            {awards.map((award) => (
              <div key={award.alt} className="rounded-2xl border border-slate-200 p-6">
                <img src={award.src} alt={award.alt} className="mx-auto h-16 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h5 className="text-2xl font-semibold">
            Rated in <span className="text-orange-500">Top Tech Firms</span>
          </h5>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {ratings.map((item) => (
              <div key={item.name} className="rounded-2xl border border-slate-200 bg-white p-6">
                <img src={item.logo} alt={item.name} className="mx-auto h-10 w-auto" />
                <p className="mt-4 text-lg font-semibold">{item.rating}</p>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                <p className="mt-2 text-xs text-slate-500">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h5 className="text-2xl font-semibold">
            Strategic <span className="text-orange-500">Partnerships</span>
          </h5>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {partnerships.map((item) => (
              <div key={item.alt} className="rounded-2xl border border-slate-200 p-6">
                <img src={item.src} alt={item.alt} className="mx-auto h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item) => (
              <div key={item.value} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-2xl font-semibold text-slate-900">{item.value}</p>
                <p className="mt-2 text-sm text-slate-600">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
