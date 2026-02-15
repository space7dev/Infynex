'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAccordion } from '@/lib/useAccordion'
import FaqSectionButtonItems from './FaqSectionButtonItems'
import TrustedLogosStrip from './TrustedLogosStrip'

const normalizeAssetUrl = (url: string) =>
  url.replace('https://www.Infynex.com/', 'https://www.suffescom.com/')

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

const industries = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-development-fashion-industry.webp',
    title: 'Fashion Industry',
    description:
      'Track data faster with efficient parcel tracking, stronger sustainability, and transparent supply chains.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-development-lifestyle-and-decor.webp',
    title: 'Lifestyle and Decor',
    description:
      'Move warranties to the cloud and simplify interior design workflows with secure records.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-development-electronic.webp',
    title: 'Electronics',
    description:
      'Enable authenticated items, transparent data processing, and better manufacturing visibility.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-development-lifestyle-and-decor.webp',
    title: 'Food Industry',
    description:
      'Track lifecycles from sourcing to distribution with transparent supply chain records.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-development-health-industry.webp',
    title: 'Health Industry',
    description:
      'Process patient data in real time and maintain decentralized medical records securely.',
  },
]

const benefits = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-no-third-party-interference.svg',
    title: 'No Third-Party Interference',
    description:
      'Enable direct peer-to-peer transactions without intermediaries.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-safety-and-security.svg',
    title: 'Safety and Security',
    description:
      'Distributed networks keep data secure and resilient.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-seamless-payments.svg',
    title: 'Seamless Payments',
    description:
      'Accelerate cross-border payments via crypto transactions.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-automation-of-task.svg',
    title: 'Automation of Tasks',
    description:
      'Smart automation reduces manual work while prioritizing security.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-access-for-global-consumers.svg',
    title: 'Access Global Consumers',
    description:
      'Reach international buyers with simplified payment flows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-easy-return-and-fund.svg',
    title: 'Easier Returns and Funds',
    description:
      'Improve return processes with traceability and transparency.',
  },
]

const marketplaceFeatures = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solutions-guranted-delivery.webp',
    title: 'Guaranteed Product Delivery',
    description:
      'Robust tracking ensures on-time deliveries with verifiable milestones.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solutions-speedup-transaction.webp',
    title: 'Speeding Up Transactions',
    description:
      'Instant settlement removes cross-border payment delays.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solutions-reward-system.webp',
    title: 'Reward Systems',
    description:
      'Token-based incentives for partners, customers, and influencers.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solutions-influencer-outreach.webp',
    title: 'Influencer Outreach',
    description:
      'Reward creators with digital tokens and exclusive coupons.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solutions-more-secure-record.webp',
    title: 'Secured Record-Keeping',
    description:
      'Distributed data storage reduces fraud and tampering.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solutions-improved-verfication.webp',
    title: 'Improved Verification',
    description:
      'Consensus-driven validation ensures traceability and trust.',
  },
]

const architectureLayers = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-logical-operation.svg',
    title: 'Logical Operations',
    description:
      'Smart contracts automate every action within the marketplace.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-functionality.svg',
    title: 'Functionality',
    description:
      'Buyer-seller interaction, transaction verification, and transparency.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-digital-wallet.svg',
    title: 'Digital Wallet',
    description:
      'Crypto wallets enable fast transactions and secure histories.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-front-end-layer.svg',
    title: 'Front-End Layer',
    description:
      'User-facing layer communicates directly with smart contracts.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-web3-api.svg',
    title: 'Web3 API',
    description:
      'Custom APIs enhance integrations and marketplace efficiency.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-data-storage.svg',
    title: 'Data Storage System',
    description:
      'Reliable storage handles large volumes of decentralized data.',
  },
]

const retailExamples = [
  {
    title: 'Bitpay',
    description:
      'Crypto transactions through wallets like Coinbase and MetaMask.',
  },
  {
    title: 'Shopin',
    description:
      'Personalized retail experiences based on customer behavior.',
  },
  {
    title: 'ConsenSys',
    description:
      'Blockchain applications and automated ecommerce workflows.',
  },
  {
    title: 'Fluz',
    description:
      'Blockchain-powered ecommerce platforms for retail innovation.',
  },
  {
    title: 'Portion',
    description:
      'Blockchain marketplace for digital and physical art.',
  },
  {
    title: 'Buying.com',
    description:
      'Direct transactions between customers and manufacturers.',
  },
]

const adoptedBusinesses = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-carrefour.webp',
    title: 'Carrefour',
    description:
      'QR-based transparency for organic products and supply chains.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-amazon.webp',
    title: 'Amazon',
    description:
      'Blockchain-secured supply chain visibility and transaction records.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-alibaba.webp',
    title: 'Alibaba',
    description:
      'Blockchain adoption across cloud, finance, and logistics.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-nestle.webp',
    title: 'Nestle',
    description:
      'Lifecycle tracking with IBM Food Trust and OpenSC.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-walmart.webp',
    title: 'Walmart',
    description:
      'Blockchain automation for freight invoices and carrier payments.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-platform-de-beer.webp',
    title: 'De Beers',
    description:
      'Blockchain tracking for diamond production and distribution.',
  },
]

