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

const blockchainBadges = [
  {
    src: 'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-solana.webp',
    alt: 'Solana',
  },
  {
    src: 'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-polygon.webp',
    alt: 'Polygon',
  },
  {
    src: 'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-ethereum.webp',
    alt: 'Ethereum',
  },
  {
    src: 'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-binance.webp',
    alt: 'Binance',
  },
  {
    src: 'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-unity.webp',
    alt: 'Unity',
  },
]

const platformServices = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-opensea-nft-platform.webp',
    title: 'OpenSea Like NFT Platform',
    description:
      'Leverage Ethereum DeFi smart contracts to unlock marketplace growth and security.',
    href: 'https://www.Infynex.com/clone/opensea-clone-script',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-p2e-platform-development.svg',
    title: 'P2E Platform Development',
    description:
      'Secure virtual worlds and token rewards with customized smart contracts.',
    href: 'https://www.Infynex.com/blockchain/p2e-nft-game-platform-development-company',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-binance-like-trading-platform.svg',
    title: 'Binance Like Trading Platform',
    description:
      'Strengthen trading flows with ERC-20 DeFi smart contract development.',
    href: 'https://www.Infynex.com/clone/binance-clone-app-development',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-robinhood.webp',
    title: 'Robinhood Clone',
    description:
      'Eliminate long buy-sell processes with tailored smart contract services.',
    href: 'https://www.Infynex.com/blog/launch-robinhood-clone-app-with-robinhood-clone-script',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-cash-app.webp',
    title: 'Cash App Clone',
    description:
      'Secure digital contracts with automatic, error-free execution.',
    href: 'https://www.Infynex.com/clone/cash-app-clone',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-crypto-exchange.webp',
    title: 'Crypto Exchange',
    description:
      'Reduce fraud risk with smart contract integration and expert guidance.',
    href: 'https://www.Infynex.com/crypto-exchange-development',
  },
]

const serviceCards = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-smart-contract-developing.webp',
    title: 'DeFi Smart Contract Consulting',
    description:
      'Secure, quick transactions with custom-built smart contract strategies.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-wallet-development.webp',
    title: 'DeFi Wallet Development',
    description:
      'Maintain full control over funds with secure, customized DeFi wallets.',
    href: 'https://www.Infynex.com/defi-wallet-development-company',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-ico-development.webp',
    title: 'DeFi ICO Development',
    description:
      'Raise funds with token development, community management, and strategy.',
    href: 'https://www.Infynex.com/blockchain/initial-coin-offering-ico-development-company',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-non-fungible-development.webp',
    title: 'Non-Fungible Development',
    description:
      'Boost growth with NFT development services for high-volume platforms.',
    href: 'https://www.Infynex.com/product/white-label-nft-marketplace-development',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-marketing-services.webp',
    title: 'DeFi Marketing Services',
    description:
      'From whitepapers to legal guidance, grow your DeFi ecosystem.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-token-development.webp',
    title: 'DeFi Token Development',
    description:
      'Launch ERC tokens and custom rules for profitable asset contracts.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-expert-making-consulting.webp',
    title: 'Expert Market-Making Consulting',
    description:
      'Model your market reach and algorithm with a comprehensive approach.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-decentralized-crypto-banking.webp',
    title: 'Decentralized Crypto Banking',
    description:
      'Build frictionless banking with secure money transfer services.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-lottery-system-development.webp',
    title: 'DeFi Lottery System Development',
    description:
      'No-loss lottery systems that offer assured, transparent returns.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-insurance-system-development.webp',
    title: 'DeFi Insurance System Development',
    description:
      'Controllable liquidity requests and lower risk on smart contracts.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-decentralized-fund-managment.webp',
    title: 'Decentralized Fund Management',
    description:
      'Manage high-performance assets with risk-minimized control systems.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-derivatives-over-defi-platform.webp',
    title: 'Derivatives Over DeFi Platform',
    description:
      'Create hedged derivatives to maximize earnings and minimize risk.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-lending-platform-development.webp',
    title: 'DeFi Lending Platform Development',
    description:
      'Offer transparent loans, fiat gateways, and margin trading features.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-defi-staking-platform-development.webp',
    title: 'DeFi Staking Platform Development',
    description:
      'Generate passive income with staking duration and inflation models.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-yield-farming-development.webp',
    title: 'DeFi Yield Farming Platform Development',
    description:
      'Maximize returns with faster lending and borrowing flows.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-dex-development.webp',
    title: 'DeFi Dex Development Like Uniswap',
    description:
      'Enable decentralized token swaps without centralized exchanges.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-solution-for-ecommerce.webp',
    title: 'DeFi Solution For Ecommerce',
    description:
      'Improve ecommerce with real-time tracking and supply chain control.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-crowdfunding-platform.webp',
    title: 'DeFi Crowdfunding Platform Development',
    description:
      'Provide fundraising with instant approvals and taxation benefits.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-real-estate-platform.webp',
    title: 'DeFi Real Estate Platform Development',
    description:
      'Streamline fractional ownership and exclusive real estate offers.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-token-defi-dapp-development.webp',
    title: 'DeFi dApp Development',
    description:
      'Secure decentralized apps with robust, user-friendly features.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-defi-exchange-development.webp',
    title: 'DeFi Exchange Development',
    description:
      'Deliver secure liquidity trading for crypto enthusiasts.',
  },
]

