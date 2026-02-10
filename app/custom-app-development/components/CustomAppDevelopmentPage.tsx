'use client'

import { useCallback, useEffect, useState } from 'react'
import { useAccordion } from '@/lib/useAccordion'
import FaqSectionCardItems from './FaqSectionCardItems'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { submitContactForm } from '@/lib/contactApi'

const normalizeAssetUrl = (url: string) => url.replace(/Infynex/g, 'suffescom')

const heroBadges = [
  {
    src: 'https://www.Infynex.com/assets/img/icons/clutch-software-2025.webp',
    alt: 'Clutch 2025',
    width: 141,
    height: 157,
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/g2-users-love-us.svg',
    alt: 'G2 Users Love Us',
    width: 125,
    height: 134,
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/blog-designrush-2025.webp',
    alt: 'Design Rush 2025',
    width: 125,
    height: 154,
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/top-app-dev.webp',
    alt: 'Top App Development Companies',
    width: 150,
    height: 150,
  },
]

const trustedBrands = [
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/nbc-logo-black.webp',
    alt: 'NBC',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/udrive.webp',
    alt: 'Udrive',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/emaar.webp',
    alt: 'Emaar',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/universal.webp',
    alt: 'Universal',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/wellcare.webp',
    alt: 'Wellcare',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/university-of-alberta.webp',
    alt: 'University of Alberta',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/humana.webp',
    alt: 'Humana',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/the-cigna-group.webp',
    alt: 'The Cigna Group',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/stripe.webp',
    alt: 'Stripe',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/prosper.webp',
    alt: 'Prosper',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/goodrx.webp',
    alt: 'GoodRX',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/brightwheel.webp',
    alt: 'Brightwheel',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/epic.webp',
    alt: 'Epic',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/comcast.webp',
    alt: 'Comcast',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/aetna.webp',
    alt: 'Aetna',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/custom-software-development-philips-logo.webp',
    alt: 'Philips',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/bungie-foundation.svg',
    alt: 'Bungie Foundation',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/ecao-logo.svg',
    alt: 'ECAO',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/university-calgary.svg',
    alt: 'University of Calgary',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/credit-canada.svg',
    alt: 'Credit Canada',
  },
]

const portfolioItems = [
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/one-time-shop.webp',
    name: '1 Time Shop',
    category: 'Delivery App',
    description:
      '1 Time Shop is designed to be one platform that offers on-demand services like payments, taxi services, food delivery, pick-up and drop, and grocery shopping.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-one-time-shop.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/tiktok-unity-logo.webp',
    name: 'Unity',
    category: 'Entertainment App',
    description:
      'Unity is an entertainment app for video viewing and creation with AI-powered avatars, rich media effects, and live interactions.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-unity.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/radisson-hotels.svg',
    name: 'Radisson Hotels',
    category: 'Hotel Booking Platform',
    description:
      'A web platform that helps customers book rooms, meeting space, and membership rewards with instant support.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-radison-hotels.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/monsters-logo-.webp',
    name: 'Universal Monsters',
    category: 'eCommerce Store in Web3',
    description:
      'A store that infuses NFTs with apparel using NFC chips and advanced blockchain stacks.',
    image: 'https://www.Infynex.com/assets/img/web-img/web-app-monster.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/newversion_images/class-central-logo.webp',
    name: 'Class Central',
    category: 'Aggregate Courses Web Platform',
    description:
      'A one-stop platform for online courses, letting users register, browse, and join classes from multiple instructors.',
    image: 'https://www.Infynex.com/assets/img/newversion_images/web-app-class-central.webp',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/portfolio/soorx-logo.svg',
    name: 'Soorx',
    category: 'Crypto Trading Platform',
    description:
      'A seamless trading experience aligned with Islamic values, featuring advanced financial tools and security.',
    image: 'https://www.Infynex.com/assets/img/web-img/custom-app-dev-soorx.webp',
  },
]

