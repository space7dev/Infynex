'use client'

import { useState } from 'react'

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

const stats = [
  { value: '300+', label: 'App Development' },
  { value: '750+', label: 'Global Team' },
  { value: '1250+', label: 'Clients Worldwide' },
  { value: '50+', label: 'Blockchain Projects' },
]

const platformSolutions = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/readymade-android-apps-for-sale.webp',
    title: 'Web3 Android App Development',
    description:
      'Using the best-suited and innovative tech stack, our experts build feature-rich Android web3 apps that are fast, secure, and user-friendly.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/readymade-ios-apps-for-sale.webp',
    title: 'Web3 iOS App Development',
    description:
      'Deliver premium iOS experiences with custom web3 features tuned for performance, privacy, and seamless device compatibility.',
  },
]

const industryServices = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-gaming.webp',
    title: 'Web3 Game App Development',
    description:
      'Create immersive game economies with blockchain, AI, IoT, and real-time interactions for next-gen player experiences.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-entertainment.webp',
    title: 'Web3 Social Media App Development',
    description:
      'Give users control of data ownership, content preferences, and immersive social interactions through decentralized profiles.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-tourism.webp',
    title: 'Web3 Healthcare App Development',
    description:
      'Enable secure patient records, teleconsultations, and efficient clinical workflows backed by decentralized infrastructure.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-ecommerce.webp',
    title: 'Web3 Finance App Development',
    description:
      'Build transparent, permissionless financial products that reduce intermediaries and improve data traceability.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-finance.webp',
    title: 'Web3 Education App Development',
    description:
      'Launch learn-to-earn ecosystems and interactive virtual classrooms without location constraints.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-real-estate.webp',
    title: 'Web3 Crypto Trading App Development',
    description:
      'Deliver multi-wallet trading with layered security, real-time data, and responsive notifications.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-fashion.webp',
    title: 'Web3 Food Delivery App Development',
    description:
      'Integrate real-time tracking, secure payments, and smart operations for web3 delivery businesses.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-social-media.webp',
    title: 'Web3 NFT App Development',
    description:
      'Launch NFT platforms with multi-wallet support, minting, and secure peer-to-peer trading.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-solution-for-healthcare.webp',
    title: 'Web3 Entertainment App Development',
    description:
      'Enable NFT-driven fan engagement, content ownership, and new monetization models for artists.',
  },
]

const benefits = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-in-iot-identity-validation.svg',
    title: 'Automated Business Processes',
    description:
      'Automate verification, tracking, and data flows for higher productivity and accuracy.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-in-iot-data-protection.svg',
    title: 'No Third Party Intervention',
    description:
      'Engage customers directly while protecting business data from misuse.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-in-iot-network-security.svg',
    title: 'Personalized Products and Services',
    description:
      'Use AI-driven insights to tailor experiences and retain customers.',
  },
]

const web3Elements = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-consulting-service.svg',
    title: 'Blockchain Technology',
    description:
      'Decentralized ledgers enable secure transactions, storage, and exchange of data.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-3d-avatar-development.svg',
    title: 'Artificial Intelligence',
    description:
      'NLP, chatbots, and machine learning improve automation and decision-making.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-3d-enviornment-development.svg',
    title: 'AR and VR',
    description:
      'Immersive experiences that blend real and virtual environments.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-integration-service.svg',
    title: 'Cryptocurrency',
    description:
      'Digital currencies power fast, secure, and transparent payments.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-app-development-service.svg',
    title: 'Metaverse Development',
    description:
      'Persistent digital spaces for events, collaboration, and commerce.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-development-app-digital-twin.svg',
    title: '3D Technology',
    description:
      '3D modeling builds lifelike experiences and richer app interfaces.',
  },
]

const techTabs = [
  {
    id: 'front-end',
    label: 'Front-end Development',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/html-tech-icon.webp',
        title: 'HTML5',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/css3-tech-icon.webp',
        title: 'Css3',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/bootstrap-tech-icon.webp',
        title: 'JavaScript',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/react-tech-icon.webp',
        title: 'Nodejs',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/jquery-tech-icon.webp',
        title: 'Reactjs',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/angular-js-tech-icon.webp',
        title: 'PHP',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/solidity-tech-icon.webp',
        title: 'Truffle',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/golang-tech-icon.webp',
        title: 'Ganache',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/javascript-tech-icon.webp',
        title: 'Drizzle',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/java-tech-icon.webp',
        title: 'Solidity',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/node-js-tech-icon.webp',
        title: 'Bitquery',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/php-tech-icon.webp',
        title: 'Moralis',
      },
    ],
  },
  {
    id: 'networks',
    label: 'Blockchain Networks',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/ethereum-tech-icon.webp',
        title: 'Solana',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/testnet-tech-icon.webp',
        title: 'Ethereum',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/zeppelin-tech-icon..webp',
        title: 'Hyperledger',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockstack_tech-icon.webp',
        title: 'Binance',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/truffle-tech-icon..webp',
        title: 'TRON',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/remix-tech-icon.webp',
        title: 'Polygon',
      },
    ],
  },
  {
    id: 'protocols',
    label: 'Protocols',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/ethereum-tech-icon.webp',
        title: 'ASIC-optimized proof of work (POW)',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/hyperledger-tech-icon.webp',
        title: 'Proof of space and time (POST)',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/tezos-tech-icon.webp',
        title: 'Proof of History (POH)',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/corda-tech-icon.webp',
        title: 'Stellar Consensus Protocol',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/stellar-tech-icon.webp',
        title: 'Ripple Consensus Protocol',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/eos-tech-icon.webp',
        title: 'Hybrid POS and POW',
      },
    ],
  },
]

