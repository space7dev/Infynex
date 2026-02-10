import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import EliteCustomers from './components/EliteCustomers'
import VideoModalTrigger from './components/VideoModalTrigger'

export const metadata: Metadata = {
  title: 'About Us - Infynex Solutions',
  description:
    'Know about us and our development services. How we differ from others. Our aim is to provide ideal solutions to our customers using latest innovated technology and effective strategies.',
  openGraph: {
    title: 'About Us - Infynex Solutions',
    description:
      'Know about us and our development services. How we differ from others. Our aim is to provide ideal solutions to our customers using latest innovated technology and effective strategies.',
    url: 'https://www.Infynex.com/about-us',
    type: 'website',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/new_suffes_images/about-us-banner-new.webp',
        width: 1200,
        height: 630,
        alt: 'About Infynex Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Infynex',
    creator: '@Infynex',
    title: 'About Us - Infynex Solutions',
    description:
      'Know about us and our development services. How we differ from others. Our aim is to provide ideal solutions to our customers using latest innovated technology and effective strategies.',
    images: ['https://www.Infynex.com/assets/img/new_suffes_images/about-us-banner-new.webp'],
  },
  alternates: {
    canonical: 'https://www.Infynex.com/about-us',
  },
};

const heroCards = [
  {
    title: 'Web3',
    image: '/Home/1.webp',
  },
  {
    title: 'Chatbot',
    image: '/Home/modern/1.webp',
  },
  {
    title: 'Software',
    image: '/Home/modern/5.webp',
  },
];

const missionLeaders = [
  {
    name: 'James Smith',
    role: 'Managing Director',
    image: '/avatar/manager.jpg',
    heading: 'Our Mission',
    copy: [
      'We aim to serve businesses with customer centric, result oriented, cost effective and innovative solutions that open up endless customer-engaging possibilities and drive value to global clients.',
      'We work to make our customers happy through dedication and professionalism of our team.',
    ],
  },
  {
    name: 'Jessica Miller',
    role: 'COO',
    image: '/avatar/coo.jpg',
    heading: 'Our Vision',
    copy: [
      'Our vision is to become a global leader in AI technology by 2027, delivering superior-quality, ultramodern solutions across blockchain, mobile applications, and IoT. Driving measurable success for our customers, employees, and partners.',
      'We keep an eye on new market trends and room for growth, offering constant innovation and transformation to the industry and the economy.',
    ],
  },
];

const globalStats = [
  { value: '500M+', label: 'Developed Apps Downloaded Worldwide' },
  { value: '750+', label: 'Infynex Employees Globally' },
  { value: '95+', label: "Infynex's Worldwide Operations" },
  { value: '200+', label: 'Innovative Blockchain Project Delivered' },
  { value: '150+', label: 'Startup Build' },
  { value: '1000+', label: 'Completed Working Milestone With 1000+ Clients' },
];

const leadership = [
  {
    name: 'Daniel Barrow',
    role: 'Technical Head',
    image: '/avatar/1.jpg',
  },
  {
    name: 'David Tran',
    role: 'Sr. HR Manager',
    image: '/avatar/2.png',
  },
  {
    name: 'James William',
    role: 'Sr. BDM',
    image: '/avatar/3.jpg',
  },
  {
    name: 'Ricky Dewan',
    role: 'Head of Sales and Business Development',
    image: '/avatar/4.png',
  },
  {
    name: 'Michael Johnson',
    role: 'Sr. Tech. Project Manager',
    image: '/avatar/5.jpg',
  },
  {
    name: 'Tony Stark',
    role: 'Sr. UI/UX',
    image: '/avatar/6.jpg',
  },
  {
    name: 'Rico Blevins',
    role: 'Marketing Manager',
    image: '/avatar/7.jpg',
  },
];

