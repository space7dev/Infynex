'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAccordion } from '@/lib/useAccordion'
import FaqSectionCardItems from './FaqSectionCardItems'

const normalizeAssetUrl = (url: string) => url.replace(/Infynex/g, 'suffescom')

const trustedLogos = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-list12.webp',
    alt: 'Modani Furniture',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-list13.webp',
    alt: 'We Got Lites',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-justryde-loh.webp',
    alt: 'Just Ryde Inc',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-konnect-loh.webp',
    alt: 'Konnect',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-ceo-logo.webp',
    alt: 'CEO 3 in 60',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-new1.webp',
    alt: 'Huskk',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-briog.webp',
    alt: 'Briogeo',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/home-wikiexpert.webp',
    alt: 'Wiki Expert',
  },
]

const serviceCards = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/consultation.svg',
    title: 'Android App Consulting Service',
    description:
      'We provide consulting that covers scoping, feasibility, and cost estimation for your Android app development project.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/prototyping.svg',
    title: 'Prototyping and Wireframing',
    description:
      'Interactive prototypes and wireframes to validate UX flows early and minimize rework later.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/custom-android.svg',
    title: 'Customized Android App Solutions',
    description:
      'Tailored Android apps designed for your industry needs with performance optimization and security.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/software-testing.svg',
    title: 'Android App Testing',
    description:
      'Complete QA services from unit testing to automation and performance monitoring.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/cross-platform.svg',
    title: 'Android Cross-Platform Development',
    description:
      'Flutter and React Native to build multi-platform apps with a single codebase.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/support.svg',
    title: 'App Support and Maintenance',
    description:
      '24/7 support and maintenance from ideation to launch and beyond.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/upgrades.svg',
    title: 'App Migration and Upgrades',
    description:
      'Modernize apps with the latest Android versions, frameworks, and smoother performance.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/api.svg',
    title: 'Third-Party API Integration',
    description:
      'Secure integrations for payments, maps, analytics, and other critical services.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/native-app.svg',
    title: 'Native Android App Development',
    description:
      'Java and Kotlin development with Jetpack Compose for reliable native apps.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/cloud.svg',
    title: 'Cloud-Based Android App Development',
    description:
      'Scalable backends, real-time syncs, and microservices support for growth.',
  },
]

const solutionCards = [
  {
    title: 'MVP Android App Development',
    description:
      'Lean MVPs to validate ideas fast while saving time and cost before full-scale builds.',
    icon: 'https://www.Infynex.com/assets/img/icons/mvp-app.svg',
  },
  {
    title: 'Enterprise Android App Development',
    description:
      'Security, compliance, and scalability for enterprise-grade Android applications.',
    icon: 'https://www.Infynex.com/assets/img/icons/enterprise.svg',
  },
  {
    title: 'White Label Android App',
    description:
      'Ready-made apps customized to your brand for quick deployment.',
    icon: 'https://www.Infynex.com/assets/img/icons/white-label.svg',
  },
  {
    title: 'SaaS-Based Android Platform',
    description:
      'SaaS apps with subscription models, tenant separation, and role management.',
    icon: 'https://www.Infynex.com/assets/img/icons/saas.svg',
  },
]

const portfolioItems = [
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/one-time-shop.webp',
    name: '1 Time Shop',
    category: 'Delivery App',
    description:
      'A platform that offers on-demand services like payments, taxi, food delivery, and grocery shopping.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-one-time-shop.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/tiktok-unity-logo.webp',
    name: 'Unity',
    category: 'Entertainment App',
    description:
      'Entertainment app for video viewing and creation with AI-powered avatars and media effects.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-unity.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/radisson-hotels.svg',
    name: 'Radisson Hotels',
    category: 'Hotel Booking Platform',
    description:
      'Booking platform for rooms, meeting space, and support with member rewards.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-radison-hotels.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/monsters-logo-.webp',
    name: 'Universal Monsters',
    category: 'eCommerce Store in Web3',
    description:
      'NFT-infused apparel store with NFC access and blockchain integrations.',
    image: 'https://www.Infynex.com/assets/img/web-img/web-app-monster.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/newversion_images/class-central-logo.webp',
    name: 'Class Central',
    category: 'Aggregate Courses Web Platform',
    description:
      'A one-stop platform for online courses from multiple instructors.',
    image: 'https://www.Infynex.com/assets/img/newversion_images/web-app-class-central.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/soorx-logo.svg',
    name: 'Soorx',
    category: 'Crypto Trading Platform',
    description:
      'Trading platform with a comprehensive set of secure financial tools.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-soorx.webp',
  },
]