const majorIndustries = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-gaming.svg',
    title: 'Gaming',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-dex.svg',
    title: 'DEX',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-de-centralized.svg',
    title: 'DeFi',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-cryptocurrency.svg',
    title: 'Cryptocurrency',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-real-estate.svg',
    title: 'Real Estate',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-education.svg',
    title: 'Education',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-agriculture.svg',
    title: 'Agriculture',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-healthcare.svg',
    title: 'Healthcare',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-insurance.svg',
    title: 'Insurance',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-rental.svg',
    title: 'Rental',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-finance.svg',
    title: 'Finance',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-charities.svg',
    title: 'Charities',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-ecommerce.svg',
    title: 'E-Commerce',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-transportation.svg',
    title: 'Transportation',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/web3-dapp-development-logistics.svg',
    title: 'Logistics',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Analyze Your Business Goals and Requirements',
    description:
      'Define a clear roadmap aligned with your long-term web3 objectives.',
  },
  {
    step: '02',
    title: 'Designing and Development',
    description:
      'Create a responsive design and integrate custom features that matter.',
  },
  {
    step: '03',
    title: 'Web3 App Testing and Launch',
    description:
      'QA teams validate performance, security, and user experience before release.',
  },
  {
    step: '04',
    title: 'Deployment and Post-Release Support',
    description:
      'Launch on your preferred platform with ongoing monitoring and upgrades.',
  },
]

const whyChooseUs = [
  {
    title: 'Experienced Web3 Developers',
    description:
      'Seasoned teams craft custom solutions aligned with your business goals.',
  },
  {
    title: 'Impressive Portfolio',
    description:
      '300+ web3 projects delivered across finance, gaming, and healthcare.',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Efficient workflows keep every milestone on schedule.',
  },
  {
    title: 'Multi Level Testing',
    description:
      'Comprehensive QA ensures stable performance and reliability.',
  },
  {
    title: '24x7 Support',
    description: 'Dedicated support teams are available around the clock.',
  },
  {
    title: 'Free Consultation',
    description: 'Get expert guidance and accurate cost estimations.',
  },
]

const faqs = [
  {
    question: 'Which businesses can have web3 mobile apps?',
    answer:
      'Every business can create a web3 mobile app, from fashion and travel to healthcare and entertainment.',
  },
  {
    question: 'How much does Web3 app development cost?',
    answer:
      'Web3 app development usually ranges from $20k to $200k depending on complexity and features.',
  },
  {
    question: 'How long does it take to build a Web3 mobile app?',
    answer:
      'Timelines depend on requirements and scope. We provide an accurate estimate after discovery.',
  },
  {
    question: 'Can Web3 mobile apps be customized?',
    answer:
      'Yes, features and workflows can be customized to your business and audience needs.',
  },
]

