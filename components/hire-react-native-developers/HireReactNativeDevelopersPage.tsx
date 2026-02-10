'use client'

import { useState } from 'react'

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

const services = [
  {
    title: 'Staff Augmentation for React Native',
    description:
      'Extend your team with React Native developers who can accelerate delivery.',
    icon: 'https://www.Infynex.com/assets/img/icons/staff-augmentation.svg',
  },
  {
    title: 'Custom React Native App Development',
    description:
      'Build cross-platform apps tailored to your business needs and users.',
    icon: 'https://www.Infynex.com/assets/img/icons/custom-app.svg',
  },
  {
    title: 'React Native App Migration',
    description:
      'Move existing apps to React Native for better performance and scale.',
    icon: 'https://www.Infynex.com/assets/img/icons/migration.svg',
  },
  {
    title: 'React Native Maintenance and Support',
    description:
      '24/7 support with upgrades, fixes, and performance monitoring.',
    icon: 'https://www.Infynex.com/assets/img/icons/maintenance.svg',
  },
  {
    title: 'React Native App Security',
    description:
      'Secure data, comply with standards, and harden app access flows.',
    icon: 'https://www.Infynex.com/assets/img/icons/security.svg',
  },
  {
    title: 'React Native App Testing and QA',
    description:
      'Full QA coverage to reduce defects and improve stability.',
    icon: 'https://www.Infynex.com/assets/img/icons/testing.svg',
  },
]

const steps = [
  {
    step: '1',
    title: 'Get in Touch with Our Team',
    description:
      'Share your goals and timeline. We respond quickly to align on scope.',
    icon: 'https://www.Infynex.com/assets/img/icons/team.svg',
  },
  {
    step: '2',
    title: 'Discuss Your Requirements',
    description:
      'We review features, integrations, and budget to shape the plan.',
    icon: 'https://www.Infynex.com/assets/img/icons/requirement.svg',
  },
  {
    step: '3',
    title: 'Select the Expert Developers',
    description:
      'Choose React Native specialists that match your product needs.',
    icon: 'https://www.Infynex.com/assets/img/icons/expertise.svg',
  },
  {
    step: '4',
    title: 'Interview Our Team',
    description:
      'Validate skills, communication, and delivery alignment.',
    icon: 'https://www.Infynex.com/assets/img/icons/interview.svg',
  },
  {
    step: '5',
    title: 'Choose an Engagement Model',
    description:
      'Pick hourly, monthly, or quarterly models based on your scope.',
    icon: 'https://www.Infynex.com/assets/img/icons/engagement-model.svg',
  },
  {
    step: '6',
    title: 'Start the Development Journey',
    description:
      'Kick off delivery within 24 hours of finalizing the team.',
    icon: 'https://www.Infynex.com/assets/img/icons/development.svg',
  },
]

const techStack = [
  'C#',
  'ASP.NET',
  'MVC Framework',
  'Entity Framework',
  'ASP.NET Web API',
  'Windows Forms',
  'WPF',
  'ASP.NET Identity',
  'Azure',
  'SQL Server',
  'Unit Testing (MSTest, NUnit)',
  'Visual Studio',
  'Dependency Injection',
  'REST and SOAP Web Services',
  'Git',
  'Docker',
  'Microservices Architecture',
  'Quarkus',
]

const developerProfiles = [
  {
    name: 'Emily R.',
    role: 'Senior React Native Developer',
    experience: '6 years of experience',
    skills:
      'React Native, JavaScript, Redux, API Integration, Performance Optimization, UI/UX Principles.',
    image: 'https://www.Infynex.com/assets/img/icons/emily-r.webp',
  },
  {
    name: 'Marcus D.',
    role: 'Lead React Native Developer',
    experience: '8+ years of experience',
    skills:
      'React Native, JavaScript, TypeScript, Node.js, GraphQL, State Management, Cloud Services.',
    image: 'https://www.Infynex.com/assets/img/icons/marcus-d.webp',
  },
  {
    name: 'Sarah L.',
    role: 'Mid-Level React Native Developer',
    experience: '3 years of experience',
    skills:
      'React Native, JavaScript, UI Components, Native Modules, Testing, Git, Troubleshooting.',
    image: 'https://www.Infynex.com/assets/img/icons/sarah-l.webp',
  },
  {
    name: 'David S.',
    role: 'Senior React Native Developer',
    experience: '7 years of experience',
    skills:
      'React Native, JavaScript (ES6+), React Navigation, Performance Optimization, Agile.',
    image: 'https://www.Infynex.com/assets/img/icons/david-s.webp',
  },
  {
    name: 'Jessica B.',
    role: 'Junior React Native Developer',
    experience: '2+ years of experience',
    skills:
      'React Native, JavaScript, HTML/CSS, Git, Debugging, UI Implementation.',
    image: 'https://www.Infynex.com/assets/img/icons/jessica-b.webp',
  },
]

