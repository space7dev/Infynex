'use client'

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: 'Mobile App Solutions',
    description: 'Our team at Infynex offers comprehensive mobile app development services across various platforms, supporting businesses at every stage of development, from ideation to launch.',
    image: '/Home/modern/21.webp',
    link: '/mobile-app-development'
  },
  {
    title: 'AI App Development',
    description: 'We are leaders in providing exceptional AI app solutions for iOS, Android, and cross-platform apps, enhancing efficiency and scalability to give you a competitive edge.',
    image: '/Home/modern/22.webp',
    link: '/ai-development-services'
  },
  {
    title: 'Blockchain Development',
    description: 'We build robust and secure decentralized platforms for startups and enterprises across various industries, helping them enhance their operations and maximize ROI.',
    image: '/Home/modern/23.webp',
    link: '/blockchain-development'
  },
  {
    title: 'Metaverse & Games',
    description: 'Our top-notch Metaverse and game development services include virtual worlds development, avatar creation, VR game development, and more.',
    image: '/Home/modern/24.webp',
    link: '/metaverse-development'
  }
]

export default function ConsultingServices() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Data-Driven Mobile App and Web3 Consulting Services
          </h2>
          <p className="text-lg text-gray-600">
            We deliver innovative solutions and create impactful digital experiences for businesses across the globe. 
            Leverage our consulting services for exceptional results that align with your brand's essence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{ minHeight: '450px' }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundImage: `url(${service.image})` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
              
              {/* Content */}
              <div className="relative h-full flex flex-col justify-start p-6 text-white">
                <h4 className="text-2xl font-bold mb-4">
                  {service.title}
                </h4>
                <p className="text-white/90 mb-6 leading-relaxed opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                  {service.description}
                </p>
                <Link
                  href={service.link}
                  className="inline-flex items-center gap-2 text-white font-semibold opacity-0 translate-y-3 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:gap-3"
                >
                  Get Solutions
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