const blockchainProjects = [
  {
    title: 'Our Wide Range of DeFi Smart Contract Projects on Solana',
    description:
      'We develop Solana-based platforms for Web3, web, and NFT marketplace solutions.',
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/defi-smart-contract-development-company-solana.webp',
    cta: {
      label: 'Read More',
      href: 'https://www.Infynex.com/blockchain/solana-blockchain-app-development-company',
    },
  },
  {
    title: 'Our Wide Range of DeFi Smart Contract Projects on Polygon',
    description:
      'Our Polygon projects include DeFi DEX, lending, borrowing, staking, and yield farming.',
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/defi-smart-contract-development-company-polygon.webp',
    cta: {
      label: 'Read More',
      href: 'https://www.Infynex.com/product/polygon-nft-marketplace-development',
    },
  },
  {
    title: 'Our Wide Range of DeFi Smart Contract Projects on Ethereum',
    description:
      'We build DEX platforms, ERC721 gaming spaces, and social network dApps on Ethereum.',
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/defi-smart-contract-development-company-ethereum.webp',
    cta: {
      label: 'Read More',
      href: 'https://www.Infynex.com/remote-developers/hire-dedicated-ethereum-developer',
    },
  },
]

const auditServices = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-development-services-crowdsale-token-contract.svg',
    title: 'Crowdsale and Token Contract',
    description:
      'Test across platforms, protocols, and tools to ensure security.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-development-services-blockchain-wallet.svg',
    title: 'Blockchain Wallet and Dapps',
    description:
      'Security assessments protect wallets and dApps from hackers.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-development-services-custom-smart-contracts.svg',
    title: 'Custom Smart Contract',
    description:
      'Complex smart contracts built and audited to meet industry norms.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-development-services-blockchain-protocol.svg',
    title: 'Blockchain Protocol',
    description:
      'Verify consensus and configuration for accurate implementations.',
  },
]

const benefits = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-no-more-mistake.svg',
    title: 'No More Mistakes',
    description:
      'Early-stage testing delivers error-free solutions and marketplaces.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-hard-to-track-attack.svg',
    title: 'Hard To Track and Attack',
    description:
      'Security-focused testing reduces hacking possibilities.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-automatic-security-scan.svg',
    title: 'Automatic Security Scans',
    description:
      'Automated scans keep systems updated and protected from malware.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-expert-review.svg',
    title: 'Expert Review',
    description:
      'Expert checks eliminate errors and omissions in contract logic.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-detailed-analysis-report.svg',
    title: 'Detailed Analysis Report',
    description:
      'Actionable reporting helps customers make confident decisions.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-backup.svg',
    title: 'Backup',
    description:
      'Blockchain restores original data in case of loss or duplication.',
  },
]