const timelineLeft = [
  {
    year: '2024',
    items: [
      'Became a leader in AI Development Services.',
      'Delivered unmatched digital marketing, mobile apps, AI chatbots, and blockchain dApp development services.',
      '11th Anniversary Gala: A decade of distinction and a prelude to future triumphs.',
    ],
    video: {
      label: 'Watch 11th Anniversary Gala',
      url: 'https://www.youtube.com/embed/LSJpF4x6Lk4?si=pJ60supM78NPUVLk',
    },
  },
  {
    year: '2022',
    items: [
      'Became leader in Blockchain Development Services.',
      'Awarded Emerging Web3 and blockchain company by national media.',
      'Featured by global media.',
      'Completed milestone with 1000+ clients.',
    ],
  },
  {
    year: '2019',
    items: ['Completed one lakh hours on Upwork.'],
  },
  {
    year: '2017',
    items: ['On-boarded 500 human assets globally.'],
  },
  {
    year: '2013',
    items: ['Established an office in California.'],
  },
  {
    year: '2011',
    items: ['Started the IT journey on a higher note in Mohali.'],
  },
];

const timelineRight = [
  {
    year: '2025',
    items: [
      '12 years celebration: honoring breakthroughs, elevating excellence, and igniting the next era of innovation.',
      'Delivered 50+ AI agents.',
      'Holding 150+ distinctive white-label solutions.',
      'Recognized as the top AI, Mobile App and On-Demand Apps development company by Clutch, G2, Goodfirms, and DesignRush.',
      'Holding the top position in GCC region as the best mobile app development team.',
    ],
  },
  {
    year: '2023',
    items: [
      'Started operations in Dubai.',
      'Showcased projects at the Gitex event.',
      'Worked with Fortune 500 clients like Universal and NBC.',
      'Recognized by Indian and global media like Taiwan News and Khaleej Times.',
      'Celebrated the 10th year anniversary in Infynex style.',
    ],
    video: {
      label: 'Watch 10th Year Anniversary',
      url: 'https://www.youtube.com/embed/22Ppp3FsfTA?si=hVSH_4_W4ARBLLXa',
    },
  },
  {
    year: '2021',
    items: [
      'GoodFirms named Infynex the number 1 blockchain development company in the USA.',
      'Worked with Fortune 600+ clients.',
      'Shifted to a luxury workspace.',
    ],
  },
  {
    year: '2018',
    items: [
      'Blockchain became a new arrow in our quiver.',
      'Started business technology consulting along with development.',
    ],
  },
  {
    year: '2014',
    items: [
      'Completed 100 resources on the floor.',
      'Became the industry leader in on-demand app development.',
    ],
  },
];

const iconicMoments = [
  {
    year: '2025',
    items: [
      '12 years celebration: honoring breakthroughs, elevating excellence, and igniting the next era of innovation.',
      'Delivered 50+ AI agents.',
      'Holding 150+ distinctive white-label solutions.',
      'Recognized as the top AI, Mobile App and On-Demand Apps development company by Clutch, G2, Goodfirms, and DesignRush.',
    ],
  },
  {
    year: '2024',
    items: [
      'Became a leader in AI Development Services.',
      'Delivered unmatched digital marketing, mobile apps, AI chatbots, and blockchain dApp development services.',
    ],
  },
  {
    year: '2023',
    items: [
      'Started operations in Dubai.',
      'Showcased projects at the Gitex event.',
      'Worked with Fortune 500 clients like Universal and NBC.',
    ],
  },
  {
    year: '2022',
    items: [
      'Became leader in Blockchain Development Services.',
      'Completed milestone with 1000+ clients.',
    ],
  },
];

