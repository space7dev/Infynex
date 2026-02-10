import { Metadata } from 'next'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import { Code, Cloud, Database, Globe, ShoppingCart, Building2 } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Custom Product Development',
  description:
    'Custom software product development tailored to your business needs. Web apps, SaaS platforms, and enterprise solutions.',
}

export default function ProductsPage() {
  const services = [
    {
      icon: Globe,
      title: 'Web Applications',
      description: 'Modern, responsive web applications built with latest technologies',
      features: ['React/Next.js', 'Progressive Web Apps', 'Real-time features'],
    },
    {
      icon: Cloud,
      title: 'SaaS Platforms',
      description: 'Scalable SaaS products with multi-tenancy and subscription management',
      features: ['Multi-tenant architecture', 'Subscription billing', 'Analytics dashboard'],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration',
      features: ['Shopping cart', 'Payment gateways', 'Inventory management'],
    },
    {
      icon: Building2,
      title: 'Enterprise Software',
      description: 'Custom enterprise applications for complex business processes',
      features: ['ERP systems', 'CRM solutions', 'Workflow automation'],
    },
    {
      icon: Database,
      title: 'API Development',
      description: 'RESTful and GraphQL APIs with comprehensive documentation',
      features: ['REST APIs', 'GraphQL', 'API documentation'],
    },
    {
      icon: Code,
      title: 'MVP Development',
      description: 'Rapid MVP development to validate your product ideas',
      features: ['Fast turnaround', 'Core features', 'Market validation'],
    },
  ]

  return (
    <>
      <Hero
        subtitle="Product Development"
        title="Build Scalable Software Products"
        description="We develop custom software products that scale with your business. From MVPs to enterprise platforms, we bring your vision to life."
        primaryCTA={{ text: 'Start Building', href: '/contact' }}
        secondaryCTA={{ text: 'View Products', href: '/portfolio' }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Product Development Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              Full-stack product development from concept to launch
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6">Our Tech Stack</h2>
            <div className="mb-8">
              <h4 className="mb-4 text-primary-600">Frontend</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'].map((tech) => (
                  <span key={tech} className="rounded-lg bg-white px-4 py-2 font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="mb-8">
              <h4 className="mb-4 text-primary-600">Backend</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['Node.js', 'Python', 'Go', 'PostgreSQL', 'MongoDB', 'Redis'].map((tech) => (
                  <span key={tech} className="rounded-lg bg-white px-4 py-2 font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <h4 className="mb-4 text-primary-600">Cloud & DevOps</h4>
              <div className="flex flex-wrap justify-center gap-3">
                {['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'CI/CD'].map((tech) => (
                  <span key={tech} className="rounded-lg bg-white px-4 py-2 font-medium shadow-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