const partners = [
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/salesforce-partner-logo.webp',
    alt: 'Salesforce Partner',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/sap-partner-logo.webp',
    alt: 'SAP Partner',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/ibm-business-partner-logo.webp',
    alt: 'IBM Business Partner',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/microsoft-partner-logo.webp',
    alt: 'Microsoft Partner',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/alibaba-cloud-logo.webp',
    alt: 'Alibaba Cloud',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/adobe-partner-logo.webp',
    alt: 'Adobe Partner',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/kentico-bronze-partner-logo-new-n.webp',
    alt: 'Google Partner',
  },
  {
    src: 'https://www.Infynex.com/assets/img/newversion_images/aws-server-logo.webp',
    alt: 'AWS Server',
  },
]

const recognition = [
  {
    src: 'https://www.Infynex.com/assets/img/icons/g2-logo.webp',
    alt: 'G2 logo',
    rating: '5.0',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/goodfirms.webp',
    alt: 'GoodFirms logo',
    rating: '5.0',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/clutch-logo.webp',
    alt: 'Clutch logo',
    rating: '4.9',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/design-rush-logo.webp',
    alt: 'DesignRush logo',
    rating: '5.0',
  },
]

const mediaCoverage = [
  {
    id: 'clutch-custm',
    logo: 'https://www.Infynex.com/assets/img/web-img/Infynex-clutch-global.webp',
    image: 'https://www.Infynex.com/assets/img/web-img/Infynex-clutch-custm.webp',
    alt: 'Clutch coverage',
  },
  {
    id: 'market-watch',
    logo: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-media-market-watch.webp',
    image: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-co-media-market-watch.webp',
    alt: 'Market Watch coverage',
  },
  {
    id: 'outlook',
    logo: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-media-outlook.webp',
    image: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-co-media-outlook.webp',
    alt: 'Outlook coverage',
  },
  {
    id: 'tech-times',
    logo: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-media-tech-times.webp',
    image: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-co-media-tech-times.webp',
    alt: 'Tech Times coverage',
  },
  {
    id: 'taiwan-news',
    logo: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-media-taiwannews.webp',
    image: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-co-media-taiwan-news.webp',
    alt: 'Taiwan News coverage',
  },
  {
    id: 'digital-journal',
    logo: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-media-digital-journal.webp',
    image: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-co-media-digital-journal.webp',
    alt: 'Digital Journal coverage',
  },
  {
    id: 'hindustan-times',
    logo: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-media-hindustan-times.webp',
    image: 'https://www.Infynex.com/assets/img/newversion_images/Infynex-co-media-hindustan-times.webp',
    alt: 'Hindustan Times coverage',
  },
  {
    id: 'designrush-custm',
    logo: 'https://www.Infynex.com/assets/img/web-img/suffes-designrush.webp',
    image: 'https://www.Infynex.com/assets/img/web-img/Infynex-designrush-custm.webp',
    alt: 'DesignRush coverage',
  },
]

const reasons = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/expert-team.svg',
    title: 'Expert Team',
    description:
      'We use our expertise in the field to apply the latest technology to solve complex business problems.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/transparent-process.svg',
    title: 'Clear and Easy Process',
    description:
      'We maintain an evident development process that involves transferring up-to-date reports about each project milestone.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/global-network.svg',
    title: 'Multi-Domain Support',
    description:
      'Our team has expertise in various fields, enabling us to support significant industries worldwide effectively.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/on-time-results.svg',
    title: 'Timely Output',
    description:
      'We guarantee timely and accurate completion and delivery of your project, with no technical issues or bugs.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/mobile-app-development-end-to-end-services.svg',
    title: 'End-To-End Services',
    description:
      'We provide a full range of services, including development, testing, and ongoing support after deployment.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/custom-software-development-support.svg',
    title: '24x7 Availability',
    description:
      'Our technical support team is always available to answer your queries and provide the necessary technical help.',
  },
]

