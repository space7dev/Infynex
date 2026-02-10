'use client'

const partners = [
  {
    name: 'ISO',
    logo: '🏢',
  },
  {
    name: 'AWS',
    logo: '☁️',
  },
  {
    name: 'OpenAI',
    logo: '🤖',
  },
  {
    name: 'Fox',
    logo: '📺',
  },
  {
    name: 'Market Watch',
    logo: '📊',
  },
  {
    name: 'Google Partner',
    logo: '🔍',
  },
]

export default function PartnersCarousel() {
  return (
    <section className="overflow-hidden bg-white py-8">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-8 overflow-x-auto md:gap-12">
          {/* Desktop scroll - repeating logos */}
          <div className="flex gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="flex min-w-fit flex-col items-center justify-center space-y-2"
              >
                <div className="text-4xl">{partner.logo}</div>
                <p className="whitespace-nowrap text-sm font-medium text-secondary-600">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>

          {/* Repeat for continuous scroll effect */}
          <div className="hidden gap-8 md:flex md:gap-12">
            {partners.map((partner, index) => (
              <div
                key={`repeat-${index}`}
                className="flex min-w-fit flex-col items-center justify-center space-y-2"
              >
                <div className="text-4xl">{partner.logo}</div>
                <p className="whitespace-nowrap text-sm font-medium text-secondary-600">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-100%);
          }
        }

        section {
          overflow: hidden;
        }

        @media (min-width: 768px) {
          section > div > div {
            animation: scroll 20s linear infinite;
          }

          section > div > div:hover {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  )
}