const platformCards = [
  {
    image: 'https://www.Infynex.com/assets/img/web-img/custom-android-app.webp',
    title: 'Custom Android App',
    description:
      'Custom Android apps built to be scalable, reliable, and performance-oriented.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/android-wearable-app.webp',
    title: 'Android Wearable App',
    description:
      'Wearable apps with sensor integration, low power usage, and real-time alerts.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/android-tablet-app.webp',
    title: 'Android Tablet App',
    description:
      'Tablet-ready apps with responsive layouts and productivity-centric features.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/android-smarttv-app.webp',
    title: 'Android Smart TV App',
    description:
      'Immersive Android TV experiences with streaming, voice search, and engagement.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/iot.webp',
    title: 'IoT-Enabled Android Apps',
    description:
      'Device-aware apps with secure pairing, MQTT bridges, and offline-first sync.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/enterprise.webp',
    title: 'Enterprise Mobility Solutions',
    description:
      'Enterprise Android apps with SSO, encryption, and large-scale manageability.',
  },
]

const stats = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/android-apps.svg',
    value: '150+',
    label: 'Android Apps Developed',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/android-experts.svg',
    value: '50+',
    label: 'Android Experts',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/industries-served.svg',
    value: '15+',
    label: 'Industries Served',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/review.svg',
    value: '75+',
    label: 'Reviews',
  },
]

const userNeeds = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/messaging.svg',
    title: 'Messaging and voice/video calling',
    description: 'Secure messaging and crystal-clear calls with reliable performance.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/multi-device.svg',
    title: 'Multi-device synchronization',
    description: 'Seamless sessions across phones, tablets, and web platforms.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/qr-code.svg',
    title: 'QR code scanning',
    description: 'Fast scanning for retail, payments, and event use cases.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/readability.svg',
    title: 'Image text readability',
    description: 'OCR for extracting text from receipts and documents.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/recording.svg',
    title: 'Voice recognition and recording',
    description: 'Voice commands and dictation with privacy safeguards.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/app-theme.svg',
    title: 'App theme color change',
    description: 'Personalized themes including dark mode and branded colors.',
  },
]

const featureMatrix = [
  { label: 'Multi-language Support', ours: true, others: false },
  { label: 'Social Media Integration', ours: true, others: true },
  { label: 'Cross-Platform Development', ours: true, others: true },
  { label: 'Material Design-Compliant UI/UX', ours: true, others: false },
  { label: 'Payment Gateway Integration', ours: true, others: true },
  { label: 'Wearable and Smart TV App Support', ours: true, others: false },
  { label: 'Push Notifications', ours: true, others: true },
  { label: 'IoT-Enabled Android App Development', ours: true, others: false },
  { label: 'Cloud Data Sync', ours: true, others: true },
  { label: 'Enterprise-Grade Security and SSO', ours: true, others: false },
  { label: 'QR Code Scanning and OCR Integration', ours: true, others: false },
  { label: 'AI and Voice Recognition Integration', ours: true, others: false },
  { label: '24/7 Support and Maintenance', ours: true, others: false },
  { label: 'App Migration and Upgrades', ours: true, others: true },
  { label: 'AR/VR and AI-Powered Features', ours: true, others: false },
]