const processSteps = [
  {
    number: '01',
    icon: 'https://www.Infynex.com/assets/img/icons/analyze-business.svg',
    title: 'Analyze the Business Requirements',
    description:
      'We collaborate closely with the client to gather insights into project goals and expected outcomes.',
  },
  {
    number: '02',
    icon: 'https://www.Infynex.com/assets/img/icons/development-implementation.svg',
    title: 'Development and Implementation',
    description:
      'Our skilled developers use agile methodologies to build and implement the app in manageable sprints.',
  },
  {
    number: '03',
    icon: 'https://www.Infynex.com/assets/img/icons/qa-&-testing.svg',
    title: 'Quality Assurance and Testing',
    description:
      'After each milestone, rigorous quality checks are conducted to identify and resolve issues.',
  },
  {
    number: '04',
    icon: 'https://www.Infynex.com/assets/img/icons/deployment-and-maintenance.svg',
    title: 'Deployment and Maintenance',
    description:
      'We ensure a smooth deployment process and ongoing maintenance for optimal app performance.',
  },
  {
    number: '05',
    icon: 'https://www.Infynex.com/assets/img/icons/user-training-support.svg',
    title: 'User Training and Support',
    description:
      'Comprehensive training sessions are provided to ensure your team can effectively use the app.',
  },
  {
    number: '06',
    icon: 'https://www.Infynex.com/assets/img/icons/continuous-improvements.svg',
    title: 'Continuous Improvements',
    description:
      'We gather user feedback and analyze performance to identify areas for enhancement.',
  },
]

const testimonials = [
  {
    image: 'https://www.Infynex.com/assets/img/web-img/moonie.webp',
    quote: '"Moonie Lantion - Director - Digital Technology Products at NBCUniversal Media."',
    name: 'Moonie Lantion',
    brand: 'NBCUniversal Media',
    brandLogo: 'https://www.Infynex.com/assets/img/newversion_images/nbc-logo-black.webp',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/david.webp',
    quote: '"From consulting to development, Infynex guided us at every step."',
    name: 'David Colorado',
    brand: 'Unity',
    brandLogo: 'https://www.Infynex.com/assets/img/new_suffes_images/tiktok-unity-logo.webp',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/reginald-lee.webp',
    quote: '"Witness the spectacular gaming opportunities in the world of virtual reality."',
    name: 'SetVR',
    brand: 'Martial Art App',
    brandLogo: 'https://www.Infynex.com/assets/img/icons/setvrx-logo.svg',
  },
]

const faqs = [
  {
    question: 'How much does custom application and app development cost?',
    answer:
      'The cost depends on project complexity, features, technology stack, timeline, and team expertise. We assess requirements and provide a tailored estimate.',
  },
  {
    question: 'What is the process for offering custom app development for a client?',
    answer:
      'Our process includes discovery and consultation, planning and proposal, design, development, testing, deployment and maintenance, and ongoing support.',
  },
  {
    question: 'Can you take over projects from our current vendor?',
    answer:
      'Yes. We handle transitions by understanding existing codebases, reviewing documentation, and aligning with ongoing progress.',
  },
  {
    question: 'Are you experienced in integrating AI services into existing applications?',
    answer:
      'Absolutely. We integrate NLP, computer vision, predictive analytics, recommendation systems, and chatbots into existing apps and software.',
  },
  {
    question: 'Should we choose a technology stack ourselves, or will your team recommend the best options?',
    answer:
      'We recommend the best stack based on requirements, budget, and complexity, and we can also work with your preferred technologies.',
  },
  {
    question: 'How do you manage changes in requirements during the development process?',
    answer:
      'We use Agile methodologies with iterative updates, structured change requests, and clear communication to manage evolving needs.',
  },
  {
    question: 'Which technologies does Infynex use for custom application development?',
    answer:
      'We use modern front-end, back-end, database, cloud, mobile, AI, and blockchain technologies tailored to project needs.',
  },
]

