import { Metadata } from 'next'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import CaseStudyCard from './components/CaseStudyCard'
import { Smartphone, Tablet, Watch, Code2, Zap, Shield } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Mobile App Development Services',
  description:
    'Expert mobile app development for iOS and Android. We build native and cross-platform apps that deliver exceptional user experiences.',
}

export default function MobilePage() {
  const features = [
    {
      icon: Smartphone,
      title: 'Native iOS Development',
      description: 'Swift and SwiftUI apps optimized for iPhone and iPad',
      features: ['Swift & SwiftUI', 'App Store optimization', 'iOS latest features'],
    },
    {
      icon: Tablet,
      title: 'Native Android Development',
      description: 'Kotlin apps built for the entire Android ecosystem',
      features: ['Kotlin & Jetpack', 'Material Design', 'Google Play presence'],
    },
    {
      icon: Code2,
      title: 'Cross-Platform Apps',
      description: 'React Native and Flutter for multi-platform deployment',
      features: ['React Native', 'Flutter', 'Shared codebase'],
    },
    {
      icon: Watch,
      title: 'Wearable Apps',
      description: 'Apps for Apple Watch, Wear OS, and other wearables',
      features: ['Apple Watch', 'Wear OS', 'Health integrations'],
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Lightning-fast apps with optimized performance',
      features: ['Fast load times', 'Smooth animations', 'Battery efficient'],
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security and data protection',
      features: ['Data encryption', 'GDPR compliant', 'Secure authentication'],
    },
  ]

  const caseStudies = [
    {
      title: 'Fitness Tracking App',
      client: 'FitLife',
      category: 'Health & Fitness',
      description: 'A comprehensive fitness app with AI-powered workout recommendations',
      results: ['1M+ downloads', '4.7★ rating', '85% retention rate'],
      href: '/case-studies/fitlife',
    },
    {
      title: 'Food Delivery Platform',
      client: 'QuickEats',
      category: 'Food & Beverage',
      description: 'On-demand food delivery app with real-time order tracking',
      results: ['500K+ orders monthly', '10K+ restaurants', '4.5★ rating'],
      href: '/case-studies/quickeats',
    },
  ]

  return (
    <>
      <Hero
        subtitle="Mobile App Development"
        title="Create Exceptional Mobile Experiences"
        description="We build high-performance native and cross-platform mobile applications that users love. From concept to App Store, we handle it all."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Mobile Development Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              End-to-end mobile app development services
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <ServiceCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              From idea to launch in 5 simple steps
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-5">
            {['Discovery', 'Design', 'Development', 'Testing', 'Launch'].map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white">
                  {index + 1}
                </div>
                <h4 className="font-semibold text-secondary-900">{step}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Mobile App Success Stories</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
