'use client'

import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

const customers = [
  {
    name: 'Udrive',
    logo: '/customers/15.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Wellcare',
    logo: '/customers/1.webp',
    width: 130,
    height: 115
  },
  {
    name: 'University of Alberta',
    logo: '/customers/2.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Humana',
    logo: '/customers/3.webp',
    width: 100,
    height: 100
  },
  {
    name: 'The Cigna Group',
    logo: '/customers/4.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Stripe',
    logo: '/customers/5.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Prosper',
    logo: '/customers/6.webp',
    width: 130,
    height: 115
  },
  {
    name: 'GoodRX',
    logo: '/customers/7.webp',
    width: 100,
    height: 100
  },
  {
    name: 'Brightwheel',
    logo: '/customers/8.webp',
    width: 130,
    height: 115
  },
  {
    name: 'NBC',
    logo: '/customers/9.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Epic',
    logo: '/customers/10.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Universal',
    logo: '/customers/11.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Comcast',
    logo: '/customers/12.webp',
    width: 130,
    height: 115
  },
  {
    name: 'Green Meme Coin',
    logo: '/customers/13.webp',
    width: 100,
    height: 100
  },
  {
    name: 'Emaar',
    logo: '/customers/14.webp',
    width: 100,
    height: 100
  }
]

export default function EliteCustomers() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <h6 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900">
            Our Elite Customers
          </h6>
          <Link
            href="/testimonials"
            className="inline-flex items-center gap-2 text-gray-900 font-semibold hover:text-orange-600 transition-colors duration-300"
          >
            View All
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Customer Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {customers.map((customer, index) => (
            <div
              key={index}
              className="flex items-center justify-center p-6 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:border-orange-200 transition-all duration-300 group"
            >
              <img
                src={customer.logo}
                alt={customer.name}
                width={customer.width}
                height={customer.height}
                className="w-full h-auto max-w-[130px] max-h-[115px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
