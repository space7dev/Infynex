'use client'

import { useState } from 'react'
import Link from 'next/link'

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

const developmentSolutions = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/financial-dapp-icon.svg',
    title: 'Financial dApps',
    description:
      'Launch decentralized finance apps that enable transparent global money transfer and asset exchange.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/crypto-kitties-clone-icon.svg',
    title: 'Crypto Kitties Clone',
    description:
      'Build feature-rich replicas of popular dApps with strong design and performance foundations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/decentralized-gaming-icon.svg',
    title: 'Decentralized Gaming',
    description:
      'Develop gaming platforms on secure blockchain stacks with smooth player ownership and rewards.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/private-blockchain-icon.svg',
    title: 'Support for Private Blockchain',
    description:
      'Create private blockchain networks customized for enterprise dApp requirements.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-mobile-integration-icon.svg',
    title: 'dApps Mobile Integration',
    description:
      'Integrate decentralized apps with modern mobile tech and device capabilities.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/wallet-browser-integration-icon.svg',
    title: 'Wallet Browser Integration',
    description:
      'Connect secure crypto wallets with browser-based experiences for frictionless usage.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-upgraded-services-icon.svg',
    title: 'dApp Upgrade Services',
    description:
      'Update existing apps, migrate data, and deploy new smart contracts smoothly.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-porting-icon.svg',
    title: 'dApp Porting',
    description:
      'Port decentralized apps across platforms with reliable performance and security.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/custom-ui-development-icon.svg',
    title: 'Custom UI Development',
    description:
      'Deliver intuitive, high-converting user interfaces aligned with your brand goals.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dex-development-icon.svg',
    title: 'DEX Development',
    description:
      'Launch custom decentralized exchanges designed for liquidity and scale.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/cloud-support-icon.svg',
    title: 'Cloud Support',
    description:
      'Deploy dApps as microservices with trusted cloud infrastructure support.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/decentralized-storage-icon.svg',
    title: 'Decentralized Storage',
    description:
      'Choose secure decentralized storage for resilient, private data management.',
  },
]

const advancedServices = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/custom-dapp-solution-icon.svg',
    title: 'Custom dApp Solutions',
    description:
      'Build customized decentralized apps that align with your business objectives.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-consulting-services-icon.svg',
    title: 'dApp Consulting Services',
    description:
      'Leverage expert guidance to validate, plan, and execute your dApp roadmap.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-design-services-icon.svg',
    title: 'dApp Design Services',
    description:
      'Craft modern UI and UX that improves onboarding and user retention.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-integration-services-icon.svg',
    title: 'dApp Integration Services',
    description:
      'Integrate dApps with IoT, web platforms, and enterprise workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-testing-service-icon.svg',
    title: 'dApp Testing Services',
    description:
      'Test for performance, compatibility, and security before launch.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-maintenance-services-icon.svg',
    title: 'dApp Maintenance Services',
    description:
      'Maintain performance, scale, and reliability after deployment.',
  },
]

const techTabs = [
  {
    id: 'frontend',
    label: 'Front-end Development',
    heading: 'Front-end Development',
    description:
      'Build dApps with modern web languages for seamless user experiences.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-angular-icon.svg',
        title: 'Angular.JS',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-react-icon.svg',
        title: 'React',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-jquery-icon.svg',
        title: 'jQuery',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-bootstrap-icon.svg',
        title: 'Bootstrap',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-vuejs-icon.svg',
        title: 'Vue',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-react-native-icon.svg',
        title: 'React Native',
      },
    ],
  },
  {
    id: 'backend',
    label: 'Back-end Development',
    heading: 'Back-end Development',
    description:
      'Focus on architecture, APIs, and databases that power high-performance dApps.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-solidity-icon.svg',
        title: 'Solidity',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-golang-icon.svg',
        title: 'Golang',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-javascript-icon.svg',
        title: 'JavaScript',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-java-icon.svg',
        title: 'Java',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-nodejs-icon.svg',
        title: 'Node.js',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-php-icon.svg',
        title: 'PHP',
      },
    ],
  },
  {
    id: 'tools',
    label: 'Technology Tools',
    heading: 'Technology Tools',
    description:
      'Leverage modern tools to deliver secure, reliable, and scalable dApps.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-ethereum-geth-icon.svg',
        title: 'Ethereum Geth',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-testnet-icon.svg',
        title: 'Testnet',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-zeppelin-icon.svg',
        title: 'Zeppelin',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-blockstack-icon.svg',
        title: 'BlockStack',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-truffle-icon.svg',
        title: 'Truffle',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-remix-icon.svg',
        title: 'Remix',
      },
    ],
  },
  {
    id: 'platforms',
    label: 'dApp Platforms',
    heading: 'dApp Platforms',
    description:
      'Deploy on decentralized platforms optimized for long-term scalability.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-ethereum-icon.svg',
        title: 'Ethereum',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-hyperledger-icon.svg',
        title: 'Hyperledger',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-tezos-icon.svg',
        title: 'Tezos',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-corda-icon.svg',
        title: 'Corda',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-stellar-icon.svg',
        title: 'Stellar',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-eos-icon.svg',
        title: 'EOS',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-hashgraph-icon.svg',
        title: 'Hashgraph',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-tron-icon.svg',
        title: 'Tron',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-polygon-icon.svg',
        title: 'Polygon',
      },
    ],
  },
]

