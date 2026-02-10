import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface HeroProps {
  title: string
  subtitle: string
  description: string
  primaryCTA?: {
    text: string
    href: string
  }
  secondaryCTA?: {
    text: string
    href: string
  }
  backgroundGradient?: boolean
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundGradient = true,
}: HeroProps) {
  return (
    <section
      className={`relative overflow-hidden pt-32 ${
        backgroundGradient
          ? 'bg-gradient-to-br from-primary-50 via-white to-secondary-50'
          : 'bg-white'
      }`}
    >
      <div className="container-custom section-padding">
        <div className="mx-auto max-w-4xl text-center">
          {/* Subtitle */}
          <div className="mb-6 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-semibold text-primary-700">
            {subtitle}
          </div>

          {/* Title */}
          <h1 className="mb-6 animate-fade-in">
            {title}
          </h1>

          {/* Description */}
          <p className="mb-10 animate-slide-up text-lg text-secondary-600 md:text-xl">
            {description}
          </p>

          {/* CTAs */}
          {(primaryCTA || secondaryCTA) && (
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              {primaryCTA && (
                <Link
                  href={primaryCTA.href}
                  className="btn-primary group inline-flex items-center space-x-2"
                >
                  <span>{primaryCTA.text}</span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {secondaryCTA && (
                <Link href={secondaryCTA.href} className="btn-secondary">
                  {secondaryCTA.text}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-24 right-0 -z-10 h-96 w-96 rounded-full bg-primary-100 opacity-20 blur-3xl" />
      <div className="absolute -bottom-24 left-0 -z-10 h-96 w-96 rounded-full bg-secondary-100 opacity-20 blur-3xl" />
    </section>
  )
}
