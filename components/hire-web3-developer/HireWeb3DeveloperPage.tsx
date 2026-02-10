'use client'

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

const web3StackLogos = [
  'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-solana.webp',
  'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-polygon.webp',
  'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-ethereum.webp',
  'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-binance.webp',
  'https://www.Infynex.com/assets/img/blockchain-images/customized-blockchain-solutions-usa-unity.webp',
]

const steps = [
  {
    step: '1',
    title: 'Scheduling a Consultation Meeting',
    description: 'We organize a free consultation call to capture project insights.',
  },
  {
    step: '2',
    title: 'Talk About Your Requirements',
    description: 'Share your vision, scope, and priorities with our team.',
  },
  {
    step: '3',
    title: 'Finding the Best Solutions for You',
    description: 'We craft the right web3 strategy and architecture fit.',
  },
  {
    step: '4',
    title: 'Begin With the Project',
    description: 'Kick off delivery with a dedicated web3 development team.',
  },
]

const enterpriseSolutions = [
  {
    title: 'Healthcare Web3 Apps',
    description:
      'Securely store patient records and workflows with decentralized apps.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-web3-developers-healthcare-web3-apps.svg',
  },
  {
    title: 'Supply Chain Web3 Apps',
    description:
      'Track logistics data from material supply to delivery with transparency.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-web3-developers-supply-chain-web3-solution.svg',
  },
  {
    title: 'Transport Web3 Apps',
    description:
      'Integrate web3 for decentralized ride-sharing and transport platforms.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-web3-developers-transport-web3-solution.svg',
  },
  {
    title: 'On-demand Web3 Apps',
    description:
      'Deliver decentralized on-demand services for healthcare, grocery, and food.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-web3-developers-on-demand-web3-apps.svg',
  },
  {
    title: 'Wallets Development',
    description:
      'Build web3 wallets to store assets and access multi-chain dApps.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-web3-developers-wallets-development.svg',
  },
  {
    title: 'NFT Web3 App Development',
    description:
      'Enable NFT ownership for art, gaming, music, and digital collectibles.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-web3-developers-nft-web3-apps.svg',
  },
]

const services = [
  {
    title: 'Consultation',
    description:
      'Strategic guidance on web3 technology, roadmap planning, and investment scope.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-consultation.svg',
  },
  {
    title: 'Web3 App',
    description:
      'Build full-scale web3 apps aligned with your product vision and users.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-web3-app.svg',
  },
  {
    title: 'Web3 Integration',
    description:
      'Integrate web3.js to enable decentralized operations for existing platforms.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-web3-integration.svg',
  },
  {
    title: 'dApp Development',
    description:
      'Deliver scalable dApps with robust and secure decentralized architecture.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-dapp-development.svg',
  },
  {
    title: 'Native Payment Solution',
    description:
      'Integrate reliable payment solutions for digital wallets and crypto flows.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-native-payment-solution.svg',
  },
  {
    title: 'Quality Assurance',
    description:
      'Ship production-ready web3 apps with rigorous QA and security testing.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-quality-assurance.svg',
  },
]

const web3Technologies = [
  {
    title: 'Blockchain',
    description:
      'Secure record storage and crypto transactions without intermediaries.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-blockchain.svg',
  },
  {
    title: 'Artificial Intelligence',
    description:
      'AI enhances dApps with automation, accuracy, and smart assistance.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-artificial-intelligence.svg',
  },
  {
    title: 'File System',
    description:
      'Decentralized file systems provide secure, encrypted data storage.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-file-system.svg',
  },
  {
    title: 'Virtual Reality',
    description:
      'Immersive web3 experiences powered by VR-enabled environments.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-virtual-reality.svg',
  },
  {
    title: 'Machine Learning',
    description:
      'Predictive models enable smarter web3 user experiences.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-machine-learning.svg',
  },
  {
    title: 'Smart Contract',
    description:
      'Automated smart contracts add transparency and operational savings.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-smart-contract.svg',
  },
]

const languages = [
  {
    title: 'Java',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-java.webp',
  },
  {
    title: 'Python',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-python.webp',
  },
  {
    title: 'C++',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-c++.webp',
  },
  {
    title: 'C',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-c.webp',
  },
  {
    title: 'JavaScript',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-javascript.webp',
  },
  {
    title: 'Go',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-go.webp',
  },
  {
    title: 'Simplicity',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-simplicity.webp',
  },
  {
    title: 'SQL',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-sql.webp',
  },
  {
    title: 'Huff',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-huffpost.webp',
  },
  {
    title: 'Vyper',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-vyper.webp',
  },
  {
    title: 'Rust',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-rust.webp',
  },
  {
    title: 'React',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-offshore-web3-developers-react.webp',
  },
]