const formBadges = [
  {
    src: 'https://www.Infynex.com/assets/img/icons/g2-momentum.svg',
    alt: 'G2 Momentum',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/blog-designrush-2025.webp',
    alt: 'DesignRush 2025',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/deloitte.svg',
    alt: 'Deloitte',
  },
]

export default function CustomAppDevelopmentPage() {
  const [portfolioRef, portfolioApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 4500, stopOnInteraction: false }),
  ])
  const [portfolioIndex, setPortfolioIndex] = useState(0)

  const [testimonialRef, testimonialApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ])
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  const [activeMedia, setActiveMedia] = useState(mediaCoverage[0])
  const { openIndex: openFaq, toggleIndex: toggleFaq } = useAccordion(0)

  const handleContactSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    source: string
  ) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await submitContactForm({
        full_name: String(formData.get('full_name') || ''),
        email: String(formData.get('email') || ''),
        mobile_number: String(formData.get('mobile_number') || ''),
        message: String(formData.get('message') || ''),
        website: String(formData.get('website') || ''),
        source,
      })
      form.reset()
    } catch (error) {
      console.error('Contact form error:', error)
    }
  }

  const scrollPortfolioTo = useCallback(
    (index: number) => portfolioApi && portfolioApi.scrollTo(index),
    [portfolioApi]
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
      <section className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-white pb-[50px]">
        <div className="container mx-auto px-4 py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                <span className="block text-orange-400">Best Mobile App</span>
                Development Company
              </h1>
              <p className="text-lg text-slate-200">
                We build more than just apps. We craft digital experiences that inspire action,
                engage users, and drive growth. Let us help you design a custom app that
                captivates your audience and creates a lasting impact.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                {heroBadges.map((badge) => (
                  <img
                    key={badge.alt}
                    src={normalizeAssetUrl(badge.src)}
                    alt={badge.alt}
                    width={badge.width}
                    height={badge.height}
                    loading="lazy"
                    className="h-20 w-auto"
                  />
                ))}
              </div>
            </div>

            <div className="bg-white text-gray-900 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-semibold">Get in Touch</h3>
              <p className="mt-2 text-sm text-gray-500">Let us help you transform and grow.</p>
              <form className="mt-6 space-y-4" onSubmit={(event) => handleContactSubmit(event, 'custom-app-hero')}>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <input
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number With Country Code"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <textarea
                  name="message"
                  placeholder="Your Project description"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold">Infynex is Trusted By The Brands You Know</h2>
            <p className="mt-3 text-gray-600">
              We have extensive experience collaborating with esteemed brands leading in their
              respective sectors. Here is a list of our most renowned clients:
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {trustedBrands.map((brand) => (
              <div key={brand.alt} className="flex items-center justify-center rounded-xl bg-gray-50 p-4">
                <img
                  src={normalizeAssetUrl(brand.src)}
                  alt={brand.alt}
                  loading="lazy"
                  className="h-12 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold">
              Quick Sneak Peek of Products We Have Developed for Our Clients
            </h3>
          </div>

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
                          loading="lazy"
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
                    index === portfolioIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="rounded-2xl bg-slate-900 px-8 py-12 text-white">
            <div className="grid gap-8 lg:grid-cols-[2fr_1fr] lg:items-center">
              <div>
                <h3 className="text-3xl font-bold">Let us Join Hands For Tech-Powered Innovation</h3>
                <p className="mt-3 text-slate-200">
                  If you can imagine it, we can help make it a reality. Just connect with our
                  team and begin your path to success.
                </p>
              </div>
              <div className="lg:text-right">
                <button className="rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
                  Call Us Today
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold">Our Technology Partners</h3>
            <p className="mt-3 text-gray-600">
              As a renowned app development company, we align with the latest technology partners
              to deliver robust products for our clients.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {partners.map((partner) => (
              <div key={partner.alt} className="flex items-center justify-center rounded-xl bg-gray-50 p-6">
                <img
                  src={normalizeAssetUrl(partner.src)}
                  alt={partner.alt}
                  loading="lazy"
                  className="h-14 w-auto"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-14" id="shopify-recognize">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">We Are Recognized By</h3>
              <p className="mt-3 text-gray-600">
                Infynex Solutions Inc. has earned the top spot for providing quality services on
                the most reputable platforms.
              </p>
              <div className="mt-6 flex justify-center">
                <img
                  src={normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/awards.svg')}
                  alt="awards"
                  loading="lazy"
                  className="h-40 w-auto"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {recognition.map((item) => (
                <div key={item.alt} className="rounded-2xl bg-white p-6 text-center shadow-sm">
                  <img
                    src={normalizeAssetUrl(item.src)}
                    alt={item.alt}
                    loading="lazy"
                    className="mx-auto h-16 w-auto"
                  />
                  <h6 className="mt-4 text-2xl font-semibold text-gray-900">{item.rating}</h6>
                  <div className="mt-2 flex justify-center gap-1 text-orange-500">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <span key={index}>★</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h3 className="text-3xl md:text-4xl font-bold">Get Started With Our Tech-Driven App Development Services</h3>
          <p className="mt-3 text-slate-200">
            Infynex can seamlessly join your mobile project at any stage and help you
            confidently move forward with innovative solutions.
          </p>
          <button className="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
            Discuss Your Idea
          </button>
        </div>
      </section>

      <section className="py-14" id="media-target">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold">Media Coverage</h3>
            <p className="mt-3 text-gray-600">
              Infynex has earned a stellar reputation for delivering exceptional services. Here
              are some of our media coverages that highlight our achievements in the industry:
            </p>
          </div>
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
            <div className="flex flex-wrap gap-4">
              {mediaCoverage.map((media) => (
                <button
                  key={media.id}
                  type="button"
                  onClick={() => setActiveMedia(media)}
                  className={`rounded-xl border px-4 py-3 transition ${
                    activeMedia.id === media.id
                      ? 'border-orange-500 bg-orange-50'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <img
                    src={normalizeAssetUrl(media.logo)}
                    alt={media.alt}
                    loading="lazy"
                    className="h-10 w-auto"
                  />
                </button>
              ))}
            </div>
            <div className="flex items-center justify-center">
              <img
                src={normalizeAssetUrl(activeMedia.image)}
                alt={activeMedia.alt}
                loading="lazy"
                className="w-full max-w-md rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <h3 className="text-3xl md:text-4xl font-bold">Reasons To Choose Us</h3>
              <p className="mt-3 text-gray-600">
                Infynex Solutions Inc. is a leading IT company with a proven track record of
                delivering quality IT services. Here are some compelling reasons to choose us:
              </p>
              <button className="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
                Consult Our Experts
              </button>
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div key={reason.title} className="rounded-2xl border border-gray-200 p-6">
                  <div className="flex items-start gap-4">
                    <img
                      src={normalizeAssetUrl(reason.icon)}
                      alt={reason.title}
                      loading="lazy"
                      className="h-10 w-10"
                    />
                    <div>
                      <h4 className="text-lg font-semibold">{reason.title}</h4>
                      <p className="mt-2 text-sm text-gray-600">{reason.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-slate-50 py-14">
        <div className="container mx-auto px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr_2fr]">
            <div>
              <img
                src={normalizeAssetUrl('https://www.Infynex.com/assets/img/icons/clients-quote.svg')}
                alt="clients quote"
                className="h-10 w-10"
              />
              <h3 className="mt-4 text-3xl md:text-4xl font-bold">Our Clients Trust and Value Us</h3>
              <p className="mt-3 text-gray-600">
                Regardless of the project complexity, our expert team is skilled at developing
                practical mobile applications and websites.
              </p>
              <button className="mt-6 rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700">
                Get free Consultation
              </button>
            </div>
            <div>
              <div className="overflow-hidden" ref={testimonialRef}>
                <div className="flex">
                  {testimonials.map((item) => (
                    <div key={item.name} className="min-w-0 flex-[0_0_100%] px-2">
                      <div className="rounded-2xl bg-white p-6 shadow-lg">
                        <img
                          src={normalizeAssetUrl(item.image)}
                          alt={item.name}
                          className="h-44 w-full rounded-xl object-cover"
                        />
                        <p className="mt-4 text-gray-600">{item.quote}</p>
                        <div className="mt-4 flex items-center gap-3">
                          <img
                            src={normalizeAssetUrl(item.brandLogo)}
                            alt={item.brand}
                            className="h-12 w-12"
                          />
                          <div>
                            <h4 className="text-base font-semibold">{item.name}</h4>
                            <p className="text-sm text-gray-500">{item.brand}</p>
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
                      index === testimonialIndex ? 'w-8 bg-orange-600' : 'w-2 bg-gray-300'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-14" id="how-it-works">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h3 className="text-3xl md:text-4xl font-bold">
              Our Proven Process for Creating Intuitive and User-Friendly Applications
            </h3>
            <p className="mt-3 text-gray-600">
              Our app development is an ongoing, iterative process that improves the smooth
              functionalities of your final product, enabling it to fulfil your business-driven goals.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {processSteps.map((step) => (
              <div key={step.number} className="rounded-2xl border border-gray-200 bg-white p-6">
                <p className="text-2xl font-semibold text-orange-600">{step.number}</p>
                <div className="mt-4 flex h-12 w-12 items-center justify-center rounded-full bg-orange-50">
                  <img src={normalizeAssetUrl(step.icon)} alt={step.title} className="h-6 w-6" />
                </div>
                <h4 className="mt-4 text-lg font-semibold">{step.title}</h4>
                <p className="mt-2 text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FaqSectionCardItems
        items={faqs}
        openIndex={openFaq}
        onToggle={toggleFaq}
        sectionClassName="bg-slate-50 py-14"
        containerClassName="container mx-auto px-4"
        headerWrapperClassName="max-w-3xl"
        title="FAQs for Custom Application Development Services"
        titleTag="h3"
        titleClassName="text-3xl md:text-4xl font-bold"
        subtitle="Here are the answers to most common questions."
        subtitleClassName="mt-3 text-gray-600"
        listClassName="mt-8 grid gap-4 md:grid-cols-2"
        itemClassName="rounded-2xl border border-gray-200 bg-white p-6"
        buttonClassName="flex w-full items-start justify-between text-left"
        questionClassName="text-base font-semibold text-gray-900"
        iconClassName="ml-4 text-orange-600"
        answerClassName="mt-3 text-sm text-gray-600"
        buttonType="button"
      />

      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h3 className="text-3xl md:text-4xl font-bold">Start Your Conversation By Filling Out The Form</h3>
          </div>
          <div className="mt-10 grid gap-10 lg:grid-cols-2">
            <div>
              <ul className="space-y-3 text-gray-600">
                <li>Signed NDA to keep all project-related information confidential</li>
                <li>Free consultation for your project</li>
                <li>Transparent pricing policy</li>
                <li>Flexible engagement models</li>
                <li>Swift kick start to your project</li>
                <li>We always deliver the source code with the project</li>
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-4">
                {formBadges.map((badge) => (
                  <img
                    key={badge.alt}
                    src={normalizeAssetUrl(badge.src)}
                    alt={badge.alt}
                    loading="lazy"
                    className="h-16 w-auto"
                  />
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-lg">
              <h4 className="text-xl font-semibold">Ready To Start Your Business?</h4>
              <p className="mt-2 text-gray-500">Leave Your Details Below</p>
              <form className="mt-6 space-y-4" onSubmit={(event) => handleContactSubmit(event, 'custom-app-footer')}>
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <input
                  type="text"
                  name="mobile_number"
                  placeholder="Mobile Number With Country Code"
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <textarea
                  name="message"
                  placeholder="Your Main Skill"
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-4 py-3"
                />
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
                <button
                  type="submit"
                  className="w-full rounded-lg bg-orange-600 px-6 py-3 font-semibold text-white hover:bg-orange-700"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
