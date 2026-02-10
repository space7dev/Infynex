'use client'

const solutions = [
  {
    title: 'Startups',
    description:
      'Connect with an expert web3 consultant and kickstart your startups in one go with fresh ideas ready to revolutionize the digital world.',
    image:
      '/A/1.svg',
    bgClass: 'bg-[#E9DFFF]',
  },
  {
    title: 'Mid Scale Enterprises',
    description:
      'We support mid-scale enterprises in solving their complex day-to-day challenges by leveraging our full-scale capabilities.',
    image:
      '/A/2.svg',
    bgClass: 'bg-[#FFD9D4]',
  },
  {
    title: 'Government Organizations',
    description:
      'We have successfully delivered numerous large-scale government projects and customized solutions that meet their standards.',
    image:
      '/A/3.svg',
    bgClass: 'bg-[#D9ECFF]',
  },
  {
    title: 'NGOs',
    description:
      'We are dedicated to causes that benefit humanity. Our modern solutions support NGOs and organizations focused on social welfare.',
    image:
      '/A/4.svg',
    bgClass: 'bg-[#FFE9DB]',
  },
]

export default function ScalableSolutions() {
  return (
    <section className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(circle_at_center,rgba(15,23,42,0.06)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
      </div>

      <div className="container-custom relative">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-4xl font-bold text-secondary-900 lg:text-5xl">
            Innovate with Our Scalable Software Solutions
          </h2>
          <p className="mx-auto max-w-6xl text-xl text-secondary-600">
            We craft contemporary solutions that comply with regulations, helping businesses
            embrace decentralization effectively.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {solutions.map((item) => (
            <div
              key={item.title}
              className={`rounded-2xl border border-white/60 p-6 shadow-sm ${item.bgClass}`}
            >
              <div className="flex items-start justify-between gap-6">
                <div>
                  <h3 className="mb-2 text-3xl font-semibold text-secondary-900">
                    {item.title}
                  </h3>
                  <p className="text-xl leading-relaxed text-secondary-700">
                    {item.description}
                  </p>
                </div>
                <img
                  src={item.image}
                  alt={item.title}
                  width={70}
                  height={70}
                  loading="lazy"
                  className="h-[70px] w-[70px] shrink-0"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
