'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Solution {
  title: string
  description: string
  href: string
  icon: string
}

const solutions: Solution[] = [
  {
    title: 'Software',
    description:
      'Our software engineers deliver solutions that automate tasks, boost productivity, and increase profits for startups and enterprises.',
    href: '/products',
    icon: '💻',
  },
  {
    title: 'Application',
    description:
      'We are a reputable app development business with experience in all aspects of Android & iOS app development.',
    href: '/mobile',
    icon: '📱',
  },
  {
    title: 'Web',
    description:
      'We design and develop market-leading web-based products with engaging user experiences that add value for your clients.',
    href: '/products',
    icon: '🌐',
  },
  {
    title: 'Chatbot',
    description:
      'Smart AI chatbots simplify customer interactions. We build intelligent chatbots specifically for your domain based on your business needs.',
    href: '/ai',
    icon: '🤖',
  },
]

export default function SmartSolutions() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-80 w-80 rounded-full bg-blue-200 opacity-20 blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 h-80 w-80 rounded-full bg-purple-200 opacity-20 blur-3xl"></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-4xl font-bold leading-tight text-secondary-900 lg:text-5xl">
            Smart App Solutions for Modern Businesses
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary-600">
            Innovate, Create, Elevate: Unleash the Power of Digital Product Engineering.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {solutions.map((solution, index) => (
            <div key={index} className="group relative">
              {/* Card Background */}
              <div className="absolute inset-0 rounded-xl bg-white shadow-md transition-shadow duration-300 group-hover:shadow-xl"></div>

              {/* Card Content */}
              <div className="relative p-8">
                {/* Icon + Title + Arrow Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="text-5xl">{solution.icon}</div>
                    <h3 className="text-2xl font-bold text-secondary-900">
                      {solution.title}
                    </h3>
                  </div>
                  <Link
                    href={solution.href}
                    className="flex h-10 w-10 items-center justify-center rounded bg-gradient-to-r from-orange-600 to-red-600 text-white transition-all hover:from-orange-700 hover:to-red-700"
                    aria-label={`Learn more about ${solution.title}`}
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>

                {/* Description */}
                <p className="text-base leading-relaxed text-secondary-600">
                  {solution.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
