'use client'

import { useMemo, useState } from 'react'

const normalizeAssetUrl = (url: string) => url.replace(/Infynex/g, 'suffescom')

const hero = {
  title: 'Not Just Apps, We Provide You,\nImmense Marketing Opportunities',
  description:
    'Ensure exceptional growth for your business with our highly focused and innovative iPhone app development services which are not only reliable but are also cost-effective.',
  image:
    'https://www.Infynex.com/assets/img/new_suffes_images/exp.webp',
}

const serviceList = [
  'Custom iPhone App Development',
  'iPhone Game Development',
  'Multimedia Applications',
  'Sports Application',
  'Social/Chat Apps',
  'E-Commerce Apps',
  'Business Applications',
  'Utility Apps',
  'Travel Applications',
  'Lifestyle Applications',
  'iPhone Testing and Portability',
  'iPhone UI/UX Design',
  'iPhone App Upgrade',
  'iPhone Support And Maintenance',
]

const whyChoose = [
  {
    title: 'Proven Methodologies',
    description:
      "Though we are delivering iPhone app development services for years, we possess great expertise which we have gained by working for diverse industry verticals. That's why we are well aware by the best practices and implement only proven methodologies to ensure the success of your business.",
    image:
      'https://www.Infynex.com/assets/img/new_suffes_images/iphone-in1.webp',
  },
  {
    title: '100% Client Satisfaction',
    description:
      "Though we make best efforts to deliver you the iPhone apps that help your business get more traffic and greater conversions, but it's not the end. We always ensure we are providing you what you actually need and want, at reasonable prices, to make you satisfied.",
    image:
      'https://www.Infynex.com/assets/img/new_suffes_images/iphone-in2.webp',
  },
  {
    title: '24/7 Technical Support',
    description:
      'No matter when and what issues you are facing, our technical support team is always available to connect you to the right sources, so that the complexity can be minimized and production levels would be enhanced.',
    image:
      'https://www.Infynex.com/assets/img/new_suffes_images/iphone-in3.webp',
  },
]

const faqItems = [
  {
    question: 'How much does it cost to develop an iOS app?',
    answer:
      'The cost to develop an iOS app typically ranges from $5,000 to $25,000, depending on factors like app complexity, features, design, and backend requirements. For an exact estimate, it is best to consult with a professional development company.',
  },
  {
    question: 'How long does it take to develop an iOS app?',
    answer:
      'The development time for an iOS app typically ranges from 6 to 12 weeks. However, it depends on the complexity of the application. Basic apps can be built in a few weeks, while complex, feature-rich apps may take several months to complete.',
  },
  {
    question: 'What are the benefits of launching an iOS app?',
    answer:
      'Launching an iOS app offers access to a high-spending user base, enhanced security, faster development due to fewer device variations, strong performance, and better revenue opportunities through in-app purchases.',
  },
  {
    question: 'How to hire an iOS app development company?',
    answer:
      'Start by defining your app requirements, researching experienced companies, reviewing portfolios, checking client reviews, and ensuring they offer strong technical skills, robust security practices, and post-launch support.',
  },
  {
    question:
      'How do iPhone app development companies like Infynex handle security and privacy in app development?',
    answer:
      "Infynex ensures app security and privacy through data encryption, secure authentication, regular audits, and compliance with Apple's guidelines, GDPR, and other standards to protect user data throughout the development process.",
  },
]

const industries = [
  {
    title: 'Taxi Dispatch',
    icon: 'https://www.Infynex.com/assets/img/landing_page_img/taxi-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Food Delivery',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/food-delivery-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Grocery Delivery',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/grocery-delivery-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Healthcare App Development',
    icon:
      'https://www.Infynex.com/assets/img/new_suffes_images/healthcare-icon.svg',
    tag: 'New',
  },
  {
    title: 'Handyman Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/handyman-service-icon.svg',
    tag: 'New',
  },
  {
    title: 'Dog Walking',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/dog-walking-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Medicine Delivery',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/medicine-delivery-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Movers And Packers',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/movers-and-packers-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Babysitters Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/babysitter-icon.svg',
    tag: 'New',
  },
  {
    title: 'Beauty Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/beauty-service-icon.svg',
    tag: 'New',
  },
  {
    title: 'Roadside Assistance',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/roadside-assistance-icon.svg',
    tag: 'HOT',
  },
  {
    title: 'Pickup And Delivery',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/pickup-and-delivery-icon.svg',
  },
  {
    title: 'Lawn Mowing Services',
    icon: 'https://www.Infynex.com/assets/img/landing_page_img/lawn-service.svg',
  },
  {
    title: 'Car Wash',
    icon: 'https://www.Infynex.com/assets/img/landing_page_img/car-wash-service.svg',
    tag: 'New',
  },
  {
    title: 'Catering Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/catering-service-icon.svg',
  },
  {
    title: 'Cleaning Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/cleaning-service-icon.svg',
    tag: 'New',
  },
  {
    title: 'Tutors Services',
    icon: 'https://www.Infynex.com/assets/img/landing_page_img/tutor-service-icon.svg',
  },
  {
    title: 'Pest Control Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/pest-control-service.svg',
  },
  {
    title: 'Cuddling Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/cuddling-service-icon.svg',
  },
  {
    title: 'Massage Services',
    icon:
      'https://www.Infynex.com/assets/img/landing_page_img/massage-service-icon.svg',
  },
]

