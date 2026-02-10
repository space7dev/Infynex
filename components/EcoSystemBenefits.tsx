'use client'

const stats = [
  {
    icon: '/Home/modern/31.svg',
    number: '40+',
    label: 'Technologies'
  },
  {
    icon: '/Home/modern/32.svg',
    number: '250+',
    label: 'Globally Team'
  },
  {
    icon: '/Home/modern/33.svg',
    number: '1250+',
    label: 'Clients Worldwide'
  },
  {
    icon: '/Home/modern/34.svg',
    number: '30+',
    label: 'Awards Won'
  }
]

const awards = [
  {
    name: 'App Futura',
    image: '/Home/modern/35.webp',
  },
  {
    name: 'Good Firm',
    image: '/Home/modern/36.webp',
  },
  {
    name: 'IT Firm',
    image: '/Home/modern/37.webp',
  },
  {
    name: 'G2 2025',
    image: '/Home/modern/38.webp',
  },
  {
    name: 'Global Award 2025',
    image: '/Home/modern/39.webp',
  },
  {
    name: 'Design Rush',
    image: '/Home/modern/40.webp',
  }
]

export default function EcoSystemBenefits() {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* Left Column - Stats */}
          <div className="text-left">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              We Help Build An Eco System That Benefits All
            </h2>
            <p className="text-lg text-gray-600 mb-10">
              We have a skilled team of experts ready to provide top-notch Web3, Blockchain & Mobile app 
              consulting services. Contact us to explore your ideas!
            </p>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-3 mb-3">
                    <img
                      src={stat.icon}
                      alt={stat.label}
                      width={41}
                      height={41}
                      className="w-10 h-10"
                    />
                    <p className="text-3xl md:text-4xl font-bold text-gray-900">
                      {stat.number}
                    </p>
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Awards */}
          <div>
            <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Awards in The Last 10+ Years
              </h2>
              <h4 className="text-xl font-semibold text-gray-700 mb-8">
                ISO 9001 & ISO 27001 Certified.
              </h4>
              
              {/* Awards Grid */}
              <div className="grid grid-cols-3 gap-6">
                {awards.map((award, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-300"
                  >
                    <img
                      src={award.image}
                      alt={award.name}
                      width={135}
                      height={145}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
