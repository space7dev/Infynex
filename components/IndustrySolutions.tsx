'use client'

const industries = [
  {
    title: 'Healthcare and Medicine',
    image: '/Home/modern/1.webp',
  },
  {
    title: 'Fintech and Banking',
    image: '/Home/modern/2.webp',
  },
  {
    title: 'EdTech and Elearning',
    image: '/Home/modern/3.webp',
  },
  {
    title: 'Supply Chain and Logistics',
    image: '/Home/modern/4.webp',
  },
  {
    title: 'Marketing and Sales',
    image: '/Home/modern/5.webp',
  },
  {
    title: 'E-Commerce and Retail',
    image: '/Home/modern/6.webp',
  },
  {
    title: 'Arts and Entertainment',
    image: '/Home/modern/7.webp',
  },
  {
    title: 'Legal and Compliance',
    image: '/Home/modern/8.webp',
  },
  {
    title: 'Customer Service and HR',
    image: '/Home/modern/9.webp',
  },
]

export default function IndustrySolutions() {
  return (
    <section className="bg-white py-16">
      <div className="container-custom">
        <div className="mb-10">
          <h2 className="mb-3 text-3xl font-bold text-secondary-900 md:text-4xl">
            Modern Technologies for Industry-Specific Solutions
          </h2>
          <p className="max-w-3xl text-base text-secondary-600 md:text-lg">
            Elevate business with state-of-the-art technologies integrated through industry-specific
            software solutions designed for success. Harness innovation for a modern and effective
            strategy.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-3">
            <div className="h-full rounded-2xl bg-gradient-to-br from-red-700 to-red-900 p-8 text-white">
              <h3 className="mb-3 text-xl font-semibold">
                Industries We Empower With High-End Technology
              </h3>
              <p className="text-sm leading-relaxed text-white/90">
                As a leading apps and software development company, we serve a vast array of
                industries by providing unparalleled web/app solutions.
              </p>
            </div>
          </div>

          <div className="lg:col-span-9">
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {industries.map((industry) => (
                <li key={industry.title}>
                  <div
                    className="block rounded-xl border border-secondary-200 bg-white shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="overflow-hidden rounded-t-xl">
                      <img
                        src={industry.image}
                        alt={industry.title}
                        width={322}
                        height={150}
                        loading="lazy"
                        className="h-[150px] w-full object-cover"
                      />
                    </div>
                    <div className="px-4 py-3 text-center">
                      <p className="text-sm font-semibold text-secondary-900">
                        {industry.title}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