export default function AboutUsPage() {
  return (
    <main className="min-h-screen">
      <section className="bg-gradient-to-br from-amber-50 via-white to-amber-100 py-16 text-slate-900 md:py-24 ">
        <div className="container mx-auto px-4 ">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-amber-700">
                About Us
              </p>
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Shaping The More Sustainable Digital World
              </h1>
              <p className="mb-8 text-lg text-slate-600">
                Infynex Solutions Inc. combines state-of-the-art technologies to drive new values and unlock unexplored client opportunities. We promise to deliver promising technology that ensures to rewire the global economy for shared notes. Join our forward-thinking doers to shape new values in your industry.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-md bg-amber-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-700"
              >
                Consult Department Head
              </Link>
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              {heroCards.map((card) => (
                <div
                  key={card.title}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
                >
                  <div className="relative h-60">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4">
                    <p className="text-sm font-semibold text-white">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-16 text-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Recognized By The Best</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/best/1.webp"
                alt="Infynex news logo"
                fill
                className="object-contain p-6"
              />
            </div>
            <div className="relative h-64 overflow-hidden rounded-2xl border border-slate-200 bg-white">
              <Image
                src="/best/2.webp"
                alt="Infynex certificate"
                fill
                className="object-contain p-6"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid gap-12">
            {missionLeaders.map((leader, index) => (
              <div
                key={leader.name}
                className={`grid items-center gap-10 lg:grid-cols-2 ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div
                  className={`relative h-72 overflow-hidden rounded-3xl bg-slate-100 shadow-lg sm:h-80 lg:h-[560px] ${
                    index % 2 === 1 ? 'lg:col-start-2' : ''
                  }`}
                >
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover object-top"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-black/55 px-4 py-3">
                    <p className="text-base font-semibold text-white">{leader.name}</p>
                    <p className="text-xs text-white/80">({leader.role})</p>
                  </div>
                </div>
                <div>
                  <h2 className="mb-4 text-3xl font-bold text-slate-900 md:text-4xl">
                    {leader.heading}
                  </h2>
                  <div className="space-y-4 text-base text-slate-600">
                    {leader.copy.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16 text-slate-900 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">We Are One Global Team</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {globalStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-slate-200 bg-white p-6 text-center"
              >
                <p className="text-3xl font-bold text-amber-700 md:text-4xl">{stat.value}</p>
                <p className="mt-2 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leadership.map((leader) => (
              <div
                key={leader.name}
                className="rounded-2xl border border-slate-200 bg-white p-5 text-center"
              >
                <div className="relative mx-auto h-28 w-28 overflow-hidden rounded-full">
                  <Image
                    src={leader.image}
                    alt={leader.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">{leader.name}</h3>
                <p className="text-sm text-slate-600">({leader.role})</p>
              </div>
            ))}
            <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-5 text-center">
              <div className="mx-auto flex h-28 w-28 items-center justify-center rounded-full border border-slate-200 text-xl font-bold text-slate-900">
                You
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">Your Name</h3>
              <Link href="/jobs" className="text-sm text-amber-700 underline">
                Apply for Position
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">Our Journey</h2>
            <p className="mt-3 text-base text-slate-600">
              Milestones that shaped our story
            </p>
          </div>
          <div className="mt-12 grid gap-10 lg:grid-cols-2">
            {[timelineLeft, timelineRight].map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-6">
                {column.map((entry) => (
                  <div key={entry.year} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                    <h3 className="text-2xl font-bold text-slate-900">{entry.year}</h3>
                    <ul className="mt-4 space-y-2 text-sm text-slate-600">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary-600"></span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    {entry.video && (
                      <div className="mt-4">
                        <VideoModalTrigger
                          label={entry.video.label}
                          videoUrl={entry.video.url}
                          asLink
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-amber-50 py-16 text-slate-900 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Iconic Moments in Infynex History</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {iconicMoments.map((moment) => (
              <div key={moment.year} className="rounded-2xl border border-slate-200 bg-white p-6">
                <p className="text-xl font-semibold text-amber-700">{moment.year}</p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {moment.items.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber-600"></span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">
                Leading The Bleeding-Edge Technology
              </h2>
              <p className="mt-4 text-base text-slate-600">
                We thrive on helping startups, SMEs and enterprises to define their core values with revolutionary technologies in a competitive era. We are proud to be a master of blockchain and on-demand technology that accelerate the modern IT industry.
              </p>
            </div>
            <div className="relative h-72 overflow-hidden rounded-2xl">
              <Image
                src="/leading/2.webp"
                alt="Infynex about icons"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <EliteCustomers />

    
    </main>
  );
}
