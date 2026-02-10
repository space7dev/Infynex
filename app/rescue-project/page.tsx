import { Metadata } from 'next'
import Hero from '@/components/Hero'
import ContactForm from '@/components/ContactForm'
import { AlertTriangle, CheckCircle, Clock, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Rescue My Project - Get Back on Track',
  description:
    'Is your project stuck, over budget, or behind schedule? We specialize in rescuing troubled projects and getting them back on track.',
}

export default function RescueProjectPage() {
  const commonIssues = [
    'Project is over budget and behind schedule',
    'Original development team left or underperforming',
    'Poor code quality making changes difficult',
    'Technical debt causing system instability',
    'Lack of proper documentation',
    'Security vulnerabilities need immediate attention',
    'Scalability issues as user base grows',
    'Integration problems with third-party services',
  ]

  const rescueProcess = [
    {
      step: 1,
      title: 'Emergency Assessment',
      description:
        'We conduct a thorough audit of your codebase, infrastructure, and project status within 48 hours.',
      icon: AlertTriangle,
    },
    {
      step: 2,
      title: 'Action Plan',
      description:
        'Receive a detailed rescue plan with priorities, timeline, and cost estimates to get back on track.',
      icon: Shield,
    },
    {
      step: 3,
      title: 'Rapid Stabilization',
      description:
        'Our team immediately addresses critical issues to stabilize your project and prevent further losses.',
      icon: Clock,
    },
    {
      step: 4,
      title: 'Full Recovery',
      description:
        'We refactor, rebuild, and optimize your project while maintaining business continuity.',
      icon: CheckCircle,
    },
  ]

  const benefits = [
    {
      title: 'Expert Team',
      description: 'Access to senior developers who have rescued 100+ projects',
    },
    {
      title: 'Quick Start',
      description: 'Begin within 48 hours of initial consultation',
    },
    {
      title: 'Fixed Price Option',
      description: 'Transparent pricing with fixed-price rescue packages available',
    },
    {
      title: 'Risk Mitigation',
      description: 'Minimize further losses and protect your investment',
    },
    {
      title: 'Documentation',
      description: 'Comprehensive documentation for ongoing maintenance',
    },
    {
      title: 'Knowledge Transfer',
      description: 'Train your team or provide ongoing support',
    },
  ]

  return (
    <>
      <Hero
        subtitle="Project Rescue Services"
        title="Is Your Project in Trouble? We Can Help."
        description="We specialize in rescuing troubled software projects. Whether you're facing technical debt, missed deadlines, or quality issues, our expert team can get your project back on track."
        primaryCTA={{ text: 'Get Emergency Help', href: '#contact-form' }}
        secondaryCTA={{ text: 'Learn More', href: '#process' }}
        backgroundGradient={false}
      />

      {/* Warning Banner */}
      <section className="bg-yellow-50 py-8">
        <div className="container-custom">
          <div className="flex items-center justify-center space-x-3 text-yellow-800">
            <AlertTriangle className="h-6 w-6" />
            <p className="text-lg font-semibold">
              The sooner you act, the less it costs to fix. Get a free assessment today.
            </p>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Common Project Problems We Solve</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              If any of these sound familiar, we can help
            </p>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="grid gap-4 md:grid-cols-2">
              {commonIssues.map((issue, index) => (
                <div key={index} className="flex items-start space-x-3 rounded-lg border border-secondary-200 p-4">
                  <AlertTriangle className="mt-1 h-5 w-5 flex-shrink-0 text-yellow-600" />
                  <span className="text-secondary-700">{issue}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Rescue Process */}
      <section id="process" className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Rescue Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              A proven 4-step process to get your project back on track
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {rescueProcess.map((item) => (
              <div key={item.step} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <item.icon className="h-8 w-8 text-primary-600" />
                </div>
                <div className="mb-2 text-sm font-bold text-primary-600">Step {item.step}</div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Why Choose Us for Project Rescue?</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 rounded-lg border border-secondary-200 p-6">
                <CheckCircle className="mt-1 h-6 w-6 flex-shrink-0 text-green-600" />
                <div>
                  <h4 className="mb-2 font-bold text-secondary-900">{benefit.title}</h4>
                  <p className="text-sm text-secondary-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Story */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl">
            <div className="card">
              <div className="mb-4 text-sm font-bold text-primary-600">SUCCESS STORY</div>
              <h3 className="mb-4 text-2xl font-bold">
                How We Saved a $500K E-Commerce Platform
              </h3>
              <div className="mb-6 text-secondary-700">
                <p className="mb-4">
                  A retail company came to us after their previous development team abandoned a
                  half-built e-commerce platform. They had already invested $500K and were facing
                  the prospect of starting over.
                </p>
                <p className="mb-4">
                  Within 48 hours, we assessed the situation and identified that 60% of the code
                  was salvageable. We created a rescue plan and got to work immediately.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="mb-1 text-2xl font-bold text-green-600">60%</div>
                  <div className="text-sm text-secondary-600">Code Salvaged</div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="mb-1 text-2xl font-bold text-green-600">3 Months</div>
                  <div className="text-sm text-secondary-600">To Launch</div>
                </div>
                <div className="rounded-lg bg-white p-4 text-center">
                  <div className="mb-1 text-2xl font-bold text-green-600">$300K</div>
                  <div className="text-sm text-secondary-600">Investment Saved</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-2xl">
            <div className="mb-8 text-center">
              <h2 className="mb-4">Get Emergency Project Help</h2>
              <p className="text-lg text-secondary-600">
                Fill out this form and we&apos;ll get back to you within 24 hours with an initial
                assessment.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary-50 p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-400">
        <div className="container-custom text-center text-white">
          <Shield className="mx-auto mb-6 h-16 w-16" />
          <h2 className="mb-4 text-white">Risk-Free Assessment</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Get a free, no-obligation assessment of your project. We&apos;ll tell you exactly
            what&apos;s wrong and how we can fix it. No pressure, no sales pitch.
          </p>
          <a
            href="#contact-form"
            className="inline-block rounded-lg bg-white px-8 py-4 font-semibold text-primary-600 transition-all hover:bg-primary-50"
          >
            Get Free Assessment
          </a>
        </div>
      </section>
    </>
  )
}