export default function Web3AppDevelopmentPage() {
  const [activeTab, setActiveTab] = useState(techTabs[0].id)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const activeTabData = techTabs.find((tab) => tab.id === activeTab)

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-white pb-[200px]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-200">
              Web3 App Development Company
            </p>
            <h1 className="mt-3 text-3xl font-semibold leading-tight md:text-5xl">
              Web3 App Development Company
            </h1>
            <p className="mt-4 text-base text-slate-200 md:text-lg">
              Experience the benefits of web3 technology for your business with
              advanced applications built for Android and iOS. Our experts
              deliver secure, scalable, and business-ready web3 solutions.
            </p>
            <button className="mt-8 rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900">
              Join The Paradigm Shift
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/blockchain-images/web3-development-company-banner.webp'
              )}
              alt="Web3 App Development Company"
              className="w-full max-w-md rounded-3xl border border-white/10 object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustedLogos.map((logo) => (
              <div
                key={logo.alt}
                className="flex h-16 w-32 items-center justify-center rounded-2xl bg-slate-50 p-3 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(logo.src)}
                  alt={logo.alt}
                  className="h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr] md:items-center">
            <div>
              <h2 className="text-3xl font-semibold md:text-4xl">
                Our Web3 Mobile App Development Stats
              </h2>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl bg-white p-5 shadow-sm"
                  >
                    <p className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-sm text-slate-600">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/web3-development-company-get-ready-to-count.webp'
                )}
                alt="Web3 Mobile App Development Stats"
                className="w-full max-w-sm rounded-3xl border border-slate-200 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Web3 Android and iOS App Development Solutions
            </h2>
            <p className="mt-3 text-slate-600">
              Enhance accessibility with feature-packed web3 mobile apps across
              operating systems.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {platformSolutions.map((solution) => (
              <div
                key={solution.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(solution.image)}
                  alt={solution.title}
                  className="h-56 w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold">{solution.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Our Web3 App Development Services For Multiple Industries
            </h2>
            <p className="mt-3 text-slate-600">
              We design custom web3 solutions for tourism, ecommerce, healthcare,
              finance, and more.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(service.image)}
                  alt={service.title}
                  className="h-40 w-full rounded-2xl object-cover"
                />
                <h3 className="mt-5 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/web3-development-company-what-is-web3.webp'
                )}
                alt="Launch A Futuristic Web3 Platform"
                className="w-full max-w-sm rounded-3xl border border-slate-200 object-cover shadow-lg"
              />
            </div>
            <div>
              <h3 className="text-3xl font-semibold md:text-4xl">
                Launch A Futuristic Web3 Platform With Us
              </h3>
              <p className="mt-4 text-slate-600">
                Integrate web3 into your operations with a future-ready platform
                built by our expert team.
              </p>
              <button className="mt-6 rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white">
                Have a Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Benefits of Web3 Apps For Your Business
            </h3>
            <p className="mt-3 text-slate-600">
              Web3 apps unlock advanced features that improve operational
              efficiency and profitability.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(benefit.icon)}
                  alt=""
                  className="h-14 w-14"
                />
                <h4 className="mt-4 text-lg font-semibold">
                  {benefit.title}
                </h4>
                <p className="mt-3 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Important Elements Of Web3
            </h2>
            <p className="mt-3 text-slate-600">
              High-performing web3 apps rely on these core building blocks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {web3Elements.map((element) => (
              <div
                key={element.title}
                className="rounded-3xl bg-slate-50 p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(element.icon)}
                  alt=""
                  className="h-14 w-14"
                />
                <h3 className="mt-4 text-lg font-semibold">
                  {element.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {element.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Tech-Stack That Pillar Our Web3 Software and App Development
              Services
            </h3>
            <p className="mt-3 text-slate-600">
              We rely on proven technologies to deliver secure and scalable
              architectures.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.35fr_0.65fr]">
            <div className="space-y-3">
              {techTabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'border-indigo-600 bg-indigo-600 text-white'
                      : 'border-slate-200 bg-white text-slate-600 hover:border-indigo-300'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeTabData?.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-2xl border border-slate-100 p-4"
                  >
                    <img
                      src={normalizeAssetUrl(item.icon)}
                      alt={item.title}
                      className="h-12 w-12"
                    />
                    <p className="text-sm font-semibold text-slate-700">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Web3 Application Development Services For Major Industries
            </h3>
            <p className="mt-3 text-slate-600">
              We tailor web3 applications to fit the needs of every industry.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {majorIndustries.map((industry) => (
              <div
                key={industry.title}
                className="flex items-center gap-4 rounded-2xl bg-white p-4 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(industry.icon)}
                  alt=""
                  className="h-12 w-12"
                />
                <p className="text-sm font-semibold text-slate-700">
                  {industry.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h3 className="text-3xl font-semibold md:text-4xl">
                Explore New Age Web3 Apps With Infynex
              </h3>
              <p className="mt-4 text-slate-600">
                Our experts analyze your requirements and craft futuristic web3
                apps built for growth.
              </p>
              <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                Talk to Experts Today
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/dapp-development-discuss.webp'
                )}
                alt="Explore New Age Web3 Apps"
                className="w-full max-w-sm rounded-3xl border border-slate-200 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Step-by-Step Process To Create a Web3 App
            </h3>
            <p className="mt-3 text-slate-600">
              We follow a streamlined process that covers every detail of web3
              architecture and development.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-indigo-600">
                  {step.step}
                </p>
                <h4 className="mt-3 text-lg font-semibold">
                  {step.title}
                </h4>
                <p className="mt-3 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold md:text-4xl">Why Choose Us?</h3>
            <p className="mt-3 text-slate-600">
              A trusted web3 app development company delivering measurable
              outcomes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl bg-slate-50 p-6 shadow-sm"
              >
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-3 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              FAQs Related to Web3 Mobile App Development
            </h2>
            <p className="mt-3 text-slate-600">
              Answering the most commonly asked questions about web3 mobile app
              development.
            </p>
          </div>
          <div className="mt-8 space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={faq.question}
                className="rounded-2xl border border-slate-200 bg-white p-5"
              >
                <button
                  onClick={() =>
                    setOpenFaq((prev) => (prev === index ? null : index))
                  }
                  className="flex w-full items-center justify-between text-left"
                >
                  <span className="text-base font-semibold">
                    {faq.question}
                  </span>
                  <span className="text-xl text-slate-400">
                    {openFaq === index ? '-' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
