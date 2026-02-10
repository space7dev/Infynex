'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/contactApi'

const bannerPoints = [
  'Request for Proposal',
  'Requirement Planning',
  'Development and QA',
  'Maintenance and Support',
]

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

const benefits = [
  {
    title: 'Flexible Setting',
    description:
      'Hybrid blockchain combines private and public models for optimized transparency and control.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-flexible-setting.svg',
  },
  {
    title: 'A Closed Ecosystem',
    description:
      'Keep sensitive data secure while still leveraging public blockchain advantages.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-closed-ecosystem.svg',
  },
  {
    title: 'Reduce Transaction Cost',
    description:
      'Hybrid models reduce costs with streamlined governance and efficient validation.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-reduce-transaction-cost.svg',
  },
  {
    title: 'Enhanced Security',
    description:
      'Inherit the best security patterns of public and private blockchain networks.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-enhanced-security.svg',
  },
  {
    title: 'Lightning Fast Operations',
    description:
      'Improve transaction speeds with curated validators and network controls.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-lighting-fast-operation.svg',
  },
  {
    title: 'Easy to Customize',
    description:
      'Adapt quickly to business changes with configurable access layers.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-easy-to-customize.svg',
  },
]

const useCases = [
  {
    title: 'Hybrid IoT',
    description:
      'Secure IoT devices on private networks while sharing selective data publicly.',
  },
  {
    title: 'Global Finance and Trade',
    description:
      'Resolve privacy issues in financial flows with hybrid governance controls.',
  },
  {
    title: 'Banking',
    description:
      'Secure customer data while improving internal collaboration workflows.',
  },
  {
    title: 'Supply Chain',
    description:
      'Enable transparent tracking with private access for distributors and suppliers.',
  },
  {
    title: 'Government Agencies',
    description:
      'Protect public data for voting, records, and humanitarian operations.',
  },
  {
    title: 'Health Sector',
    description:
      'Allow secure access to patient records with strict permissions.',
  },
]

const examples = [
  {
    title: 'Healthcare Sector',
    description:
      'Build HIPAA-compliant apps that keep patient data accessible and secure.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-heathcare-sector.webp',
  },
  {
    title: 'Private Token Creation',
    description:
      'Launch private tokens and enable asset conversion with interoperable hybrid chains.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-token-creation.webp',
  },
  {
    title: 'Smart Contract Development',
    description:
      'Deploy automated contracts to share services securely across partners.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-smart-contract.webp',
  },
]

const hybridChains = [
  {
    title: 'XinFin [XDCE]',
    description:
      'A hybrid chain combining Ethereum and Quorum with DPoS consensus and real-time data.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-xinfin.webp',
  },
  {
    title: 'Ripple (XRP)',
    description:
      'Connects banks and payment providers to a private blockchain via RippleNet.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-ripple.webp',
  },
  {
    title: 'Enterprise-Ready Blockchain',
    description:
      'Hybrid networks control data access while improving auditability and speed.',
    image:
      'https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-enterprise-ready-blockchain-svg.webp',
  },
]

const techStack = [
  {
    title: 'Front-end Development',
    items: ['AngularJS', 'React', 'jQuery', 'Bootstrap'],
  },
  {
    title: 'Backend Tech',
    items: ['Solidity', 'Golang', 'JavaScript', 'Java', 'Node.js', 'PHP'],
  },
  {
    title: 'Technology Tools',
    items: ['Ethereum Geth', 'Testnet', 'Zeppelin', 'BlockStack', 'Truffle', 'Remix'],
  },
  {
    title: 'dApp Development Platforms',
    items: ['Ethereum', 'Hyperledger', 'Tezos', 'Corda', 'Stellar', 'EOS', 'Hashgraph', 'Tron'],
  },
]

const engagementModels = [
  {
    title: 'Dedicated Team',
    description:
      'Hire a dedicated hybrid blockchain team to handle full delivery and outcomes.',
    icon:
      'https://www.Infynex.com/assets/img/remote-developers/hire-nft-developer-dedicated-team.svg',
    accent: 'bg-slate-900 text-white',
  },
  {
    title: 'Extended Team',
    description:
      'Add the right expertise to your team with a flexible extension model.',
    icon:
      'https://www.Infynex.com/assets/img/remote-developers/hire-nft-developer-extended-team.svg',
    accent: 'bg-lime-300 text-slate-900',
  },
  {
    title: 'Project Based Price Model',
    description:
      'Engage remote hybrid blockchain developers for end-to-end delivery.',
    icon:
      'https://www.Infynex.com/assets/img/remote-developers/hire-nft-developer-project-based-price.svg',
    accent: 'bg-slate-900 text-white',
  },
]

