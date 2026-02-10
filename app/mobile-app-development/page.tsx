import type { Metadata } from 'next'
import { Space_Grotesk, Manrope } from 'next/font/google'
import IndustryVideoTabs from './components/IndustryVideoTabs'
import TechStackTabs from './components/TechStackTabs'
import GeoTabs from './components/GeoTabs'
import MobileAppHeroContactForm from './components/MobileAppHeroContactForm'
import TestimonialsCarousel from './components/TestimonialsCarousel'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' })
const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope' })

const normalizeAssetUrl = (url: string) =>
  url.replace('https://www.Infynex.com/', 'https://www.suffescom.com/')

export const metadata: Metadata = {
  title: 'Affordable Mobile App Development | Custom App Solutions',
  description:
    'We are an award-winning mobile app development company in the USA delivering low-code, low-cost custom application development solutions.',
  keywords: ['Mobile App Development Company', 'Custom App Development', 'USA'],
  alternates: {
    canonical: '/mobile-app-development',
  },
  openGraph: {
    title: 'Affordable Mobile App Development | Custom App Solutions',
    description:
      'We are an award-winning mobile app development company in the USA delivering low-code, low-cost custom application development solutions.',
    url: '/mobile-app-development',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/web-img/mobile-app-development-company-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Mobile app development company banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Affordable Mobile App Development | Custom App Solutions',
    description:
      'We are an award-winning mobile app development company in the USA delivering low-code, low-cost custom application development solutions.',
    images: ['https://www.suffescom.com/assets/img/web-img/mobile-app-development-company-banner.webp'],
  },
}

const heroAwards = [
  {
    src: '/services/mobileapp/1.svg',
    alt: 'Design Rush 2025',
  },
  {
    src: '/services/mobileapp/2.webp',
    alt: 'G2 logo',
  },
  {
    src: '/services/mobileapp/3.webp',
    alt: 'Clutch 2025',
  },
  {
    src: '/services/mobileapp/4.webp',
    alt: 'Top App Development Companies',
  },
]

const partnerLogos = [
  {
    src: '/services/mobileapp/5.webp',
    alt: 'ISO',
  },
  {
    src: '/services/mobileapp/6.svg',
    alt: 'AWS',
  },
  {
    src: '/services/mobileapp/7.svg',
    alt: 'OpenAI',
  },
  {
    src: '/services/mobileapp/8.webp',
    alt: 'Fox',
  },
  {
    src: '/services/mobileapp/9.webp',
    alt: 'Market Watch',
  },
  {
    src: '/services/mobileapp/10.webp',
    alt: 'Google Partner',
  },
]

const mediaLogos = [
  {
    src: '/services/mobileapp/21.webp',
    alt: 'Clutch',
  },
  {
    src: '/services/mobileapp/22.webp',
    alt: 'Market Insider',
  },
  {
    src: '/services/mobileapp/23.webp',
    alt: 'Yahoo Finance',
  },
  {
    src: '/services/mobileapp/24.webp',
    alt: 'CBS17',
  },
  {
    src: '/services/mobileapp/25.webp',
    alt: 'Khaleej Time',
  },
  {
    src: '/services/mobileapp/26.webp',
    alt: 'Designrush',
  },
  {
    src: '/services/mobileapp/27.webp',
    alt: 'Hindustan Times',
  },
  {
    src: '/services/mobileapp/28.webp',
    alt: 'Outlook',
  },
]

const portfolioItems = [
  {
    name: 'StealthEX',
    logo: normalizeAssetUrl('https://www.Infynex.com/assets/img/portfolio/stealthex-logo-portfolio.webp'),
    description:
      'StealthEX is a digital currency exchange platform offering more than 400 digital currencies.',
    image: '/services/mobileapp/30.webp',
  },
  {
    name: 'B8ak',
    logo: normalizeAssetUrl('https://www.Infynex.com/assets/img/portfolio/b8ak-portfolio-logo.webp'),
    description: 'On-demand home care services with a click.',
    image: '/services/mobileapp/31.webp',
  },
  {
    name: 'GoCar Malaysia',
    logo: normalizeAssetUrl('https://www.Infynex.com/assets/img/portfolio/go-car-malaysia-logo.webp'),
    description: 'Mobility app with multiple transport services.',
    image: '/services/mobileapp/32.webp',
  },
  {
    name: 'HyperPay',
    logo: normalizeAssetUrl('https://www.Infynex.com/assets/img/portfolio/hyper-pay-logo.webp'),
    description: 'Wallet and card app for digital assets.',
    image: '/services/mobileapp/33.webp',
  },
  {
    name: 'Get Spiritz',
    logo: normalizeAssetUrl(
      'https://www.Infynex.com/assets/img/portfolio/get-spiritz-alcohol-delivery-logo.webp'
    ),
    description: 'Alcohol delivery app with local store selection.',
    image: '/services/mobileapp/34.webp',
  },
]