const industries = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/gaming.svg',
    title: 'Gaming Apps',
    description:
      'High-performance gaming experiences with optimized frame rate, latency, and retention.',
    bullets: ['Casual Games', 'AR/VR Games', 'Cloud Gaming', 'Role-Playing Game'],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/e-commerce.svg',
    title: 'E-commerce and Retail Apps',
    description:
      'Conversion-first shopping with quick checkout, wallets, and inventory sync.',
    bullets: ['Shopping App', 'Used Items Buy and Sell', 'Clothes Rental'],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/fintech.svg',
    title: 'Fintech and Banking Apps',
    description:
      'Secure mobile banking, digital wallets, and trading platforms with biometric auth.',
    bullets: ['Digital wallets', 'BNPL', 'Trading platforms'],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/healthcare.svg',
    title: 'Healthcare and Fitness Apps',
    description:
      'Telemedicine, health tracking, and AI nutrition with secure integrations.',
    bullets: ['Telemedicine', 'Health tracking', 'AI nutrition'],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/app.svg',
    title: 'Automotive Android Apps',
    description:
      'Android Auto UX, EV charging, diagnostics, and telematics integrations.',
    bullets: ['Android Auto', 'EV App', 'Vehicle Diagnostics', 'Fuel and Charging'],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/education.svg',
    title: 'Educational and E-learning Apps',
    description:
      'Interactive courses, virtual classrooms, and AI homework support.',
    bullets: ['Interactive courses', 'Virtual Classrooms', 'AI Homework'],
  },
]

const processSteps = [
  {
    number: '1',
    title: 'Requirement Analysis',
    description:
      'We begin by understanding your goals to provide best-fit custom Android services.',
  },
  {
    number: '2',
    title: 'UI/UX Design',
    description:
      'Design team creates intuitive interfaces aligned with Material design principles.',
  },
  {
    number: '3',
    title: 'App Development',
    description:
      'Developers build robust apps using modern Android frameworks and tooling.',
  },
  {
    number: '4',
    title: 'Quality Assurance and Testing',
    description:
      'Rigorous testing ensures stability, security, and device compatibility.',
  },
  {
    number: '5',
    title: 'Deployment',
    description:
      'Smooth launch on the Google Play Store with compliance to Android guidelines.',
  },
  {
    number: '6',
    title: 'Support and Maintenance',
    description:
      'Ongoing support, updates, and enhancements post-launch.',
  },
]

const techStackTabs = [
  {
    id: 'Languages',
    label: 'Languages',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-development-java.svg',
        title: 'Java',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blog-images/web3-elearning-app-solution-kotlin.webp',
        title: 'Kotlin-C',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/bootstrap-tech-icon.webp',
        title: 'JavaScript',
      },
    ],
  },
  {
    id: 'Platform',
    label: 'Platform',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/smartphones.svg',
        title: 'Smartphones',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/android-watch.svg',
        title: 'Android Watch',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/android-tablets.svg',
        title: 'Android Tablets',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/android-tv.svg',
        title: 'Android TV',
      },
    ],
  },
  {
    id: 'SDK',
    label: 'SDK Integrations',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/social-media.svg',
        title: 'Social Media',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/google-analytics.svg',
        title: 'Google Analytics',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/crashlytics.webp',
        title: 'Crashlytics',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/google-map.svg',
        title: 'Google Maps',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/sms-gateway.webp',
        title: 'SMS Gateway',
      },
    ],
  },
  {
    id: 'Service',
    label: 'Service Integrations',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/payment-gateway.svg',
        title: 'Payment Gateway',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/live-video-classes.svg',
        title: 'Live and Video Streaming',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/chat.svg',
        title: 'Chat, Audio and Video Call',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/ar-vr.svg',
        title: 'AR and VR Integration',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/in-app.svg',
        title: 'In-App Purchase',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/database.svg',
        title: 'Realm and Core Database',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/notification.svg',
        title: 'In App Notifications',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/map.svg',
        title: 'Maps and Geofencing',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/ai-ml.svg',
        title: 'AI and ML',
      },
    ],
  },
]

