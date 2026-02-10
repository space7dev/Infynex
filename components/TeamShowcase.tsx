'use client'

import Link from 'next/link'

const pressLogos = [
  {
    alt: 'Hindustan Times',
    src: '/Home/modern/11.svg',
  },
  {
    alt: 'Market Watch',
    src: '/Home/modern/12.svg',
  },
  {
    alt: 'Yahoo',
    src: '/Home/modern/13.svg',
  },
]

export default function TeamShowcase() {
  return (
    <section className="relative bg-white py-16">
      <div className="container-custom">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-xl shadow-md">
            <img
              src="startup_leader_doing_presentation_to_staff_in_a_o_e159d956-e9c_1767592279564-Dcgm86H-.jpg"
              alt="Infynex team"
              width={700}
              height={470}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <div>
            <h3 className="mb-4 text-3xl font-bold text-secondary-900 md:text-4xl">
              The Team Behind Exceptional Digital Experiences
            </h3>
            <p className="mb-4 text-base text-secondary-700 md:text-lg">
              Helping businesses re-envision digital experiences through innovative digital
              possibilities across borders. We have dominated the global market by overcoming
              challenges and delivering high-performance results through innovation.
            </p>
            <p className="mb-6 text-base text-secondary-700 md:text-lg">
              We work with the vision of transforming businesses by adopting innovative digital
              solutions to introduce inclusivity and open doors for top-notch global opportunities.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center rounded bg-red-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-700"
            >
              Become our Client
            </Link>

            <div className="mt-8 flex flex-wrap items-center gap-6">
              {pressLogos.map((logo) => (
                <img
                  key={logo.alt}
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={60}
                  loading="lazy"
                  className="h-10 w-auto"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