const cloudServices = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/microsoft-azure-icon.svg',
    title: 'Microsoft Azure',
    description:
      'Deploy and manage decentralized applications on trusted Azure infrastructure.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/google-cloud-icon.svg',
    title: 'Google Cloud',
    description:
      'Scale blockchain apps with pay-as-you-go Google cloud services.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/aws-icon.svg',
    title: 'AWS',
    description:
      'Run dApps on Hyperledger, Ethereum, and Corda with AWS support.',
  },
]

const industries = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/healthcare-medical-dapp-developers.webp',
    title: 'Health Care and Medical',
    description:
      'HIPAA-ready healthcare solutions with AR, VR, AI, and secure APIs.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/banking-finance-dapp-developers.webp',
    title: 'Banking and Finance',
    description:
      'Launch new-age fintech solutions with transparent financial workflows.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ecommerce-retail-dapp-developers.webp',
    title: 'Retail and Ecommerce',
    description:
      'Boost sales with decentralized ecommerce apps and efficient processes.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/media-entertainment-dapp-developers.webp',
    title: 'Media and Entertainment',
    description:
      'Deliver decentralized content and distribution for creators and fans.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/automative-dapp-developers.webp',
    title: 'Automotive',
    description:
      'Improve operational efficiency with connected decentralized platforms.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/education-elearning-dapp-developers.webp',
    title: 'Education and E-Learning',
    description:
      'Build next-gen learning platforms with transparent credentials.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/tour-travels-dapp-developers.webp',
    title: 'Travel and Tourism',
    description:
      'Launch travel services with integrated payments and automation.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/artificial-intelligence-dapp-developers.webp',
    title: 'Artificial Intelligence',
    description:
      'Use AI-enhanced decentralized apps to automate and personalize services.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/government-dapp-developers.webp',
    title: 'Government',
    description:
      'Launch secure and reliable decentralized applications for public services.',
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Strategy and Proposal',
    description:
      'Define project goals and create a tailored development roadmap.',
  },
  {
    step: '02',
    title: 'Designing',
    description:
      'Craft UI mockups aligned to your requirements for early approvals.',
  },
  {
    step: '03',
    title: 'Development and Integration',
    description:
      'Build your decentralized app and integrate core blockchain services.',
  },
  {
    step: '04',
    title: 'Quality Check',
    description:
      'Test every module to ensure performance, security, and stability.',
  },
  {
    step: '05',
    title: 'App Deployment',
    description:
      'Launch the final product on the chosen platforms.',
  },
  {
    step: '06',
    title: 'App Maintenance',
    description:
      'Provide ongoing support and improvements after launch.',
  },
]

const features = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/decentralized-application-icon.svg',
    title: 'Decentralized',
    description:
      'Move control from single entities to distributed networks.',
  },
  {
    icon:
      'https://www.Infynex.com/assets/img/blockchain-images/decentralized-application-tamper-proof-icon.svg',
    title: 'Tamper Proof',
    description:
      'Smart contracts add security and prevent manipulation.',
  },
  {
    icon:
      'https://www.Infynex.com/assets/img/blockchain-images/decentralized-application-fault-tolerant-icon.svg',
    title: 'Fault-Tolerant',
    description:
      'Peer-to-peer logic ensures resilience against failures.',
  },
  {
    icon:
      'https://www.Infynex.com/assets/img/blockchain-images/decentralized-application-above-censorship-icon.svg',
    title: 'Above Censorship',
    description:
      'Censorship resistance protects your decentralized network.',
  },
  {
    icon:
      'https://www.Infynex.com/assets/img/blockchain-images/decentralized-application-secure-icon.svg',
    title: 'Secure',
    description:
      'Blockchain security keeps transactions safe and reliable.',
  },
  {
    icon:
      'https://www.Infynex.com/assets/img/blockchain-images/decentralized-application-well-defined-icon.svg',
    title: 'Well Defined Roles',
    description:
      'Rules and permissions are enforced with smart contracts.',
  },
]