const trends = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/iot.svg',
    title: 'Internet of Things (IoT)',
    description:
      'Apps that securely interact with smart devices, sensors, and gateways.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/edge-computing.svg',
    title: '5G and Edge Computing',
    description:
      'Ultra-low latency experiences for AR/VR, streaming, and cloud gaming.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/architecture.svg',
    title: 'Cloud-Native and Microservices Architecture',
    description:
      'Faster deployment, performance, and effortless scalability for growth.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ar-vr.svg',
    title: 'AR/VR and AI Combination',
    description:
      'Immersive experiences for retail, healthcare, automotive, and more.',
  },
]

const developerCards = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/kotlin.svg',
    title: 'Kotlin Developers For Android App',
    description:
      'Native Android apps with Jetpack Compose and modern background task handling.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai.svg',
    title: 'AI Developers For Android App',
    description:
      'Personalization, smart recommendations, and predictive analysis for mobile apps.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/react-native.svg',
    title: 'React Native Developers For Android App',
    description:
      'Cross-platform apps that run equally well on Android and iOS.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/node-js.svg',
    title: 'Node.js Developers For Android App',
    description:
      'Robust backends with real-time APIs and scalable architecture.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/developers.svg',
    title: 'Python Developers For Android App',
    description:
      'Data analytics and AI integrations with reliable backend support.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/cross-platform.svg',
    title: 'Cross-Platform Developers For Android App',
    description:
      'Flutter expertise for multi-platform apps with reduced development cost.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ui-ux.svg',
    title: 'UI/UX Designers For Android App',
    description:
      'Material design-focused interfaces with accessibility and usability.',
  },
]

const reasons = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/innovative-approach.svg',
    title: 'Innovative Approach',
    description:
      'Expertise in AI, Blockchain, and IoT to build future-ready Android apps.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/flexible-hiring.svg',
    title: 'Flexible Hiring Model',
    description:
      'Fixed price or dedicated team models based on your project requirements.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/experience.svg',
    title: 'A Decade Experience',
    description:
      'More than 13 years of experience delivering profitable Android apps.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/transparency.svg',
    title: 'Unwavering Transparency',
    description:
      'Strong data security practices and compliance for your business.',
  },
]

const testimonials = [
  {
    quote:
      'We reached out for a car rental project. They delivered a high-quality app within deadline.',
    name: 'Nelson Murdock',
    avatar: 'https://www.Infynex.com/assets/img/icons/nelson-murdock.svg',
  },
  {
    quote:
      'Infynex delivered on time with structured project management. Impressive work.',
    name: 'Theophilus Frimpong',
    avatar: 'https://www.Infynex.com/assets/img/icons/nextride-driver.webp',
  },
  {
    quote:
      'Outstanding experience. The team understood our model and delivered a user-friendly app.',
    name: 'David',
    avatar: 'https://www.Infynex.com/assets/img/icons/laundry-crew.webp',
  },
  {
    quote:
      'They delivered a functional taxi app with proactive updates and issue resolution.',
    name: 'Akin Bami',
    avatar: 'https://www.Infynex.com/assets/img/portfolio/arriver-driver-logo.webp',
  },
]

