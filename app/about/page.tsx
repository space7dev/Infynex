import { Metadata } from 'next'
import Hero from '@/components/Hero'
import { Target, Users, Award, Lightbulb, Heart, TrendingUp } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Us - Our Story & Mission',
  description:
    'Learn about Infynex Solutions, our mission, values, and the team behind innovative technology solutions.',
}

export default function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Excellence',
      description:
        'We strive for excellence in every project, delivering solutions that exceed expectations.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'We embrace new technologies and creative approaches to solve complex problems.',
    },
    {
      icon: Heart,
      title: 'Client-Centric',
      description:
        'Your success is our success. We partner with you to achieve your business goals.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description:
        'We believe in transparent communication and working closely with our clients.',
    },
    {
      icon: Award,
      title: 'Quality',
      description:
        'Quality is non-negotiable. We follow best practices and maintain high standards.',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description:
        'We grow alongside our clients, adapting to changing needs and scaling solutions.',
    },
  ]

  const stats = [
    { number: '10+', label: 'Years in Business' },
    { number: '500+', label: 'Projects Delivered' },
    { number: '200+', label: 'Happy Clients' },
    { number: '50+', label: 'Team Members' },
  ]

  const team = [
    {
      name: 'Alex Thompson',
      role: 'Chief Executive Officer',
      bio: '15+ years in technology leadership',
    },
    {
      name: 'Sarah Martinez',
      role: 'Chief Technology Officer',
      bio: 'Expert in scalable architecture',
    },
    {
      name: 'Michael Chang',
      role: 'Head of Mobile Development',
      bio: 'iOS & Android specialist',
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Blockchain',
      bio: 'Blockchain & Web3 pioneer',
    },
    {
      name: 'David Kim',
      role: 'Head of AI/ML',
      bio: 'AI & Machine Learning expert',
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      bio: 'Product strategy & UX leader',
    },
  ]

  return (
    <>
      <Hero
        subtitle="About Infynex"
        title="Transforming Businesses Through Technology"
        description="We are a team of passionate technologists dedicated to building innovative solutions that drive business growth and digital transformation."
        primaryCTA={{ text: 'Join Our Team', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Work', href: '/portfolio' }}
      />

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-primary-600">{stat.number}</div>
                <div className="text-secondary-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-secondary-700">
              <p>
                Founded in 2014, Infynex Solutions started with a simple mission: to help
                businesses leverage technology to achieve their goals. What began as a small team
                of developers has grown into a full-service technology partner.
              </p>
              <p>
                Over the years, we&apos;ve delivered 500+ projects across mobile apps, blockchain,
                AI, and custom software development. Our clients range from innovative startups to
                established enterprises, all sharing a common goal of digital transformation.
              </p>
              <p>
                Today, we&apos;re proud to be a trusted technology partner, known for our technical
                expertise, commitment to quality, and client-focused approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Our Values</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {values.map((value, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <value.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-3 text-xl font-bold">{value.title}</h3>
                <p className="text-secondary-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Leadership Team</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              Meet the experts leading our team
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div key={index} className="card text-center">
                <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 text-3xl font-bold text-primary-600">
                  {member.name.charAt(0)}
                </div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="mb-2 font-semibold text-primary-600">{member.role}</p>
                <p className="text-sm text-secondary-600">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-400">
        <div className="container-custom text-center text-white">
          <h2 className="mb-4 text-white">Want to Work With Us?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Whether you&apos;re looking for a technology partner or want to join our team, we&apos;d
            love to hear from you.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="/contact"
              className="rounded-lg bg-white px-8 py-4 font-semibold text-primary-600 transition-all hover:bg-primary-50"
            >
              Start a Project
            </a>
            <a
              href="/contact"
              className="rounded-lg border-2 border-white bg-transparent px-8 py-4 font-semibold text-white transition-all hover:bg-white/10"
            >
              Join Our Team
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