const blockchains = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-ethereum.webp',
    name: 'Ethereum',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-hyperledger.webp',
    name: 'Hyperledger',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-corda.webp',
    name: 'Corda',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-stellar.webp',
    name: 'Stellar',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-tron.webp',
    name: 'Tron',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-eos.webp',
    name: 'EOS.IO',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-ripple.webp',
    name: 'Ripple',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-solana.webp',
    name: 'Solana',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-polygon.webp',
    name: 'Polygon',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-tezos.webp',
    name: 'Tezos',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-multichain.webp',
    name: 'Multichain',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-neo.webp',
    name: 'NEO',
  },
]

const whyChooseUs = [
  {
    title: '100% Quality Assurance',
    description:
      '6+ years of blockchain expertise delivering reliable ecommerce solutions.',
  },
  {
    title: '24/7 Customer Support',
    description: 'Always-on expert support to resolve every query fast.',
  },
  {
    title: 'Cost-Effective Solutions',
    description:
      'Seasoned teams that prioritize time savings and value.',
  },
  {
    title: 'Transparent Process',
    description: 'Clear project visibility with no hidden costs.',
  },
  {
    title: 'On-Time Project Delivery',
    description: 'Timely launches with flexible customization options.',
  },
  {
    title: 'Multiple Testings',
    description: 'Rigorous QA for smooth, bug-free operations.',
  },
]

const faqs = [
  {
    question: 'How is it possible to use blockchain in e-commerce?',
    answer:
      'Blockchain removes third-party interference and reduces surcharges by using decentralized verification.',
  },
  {
    question: 'Can we create separate blockchains for businesses?',
    answer:
      'Yes, customized blockchains can be created to match specific business needs.',
  },
  {
    question: 'Which technology is best for ecommerce platforms?',
    answer:
      'Ethereum is widely adopted for its security and fast transaction speed.',
  },
  {
    question: 'How can blockchain innovate the e-commerce industry?',
    answer:
      'Blockchain improves record-keeping, data review, and operational efficiency.',
  },
  {
    question: 'Why invest in an ecommerce marketplace?',
    answer:
      'Ecommerce revenue is growing rapidly, and blockchain platforms offer secure data handling.',
  },
  {
    question: 'How much does blockchain decentralized marketplace development cost?',
    answer:
      'Costs typically range from $50k to $100k depending on features and complexity.',
  },
  {
    question: 'How long does blockchain ecommerce marketplace development take?',
    answer:
      'Basic platforms take 3-4 months, while complex builds can take up to a year.',
  },
]