const faqs = [
  {
    question: 'How much does it cost to make an Android app?',
    answer:
      'Android app development cost varies from $10,000 to $25,000 depending on complexity, features, and timelines.',
  },
  {
    question: 'How long does it take to develop an Android app?',
    answer:
      'Most high-quality Android apps take about 2 to 6 months for design, development, and testing.',
  },
  {
    question: 'Why should you hire Android app developers for your business?',
    answer:
      'Professional Android developers apply modern technologies and business-optimized designs for better ROI.',
  },
  {
    question: 'Why choose Infynex as your go-to Android development service?',
    answer:
      'We combine innovation, expert skills, and a customer-first approach to deliver elite Android apps.',
  },
  {
    question: 'Which tools and technologies does Infynex use in its projects?',
    answer:
      'We use Kotlin, Java, Android Studio, Firebase, Retrofit, and Jetpack Compose for secure, scalable apps.',
  },
  {
    question: 'Which is the best Android app development company in USA?',
    answer:
      'Look for proven Android expertise and references. Infynex delivers end-to-end solutions for startups and enterprises.',
  },
  {
    question: 'Where can I hire a team of Android app developers?',
    answer:
      'We offer dedicated teams, fixed-price projects, and time-and-material engagements.',
  },
  {
    question: 'Does Infynex offer a free consultation for Android app development?',
    answer:
      'Yes. We provide a no-cost session to understand your app idea and how we can help.',
  },
  {
    question: 'Does Infynex offer ongoing support and maintenance for Android apps?',
    answer:
      'We provide continuous maintenance, updates, and enhancements for optimal app performance.',
  },
  {
    question: 'Why should you hire an Android app development company?',
    answer:
      'You gain expertise for scalable and cost-effective apps tailored to business goals.',
  },
  {
    question: 'Where can I rescue my Android app development project?',
    answer:
      'Start with an architecture audit, code health check, and a stabilization sprint to get back on track.',
  },
  {
    question: 'Which company can help me resume my Android app development work?',
    answer:
      'Choose a partner that performs audits, provides a roadmap, and delivers incremental improvements.',
  },
]

const tickIcon = 'https://www.Infynex.com/assets/img/icons/tick-icon.webp'
const crossIcon = 'https://www.Infynex.com/assets/img/icons/cross-icon.webp'