const roadmapSteps = [
  {
    title: 'Analyze',
    description:
      'We research the market and validate your smart contract objectives.',
  },
  {
    title: 'Design and Develop',
    description:
      'Custom DeFi smart contracts built on Solidity and modern frameworks.',
  },
  {
    title: 'Testing and Auditing',
    description:
      'Comprehensive testing removes bugs and vulnerabilities.',
  },
  {
    title: 'Launch',
    description:
      'We deliver on time with confidence in platform readiness.',
  },
]

const faqs = [
  {
    question: 'How long does it take to develop a DeFi smart contract app?',
    answer:
      'Most DeFi smart contract apps take 7-10 days. Complex features can add 3-5 more days.',
  },
  {
    question: 'What is DeFi vs. traditional finance?',
    answer:
      'Traditional finance often includes high fees and slow processing. DeFi enables automatic liquidity, rapid approvals, and low fees with immutable records.',
  },
  {
    question: 'What are the use cases in DeFi smart contract development?',
    answer:
      'Use cases include supply chain, crowdfunding, escrow, lending and borrowing, digital identity, and crypto exchanges.',
  },
  {
    question: 'Does DeFi need smart contracts?',
    answer:
      'Yes. Smart contracts automate decentralized application workflows and are essential to the DeFi ecosystem.',
  },
]