const eliteCustomers = [
  {
    src: '/services/mobileapp/40.webp',
    alt: 'NBC',
  },
  {
    src: '/services/mobileapp/41.webp',
    alt: 'Udrive',
  },
  {
    src: '/services/mobileapp/42.webp',
    alt: 'Wellcare',
  },
  {
    src: '/services/mobileapp/43.webp',
    alt: 'University of Alberta',
  },
  {
    src: '/services/mobileapp/44.webp',
    alt: 'Humana',
  },
  {
    src: '/services/mobileapp/45.webp',
    alt: 'The Cigna Group',
  },
  {
    src: '/services/mobileapp/46.webp',
    alt: 'Stripe',
  },
  {
    src: '/services/mobileapp/47.webp',
    alt: 'Prosper',
  },
  {
    src: '/services/mobileapp/48.webp',
    alt: 'GoodRX',
  },
  {
    src: '/services/mobileapp/49.webp',
    alt: 'Brightwheel',
  },
  {
    src: '/services/mobileapp/50.webp',
    alt: 'Epic',
  },
  {
    src: '/services/mobileapp/51.webp',
    alt: 'Universal',
  },
]

const fullCycleServices = [
  {
    title: 'Mobile Web Development',
    description:
      'Create mobile-optimized web apps with fast load times and delightful user experiences.',
    icon: '/services/mobileapp/50.svg',
  },
  {
    title: 'Mobile Backend Development',
    description:
      'Server-side engineering, API development, and secure integrations for scalable apps.',
    icon: '/services/mobileapp/51.svg',
  },
  {
    title: 'Mobile App Integration',
    description:
      'Connect your app with third-party systems for secure data exchange and automation.',
    icon: '/services/mobileapp/52.svg',
  },
  {
    title: 'Mobile Product Development',
    description:
      'Build products that streamline operations, amplify engagement, and elevate brand impact.',
    icon: '/services/mobileapp/53.svg',
  },
  {
    title: 'Progressive Web Apps',
    description:
      'Deliver native-like experiences with PWAs that are reliable and lightning-fast.',
    icon: '/services/mobileapp/54.svg',
  },
  {
    title: 'iPhone and Android Apps',
    description:
      'Native and cross-platform mobile apps using Swift, Kotlin, and React Native.',
    icon: '/services/mobileapp/55.svg',
  },
]

const advancedTech = [
  {
    title: 'AR and VR',
    description:
      'Immersive augmented and virtual reality apps that captivate users and expand possibilities.',
    icon: '/services/mobileapp/70.svg',
  },
  {
    title: 'Blockchain',
    description:
      'Secure, transparent solutions that leverage blockchain to power modern apps.',
    icon: '/services/mobileapp/71.svg',
  },
  {
    title: 'IoT',
    description:
      'Connect and manage smart devices through intuitive, data-rich mobile experiences.',
    icon: '/services/mobileapp/72.svg',
  },
  {
    title: 'Wearable Devices',
    description:
      'High-performance apps designed for smartwatches and wearable technology.',
    icon: '/services/mobileapp/73.svg',
  },
  {
    title: 'AI Powered Apps',
    description:
      'Personalized recommendations, voice recognition, and predictive intelligence.',
    icon: '/services/mobileapp/74.svg',
  },
  {
    title: 'Cloud Computing',
    description:
      'Real-time data sync and scalable infrastructure that keeps apps resilient.',
    icon: '/services/mobileapp/75.svg',
  },
]

const customServices = [
  {
    title: 'Mobile Strategy Consulting',
    description:
      'Architecture, ecosystem identification, and monetization strategy with expert guidance.',
  },
  {
    title: 'Mobile App Architecture Development',
    description:
      'Scalable frameworks, component mapping, and interface design that improve performance.',
  },
  {
    title: 'Legacy App Modernization',
    description:
      'Re-architect, rehost, and rebuild legacy apps with modern security at reduced costs.',
  },
]

const bespokeServices = [
  {
    title: 'Managed IT Outsourcing',
    description:
      'End-to-end support with cybersecurity, data backup, cloud management, and monitoring.',
  },
  {
    title: 'IT Staff Augmentation',
    description:
      'Scale your team with specialized app professionals and domain experts.',
  },
  {
    title: 'Cross-Platform Development',
    description:
      'Efficient, adaptable apps that run seamlessly on iOS and Android.',
  },
  {
    title: '5G-Optimized Mobile Development',
    description:
      'High-performance apps optimized for 5G connectivity and faster experiences.',
  },
  {
    title: 'Clone App Development',
    description:
      'Modernize successful app ideas with unique features and business logic.',
  },
  {
    title: 'Chatbot App Development',
    description:
      'AI chatbot apps with NLP, smart workflows, and seamless UI integration.',
  },
  {
    title: 'Robotic Process Automation',
    description:
      'Automate repetitive tasks to increase productivity and reduce errors.',
  },
  {
    title: 'Biometric Authentication',
    description: 'Fingerprint and facial recognition solutions to strengthen security.',
  },
  {
    title: 'Low-Code / No-Code Mobile Platform',
    description:
      'Drag-and-drop experiences with prebuilt components and faster time-to-market.',
  },
]