export default function BlockchainEcommercePlatformPage() {
  const { openIndex: openFaq, toggleIndex: toggleFaq } = useAccordion(0)

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white pb-[230px]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              Blockchain Ecommerce Marketplace Solutions
            </h1>
            <p className="mt-4 text-base text-slate-200 md:text-lg pb-[30px]">
              Build a decentralized ecommerce platform with advanced traceability,
              security, and transparency. Our blockchain ecommerce solutions help
              you create trusted marketplaces with enterprise-grade control.
            </p>
            <Link
              href="/contact"
              className="mt-8 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900"
            >
              Contact Our Experts
            </Link>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-banner.webp'
              )}
              alt="Blockchain Ecommerce Marketplace solutions"
              className="w-full rounded-2xl object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <TrustedLogosStrip
        logos={trustedLogos.map((logo) => ({
          ...logo,
          src: normalizeAssetUrl(logo.src),
        }))}
        sectionClassName="border-b border-slate-100 bg-white"
        containerClassName="mx-auto max-w-6xl px-6 py-8"
        listClassName="flex flex-wrap items-center justify-center gap-6"
        imageClassName="h-10 w-auto opacity-80"
      />

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div className="order-2 md:order-1">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/blockchain-images/blockchain-solutions-for-ecommerce-leading-blockchain-solution.webp'
              )}
              alt="Leading blockchain ecommerce solution"
              className="w-full rounded-3xl"
              loading="lazy"
            />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Leading Blockchain Platform for E-Commerce
            </h2>
            <p className="mt-4 text-slate-600">
              Blockchain stores ecommerce data in distributed nodes, enabling fast
              processing, transparency, and real-time visibility. It is the right
              technology partner for secure ecommerce operations.
            </p>
            <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              Talk to Our Experts Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              E-commerce Industries Impacted by Our Blockchain Solutions
            </h2>
            <p className="mt-4 text-slate-600">
              Blockchain enables direct customer interactions and removes
              intermediaries, delivering secure and efficient ecommerce
              experiences across industries.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {industries.map((industry, index) => (
              <div
                key={industry.title}
                className={`grid gap-6 rounded-3xl bg-white p-6 shadow-sm md:grid-cols-2 ${
                  index % 2 === 1 ? 'md:grid-flow-col-dense' : ''
                }`}
              >
                <img
                  src={normalizeAssetUrl(industry.image)}
                  alt={industry.title}
                  className="h-48 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <div className="flex flex-col justify-center">
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {industry.description}
                  </p>
                  <button className="mt-5 w-fit rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-slate-700">
                    Talk to Our Experts Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Why Rely on the Power of Blockchain for E-Commerce?
            </h3>
            <p className="mt-4 text-slate-600">
              Blockchain delivers security, cost efficiency, and transparency.
              Our decentralized ecommerce solutions help you scale faster with
              fewer intermediaries.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-100 p-6"
              >
                <img
                  src={normalizeAssetUrl(benefit.icon)}
                  alt={benefit.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h4 className="mt-4 text-lg font-semibold">{benefit.title}</h4>
                <p className="mt-2 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">
              Ecommerce Blockchain Development - The Right Move
            </h2>
            <p className="mt-4 text-slate-600">
              Replace conventional ecommerce limitations with blockchain for
              secure transactions, easy tracking, and decentralized data
              management.
            </p>
            <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              Talk to Our Experts Now
            </button>
          </div>
          <img
            src={normalizeAssetUrl(
              'https://www.Infynex.com/assets/img/blockchain-images/ecommerce-blockchain-development-the-right-move.webp'
            )}
            alt="Ecommerce blockchain development"
            className="w-full rounded-3xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Features of a Decentralized Ecommerce Marketplace
            </h2>
            <p className="mt-4 text-slate-600">
              Our blockchain marketplace offers unique features to build a
              secure, scalable ecommerce business.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {marketplaceFeatures.map((feature) => (
              <div
                key={feature.title}
                className="overflow-hidden rounded-2xl border border-slate-100"
              >
                <img
                  src={normalizeAssetUrl(feature.image)}
                  alt={feature.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Brief of a Blockchain Based Ecommerce Marketplace
            </h3>
            <p className="mt-4 text-slate-600">
              Blockchain ecommerce architecture blends smart contracts, Web3 APIs,
              and decentralized storage for trust and performance.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {architectureLayers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(layer.icon)}
                  alt={layer.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h4 className="mt-4 text-lg font-semibold">{layer.title}</h4>
                <p className="mt-2 text-sm text-slate-600">
                  {layer.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="order-2 md:order-1">
            <ul className="space-y-4">
              {retailExamples.map((example) => (
                <li key={example.title} className="rounded-2xl border border-slate-100 p-5">
                  <h4 className="text-lg font-semibold">{example.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">
                    {example.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Popular Examples of Blockchain in Retail
            </h3>
            <p className="mt-4 text-slate-600">
              Retail leaders are using blockchain for secure payments, supply
              chain visibility, and automated commerce workflows.
            </p>
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/blockchain-images/web3-development-firm-our-roadmap-to-build.webp'
              )}
              alt="Blockchain retail examples"
              className="mt-6 w-full rounded-3xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Retail Businesses That Have Successfully Adopted Blockchain
            </h2>
            <p className="mt-4 text-slate-600">
              Global brands are using blockchain to gain transparency, automate
              logistics, and secure transactions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {adoptedBusinesses.map((business) => (
              <div
                key={business.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(business.icon)}
                  alt={business.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{business.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {business.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Blockchains We Rely On for Marketplace Development
            </h3>
            <p className="mt-4 text-slate-600">
              We select the best blockchain for your ecommerce platform based on
              your performance, cost, and scalability goals.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-4">
            {blockchains.map((chain) => (
              <div
                key={chain.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 p-5 text-center"
              >
                <img
                  src={normalizeAssetUrl(chain.icon)}
                  alt={chain.name}
                  className="h-14 w-14"
                  loading="lazy"
                />
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {chain.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Why Choose Us for Blockchain Ecommerce Marketplace Solutions?
            </h2>
            <p className="mt-4 text-slate-600">
              Our blockchain experts deliver secure enterprise solutions with a
              reliable, transparent process.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h4 className="text-2xl font-semibold md:text-4xl">
            How Does Infynex Help Build Your Blockchain Ecommerce Platform?
          </h4>
          <p className="mt-3 text-slate-100">
            We assemble a dedicated project manager, team lead, and developers
            who provide daily updates and clear communication.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700">
            Consult with CTO
          </button>
        </div>
      </section>

      <FaqSectionButtonItems
        items={faqs}
        openIndex={openFaq}
        onToggle={toggleFaq}
        sectionClassName="bg-white"
        containerClassName="mx-auto max-w-6xl px-6 py-14"
        headerWrapperClassName="max-w-3xl"
        title="Frequently Asked Questions"
        titleTag="h4"
        titleClassName="text-2xl font-semibold md:text-4xl"
        subtitle="Top-rated blockchain ecommerce questions answered."
        subtitleClassName="mt-4 text-slate-600"
        listClassName="mt-10 grid gap-6 md:grid-cols-2"
        itemButtonClassName="rounded-2xl border border-slate-100 p-5 text-left"
        headerClassName="flex items-center justify-between gap-4"
        questionClassName="text-sm font-semibold text-slate-800"
        iconClassName="text-lg text-emerald-500"
        answerClassName="mt-3 text-sm text-slate-600"
      />
    </div>
  )
}