const highlights = [
  'Transparent Communication',
  'Round the Clock Support',
  '100% Satisfaction Rate',
  'Pre-Vetted Developers',
  'IP Protection and NDA',
]

const pricingModels = [
  {
    title: 'Hourly',
    description:
      'Pay only for the hours spent on delivery with flexible ramp-up or ramp-down.',
    icon: 'https://www.Infynex.com/assets/img/icons/hourly.svg',
  },
  {
    title: 'Monthly',
    description:
      'Engage developers full-time on a monthly contract for stable velocity.',
    icon: 'https://www.Infynex.com/assets/img/icons/monthly.svg',
  },
  {
    title: 'Quarterly',
    description:
      'Ensure continuity and consistent delivery for longer project cycles.',
    icon: 'https://www.Infynex.com/assets/img/icons/quarterly.svg',
  },
]

const portfolioItems = [
  {
    title: '1 Time Shop',
    category: 'Delivery App',
    description:
      'On-demand services platform with payments, taxi, and grocery delivery.',
    image: 'https://www.Infynex.com/assets/img/portfolio/one-time-shop.webp',
  },
  {
    title: 'Unity',
    category: 'Entertainment App',
    description:
      'Video creation platform with effects, avatars, and live features.',
    image: 'https://www.Infynex.com/assets/img/portfolio/tiktok-unity-logo.webp',
  },
  {
    title: 'Radisson Hotels',
    category: 'Hotel Booking Platform',
    description:
      'Global booking platform with rewards and support integrations.',
    image: 'https://www.Infynex.com/assets/img/portfolio/radisson-hotels.svg',
  },
  {
    title: 'Universal Monsters',
    category: 'Web3 Commerce',
    description:
      'NFC-enabled apparel store with NFT unlocks and Web3 stack.',
    image: 'https://www.Infynex.com/assets/img/portfolio/monsters-logo-.webp',
  },
  {
    title: 'Class Central',
    category: 'Education Platform',
    description:
      'Course aggregation platform with rich search and enrollment flows.',
    image: 'https://www.Infynex.com/assets/img/newversion_images/class-central-logo.webp',
  },
  {
    title: 'Soorx',
    category: 'Crypto Trading',
    description:
      'Compliant trading platform with secure financial tooling.',
    image: 'https://www.Infynex.com/assets/img/portfolio/soorx-logo.svg',
  },
]

const successStories = [
  {
    title: 'Soorx',
    category: 'Digital Finance',
    description:
      'Trading experience within Islamic values with advanced financial tools.',
    image: 'https://www.Infynex.com/assets/img/portfolio/soor.webp',
  },
  {
    title: 'Stargate',
    category: 'DeFi Platform',
    description:
      'Composable liquidity transport protocol across omnichain DeFi.',
    image: 'https://www.Infynex.com/assets/img/web-img/stargate.webp',
  },
  {
    title: 'BvsB',
    category: 'Web3 Social Trading',
    description:
      'Community-driven pooled trading with transparent transactions.',
    image: 'https://www.Infynex.com/assets/img/web-img/bvb.webp',
  },
  {
    title: 'BloomBot',
    category: 'Cross-Chain Trading Bot',
    description:
      'Automated trading across exchanges with real-time analytics.',
    image: 'https://www.Infynex.com/assets/img/web-img/bloombot.webp',
  },
  {
    title: 'Universal Monsters',
    category: 'Web3 Commerce',
    description:
      'NFT apparel store with NFC-enabled unlocks and eCommerce tooling.',
    image: 'https://www.Infynex.com/assets/img/portfolio/universal-monester-screen.webp',
  },
  {
    title: 'HyperPay',
    category: 'Wallet and Card App',
    description:
      'Digital wallet with a global HyperCard for fast transactions.',
    image: 'https://www.Infynex.com/assets/img/portfolio/mobile-app-development-hyper-pay.webp',
  },
]