const nextGenServices = [
  {
    title: 'App Prototyping',
    description:
      'Interactive prototypes to validate ideas, refine concepts, and plan development.',
    icon: '/services/mobileapp/80.svg',
  },
  {
    title: 'App UI/UX Design',
    description:
      'Intuitive, visually appealing interfaces for seamless user experiences.',
    icon: '/services/mobileapp/81.svg',
  },
  {
    title: 'Flutter App Development',
    description:
      'Single codebase, multi-platform apps with high performance and modern UI.',
    icon: '/services/mobileapp/82.svg',
  },
  {
    title: 'Ionic App Development',
    description:
      'Hybrid apps with native-like experiences and efficient development cycles.',
    icon: '/services/mobileapp/83.svg',
  },
  {
    title: 'React Native App Development',
    description:
      'Cross-platform apps with near-native speed, reliability, and cost efficiency.',
    icon: '/services/mobileapp/84.svg',
  },
  {
    title: 'AI/ML App Development',
    description:
      'Intelligent apps built on data-driven recommendations and predictive insights.',
    icon: '/services/mobileapp/85.svg',
  },
  {
    title: 'Swift App Development',
    description: 'High-quality iOS apps optimized for performance and Apple standards.',
    icon: '/services/mobileapp/86.svg',
  },
  {
    title: 'Kotlin App Development',
    description: 'Modern Android apps that deliver excellent performance and maintainability.',
    icon: '/services/mobileapp/87.svg',
  },
  {
    title: 'Java App Development',
    description: 'Reliable Java-based solutions with robust performance for Android.',
    icon: '/services/mobileapp/88.svg',
  },
]

const industryCards = [
  {
    title: 'eCommerce App Development',
    description:
      'Personalized recommendations, secure checkout, and alerts for discounts.',
    icon: '/services/mobileapp/91.svg',
    bullets: ['Product recommendations', 'Secure and fast checkout', 'Discount alerts', 'AR previews'],
  },
  {
    title: 'Proptech App Development',
    description:
      'Marketplace and management solutions for rentals, construction, and compliance.',
    icon: '/services/mobileapp/92.svg',
    bullets: ['Secure payment', 'Rental management', 'Invoice automation', 'Inventory tracking'],
  },
  {
    title: 'Taxi App Development',
    description:
      'Real-time tracking, fare estimation, and seamless cashless payments.',
    icon: '/services/mobileapp/93.svg',
    bullets: ['Car rental', 'Fare estimation', 'Live tracking', 'Rewards programs'],
  },
  {
    title: 'Food Delivery App Development',
    description:
      'Order tracking, secure payments, and subscription-driven dining experiences.',
    icon: '/services/mobileapp/94.svg',
    bullets: ['Subscription plans', 'Table reservations', 'Inventory management', 'Order tracking'],
  },
  {
    title: 'Healthcare App Development',
    description:
      'Telemedicine, wellness, and clinical trial tools to enhance patient outcomes.',
    icon: '/services/mobileapp/95.svg',
    bullets: ['HIPAA compliance', 'Realtime monitoring', 'Appointment scheduling', 'AI symptom checker'],
  },
  {
    title: 'Fintech App Solutions',
    description:
      'Digital wallets, AI integration, and secure onboarding for finance innovators.',
    icon: '/services/mobileapp/96.svg',
    bullets: ['Digital wallets', 'Blockchain + AI', 'Credit monitoring', 'KYC onboarding'],
  },
  {
    title: 'Gaming App Development',
    description:
      'Engaging experiences with multiplayer sync and rewards economies.',
    icon: '/services/mobileapp/97.svg',
    bullets: ['Game engine integration', 'Rewards system', 'Real-time sync', 'Behavior tracking'],
  },
  {
    title: 'Social App Development',
    description:
      'Community-driven platforms with secure payments and fraud protection.',
    icon: '/services/mobileapp/98.svg',
    bullets: ['In-app chat', 'Subscriptions', 'Fraud detection', 'Payment integrations'],
  },
  {
    title: 'Education App Development',
    description:
      'Interactive learning with AI personalization and multilingual content.',
    icon: '/services/mobileapp/99.svg',
    bullets: ['AI personalization', 'Live classes', 'Progress tracking', 'Multilingual content'],
  },
  {
    title: 'Tours and Travel App Development',
    description:
      'Smart itineraries, booking management, and AI trip planning tools.',
    icon: '/services/mobileapp/100.svg',
    bullets: ['Booking and reservations', 'AI trip planner', 'Live tracking', 'Multilingual guide'],
  },
  {
    title: 'Manufacturing App Development',
    description:
      'Supply chain visibility, equipment monitoring, and warehouse automation.',
    icon: '/services/mobileapp/101.svg',
    bullets: ['Inventory management', 'Maintenance scheduling', 'Production monitoring', 'Staff management'],
  },
  {
    title: 'On-Demand App Development',
    description:
      'Fast, reliable services for delivery, mobility, and home services.',
    icon: '/services/mobileapp/102.svg',
    bullets: ['Food delivery', 'Ride hailing', 'Home services', 'Grocery delivery'],
  },
]

const solutionTypes = [
  {
    title: 'MVP App Solutions',
    description:
      'Launch faster with validated MVPs built for speed, feedback, and growth.',
    icon: '/services/mobileapp/103.svg',
  },
  {
    title: 'White Label Solutions',
    description:
      'Quickly launch under your brand with proven white label app solutions.',
    icon: '/services/mobileapp/104.svg',
  },
  {
    title: 'Custom App Solutions',
    description: 'Tailor every feature to your goals with performance-first development.',
    icon: '/services/mobileapp/105.svg',
  },
]