const awards = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/appsters-awards.webp',
    alt: 'Appsters Awards',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/inc500.webp',
    alt: 'Inc 500',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/bma-logo.webp',
    alt: 'BMA Logo',
  },
]

const ratings = [
  {
    logo: 'https://www.Infynex.com/assets/img/new_suffes_images/clutch.webp',
    rating: '4.8/5',
    text:
      'We are a top-rated mobile application development company with 4.8/5 ratings on Clutch.',
    name: 'Clutch.co',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/new_suffes_images/upwork.webp',
    rating: '4.9/5',
    text:
      'Top-rated mobile application development company on Upwork with 94% job success.',
    name: 'upwork.com',
  },
  {
    logo: 'https://www.Infynex.com/assets/img/new_suffes_images/goodf.webp',
    rating: '4.9/5',
    text: 'Based on reviews by clients, 4.9/5 ratings on Goodfirms.',
    name: 'goodfirms.co',
  },
]

const partnerships = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/firebase-logo.webp',
    alt: 'Firebase',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/stripe-logo.webp',
    alt: 'Stripe',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/cloude-fare-logo.webp',
    alt: 'Cloudflare',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/google-map-logo.webp',
    alt: 'Google Maps',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/pay-u-logo.webp',
    alt: 'PayU',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/klarna-logo.webp',
    alt: 'Klarna',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/paystack-logo.webp',
    alt: 'Paystack',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/twilio-logo.webp',
    alt: 'Twilio',
  },
]

const stats = [
  { value: '13+', label: 'Years of experience' },
  { value: '250+', label: 'Experts of technology' },
  { value: '1500+', label: 'Projects delivered to clients' },
  { value: 'ISO', label: 'Certified dev company' },
  { value: '1k+', label: 'Clients worldwide' },
]

const sectionHeading = (title: string, subtitle?: string) => (
  <div className="text-center">
    <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
      {title}
    </h2>
    {subtitle ? (
      <p className="mt-3 text-base text-slate-600 md:text-lg">{subtitle}</p>
    ) : null}
  </div>
)