const pricingModels = [
  {
    title: 'Dedicated Team',
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/dedicated-team-icon.svg',
    description:
      'Hire dedicated developers to lead your project with full control and focus.',
    points: [
      'Communication: Skype, Mail, Phone, Slack, Chatbot',
      'Hiring period: Right away',
      'No hidden charges',
    ],
  },
  {
    title: 'Extended Team',
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/extended-team-icon.svg',
    description:
      'Add specialized dApp experts to strengthen your in-house development team.',
    points: [
      'Communication: Skype, Mail, Phone, Slack, Chatbot',
      'Hiring period: Right away',
      'No hidden charges',
    ],
    highlighted: true,
  },
  {
    title: 'Project Model',
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/project-model-icon.svg',
    description:
      'Hire offshore dApp developers to deliver full project execution end-to-end.',
    points: [
      'Communication: Skype, Mail, Phone, Slack, Chatbot',
      'Hiring period: Right away',
      'No hidden charges',
    ],
  },
]

const faqs = [
  {
    question: 'What are dApps?',
    answer:
      'Decentralized applications run on peer-to-peer networks and use smart contracts on a blockchain backend.',
  },
  {
    question: 'What is the cost to hire dApp developers?',
    answer:
      'Cost depends on scope, tech stack, complexity, and developer experience. Share your requirements to get an estimate.',
  },
  {
    question: 'Can I run dApps on a private blockchain?',
    answer:
      'Yes. We can help you launch a private blockchain and integrate dApps on top of it.',
  },
  {
    question: 'Where can I hire a top dApp developer?',
    answer:
      'Infynex Solutions provides experienced dApp developers with strong blockchain expertise.',
  },
]