const processSteps = [
  {
    step: '1',
    title: 'Discovery Phase',
    description: 'Understand requirements, define scope, and validate the product vision.',
    icon: '/services/mobileapp/106.svg',
  },
  {
    step: '2',
    title: 'Design Phase',
    description: 'Create wireframes, UI systems, and user experience flows.',
    icon: '/services/mobileapp/107.svg',
  },
  {
    step: '3',
    title: 'Development Stage',
    description: 'Build and integrate the app based on approved specifications.',
    icon: '/services/mobileapp/108.svg',
  },
  {
    step: '4',
    title: 'Testing Phase',
    description: 'Run QA for performance, security, and user experience.',
    icon: '/services/mobileapp/109.svg',
  },
  {
    step: '5',
    title: 'Deployment Phase',
    description: 'Launch across platforms, optimize performance, and support go-live.',
    icon: '/services/mobileapp/110.svg',
  },
  {
    step: '6',
    title: 'Maintenance and Support',
    description: 'Ongoing updates, monitoring, and continuous improvement.',
    icon: '/services/mobileapp/111.svg',
  },
]

const growthSections = [
  {
    title: 'Government Business App Solutions',
    description:
      'Secure mobile apps for public services with compliance-ready architecture.',
    bullets: ['Smart city integrations', 'Secure communication tools', 'Citizen service portals', 'Custom API development'],
  },
  {
    title: 'Startups Business App Solutions',
    description: 'MVPs and scalable architecture built for speed and growth.',
    bullets: ['MVP development', 'Scalable architecture', 'Third-party integration', 'Post-launch support'],
  },
  {
    title: 'Enterprise Business App Solutions',
    description: 'Enterprise apps that streamline operations and elevate efficiency.',
    bullets: ['Role-based access', 'Advanced analytics', 'AI integrated systems', 'Enterprise-grade security'],
  },
]

const complianceItems = [
  {
    title: 'WCAG Compliance',
    description: 'Accessibility-first design, testing, and high-contrast interfaces.',
  },
  {
    title: 'ADA Compliance',
    description: 'Voice commands, alternative text, and navigable UI for all users.',
  },
  {
    title: 'Copyright Protection',
    description: 'Licensed code and assets with IP protection guidance.',
  },
  {
    title: 'Trademark Adherence',
    description: 'Respect brand identities and avoid infringement risks.',
  },
  {
    title: 'Non-Infringement Assurance',
    description: 'No stolen APIs or unlicensed plugins used in development.',
  },
  {
    title: 'End-User License Agreement',
    description: 'Legal frameworks outlining app usage rights and liabilities.',
  },
  {
    title: 'App Store Guidelines',
    description: 'Alignment with Apple and Google submission requirements.',
  },
  {
    title: 'Industry Regulations',
    description: 'HIPAA, PCI-DSS, FINRA, and sector-specific compliance.',
  },
  {
    title: 'CCPA',
    description: 'Transparent opt-in and opt-out controls for users.',
  },
  {
    title: 'Privacy Policy',
    description: 'Clear documentation of data collection and usage.',
  },
]

const testimonials = [
  {
    name: 'Nelson Murdock',
    quote:
      'They delivered a high-quality application on time and kept us informed throughout.',
    avatar: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/nelson-murdock.svg'),
  },
  {
    name: 'David',
    quote:
      'The team understood our business model fast and delivered a user-friendly platform.',
    avatar: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/laundry-crew.webp'),
  },
  {
    name: 'Akin Bami',
    quote:
      'The team was proactive, completed milestones on time, and resolved issues quickly.',
    avatar: normalizeAssetUrl(
      'https://www.Infynex.com/assets/img/portfolio/arriver-driver-logo.webp'
    ),
  },
  {
    name: 'Agerson Lubin',
    quote: 'Professional, skilled, and a pleasure to work with on our mobile application.',
    avatar: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/agerson-lubin.svg'),
  },
]

const faqs = [
  {
    question: 'What platforms do you develop for Android and iOS?',
    answer:
      'We develop native iOS apps with Swift and Android apps with Kotlin, along with cross-platform frameworks such as React Native and Flutter.',
  },
  {
    question: 'What are the steps involved in mobile app development?',
    answer:
      'Discovery, design, development, testing, deployment, and ongoing maintenance and support.',
  },
  {
    question: 'How much does it cost to develop a mobile app?',
    answer:
      'Costs vary by scope and complexity, but an average app can range from $5,000 to $40,000.',
  },
  {
    question: 'Do you offer cross-platform development solutions?',
    answer: 'Yes, we deliver cross-platform apps using React Native and Flutter.',
  },
  {
    question: 'Which is the best mobile app development company in USA?',
    answer:
      'Infynex Solutions is a leading mobile app development company in the USA, known for custom solutions, transparency, and proven results.',
  },
  {
    question: 'Where can I hire a mobile app developer team in the USA?',
    answer:
      'Infynex Solutions offers flexible hiring models for dedicated teams and specialists.',
  },
]