export default function DefiSmartContractDevelopmentPage() {
  const [showAllServices, setShowAllServices] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const visibleServices = showAllServices ? serviceCards : serviceCards.slice(0, 9)

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-cyan-900 text-white pb-[210px]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <h1 className="text-3xl font-semibold leading-tight md:text-5xl">
              DeFi Smart Contract Development Company
            </h1>
            <p className="mt-4 text-base text-slate-200 md:text-lg">
              Build faster, transparent, and secure DeFi smart contracts for
              lending, borrowing, insurance, tokenization, crypto exchanges, and
              asset trading platforms with 100% code customization.
            </p>
            <button className="mt-8 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-slate-900">
              Join The Paradigm Shift
            </button>
          </div>
          <div className="flex justify-center">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/blockchain-images/defi-smart-contract-development-banner.webp'
              )}
              alt="defi smart contract development"
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
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Get Advanced DeFi Smart Contract Development Services
            </h2>
            <p className="mt-3 text-slate-600">
              We build third-party intervention-free smart contracts for swift
              transactions with transparent, automatic execution.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6">
            {blockchainBadges.map((badge) => (
              <div
                key={badge.alt}
                className="flex h-14 w-28 items-center justify-center rounded-2xl bg-white p-3 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(badge.src)}
                  alt={badge.alt}
                  className="h-8"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Build Multiple Platforms Using Our Smart Contract Development
              Services
            </h2>
            <p className="mt-3 text-slate-600">
              Create advanced smart contracts for platforms of your choice and
              automate operations with expert developers.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(service.icon)}
                  alt=""
                  className="h-16 w-16"
                />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {service.description}
                </p>
                {service.href && (
                  <a
                    href={service.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex text-sm font-semibold text-cyan-700"
                  >
                    Learn more
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h3 className="text-3xl font-semibold md:text-4xl">
                Looking For A DeFi Smart Contract Development Company?
              </h3>
              <p className="mt-4 text-slate-600">
                Give us a chance. Exchange your ideas with our experts.
              </p>
              <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-development-services-looking-for-a-defi.webp'
                )}
                alt="smart contract application development"
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
              Our End-to-End DeFi Smart Contract Development Services
            </h2>
            <p className="mt-3 text-slate-600">
              Expert smart contract development solutions for seamless business
              operations.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visibleServices.map((service) => (
              <div
                key={service.title}
                className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(service.image)}
                  alt={service.title}
                  className="h-44 w-full object-cover"
                />
                <div className="bg-slate-50 p-5">
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-3 text-sm text-slate-600">
                    {service.description}
                  </p>
                  {service.href && (
                    <a
                      href={service.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex text-sm font-semibold text-cyan-700"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          {!showAllServices && (
            <div className="mt-10 flex justify-center">
              <button
                onClick={() => setShowAllServices(true)}
                className="rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white"
              >
                View 12 More
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Our DeFi Smart Contract Development Projects in Different
              Blockchains
            </h2>
            <p className="mt-3 text-slate-600">
              Choose the blockchain network that fits your needs. We build secure
              smart contract solutions across chains.
            </p>
          </div>
          <div className="mt-10 space-y-12">
            {blockchainProjects.map((project, index) => (
              <div
                key={project.title}
                className={`grid gap-10 md:grid-cols-2 md:items-center ${
                  index % 2 === 1 ? 'md:[&>div:first-child]:order-2' : ''
                }`}
              >
                <div>
                  <h3 className="text-2xl font-semibold">{project.title}</h3>
                  <p className="mt-3 text-slate-600">{project.description}</p>
                  <a
                    href={project.cta.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white"
                  >
                    {project.cta.label}
                  </a>
                </div>
                <div className="flex justify-center">
                  <img
                    src={normalizeAssetUrl(project.image)}
                    alt="defi smart contract development"
                    className="w-full max-w-sm rounded-3xl border border-slate-200 object-cover shadow-lg"
                  />
                </div>
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
                Get Smart Contract Application Solutions By Industry Leaders
              </h3>
              <p className="mt-4 text-slate-600">
                Grow your business the right way with efficient digital
                solutions.
              </p>
              <button className="mt-6 rounded-full bg-cyan-600 px-6 py-3 text-sm font-semibold text-white">
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-get-smart-contract-application.webp'
                )}
                alt="smart contract application development"
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
              Our Various DeFi Smart Contract Audit Services
            </h3>
            <p className="mt-3 text-slate-600">
              Secure your platform with audit solutions that reduce malicious
              activity risks.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {auditServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(service.icon)}
                  alt=""
                  className="h-12 w-12"
                />
                <h4 className="mt-4 text-lg font-semibold">{service.title}</h4>
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
          <div className="max-w-3xl">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Benefits of Hiring The Best Defi Smart Contract Development
              Company
            </h2>
            <p className="mt-3 text-slate-600">
              Our smart contract development services deliver measurable business
              advantages.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl bg-slate-50 p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(benefit.icon)}
                  alt=""
                  className="h-12 w-12"
                />
                <h4 className="mt-4 text-lg font-semibold">{benefit.title}</h4>
                <p className="mt-3 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
            <div>
              <h3 className="text-3xl font-semibold md:text-4xl">
                Trusted DeFi Smart Contract Development Company for Reliable
                Solutions
              </h3>
              <p className="mt-4 text-slate-600">
                Secure all transactions on your platform with smart contracts
                built by experts using advanced technologies.
              </p>
              <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
                Get In Touch
              </button>
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/defi-smart-contract-development-company-trusted-defi-smart-contract-development.webp'
                )}
                alt="smart contract application development"
                className="w-full max-w-sm rounded-3xl border border-slate-200 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 text-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h3 className="text-3xl font-semibold md:text-4xl">
              Roadmap To Build Your Own DeFi Smart Contract
            </h3>
            <p className="mt-3 text-slate-200">
              We follow an organized plan to deliver the best results.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              {roadmapSteps.map((step) => (
                <div
                  key={step.title}
                  className="rounded-3xl border border-white/10 bg-white/5 p-5"
                >
                  <h4 className="text-lg font-semibold">{step.title}</h4>
                  <p className="mt-2 text-sm text-slate-200">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/smart-contract-application-development-roadmap-to-build-own.webp'
                )}
                alt="smart contract application development"
                className="w-full max-w-sm rounded-3xl border border-white/10 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="max-w-3xl">
            <h4 className="text-3xl font-semibold md:text-4xl">
              Frequently Asked Questions
            </h4>
            <p className="mt-3 text-slate-600">
              Answering the most commonly asked DeFi smart contract development
              questions.
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