const reasons = [
  {
    title: 'Agile Methodologies',
    description:
      'Iterative delivery keeps web3 projects aligned to timelines and goals.',
  },
  {
    title: 'On-Time Delivery',
    description:
      'Dedicated teams ensure milestones stay on schedule with steady progress.',
  },
  {
    title: 'Innovative Technologies',
    description:
      'Expertise across web3, blockchain, metaverse, and immersive stacks.',
  },
  {
    title: 'Tech Experts',
    description:
      'Hire web3 developers proficient in decentralized apps and smart systems.',
  },
  {
    title: 'Results Driven',
    description:
      'We adapt to challenges with the right tools to keep delivery moving.',
  },
  {
    title: 'Improved Code Quality',
    description:
      'Clean, consistent codebases for secure and reliable deployments.',
  },
]

export default function HireWeb3DeveloperPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div className="text-white">
            <h1 className="text-4xl font-semibold md:text-5xl">Hire Web3 Developers</h1>
            <p className="mt-4 text-lg text-slate-200">
              Elevate your web3 journey with dedicated developers skilled in Solidity, C++, Java,
              HTML, Rust, and modern web3 architecture. Build custom solutions with strong
              understanding of frameworks, consensus algorithms, and data layers.
            </p>
            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Join The Paradigm Shift
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-banner.webp"
              alt="Hire Web3 Developers"
              className="w-full max-w-md rounded-3xl object-cover"
              width={500}
              height={396}
            />
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-6xl px-6">
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {trustedLogos.map((logo) => (
              <li key={logo.alt}>
                <img src={logo.src} alt={logo.alt} className="h-10 w-auto" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Revolutionizing Business With AI-Specialized Web3 Developers
            </h2>
            <p className="mt-4 text-slate-600">
              Integrating AI into web3 transforms enterprise solutions across NFTs, gaming, and
              software development while streamlining delivery and elevating user experiences.
            </p>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6">
            {web3StackLogos.map((logo) => (
              <img key={logo} src={logo} alt="Web3 stack" className="h-10 w-auto" />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Hire Web3 Developers in 4 Easy Steps</h2>
            <p className="mt-4 text-slate-600">
              Enjoy a smooth delivery process with clear steps from discovery to kickoff.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Hire Web3 Developers Now
            </Link>
          </div>
          <div className="space-y-4">
            {steps.map((item) => (
              <div key={item.step} className="flex gap-4 rounded-2xl border border-slate-200 p-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Hire Offshore Web3 Developers for Enterprise dApp Solutions
            </h2>
            <p className="mt-4 text-slate-600">
              Build secure enterprise dApps with our web3 specialists across industries.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {enterpriseSolutions.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <img src={item.icon} alt={item.title} className="h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-hire-the-top.webp"
              alt="Remote Web3 Developers"
              className="w-full max-w-md rounded-3xl object-cover"
              width={450}
              height={396}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Hire the Top 1% of Remote Web3 Developers</h2>
            <p className="mt-4 text-slate-600">
              Partner with highly qualified web3 developers to build intuitive applications with
              outstanding functionality.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
            >
              Discuss Your Web3 Project Now
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h3 className="text-3xl font-semibold md:text-4xl">Top-Notch Services by Our Web3 Developers</h3>
            <p className="mt-4 text-slate-600">
              Pick the web3 services curated by our experts to launch your product quickly.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <img src={service.icon} alt={service.title} className="h-12 w-12" />
                <h4 className="mt-4 text-lg font-semibold">{service.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 md:grid-cols-[0.9fr_1.1fr] md:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Hire Our Experienced Remote Web3 Developers</h2>
            <p className="mt-4 text-slate-600">
              Collaborate with experienced web3 engineers to transform your product idea into
              reality.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Hire Web3 Developers Now
            </Link>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-web3-developers-hire-our-experienced.webp"
              alt="Experienced Remote Web3 Developers"
              className="w-full max-w-md rounded-3xl object-cover"
              width={450}
              height={396}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Technology Our Remote Web3 Developers Use for dApp Development
          </h3>
          <p className="mt-4 text-slate-600">
            Modern technology stacks aligned with decentralized app development.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {web3Technologies.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <img src={item.icon} alt={item.title} className="h-10 w-10" />
                  <div>
                    <h4 className="text-lg font-semibold">{item.title}</h4>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Diverse Programming Languages Our Remote Web3 Developers Use
          </h3>
          <p className="mt-4 text-slate-600">
            Advanced programming languages used to deliver robust web3 solutions.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {languages.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6 text-center">
                <img src={item.icon} alt={item.title} className="mx-auto h-12 w-12" />
                <h4 className="mt-4 text-base font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Why Choose Infynex for Offshore Web3 Developers?
          </h3>
          <p className="mt-4 text-slate-600">
            Trusted expertise across web3, blockchain, metaverse, and emerging technologies.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {reasons.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