export default function MobileAppDevelopmentPage() {
  return (
    <div className={`${spaceGrotesk.variable} ${manrope.variable} font-[var(--font-manrope)] text-secondary-900`}>
      <section className="relative -mt-28 overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 pt-28">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute -left-40 top-0 h-72 w-72 rounded-full bg-indigo-500/40 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-cyan-500/30 blur-3xl" />
        </div>
        <div className="container-custom relative grid gap-12 py-16 lg:grid-cols-[1.1fr_0.9fr] lg:py-24">
          <div className="text-white">
            <p className="text-sm uppercase tracking-[0.35em] text-white/70">Mobile App Development Company</p>
            <h1 className="mt-4 font-[var(--font-space-grotesk)] text-4xl md:text-5xl lg:text-6xl">
              Mobile App Development Company
            </h1>
            <p className="mt-6 text-lg text-white/80">
              Affordable mobile app development services recognized by national media and top B2B
              marketplaces. From innovative solutions to global staff augmentation, we deliver
              dependable mobile experiences that bring your vision to life.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5">
                Talk to our experts
              </button>
              <button className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                View portfolio
              </button>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
              {heroAwards.map((award) => (
                <div key={award.alt} className="rounded-2xl bg-white/10 p-4 text-center">
                  <img src={award.src} alt={award.alt} className="mx-auto h-16 object-contain" />
                </div>
              ))}
            </div>
          </div>

          <MobileAppHeroContactForm />
        </div>
      </section>

      <section className="bg-white">
        <div className="container-custom py-10">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {partnerLogos.map((logo) => (
              <div key={logo.alt} className="rounded-full border border-secondary-200 px-6 py-3">
                <img src={logo.src} alt={logo.alt} className="h-8 w-auto" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center">
            <img
              src={normalizeAssetUrl('https://www.Infynex.com/assets/img/web-img/mobile-app-dev-comp.webp')}
              alt="Custom Mobile App Development Services"
              className="h-auto w-full max-w-md rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-[var(--font-space-grotesk)]">
              Custom Mobile App Development Services
            </h2>
            <p className="mt-4 text-lg text-secondary-600">
              Immerse yourself in the dynamic realm of mobility by harnessing your original ideas
              and bringing them to life. As a leading mobile application development company, we
              transform business needs into cutting-edge solutions with proven partner support.
            </p>
            <button className="mt-6 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white">
              Join The Paradigm Shift
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50 text-secondary-900">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Award Winning Full-Cycle Mobile App Development Services
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="grid gap-4 sm:grid-cols-2">
              {mediaLogos.map((logo) => (
                <div
                  key={logo.alt}
                  className="rounded-2xl border border-secondary-200 bg-white p-4 text-center"
                >
                  <img src={logo.src} alt={logo.alt} className="mx-auto h-10" loading="lazy" />
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-secondary-200 bg-white p-6">
              <img
                src={normalizeAssetUrl('/leading/cb17.webp')}
                alt="Clutch media"
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
{/* 
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-[var(--font-space-grotesk)]">Portfolio</h2>
            <a href="/portfolio" className="text-sm font-semibold text-primary-600">
              View All
            </a>
          </div>
          <div className="mt-8 overflow-x-auto">
            <div className="flex min-w-[720px] gap-6 pb-4">
              {portfolioItems.map((item) => (
                <div
                  key={item.name}
                  className="min-w-[260px] rounded-3xl border border-secondary-200 bg-white p-5 shadow-lg"
                >
                  <div className="flex items-center gap-3">
                    <img src={item.logo} alt={item.name} className="h-10 w-10" loading="lazy" />
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                  </div>
                  <p className="mt-3 text-sm text-secondary-600">{item.description}</p>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="mt-4 h-40 w-full rounded-2xl object-cover"
                    loading="lazy"
                  />
                  <button className="mt-4 w-full rounded-full bg-primary-600 px-4 py-2 text-sm font-semibold text-white">
                    Get in Touch
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <h2 className="font-[var(--font-space-grotesk)]">Our Elite Customers</h2>
            <a href="/testimonials" className="text-sm font-semibold text-primary-600">
              View All
            </a>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {eliteCustomers.map((customer) => (
              <div
                key={customer.alt}
                className="rounded-2xl border border-secondary-200 bg-white p-6 text-center"
              >
                <img src={customer.src} alt={customer.alt} className="mx-auto h-12" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Full-Cycle Mobile App Development Services Improving Business Performance
          </h2>
          <p className="mt-4 text-secondary-600">
            Be a trendsetter and leverage our comprehensive suite of services to optimize business
            visibility and elevate mobile experiences.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {fullCycleServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-sm"
              >
                <img src={service.icon} alt={service.title} className="h-12" loading="lazy" />
                <h3 className="mt-4 text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-indigo-900 via-slate-950 to-slate-900 text-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Mobile App Development Solutions for Diverse Industries
          </h2>
          <p className="mt-4 text-white/70">
            We specialize in delivering scalable, user-friendly, and industry-specific mobile
            solutions that match real-world needs.
          </p>
          <div className="mt-10">
            <IndustryVideoTabs
              ctaText="Become Our Client"
              tabs={[
                {
                  id: 'taxi',
                  label: 'Taxi App',
                  blurb: 'See a taxi platform demo and admin view.',
                  videos: [
                    {
                      label: 'Client Video',
                      src: 'https://www.youtube.com/embed/L7lqp6SxQsc?si=96w-cC3yPaGXRN64',
                    },
                    {
                      label: 'Admin Panel',
                      src: 'https://www.youtube.com/embed/-CmZKhHjJrc?si=u5LsxyYAiKNt_Ew-',
                    },
                    {
                      label: 'App Demo',
                      src: 'https://www.youtube.com/embed/gcVQHddQk1c?si=3LYa2RASKPLc-PGj',
                    },
                  ],
                },
                {
                  id: 'pickup',
                  label: 'Pickup and Drop App',
                  blurb: 'Pickup and delivery experiences optimized for scale.',
                  videos: [
                    {
                      label: 'GoRapid',
                      src: 'https://www.youtube.com/embed/uaJqnMiSIDc?si=Bp3kL_9wZQTCxECP',
                    },
                    {
                      label: 'Admin Panel',
                      src: 'https://www.youtube.com/embed/pb4WMNq8xUU?si=ke6SBdWzW0s1PW0x',
                    },
                  ],
                },
                {
                  id: 'multi',
                  label: 'Multi Service App',
                  blurb: 'A multi-service platform with admin and user workflows.',
                  videos: [
                    {
                      label: 'Admin Panel',
                      src: 'https://www.youtube.com/embed/I8ZJFrgcWpY?si=OaOSBFXljxwhUCld',
                    },
                    {
                      label: 'User Panel',
                      src: 'https://www.youtube.com/embed/vb-vda8H4Ts?si=9c6ERwgnx8qeHYNK',
                    },
                  ],
                },
                {
                  id: 'ai',
                  label: 'AI Chatbot',
                  blurb: 'AI-powered chatbots for customer support and automation.',
                  videos: [
                    {
                      label: 'Admin Panel',
                      src: 'https://www.youtube.com/embed/llFzm8QTfD4?si=lC-A_jBtiYldjKOi',
                    },
                    {
                      label: 'User Panel',
                      src: 'https://www.youtube.com/embed/35H0just8QY?si=SYgo033R9rjMAKnP',
                    },
                  ],
                },
                {
                  id: 'food',
                  label: 'Food Delivery App',
                  blurb: 'Restaurants, vendors, and drivers on one platform.',
                  videos: [
                    {
                      label: 'Admin Panel',
                      src: 'https://www.youtube.com/embed/8OndMejbiuQ?si=dhFYChQCXJ0Qgntp',
                    },
                    {
                      label: 'Vendor Panel',
                      src: 'https://www.youtube.com/embed/f7P1JufiKaA?si=phzgDMc1wH8mL2Cd',
                    },
                    {
                      label: 'Driver Panel',
                      src: 'https://www.youtube.com/embed/Uzr7ZI8GFmg?si=byUEK-db3f3SAJMX',
                    },
                  ],
                },
                {
                  id: 'child',
                  label: 'Child Ridesharing App',
                  blurb: 'Safety-first ridesharing built for families.',
                  videos: [
                    {
                      label: 'Client Views',
                      src: 'https://www.youtube.com/embed/DxhZ1EW0eGw?si=dpid-89uiTMlYioF',
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Mobile App Development Solutions Integrated with Advanced Technologies
          </h2>
          <p className="mt-4 text-secondary-600">
            We deliver comprehensive digital solutions and dedicated mobile app developers for
            every emerging technology stack.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {advancedTech.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-sm"
              >
                <img src={item.icon} alt={item.title} className="h-12" loading="lazy" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-r from-indigo-700 via-primary-600 to-cyan-500 text-white">
        <div className="container-custom text-center">
          <h2 className="font-[var(--font-space-grotesk)]">
            Boost Your Business Presence With The Best Mobile App Development Company in USA
          </h2>
          <p className="mt-4 text-white/80">
            Schedule a free consultation to discover how our mobile app developers can transform
            your ideas into innovative solutions.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            Talk To Our Experts
          </button>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Harness Affordable Custom App Development Services Elevating Your Business Journey
          </h2>
          <p className="mt-4 text-secondary-600">
            Foster innovation and drive increased value with our affordable custom app development
            services.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {customServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Bespoke App Development Services To Fuel Your Digital Transformation
          </h2>
          <p className="mt-4 text-secondary-600">
            We combine innovation with the latest technologies to provide customized app
            development services that drive growth.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {bespokeServices.map((service) => (
              <div key={service.title} className="rounded-3xl border border-secondary-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/web-img/advanced-tech-mobile-app.webp'
              )}
              alt="Next-Gen Custom Application Development Services"
              className="h-auto w-full max-w-md rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-[var(--font-space-grotesk)]">Next-Gen Custom Application Development Services</h2>
            <p className="mt-4 text-secondary-600">
              Transform your ideas into powerful, user-friendly applications with our diverse range
              of mobile app development services.
            </p>
            <div className="mt-6 grid gap-4">
              {nextGenServices.map((service) => (
                <div key={service.title} className="flex gap-4 rounded-2xl border border-secondary-200 bg-white p-4">
                  <img src={service.icon} alt={service.title} className="h-12 w-12" loading="lazy" />
                  <div>
                    <h3 className="text-base font-semibold">{service.title}</h3>
                    <p className="mt-1 text-sm text-secondary-600">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-white">
        <div className="container-custom">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center">
            <h2 className="font-[var(--font-space-grotesk)]">App Vision With Mobile App Development Company in USA</h2>
            <p className="mt-4 text-white/70">
              From concept to launch, we create intuitive, high-performance apps tailored to your
              needs. Reach out for a custom mobile app quote.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Save My Project
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Mobile App Development Services Driving Online Business Growth Across Industries
          </h2>
          <p className="mt-4 text-secondary-600">
            A well-designed app boosts customer engagement, streamlines operations, and drives new
            revenue.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industryCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-secondary-200 bg-white p-6 shadow-sm">
                <img src={card.icon} alt={card.title} className="h-12" loading="lazy" />
                <h3 className="mt-4 text-lg font-semibold">{card.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{card.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-secondary-600">
                  {card.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Type of Mobile App Solutions at the Best Mobile App Development Company
          </h2>
          <p className="mt-4 text-secondary-600">
            MVP, white label, or custom build - we align the solution with your vision.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {solutionTypes.map((solution) => (
              <div key={solution.title} className="rounded-3xl border border-secondary-200 bg-white p-6">
                <img src={solution.icon} alt={solution.title} className="h-12" loading="lazy" />
                <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Leading Mobile App Development Company in USA: Ultimate App Building Process
          </h2>
          <p className="mt-4 text-secondary-600">
            Our app development process is meticulously designed to ensure quality and efficiency.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-3xl border border-secondary-200 bg-white p-6 text-center">
                <img src={step.icon} alt={step.title} className="mx-auto h-12" loading="lazy" />
                <p className="mt-4 text-sm font-semibold text-primary-600">Step {step.step}</p>
                <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="flex justify-center">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/web-img/custom-mobile-app-dev-services.webp'
              )}
              alt="How To Grow Business Through The Best App Building Company"
              className="h-auto w-full max-w-md rounded-3xl object-cover shadow-2xl"
              loading="lazy"
            />
          </div>
          <div>
            <h2 className="font-[var(--font-space-grotesk)]">
              How To Grow Business Through The Best App Building Company?
            </h2>
            <p className="mt-4 text-secondary-600">
              We craft innovative mobile app solutions that drive engagement, boost efficiency, and
              deliver tangible results.
            </p>
            <button className="mt-6 rounded-full bg-primary-600 px-6 py-3 text-sm font-semibold text-white">
              Join The Paradigm Shift
            </button>
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">App Development Solutions To Lead the Global Market</h2>
          <p className="mt-4 text-secondary-600">
            We build solutions for government, enterprise, and startup organizations around the world.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {growthSections.map((section) => (
              <div key={section.title} className="rounded-3xl border border-secondary-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{section.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{section.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-secondary-600">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white">
        <div className="container-custom text-center">
          <h2 className="font-[var(--font-space-grotesk)]">
            Tech Stack Leveraged by Our Mobile Application Development Company
          </h2>
          <div className="mt-10">
            <TechStackTabs
              tabs={[
                {
                  id: 'native',
                  label: 'Native App Development',
                  items: [
                    { name: 'Swift', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/swift.svg') },
                    { name: 'Xcode', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/xcode.svg') },
                    { name: 'UIKit', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/uikit.webp') },
                    { name: 'Kotlin', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/kotlin.svg') },
                    {
                      name: 'Android Studio',
                      icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/android.svg'),
                    },
                  ],
                },
                {
                  id: 'cross',
                  label: 'Cross-Platform App Development',
                  items: [
                    { name: 'Flutter', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/flutter.svg') },
                    {
                      name: 'React Native',
                      icon: normalizeAssetUrl(
                        'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-react-native.webp'
                      ),
                    },
                    {
                      name: 'Ionic',
                      icon: normalizeAssetUrl(
                        'https://www.Infynex.com/assets/img/blog-images/web3-elearning-app-solution-ionic.webp'
                      ),
                    },
                    { name: 'Xamarin', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/xamarin.svg') },
                    { name: 'Cordova', icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/cordova.svg') },
                  ],
                },
                {
                  id: 'backend',
                  label: 'Back-end and Database',
                  items: [
                    {
                      name: 'LAMP',
                      icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/lamp-stack.webp'),
                    },
                    {
                      name: 'ASP.NET Core',
                      icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/dotnet.webp'),
                    },
                    {
                      name: 'Python',
                      icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/blockchain-images/python-tech-stack.svg'),
                    },
                    {
                      name: 'Java',
                      icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/blockchain-images/dapp-service-java-icon.svg'),
                    },
                    {
                      name: 'Firebase',
                      icon: normalizeAssetUrl('https://www.Infynex.com/assets/img/new_suffes_images/firebase-icon.webp'),
                    },
                  ],
                },
                {
                  id: 'ui',
                  label: 'UI/UX Design Tools',
                  items: [
                    {
                      name: 'Figma',
                      icon: normalizeAssetUrl(
                        'https://www.Infynex.com/assets/img/new_suffes_images/mobile-app-development-california-figma.svg'
                      ),
                    },
                    {
                      name: 'Adobe XD',
                      icon: normalizeAssetUrl(
                        'https://www.Infynex.com/assets/img/blog-images/web3-elearning-app-solution-xd.webp'
                      ),
                    },
                  ],
                },
              ]}
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white">
        <div className="container-custom text-center">
          <h2 className="font-[var(--font-space-grotesk)]">
            Business Centric Mobile App Development Services
          </h2>
          <p className="mt-4 text-white/70">
            Ready to transform your ideas with powerful mobile app solutions? Consult with us
            today.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
            Get Free Consultation
          </button>
        </div>
      </section>

      <section className="section-padding bg-slate-900 text-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)] text-center">
            Your Vision, Our Commitment - Complete Mobile App Development Without Compromise
          </h2>
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-[720px] w-full border-collapse overflow-hidden rounded-3xl">
              <thead>
                <tr className="bg-white/10">
                  <th className="p-4 text-left text-sm font-semibold">Advantages</th>
                  <th className="p-4 text-left text-sm font-semibold">Our Deliverables</th>
                  <th className="p-4 text-left text-sm font-semibold">Others</th>
                </tr>
              </thead>
              <tbody className="text-sm text-white/80">
                {[
                  '100% Code Ownership',
                  'Multi-language Support',
                  'Chatbot Integration',
                  'Payment Gateway Integration',
                  'Real-time Analytics',
                  'Offline Functionality',
                  'Push Notifications',
                  'Social Media Integration',
                  'Voice Recognition',
                  'MVP under 4 weeks',
                ].map((advantage, index) => (
                  <tr key={advantage} className={index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                    <td className="p-4">{advantage}</td>
                    <td className="p-4">✅</td>
                    <td className="p-4">{index % 3 === 0 ? '❌' : '✅'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* <section className="section-padding bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Geo-Enabled Custom App Development with Trusted Consulting Support
          </h2>
          <p className="mt-4 text-white/70">
            From intuitive mobile apps to strategic consulting, we build GPS-enabled experiences
            that connect your users everywhere.
          </p>
          <div className="mt-10">
            <GeoTabs
              locations={[
                {
                  id: 'usa',
                  label: 'United States',
                  title: 'United States',
                  description:
                    'Infynex delivers mobile app development services across the USA with cutting-edge tech, efficient timelines, and structured teams.',
                  link: 'https://share.google/KVdWDhruq7g50aQ2X',
                },
                {
                  id: 'dubai',
                  label: 'Dubai',
                  title: 'Dubai',
                  description:
                    'We create high-performance apps in Dubai with a strong focus on Android and world-class UI/UX design.',
                  link: 'https://maps.app.goo.gl/ffg8xPCCH5wzwF6E8',
                },
                {
                  id: 'saudi',
                  label: 'Saudi Arabia',
                  title: 'Saudi Arabia',
                  description:
                    'Comprehensive services from app design to ongoing support for Saudi Arabia-based businesses.',
                  link: 'https://maps.app.goo.gl/18XLhao7QGNXPxGn8',
                },
                {
                  id: 'malaysia',
                  label: 'Malaysia',
                  title: 'Malaysia',
                  description:
                    'A dedicated team delivering reliable mobile solutions for diverse industries in Malaysia.',
                  link: 'https://maps.app.goo.gl/A8sGwJvLqd9n3r3CA',
                },
                {
                  id: 'singapore',
                  label: 'Singapore',
                  title: 'Singapore',
                  description:
                    'Top-quality apps using AI, blockchain, and cloud computing for Singapore clients.',
                  link: 'https://maps.app.goo.gl/1SNEXJzNcfAVy37M7',
                },
                {
                  id: 'kuwait',
                  label: 'Kuwait',
                  title: 'Kuwait',
                  description:
                    'Secure, feature-packed apps for banking, gaming, and on-demand solutions in Kuwait.',
                },
                {
                  id: 'qatar',
                  label: 'Qatar',
                  title: 'Qatar',
                  description:
                    'High-impact digital solutions with emerging technologies and full-stack expertise.',
                },
                {
                  id: 'uk',
                  label: 'United Kingdom',
                  title: 'United Kingdom',
                  description:
                    'Scalable iOS, Android, and cross-platform solutions delivered by seasoned developers.',
                  link: 'https://maps.app.goo.gl/dr3n7efJi7vYReRC8',
                },
              ]}
            />
          </div>
        </div>
      </section> */}

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            What Sets Us Apart as a Leading Mobile App Development Company?
          </h2>
          <p className="mt-4 text-secondary-600">
            We introduce each point clearly and highlight the key benefits that set us apart.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'We Delivered Excellence',
                description:
                  'Globally recognized agency with a security-centric approach and flexible pricing.',
                bullets: ['Globally recognized', 'Security-first', 'Flexible prices'],
              },
              {
                title: 'We Empower Businesses',
                description:
                  'Affordable, scalable solutions with passionate teams and seamless client interactions.',
                bullets: ['Quality commitment', 'Passionate teams', 'Seamless interactions'],
              },
              {
                title: 'We Are With You',
                description:
                  'End-to-end support with timely delivery, problem-solving, and 24/7 assistance.',
                bullets: ['Timely delivery', 'Problem-solving', '24/7 support'],
              },
            ].map((item) => (
              <div key={item.title} className="rounded-3xl border border-secondary-200 bg-white p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-secondary-600">{item.description}</p>
                <ul className="mt-4 space-y-2 text-sm text-secondary-600">
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-900 text-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">
            Mobile App Development Solutions Ensuring Data Privacy Compliance in USA
          </h2>
          <p className="mt-4 text-white/70">
            We build secure, compliant, and future-ready solutions that align with US data privacy
            laws and regulatory standards.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {complianceItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-white/70">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-slate-950 text-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="font-[var(--font-space-grotesk)]">Lets Hear, Real Stories</h2>
              <p className="mt-4 text-white/70">
                Discover how we help clients become the next best version of themselves.
              </p>
              <a href="/testimonials" className="mt-6 inline-block rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                View Testimonial
              </a>
            </div>
            <TestimonialsCarousel testimonials={testimonials} />
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="font-[var(--font-space-grotesk)]">FAQs</h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="rounded-2xl border border-secondary-200 bg-white p-5">
                <summary className="cursor-pointer text-base font-semibold">{faq.question}</summary>
                <p className="mt-2 text-sm text-secondary-600">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