const reasons = [
  {
    title: 'Cost-Effective Hiring',
    description: 'Flexible pricing options aligned with your project scope.',
    icon: 'https://www.Infynex.com/assets/img/icons/cost-effective.svg',
  },
  {
    title: 'Quick Project Delivery',
    description: 'Streamlined workflows to meet deadlines with confidence.',
    icon: 'https://www.Infynex.com/assets/img/icons/project.svg',
  },
  {
    title: 'Trusted Quality Standards',
    description: 'High attention to detail and consistent QA practices.',
    icon: 'https://www.Infynex.com/assets/img/icons/quality-assurance.svg',
  },
  {
    title: 'Flexible Engagement Models',
    description: 'Choose the model that matches your roadmap and budget.',
    icon: 'https://www.Infynex.com/assets/img/icons/engagement-model.svg',
  },
  {
    title: 'Transparent Communication',
    description: 'Clear status updates and delivery visibility.',
    icon: 'https://www.Infynex.com/assets/img/icons/client.svg',
  },
  {
    title: 'Timezone Compatibility',
    description: 'Collaborate smoothly across global time zones.',
    icon: 'https://www.Infynex.com/assets/img/icons/collaboration.svg',
  },
  {
    title: 'Scalable Solutions',
    description: 'Future-ready apps built to grow with your business.',
    icon: 'https://www.Infynex.com/assets/img/icons/solutions.svg',
  },
  {
    title: 'Quick Talent Replacement',
    description: 'Replace talent quickly when needs shift.',
    icon: 'https://www.Infynex.com/assets/img/icons/requirement.svg',
  },
]

const faqs = [
  {
    question: 'What kind of skills should I look for in React Native developers?',
    answer:
      'Look for strong JavaScript skills, React Native frameworks knowledge, UI design sense, and problem-solving ability.',
  },
  {
    question: 'How long does it take to build a React Native app?',
    answer:
      'Timelines vary by complexity. Simple apps can take 2 to 4 months, while complex builds can take 9 months or more.',
  },
  {
    question: 'What factors affect the cost of hiring React Native developers?',
    answer:
      'The cost depends on the engagement model, project duration, and complexity. Hourly, monthly, and quarterly options are available.',
  },
  {
    question: 'Can I hire React Native developers for short-term and long-term projects?',
    answer:
      'Yes. Engagement models can be customized for short-term delivery or long-term product growth.',
  },
  {
    question: 'What technologies are utilized by React Native developers in the United States?',
    answer:
      'React Native developers use JavaScript, Expo for rapid development, and integrate services like Firebase, maps, and payments.',
  },
  {
    question: 'How does your team ensure the quality of the React Native app?',
    answer:
      'We run continuous QA cycles, performance checks, and security reviews across iOS and Android devices.',
  },
  {
    question: 'Why is it beneficial to hire React Native app developers from Infynex?',
    answer:
      'You get flexible hiring, strong React Native expertise, support, and full source code access with security compliance.',
  },
  {
    question: 'Will I get control and flexibility for the source code of my project?',
    answer:
      'Yes. You maintain full rights and can update the codebase as your business grows.',
  },
]

export default function HireReactNativeDevelopersPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-950 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-4 lg:flex-row">
          <div className="flex-1">
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              Hire React Native App Developers in USA
            </h1>
            <p className="mt-4 text-base text-slate-200">
              Hire React Native app developers for cross-platform apps across Android,
              iOS, and web. Reduce development costs, accelerate time-to-market, and
              achieve high performance.
            </p>
            <button
              className="mt-6 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-900"
              type="button"
            >
              Hire Talent
            </button>
          </div>
          <div className="flex-1">
            <img
              src="https://www.Infynex.com/assets/img/web-img/hire-react-native-developer.webp"
              alt="Hire React Native App Developers"
              className="h-auto w-full max-w-md rounded-3xl object-cover"
            />
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

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our React Native Development Services</h2>
            <p className="mt-3 text-slate-600">
              End-to-end React Native services from product discovery to deployment and
              ongoing support.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-4">
                  <img src={service.icon} alt={service.title} className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto w-full max-w-5xl px-4 text-center text-white">
          <h2 className="text-3xl font-semibold">
            Ready to Hire React Native Experts at the Right Price?
          </h2>
          <p className="mt-3 text-slate-200">
            Build fast, scalable mobile apps with zero setup cost and flexible
            engagement models.
          </p>
          <button
            className="mt-6 inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-900"
            type="button"
          >
            Get in Touch
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Process to Hire a React Native Developer in Easy Steps
            </h2>
            <p className="mt-3 text-slate-600">
              Hire dedicated experts with the skills to shape your ideas into reality.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.step}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center"
              >
                <p className="text-2xl font-semibold text-lime-500">{step.step}.</p>
                <div className="mt-4 flex justify-center">
                  <img src={step.icon} alt={step.title} className="h-12 w-12" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">
              Hire React Native Developers with the Technologies
            </h2>
            <p className="mt-3 text-slate-600">
              Our React Native developers stay current with frameworks, tooling, and
              scalable architectures.
            </p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {techStack.map((tech) => (
              <div
                key={tech}
                className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-center text-sm font-medium"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Meet Our Top-Rated React Native Developers</h2>
            <p className="mt-3 text-slate-600">
              Evaluate skills and choose the right fit for your product journey.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {developerProfiles.map((profile) => (
              <div
                key={profile.name}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="h-16 w-16 rounded-full"
                />
                <h3 className="mt-4 text-lg font-semibold">{profile.name}</h3>
                <p className="text-sm font-medium text-slate-700">{profile.role}</p>
                <p className="mt-2 text-sm text-slate-600">{profile.experience}</p>
                <p className="mt-3 text-sm text-slate-600">
                  <span className="font-semibold text-slate-800">Skills:</span> {profile.skills}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 py-12">
        <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-center gap-4 px-4">
          {highlights.map((highlight) => (
            <span
              key={highlight}
              className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-white"
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="inline-flex items-center justify-center rounded-full bg-lime-400 px-6 py-3 text-sm font-semibold text-slate-900"
            type="button"
          >
            Hire Now
          </button>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">How Much It Costs to Hire a React Native Developer</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingModels.map((model) => (
              <div
                key={model.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm"
              >
                <div className="flex justify-center">
                  <img src={model.icon} alt={model.title} className="h-12 w-12" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{model.title}</h3>
                <p className="mt-3 text-sm text-slate-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Our React Native Products</h2>
            <p className="mt-3 text-slate-600">
              Applications built with React Native across mobile, web, and hybrid platforms.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img src={item.image} alt={item.title} className="h-16 w-16" />
                <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                <p className="text-sm font-medium text-lime-600">{item.category}</p>
                <p className="mt-3 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">React Native App Success Stories</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {successStories.map((story) => (
              <div
                key={story.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img src={story.image} alt={story.title} className="h-32 w-full rounded-2xl object-cover" />
                <p className="mt-4 text-xs uppercase tracking-wide text-slate-500">
                  {story.category}
                </p>
                <h3 className="text-lg font-semibold">{story.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{story.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-[1fr,1.3fr]">
            <div>
              <h2 className="text-3xl font-semibold">Why Choose Us to Hire React Native Developers?</h2>
              <p className="mt-3 text-slate-600">
                Hire Infynex React Native developers to build budget-friendly, innovative,
                and scalable apps that boost reach and revenue.
              </p>
              <button
                className="mt-6 inline-flex items-center justify-center rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
                type="button"
              >
                Talk to Our Experts
              </button>
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              {reasons.map((reason) => (
                <div
                  key={reason.title}
                  className="rounded-3xl border border-slate-200 bg-white p-5"
                >
                  <img src={reason.icon} alt={reason.title} className="h-10 w-10" />
                  <h3 className="mt-4 text-base font-semibold">{reason.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto w-full max-w-6xl px-4">
          <h2 className="text-center text-3xl font-semibold">FAQs</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index

              return (
                <div
                  key={faq.question}
                  className="rounded-3xl border border-slate-200 bg-white p-6"
                >
                  <button
                    className="flex w-full items-start justify-between gap-4 text-left"
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span className="text-base font-semibold">{faq.question}</span>
                    <span className="text-xl font-semibold text-lime-600">
                      {isOpen ? '-' : '+'}
                    </span>
                  </button>
                  {isOpen ? (
                    <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
                  ) : null}
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