export default function IosAppDevelopmentPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const formattedHeroTitle = useMemo(
    () =>
      hero.title.split('\n').map((line, index) => (
        <span key={line} className="block">
          {line}
          {index === 0 ? <br /> : null}
        </span>
      )),
    []
  )

  return (
    <main className="bg-white text-slate-900">
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div className="pb-[60px]">
            <p className="text-sm uppercase tracking-[0.25em] text-emerald-300">
              iPhone App Development Services
            </p>
            <h1 className="mt-4 font-semibold leading-tight md:text-4xl">
              {formattedHeroTitle}
            </h1>
            <p className="mt-5 text-base text-slate-200 md:text-lg">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/portfolio"
                className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300"
              >
                View Our Portfolio
              </a>
              <a
                href="/contact-us"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -right-6 top-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
            <div className="absolute -left-8 bottom-8 h-32 w-32 rounded-full bg-indigo-400/20 blur-2xl" />
            <div className="aspect-[5/3] overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
              <img
                src={normalizeAssetUrl(hero.image)}
                alt="Not Just Apps, We Provide You, Immense Marketing Opportunities"
                className="block h-full w-full rounded-3xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-6 px-4 py-10 md:grid-cols-[1fr_auto_1fr]">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">
              Wanna see our work?
            </h3>
            <a
              href="/portfolio"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white"
            >
              View Our Portfolio
            </a>
          </div>
          <div className="hidden text-center text-sm font-semibold uppercase text-slate-400 md:block">
            or
          </div>
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-center shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Interested?</h3>
            <a
              href="/contact-us"
              className="mt-3 inline-flex items-center justify-center rounded-full bg-emerald-500 px-5 py-2 text-sm font-semibold text-white"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Our Range of Services Make Us Your Dream Catchers',
            'Efficient and business-centered mobile apps created by following best strategies. Our iPhone development services include:'
          )}
          <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.2fr]">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow">
              <img
                src={normalizeAssetUrl('https://www.Infynex.com/assets/img/new_suffes_images/drem.webp')}
                alt="Our Range of Services Make Us Your Dream Catchers"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <ol className="grid gap-4 sm:grid-cols-2">
              {serviceList.map((service, index) => (
                <li
                  key={service}
                  className="flex items-start gap-3 rounded-2xl border border-white bg-white p-4 shadow-sm"
                >
                  <span className="text-sm font-semibold text-emerald-600">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <p className="text-sm font-medium text-slate-800">
                    {service}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('What We Do?')}
          <p className="mt-4 text-center text-base text-slate-600">
            Infynex Solutions is a leading provider of iPhone applications that
            takes pride in delivering highly robust and comprehensive apps,
            specially tailored to cater the needs of diverse industry verticals.
            Our proven expertise lets develop and deliver feature-rich,
            state-of-the-art iPhone apps.
          </p>
          <div className="mt-8 grid gap-6 text-sm leading-relaxed text-slate-600 md:grid-cols-2">
            <p>
              As the number of iPhone users is growing, it is highly crucial to
              develop interactive apps to enhance users' experience. And when you
              are running your own business, it becomes more important to invest
              in such apps as it lets you gather more audience and get potential
              customers attracted to it. And as we are expert in the iPhone app
              development, you can trust us for the development of highly
              engaging, functional and futuristic apps, regardless its focus is
              on the education, business, gaming, music, social networking,
              health and fitness, beauty or any other. We have the skill-set to
              convert your business related dreams into reality.
            </p>
            <p>
              Infynex Solutions has expertise in the iPhone app development and
              is a one-stop-shop for all those who are looking for a perceptible,
              innovative and business-centered business solutions. We help our
              clients to ensure noticeable market presence. We have employed
              best brains who not only have in-depth expertise but are also
              recognized for delivering excellence. iPhone apps developed by us
              empower your business to achieve a competitive edge in the
              ever-growing industry. We deliver our clients high-performance
              apps which we develop while focusing on the ever-changing market
              trends.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Why Choose Us?',
            'We are the trust of thousands of our clients and here are the main reasons for that:'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(item.image)}
                  alt={item.title}
                  className="h-40 w-full rounded-2xl object-cover"
                  loading="lazy"
                />
                <h3 className="mt-4 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-slate-600">
                  {item.description}
                </p>
                <div className="mt-6 h-1 w-16 rounded-full bg-emerald-500" />
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('FAQs')}
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <button
                    type="button"
                    className="flex w-full items-center justify-between text-left"
                    onClick={() =>
                      setOpenIndex((prev) => (prev === index ? null : index))
                    }
                  >
                    <span className="text-base font-semibold text-slate-900">
                      {item.question}
                    </span>
                    <span className="ml-4 text-xl text-emerald-500">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-3 text-sm text-slate-600">
                      {item.answer}
                    </p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('Industries we cater to')}
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="relative rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center shadow-sm"
              >
                {industry.tag ? (
                  <span className="absolute right-4 top-4 rounded-full bg-emerald-500 px-2 py-1 text-xs font-semibold text-white">
                    {industry.tag}
                  </span>
                ) : null}
                <img
                  src={normalizeAssetUrl(industry.icon)}
                  alt={industry.title}
                  className="mx-auto h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-sm font-semibold text-slate-900">
                  {industry.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          {sectionHeading('Our Awards')}
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {awards.map((award) => (
              <div
                key={award.alt}
                className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center"
              >
                <img
                  src={normalizeAssetUrl(award.src)}
                  alt={award.alt}
                  className="mx-auto h-20 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('Rated in Top Tech Firms')}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {ratings.map((rating) => (
              <div
                key={rating.name}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(rating.logo)}
                  alt={rating.name}
                  className="h-12 object-contain"
                  loading="lazy"
                />
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  {rating.rating}
                </p>
                <p className="mt-2 text-sm text-slate-600">{rating.text}</p>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {rating.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('Strategic Partnerships')}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {partnerships.map((partner) => (
              <div
                key={partner.alt}
                className="flex items-center justify-center rounded-2xl border border-slate-200 bg-white p-4"
              >
                <img
                  src={normalizeAssetUrl(partner.src)}
                  alt={partner.alt}
                  className="h-10 object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="grid gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center md:grid-cols-5">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