export default function HireDappDevelopersPage() {
  const [activeTab, setActiveTab] = useState(techTabs[0].id)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const currentTab = techTabs.find((tab) => tab.id === activeTab) ?? techTabs[0]

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-orange-600">
              Hire dApp Developers
            </p>
            <h1 className="mt-4 text-4xl font-semibold text-slate-900 md:text-5xl">
              Hire Dedicated dApps Developers
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Develop next-gen solutions based on the peer-to-peer digital ecosystem with our
              remote dApp developers. Hire dedicated dApp developers to build custom decentralized
              apps aligned with your unique business goals.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
              >
                Join The Paradigm Shift
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700"
              >
                Get a Free Consultation
              </Link>
            </div>
          </div>
          <div className="relative flex items-center justify-center">
            <img
              src="https://www.Infynex.com/assets/img/blockchain-images/web3-testing-laptop-mockup.webp"
              alt="Hire Dedicated dApps Developers"
              className="w-full max-w-md"
              width={500}
              height={396}
            />
            <img
              src="https://www.Infynex.com/assets/img/blockchain-images/web3-testing-coding.gif"
              alt="dApp development preview"
              className="absolute -bottom-6 right-4 w-48 rounded-xl shadow-lg"
              width={321}
              height={175}
            />
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="grid gap-6 sm:grid-cols-3 md:grid-cols-6">
            {trustedLogos.map((logo) => (
              <div key={logo.alt} className="flex items-center justify-center">
                <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/blockchain-images/decentralized-app-solutions-img.webp"
              alt="Peer-to-peer decentralized app solutions"
              className="w-full max-w-sm"
              width={400}
              height={400}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-slate-900">
              Reason To Hire Our Best dApp Developers
            </h2>
            <p className="mt-4 text-slate-600">
              Decentralized applications leverage blockchain to add transparency and security. They
              are not controlled by a single entity, enabling faster operations and trustworthy
              outcomes.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center rounded-full bg-orange-600 px-6 py-3 text-sm font-semibold text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Development Solutions Offered by Our dApp Developers
            </h2>
            <p className="mt-4 text-slate-600">
              Hire remote dApp developers for reliable delivery across finance, gaming, wallets,
              and more.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {developmentSolutions.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <img src={item.icon} alt={item.title} className="h-14 w-14" />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold text-slate-900">
              Hire dApp Engineers for Advanced dApp Development
            </h3>
            <p className="mt-4 text-slate-600">
              Our dApp services are in demand across industries, with fast delivery and consistent
              quality.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {advancedServices.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-6">
                <img src={item.icon} alt={item.title} className="h-14 w-14" />
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold text-slate-900">
              Tech Stack That Powers Our dApp Services
            </h3>
            <p className="mt-4 text-slate-600">
              Our developers use modern stacks that deliver strong performance and smooth user
              experiences.
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.4fr_0.6fr]">
            <div className="space-y-3">
              {techTabs.map((tab) => (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex w-full items-center justify-between rounded-xl border px-5 py-4 text-left text-sm font-semibold transition ${
                    activeTab === tab.id
                      ? 'border-orange-500 bg-white text-slate-900 shadow-sm'
                      : 'border-slate-200 bg-slate-100 text-slate-600'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
            <div className="rounded-2xl bg-white p-8 shadow-sm">
              <h4 className="text-2xl font-semibold text-slate-900">{currentTab.heading}</h4>
              <p className="mt-3 text-slate-600">{currentTab.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {currentTab.items.map((item) => (
                  <div
                    key={item.title}
                    className="flex items-center gap-4 rounded-xl border border-slate-100 p-4"
                  >
                    <img src={item.icon} alt={item.title} className="h-10 w-10" />
                    <span className="text-sm font-semibold text-slate-800">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-white">
          <h3 className="text-3xl font-semibold">
            Building New Age Solutions with the Power of Decentralized Applications
          </h3>
          <p className="mt-4 text-slate-200">
            Hire dApp developers to bring transparency and security to your business ecosystem with
            decentralized solutions on Ethereum, Tron, Polygon, EOS, and more.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Have a Free Consultation
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h4 className="text-3xl font-semibold text-slate-900">
              Our dApp Developers Leverage High-Performance Cloud Services
            </h4>
            <p className="mt-4 text-slate-600">
              Cloud services authenticate transactions and maintain audit trails for decentralized
              ecosystems.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {cloudServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-100 p-6">
                <img src={service.icon} alt={service.title} className="h-14 w-14" />
                <h5 className="mt-4 text-lg font-semibold text-slate-900">{service.title}</h5>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Industries Where Our dApp Developers Have Done Wonders
            </h2>
            <p className="mt-4 text-slate-600">
              From healthcare to travel, we deliver decentralized solutions for diverse industries.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((item) => (
              <div key={item.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <img src={item.image} alt={item.title} className="h-44 w-full object-cover" />
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Development Process Followed by Our Offshore dApp Developers
            </h2>
            <p className="mt-4 text-slate-600">
              Our team follows a sequential process from ideation to launch and post-deployment
              support.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.step} className="rounded-2xl border border-slate-100 p-6">
                <span className="text-sm font-semibold text-orange-600">{step.step}</span>
                <h4 className="mt-2 text-lg font-semibold text-slate-900">{step.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-6 py-16 text-white">
          <h3 className="text-3xl font-semibold">Hire Dedicated dApp Developers to Kickstart Your dApp</h3>
          <p className="mt-4 text-slate-200">
            Our developers deploy smart contracts, security layers, and user-ready components that
            help you stay ahead with new-age decentralized solutions.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex items-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900"
          >
            Have a Free Consultation
          </Link>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold text-slate-900">
              Features of Our Decentralized Application Solutions
            </h3>
            <p className="mt-4 text-slate-600">
              Our dApps include core features that make every transaction seamless and secure.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-6">
                <img src={item.icon} alt={item.title} className="h-12 w-12" />
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold text-slate-900">
              Hire Remote dApp Developers as Per Your Project Requirements
            </h2>
            <p className="mt-4 text-slate-600">
              Choose flexible hiring models based on your timeline, budget, and delivery goals.
            </p>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {pricingModels.map((model) => (
              <div
                key={model.title}
                className={`rounded-2xl border p-6 shadow-sm ${
                  model.highlighted
                    ? 'border-orange-500 bg-white'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <img src={model.icon} alt={model.title} className="h-14 w-14" />
                <h4 className="mt-4 text-lg font-semibold text-slate-900">{model.title}</h4>
                <p className="mt-3 text-sm text-slate-600">{model.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {model.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full items-center justify-center rounded-full px-6 py-3 text-sm font-semibold ${
                    model.highlighted
                      ? 'bg-orange-600 text-white'
                      : 'border border-slate-300 text-slate-700'
                  }`}
                >
                  Hire Us Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-5xl px-6 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-slate-900">FAQs Related to dApp Developers</h2>
            <p className="mt-3 text-slate-600">
              Common questions about hiring dedicated decentralized app developers.
            </p>
          </div>
          <div className="mt-10 space-y-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <span className="text-2xl text-orange-500">
                    {openFaq === index ? '-' : '+'}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="border-t border-slate-200 px-6 py-4 text-sm text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
