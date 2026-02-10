import { Metadata } from 'next'
import Hero from '@/components/Hero'
import { Users, Clock, DollarSign, Award, Code, CheckCircle } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Hire Developers - Dedicated Development Teams',
  description:
    'Hire experienced developers for your project. Access skilled developers in mobile, web, blockchain, and AI technologies.',
}

export default function HireDevelopersPage() {
  const benefits = [
    {
      icon: Users,
      title: 'Expert Developers',
      description: 'Access to skilled developers with proven track records',
    },
    {
      icon: Clock,
      title: 'Flexible Engagement',
      description: 'Hourly, part-time, or full-time engagement models',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Save up to 60% compared to in-house hiring',
    },
    {
      icon: Award,
      title: 'Quality Assured',
      description: 'Rigorous vetting and quality control processes',
    },
  ]

  const roles = [
    {
      title: 'Hire dApp Developers',
      href: '/hire-dapp-developers',
      description: 'Build user-first decentralized applications with wallet, API, and UI expertise.',
      skills: ['Solidity', 'Web3.js', 'Ethers.js', 'React'],
    },
    {
      title: 'Hire Smart Contract Developer',
      href: '/hire-smart-contract-developer',
      description: 'Design, audit, and optimize smart contracts with secure delivery practices.',
      skills: ['Solidity', 'Foundry', 'Hardhat', 'Security'],
    },
    {
      title: 'Hire AI Developers',
      href: '/hire-ai-developers',
      description: 'Ship AI products with production-ready models and reliable ML pipelines.',
      skills: ['Python', 'LLMs', 'MLOps', 'NLP'],
    },
    {
      title: 'Hire Web3 Developer',
      href: '/hire-web3-developer',
      description: 'Integrate blockchain protocols and deliver scalable Web3 product features.',
      skills: ['Smart Contracts', 'Tokenization', 'Web3 APIs', 'Security'],
    },
    {
      title: 'Hire Reactjs Developer',
      href: '/hire-reactjs-developer',
      description: 'Build fast, accessible interfaces with component-driven React engineering.',
      skills: ['React', 'Next.js', 'TypeScript', 'UI Systems'],
    },
    {
      title: 'Hire React Native Developers',
      href: '/hire-react-native-developers',
      description: 'Launch cross-platform mobile apps with native performance and polish.',
      skills: ['React Native', 'iOS', 'Android', 'APIs'],
    },
    {
      title: 'Hire Hybrid Blockchain Developers',
      href: '/hire-hybrid-blockchain-developers',
      description: 'Bridge on-chain and off-chain systems with secure middleware and data flows.',
      skills: ['Oracles', 'Node.js', 'APIs', 'DevOps'],
    },
  ]

  const process = [
    {
      step: 1,
      title: 'Share Requirements',
      description: 'Tell us about your project and skill requirements',
    },
    {
      step: 2,
      title: 'Review Candidates',
      description: 'We shortlist and present qualified developers',
    },
    {
      step: 3,
      title: 'Interview & Select',
      description: 'Interview candidates and choose the best fit',
    },
    {
      step: 4,
      title: 'Start Development',
      description: 'Onboard and begin working on your project',
    },
  ]

  return (
    <>
      <Hero
        subtitle="Staff Augmentation"
        title="Hire Expert Developers for Your Project"
        description="Scale your team with experienced developers. Access top talent in mobile, web, blockchain, and AI development without the overhead of full-time hiring."
        primaryCTA={{ text: 'Hire Developers', href: '/contact' }}
        secondaryCTA={{ text: 'View Our Team', href: '/about' }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Why Hire From Us?</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100">
                  <benefit.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="mb-2 text-xl font-bold">{benefit.title}</h3>
                <p className="text-secondary-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Hire Developers By Specialty</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              Explore the same specializations from the Hire Developers submenu in one place.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {roles.map((role, index) => (
              <div key={index} className="card flex h-full flex-col">
                <div className="mb-3 flex items-center space-x-2">
                  <Code className="h-5 w-5 text-primary-600" />
                  <h3 className="text-xl font-bold">{role.title}</h3>
                </div>
                <p className="mb-4 text-sm text-secondary-600">{role.description}</p>
                <div className="flex flex-wrap gap-2">
                  {role.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-primary-50 px-3 py-1 text-sm text-primary-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <Link href={role.href} className="btn-outline inline-flex items-center">
                    View Role Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">Hiring Process</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              Simple and transparent hiring process
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary-600 text-2xl font-bold text-white">
                  {item.step}
                </div>
                <h4 className="mb-2 font-bold text-secondary-900">{item.title}</h4>
                <p className="text-sm text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-400">
        <div className="container-custom text-center text-white">
          <h2 className="mb-4 text-white">Ready to Build Your Team?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-primary-100">
            Get access to pre-vetted developers and scale your team in days, not months.
          </p>
          <Link
            href="/contact"
            className="btn-primary inline-block bg-white text-primary-600 hover:bg-primary-50"
          >
            Hire Developers Now
          </Link>
        </div>
      </section>
    </>
  )
}