export default function AndroidAppDevelopmentPage() {
  const [trustedRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 2200, stopOnInteraction: false }),
  ])
  const [portfolioRef, portfolioApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4200, stopOnInteraction: false }),
  ])
  const [portfolioIndex, setPortfolioIndex] = useState(0)

  const [developerRef, developerApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 3600, stopOnInteraction: false }),
  ])
  const [developerIndex, setDeveloperIndex] = useState(0)

  const [testimonialRef, testimonialApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ])
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const [activeTab, setActiveTab] = useState(techStackTabs[0].id)
  const { openIndex: openFaq, toggleIndex: toggleFaq } = useAccordion(0)

  const activeTabItems = useMemo(
    () => techStackTabs.find((tab) => tab.id === activeTab)?.items ?? [],
    [activeTab]
  )

  const scrollPortfolioTo = useCallback(
    (index: number) => portfolioApi && portfolioApi.scrollTo(index),
    [portfolioApi]
  )

  const scrollDeveloperTo = useCallback(
    (index: number) => developerApi && developerApi.scrollTo(index),
    [developerApi]
  )

  const scrollTestimonialTo = useCallback(
    (index: number) => testimonialApi && testimonialApi.scrollTo(index),
    [testimonialApi]
  )

  useEffect(() => {
    if (!portfolioApi) return
    const onSelect = () => setPortfolioIndex(portfolioApi.selectedScrollSnap())
    portfolioApi.on('select', onSelect)
    onSelect()
    return () => {
      portfolioApi.off('select', onSelect)
    }
  }, [portfolioApi])

  useEffect(() => {
    if (!developerApi) return
    const onSelect = () => setDeveloperIndex(developerApi.selectedScrollSnap())
    developerApi.on('select', onSelect)
    onSelect()
    return () => {
      developerApi.off('select', onSelect)
    }
  }, [developerApi])

  useEffect(() => {
    if (!testimonialApi) return
    const onSelect = () => setTestimonialIndex(testimonialApi.selectedScrollSnap())
    testimonialApi.on('select', onSelect)
    onSelect()
    return () => {
      testimonialApi.off('select', onSelect)
    }
  }, [testimonialApi])

  return (
    <div className="bg-white text-gray-900">
      <section className="bg-gradient-to-r from-emerald-900 via-emerald-950 to-slate-900 text-white">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold">Android App Development Company</h1>
              <p className="text-lg text-emerald-100 pb-[30px]">
                As a trusted Android app development company, we build user-friendly apps that
                deliver remarkable performance across devices.
              </p>
              <Link
                href="/contact"
                className="rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600"
              >
                Get a free Proposal
              </Link>
            </div>
            <div className="flex justify-center">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/android-app/android-app-development-services-banner.webp'
                )}
                alt="Android App Development Company"
                className="w-full max-w-md"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center">Trusted By Leading Companies</h2>
          <div className="mt-8 overflow-hidden" ref={trustedRef}>
            <div className="flex">
              {trustedLogos.map((logo) => (
                <div key={logo.alt} className="flex-[0_0_50%] px-4 sm:flex-[0_0_33%] lg:flex-[0_0_20%]">
                  <div className="flex items-center justify-center rounded-xl bg-gray-50 p-4">
                    <img
                      src={normalizeAssetUrl(logo.src)}
                      alt={logo.alt}
                      loading="lazy"
                      className="h-10 w-auto"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Explore Android App Development Services: We Offer
            </h2>
            <p className="mt-3 text-slate-200">
              We provide end-to-end Android development services to build feature-rich and scalable apps.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {serviceCards.map((service) => (
              <div key={service.title} className="rounded-2xl border border-emerald-800 bg-slate-950 p-6">
                <img src={normalizeAssetUrl(service.icon)} alt={service.title} className="h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Differentiated Android App Development Solutions
          </h2>
          <p className="mt-3 text-slate-200">
            We provide solutions for MVPs, enterprise builds, white-label apps, and SaaS platforms.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {solutionCards.map((solution) => (
              <div key={solution.title} className="rounded-2xl bg-slate-900 p-6">
                <img
                  src={normalizeAssetUrl(solution.icon)}
                  alt={solution.title}
                  className="mx-auto h-10 w-10"
                />
                <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
                <p className="mt-3 text-sm text-slate-200">{solution.description}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600">
            Consult our Experts
          </button>
        </div>
      </section>

      <section className="py-16" id="portfolio-target">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center">
            Take a Glimpse at Our Successful Android Projects
          </h3>
          <div className="mt-10">
            <div className="overflow-hidden" ref={portfolioRef}>
              <div className="flex">
                {portfolioItems.map((item) => (
                  <div key={item.name} className="min-w-0 flex-[0_0_100%] px-2">
                    <div className="grid gap-6 rounded-2xl bg-white p-6 shadow-lg lg:grid-cols-[1.1fr_0.9fr]">
                      <div>
                        <div className="flex items-center gap-4">
                          <img src={normalizeAssetUrl(item.logo)} alt={item.name} className="h-16 w-16" />
                          <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.category}</p>
                          </div>
                        </div>
                        <p className="mt-4 text-gray-600">{item.description}</p>
                      </div>
                      <div className="flex items-center justify-center">
                        <img
                          src={normalizeAssetUrl(item.image)}
                          alt={item.name}
                          className="w-full max-w-md rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {portfolioItems.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollPortfolioTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === portfolioIndex ? 'w-8 bg-emerald-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Collaborate with USA's Best Android App Development Company
          </h2>
          <p className="mt-3 text-emerald-100">
            Partner with Infynex for expert Android app development and ongoing support.
          </p>
          <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-emerald-900">
            Get Free Consultation
          </button>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Innovative Android App Development Services across Platforms
          </h2>
          <p className="mt-3 text-gray-600">
            We provide end-to-end Android application development services on various platforms.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {platformCards.map((platform) => (
              <div key={platform.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <img
                  src={normalizeAssetUrl(platform.image)}
                  alt={platform.title}
                  className="w-full rounded-xl"
                />
                <h3 className="mt-4 text-lg font-semibold">{platform.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex items-center gap-4 rounded-xl bg-emerald-800 p-4">
                <img src={normalizeAssetUrl(stat.icon)} alt={stat.label} className="h-12 w-12" />
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-sm text-emerald-100">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Satisfactory Android App Development Services For Modern Users Need
          </h3>
          <p className="mt-3 text-gray-600">
            We design every app to meet user expectations with smart features and personalization.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {userNeeds.map((need) => (
              <div key={need.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <img src={normalizeAssetUrl(need.icon)} alt={need.title} className="h-12 w-12" />
                <h4 className="mt-4 text-lg font-semibold">{need.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{need.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Android App Development Solutions: Notable Features and Comparisons
          </h3>
          <p className="mt-3 text-slate-200">
            A feature snapshot comparing our deliverables with others.
          </p>
          <div className="mt-10 overflow-x-auto">
            <table className="min-w-full border-separate border-spacing-y-3">
              <thead>
                <tr className="text-left text-sm uppercase tracking-wide text-emerald-200">
                  <th className="px-4">Notable Features</th>
                  <th className="px-4 text-center">Our Deliverables</th>
                  <th className="px-4 text-center">Others</th>
                </tr>
              </thead>
              <tbody>
                {featureMatrix.map((feature) => (
                  <tr key={feature.label} className="rounded-xl bg-emerald-950">
                    <td className="px-4 py-3 text-sm text-white">{feature.label}</td>
                    <td className="px-4 py-3 text-center">
                      <img
                        src={normalizeAssetUrl(feature.ours ? tickIcon : crossIcon)}
                        alt={feature.ours ? 'Included' : 'Not included'}
                        className="mx-auto h-6 w-6"
                      />
                    </td>
                    <td className="px-4 py-3 text-center">
                      <img
                        src={normalizeAssetUrl(feature.others ? tickIcon : crossIcon)}
                        alt={feature.others ? 'Included' : 'Not included'}
                        className="mx-auto h-6 w-6"
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Industries We Serve With Our Android Application Development Services
          </h3>
          <p className="mt-3 text-gray-600">
            We serve a wide variety of verticals with customized Android app development solutions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <img
                  src={normalizeAssetUrl(industry.icon)}
                  alt={industry.title}
                  className="h-12 w-12"
                />
                <h4 className="mt-4 text-lg font-semibold">{industry.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{industry.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-gray-600">
                  {industry.bullets.map((bullet) => (
                    <li key={bullet}>- {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold">Our Android App Development Process</h2>
          <p className="mt-3 text-emerald-100">
            We follow a streamlined approach to deliver high-quality Android apps.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-2xl bg-emerald-800 p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-emerald-900">
                  <span className="text-lg font-semibold">{step.number}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-emerald-100">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-900 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Infynex - The Best Android App Development Company
          </h2>
          <p className="mt-3 text-emerald-100">
            Ready to turn your idea into a powerful Android app? Trust Infynex to bring your
            vision to life.
          </p>
          <button className="mt-6 rounded-lg bg-white px-6 py-3 font-semibold text-emerald-900">
            Get Free Consultation
          </button>
        </div>
      </section>

      <section className="bg-emerald-950 py-16 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center">
            Tech Stack We Offer in Android App Development
          </h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {techStackTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTab === tab.id ? 'bg-white text-emerald-950' : 'bg-emerald-800 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {activeTabItems.map((item) => (
              <div key={item.title} className="rounded-2xl bg-emerald-900 p-6 text-center">
                <img
                  src={normalizeAssetUrl(item.icon)}
                  alt={item.title}
                  className="mx-auto h-12 w-12"
                />
                <h4 className="mt-4 text-lg font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Android App Development Services With Latest Technology Trends
          </h3>
          <p className="mt-3 text-gray-600">
            We build solutions on the latest tech stack to stay ahead of competition.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {trends.map((trend) => (
              <div key={trend.title} className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                <img
                  src={normalizeAssetUrl(trend.icon)}
                  alt={trend.title}
                  className="mx-auto h-12 w-12"
                />
                <h4 className="mt-4 text-lg font-semibold">{trend.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{trend.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Hire Android App Developers for Every Programming Language
          </h3>
          <p className="mt-3 text-slate-200">
            Hire experts in Kotlin, AI, React Native, and more to power your Android app.
          </p>
          <div className="mt-10">
            <div className="overflow-hidden" ref={developerRef}>
              <div className="flex">
                {developerCards.map((dev) => (
                  <div key={dev.title} className="min-w-0 flex-[0_0_100%] px-3 md:flex-[0_0_50%] lg:flex-[0_0_33%]">
                    <div className="rounded-2xl bg-slate-950 p-6">
                      <img src={normalizeAssetUrl(dev.icon)} alt={dev.title} className="h-12 w-12" />
                      <h4 className="mt-4 text-lg font-semibold">{dev.title}</h4>
                      <p className="mt-2 text-sm text-slate-200">{dev.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-2">
              {developerCards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => scrollDeveloperTo(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === developerIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-emerald-800'
                  }`}
                  aria-label={`Go to developer slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold">
            Custom Android App Development Company in the USA to Scale Your Business
          </h3>
          <p className="mt-3 text-gray-600">
            Tailored Android services that match business goals and target audience needs.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div key={reason.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                <img src={normalizeAssetUrl(reason.icon)} alt={reason.title} className="h-12 w-12" />
                <h4 className="mt-4 text-lg font-semibold">{reason.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{reason.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Client Testimonials</h3>
              <p className="mt-3 text-slate-200">
                Client satisfaction is our goal. Here are some testimonials from our clients.
              </p>
              <button className="mt-6 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600">
                View Testimonials
              </button>
            </div>
            <div>
              <div className="overflow-hidden" ref={testimonialRef}>
                <div className="flex">
                  {testimonials.map((item) => (
                    <div key={item.name} className="min-w-0 flex-[0_0_100%] px-3">
                      <div className="rounded-2xl bg-slate-950 p-6">
                        <p className="text-slate-200">"{item.quote}"</p>
                        <div className="mt-4 flex items-center gap-3">
                          <img src={normalizeAssetUrl(item.avatar)} alt={item.name} className="h-12 w-12" />
                          <div>
                            <p className="text-sm font-semibold">{item.name}</p>
                            <div className="mt-1 flex gap-1 text-emerald-400">
                              {Array.from({ length: 5 }).map((_, index) => (
                                <span key={index}>★</span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex justify-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollTestimonialTo(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === testimonialIndex ? 'w-8 bg-emerald-400' : 'w-2 bg-emerald-800'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">
                Trusted Android App Development Company: Reasons To Choose Infynex
              </h3>
              <p className="mt-3 text-gray-600">
                Build apps with advanced features that are functional and high-performing.
              </p>
              <button className="mt-6 rounded-lg bg-emerald-500 px-6 py-3 font-semibold text-white hover:bg-emerald-600">
                Talk To Our Experts
              </button>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-gray-200 bg-white p-6">
                  <img
                    src={normalizeAssetUrl(reason.icon)}
                    alt={reason.title}
                    className="h-10 w-10"
                  />
                  <h4 className="mt-4 text-lg font-semibold">{reason.title}</h4>
                  <p className="mt-2 text-sm text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSectionCardItems
        items={faqs}
        openIndex={openFaq}
        onToggle={toggleFaq}
        sectionClassName="bg-slate-50 py-16"
        containerClassName="container mx-auto px-4"
        title="What People Ask About Android App Development"
        titleTag="h3"
        titleClassName="text-3xl md:text-4xl font-bold"
        listClassName="mt-8 grid gap-4 md:grid-cols-2"
        itemClassName="rounded-2xl border border-gray-200 bg-white p-6"
        buttonClassName="flex w-full items-start justify-between text-left"
        questionClassName="text-base font-semibold text-gray-900"
        iconClassName="ml-4 text-emerald-600"
        answerClassName="mt-3 text-sm text-gray-600"
        buttonType="button"
      />
    </div>
  )
}