export default function HireHybridBlockchainDevelopersPage() {
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitted(false)

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await submitContactForm({
        full_name: String(formData.get('full_name') || ''),
        email: String(formData.get('email') || ''),
        mobile_number: String(formData.get('mobile_number') || ''),
        message: String(formData.get('message') || ''),
        website: String(formData.get('website') || ''),
        source: 'hire-hybrid-blockchain',
      })
      setSubmitted(true)
      form.reset()
    } catch (error) {
      console.error('Contact form error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.15fr,0.85fr]">
          <div>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Make Your Business Secure With Our{' '}
              <span className="text-lime-300">Hybrid Blockchain Developers</span>
            </h1>
            <p className="mt-4 text-slate-200">
              Hybrid blockchain blends public and private networks to deliver secure,
              flexible, and scalable business solutions.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              {bannerPoints.map((point) => (
                <span
                  key={point}
                  className="rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-200"
                >
                  {point}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-3xl bg-white p-6 shadow-xl">
            <h3 className="text-lg font-semibold">Talk to our experts</h3>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                name="full_name"
                placeholder="Full Name"
                required
                type="text"
              />
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                name="email"
                placeholder="Email"
                required
                type="email"
              />
              <input
                className="w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                name="mobile_number"
                placeholder="Mobile Number With Country Code"
                required
                type="text"
              />
              <textarea
                className="h-24 w-full rounded-2xl border border-slate-200 px-4 py-3 text-sm"
                name="message"
                placeholder="Your Main Skill"
                required
              />
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <button
                className="w-full rounded-2xl bg-slate-900 px-4 py-3 text-sm font-semibold text-white"
                type="submit"
              >
                {isSubmitting ? 'Submitting...' : submitted ? 'Thanks! We will reach out soon.' : 'Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {trustedLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4"
              >
                <img src={logo.src} alt={logo.alt} className="h-8 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-[1.1fr,0.9fr]">
          <div>
            <p className="text-sm font-semibold uppercase text-lime-600">What We Do?</p>
            <h2 className="mt-2 text-3xl font-semibold">
              Unlock the Potential With Modern Hybrid Blockchain Technology Solutions
            </h2>
            <p className="mt-4 text-slate-600">
              We help enterprises deploy hybrid blockchain solutions and integrate them
              with existing systems to solve real-world business problems.
            </p>
            <button
              className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              type="button"
            >
              Explore More
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/public-blockchain-companies-unlock-the-potential.webp"
              alt="Public blockchain companies"
              className="w-full max-w-sm rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-platform-hire-our-dedicated-hybrid-img.webp"
              alt="Hybrid blockchain platform"
              className="w-full max-w-sm rounded-3xl"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-lime-300">
              Hire Hybrid Blockchain Developers
            </p>
            <h2 className="mt-2 text-3xl font-semibold text-white">
              Hire Our Dedicated Hybrid Blockchain Experts For dApps Development
            </h2>
            <p className="mt-4 text-slate-200">
              Convert your ideas into scalable decentralized apps with agile delivery
              and expert blockchain engineering.
            </p>
            <button
              className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900"
              type="button"
            >
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-lime-600">
              Hire Public Blockchain Developers
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Hire Developer For Public Blockchain Development
            </h2>
            <p className="mt-4 text-slate-600">
              Build open, permissionless networks that power transparent applications and
              business operations.
            </p>
            <button
              className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/private-blockchain-developer-hire-developer-for-private-blockchain.webp"
              alt="Private blockchain developer"
              className="w-full max-w-sm rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hybrid-blockchain-developers-public-blockchain.webp"
              alt="Public blockchain companies"
              className="w-full max-w-sm rounded-3xl"
            />
          </div>
          <div>
            <p className="text-sm font-semibold uppercase text-lime-300">
              Hire Private Blockchain Developers
            </p>
            <h3 className="mt-2 text-3xl font-semibold text-white">
              Hire Developer For Private Blockchain Development
            </h3>
            <p className="mt-4 text-slate-200">
              Create permissioned networks with controlled participation and enterprise
              governance.
            </p>
            <button
              className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase text-lime-600">
              Hire Consortium Blockchain Developers
            </p>
            <h3 className="mt-2 text-3xl font-semibold">
              Hire Developer For Consortium Blockchain Development
            </h3>
            <p className="mt-4 text-slate-600">
              Build shared networks where multiple members collaborate on decentralized
              platforms.
            </p>
            <button
              className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              type="button"
            >
              Get Started
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/permissioned-blockchain-developer-hire-developer-for-consortium.webp"
              alt="Permissioned blockchain developer"
              className="w-full max-w-sm rounded-3xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 lg:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/blockchain-images/blockchain.webp"
              alt="Hybrid blockchain developers"
              className="w-full max-w-xs rounded-full border border-slate-700"
            />
          </div>
          <div>
            <h3 className="text-3xl font-semibold text-white">
              Want to Redefine Your Business Idea? Give Us a Chance!
            </h3>
            <p className="mt-3 text-slate-200">
              Exchange your ideas with our experienced hybrid blockchain development experts.
            </p>
            <button
              className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900"
              type="button"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-lime-600">
              Why Choose Hybrid Blockchain?
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Benefits of Choosing Hybrid Blockchain for Business Solutions
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img src={benefit.image} alt={benefit.title} className="h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">{benefit.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 text-white">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-lime-300">
              Maximize Your Business Potential
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              Hybrid Blockchain Development Use Cases
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-3xl bg-slate-900 p-6">
                <h3 className="text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{useCase.description}</p>
                <button
                  className="mt-5 inline-flex items-center text-sm font-semibold text-lime-300"
                  type="button"
                >
                  Get in Touch
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-center text-white">
            <h3 className="text-2xl font-semibold">
              Hire Our dApp Hybrid Blockchain Developers And Transform Your Business Idea Into Reality
            </h3>
            <button
              className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900"
              type="button"
            >
              Schedule Your Demo
            </button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-lime-600">
              Hire Dedicated Hybrid Blockchain Developers
            </p>
            <h2 className="mt-2 text-3xl font-semibold">
              A Few Examples of How Our Hybrid Blockchain Developers Can Empower Your Business
            </h2>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-3">
            {examples.map((example) => (
              <div
                key={example.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={example.image}
                  alt={example.title}
                  className="h-40 w-full rounded-2xl object-cover"
                />
                <h3 className="mt-4 text-lg font-semibold">{example.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{example.description}</p>
                <button
                  className="mt-5 rounded-full bg-slate-900 px-4 py-2 text-xs font-semibold text-white"
                  type="button"
                >
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-lime-600">
              Hybrid Blockchain Solutions
            </p>
            <h2 className="mt-2 text-3xl font-semibold">Current Hybrid Chains</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {hybridChains.map((chain) => (
              <div
                key={chain.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img src={chain.image} alt={chain.title} className="h-14 w-14" />
                <h3 className="mt-4 text-lg font-semibold">{chain.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{chain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="rounded-3xl bg-slate-900 px-6 py-10 text-center text-white">
            <h3 className="text-2xl font-semibold">
              Launch Next-Gen Business Solutions With Our Hybrid Blockchain Developers
            </h3>
            <button
              className="mt-6 rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-slate-900"
              type="button"
            >
              Schedule Your Demo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16">
        <div className="mx-auto w-full max-w-6xl px-4 text-white">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-lime-300">Our Mastery</p>
            <h2 className="mt-2 text-3xl font-semibold">
              Tech Stack That Pillars Our Hybrid Blockchain Development
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {techStack.map((stack) => (
              <div key={stack.title} className="rounded-3xl bg-slate-900 p-6">
                <h3 className="text-base font-semibold text-lime-300">{stack.title}</h3>
                <ul className="mt-4 space-y-2 text-sm text-slate-200">
                  {stack.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase text-lime-600">Engagement Models</p>
            <h2 className="mt-2 text-3xl font-semibold">
              Hire Our Hybrid Blockchain Developers As You Like
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {engagementModels.map((model) => (
              <div
                key={model.title}
                className={`rounded-3xl p-6 shadow-sm ${model.accent}`}
              >
                <img src={model.icon} alt={model.title} className="h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">{model.title}</h3>
                <p className="mt-3 text-sm opacity-90">{model.description}</p>
                <button
                  className="mt-5 rounded-full bg-white/20 px-4 py-2 text-xs font-semibold"
                  type="button"
                >
                  Hire Us Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
