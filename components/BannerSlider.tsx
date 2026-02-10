'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
  heading: string
  description: string
  image: string
  awards: Array<{ src: string; alt: string; width: number; height: number }>
}

const slides: Slide[] = [
  {
    heading: 'Building Tomorrow\'s Digital Solutions Today',
    description:
      'Transform your app inception with our result-oriented development methods! Infynex provides futuristic app development services that meet your unique requirements. Stay ahead of the competition by creating robust apps to elevate your business.',
    image: '/hero-mobile.png',
    awards: [
      { src: '/awards/clutch.svg', alt: 'Clutch 2025', width: 141, height: 157 },
      { src: '/awards/g2.svg', alt: 'G2 Users Love Us', width: 125, height: 134 },
      { src: '/awards/designrush.svg', alt: 'Design Rush 2025', width: 125, height: 154 },
      { src: '/awards/top-dev.svg', alt: 'Top Development Companies', width: 140, height: 150 },
    ],
  },
  {
    heading: 'Leading Web3 & Blockchain Innovation',
    description:
      'Our developers help you unveil the full potential of Web3 to ensure that you always step ahead in a bullish and highly competitive market. Our web3 consulting services focus on extracting the best from emerging technologies.',
    image: '/hero-blockchain.png',
    awards: [
      { src: '/awards/clutch-blockchain.svg', alt: 'Clutch Blockchain 2025', width: 141, height: 157 },
      { src: '/awards/g2.svg', alt: 'G2 Users Love Us', width: 125, height: 134 },
      { src: '/awards/designrush.svg', alt: 'Design Rush 2025', width: 125, height: 154 },
      { src: '/awards/top-dev.svg', alt: 'Top Blockchain Companies', width: 140, height: 150 },
    ],
  },
  {
    heading: 'Driving Results with AI Expertise',
    description:
      'Revolutionize your business with modern custom AI services and transform your visions into reality. Get our complete suite of AI-enabled services, from AI consulting to building innovative applications.',
    image: '/hero-ai.png',
    awards: [
      { src: '/awards/clutch.svg', alt: 'Clutch AI Dev 2025', width: 141, height: 157 },
      { src: '/awards/g2.svg', alt: 'G2 Users Love Us', width: 125, height: 134 },
      { src: '/awards/designrush.svg', alt: 'Design Rush 2025', width: 125, height: 154 },
      { src: '/awards/top-dev.svg', alt: 'Top AI Companies', width: 140, height: 150 },
    ],
  },
]

export default function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setIsAutoPlaying(false)
  }

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20" style={{ paddingTop: '180px' }}>
      <div className="container-custom">
        <div className="relative">
          {/* Slides */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid items-center gap-12 lg:grid-cols-2">
                    {/* Content */}
                    <div className="order-2 lg:order-1">
                      <h1 className="mb-6 text-4xl font-bold leading-tight text-secondary-900 lg:text-5xl">
                        {slide.heading}
                      </h1>
                      <p className="mb-8 text-lg leading-relaxed text-secondary-600">
                        {slide.description}
                      </p>

                      {/* Awards */}
                      <div className="mb-8 flex flex-wrap items-center gap-4">
                        {slide.awards.map((award, idx) => (
                          <div
                            key={idx}
                            className="flex h-20 w-20 items-center justify-center rounded-lg bg-white p-2 shadow-sm"
                          >
                            <div className="relative h-full w-full">
                              <svg
                                className="h-full w-full text-primary-600"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                              >
                                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                              </svg>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center space-x-2 rounded-lg bg-gradient-to-r from-orange-600 to-red-600 px-8 py-4 text-base font-semibold text-white shadow-lg transition-all hover:from-orange-700 hover:to-red-700"
                      >
                        <span>Talk To Experts Now</span>
                      </Link>
                    </div>

                    {/* Image */}
                    <div className="order-1 lg:order-2">
                      <div className="relative aspect-square w-full">
                        <div className="flex h-full items-center justify-center rounded-2xl bg-gradient-to-br from-primary-100 to-purple-100 p-12">
                          <div className="text-center">
                            <div className="mb-4 text-6xl">🚀</div>
                            <p className="text-xl font-semibold text-secondary-700">
                              Innovation
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-secondary-50 lg:block"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-secondary-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 hidden -translate-y-1/2 rounded-full bg-white p-3 shadow-lg transition-all hover:bg-secondary-50 lg:block"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-secondary-900" />
          </button>

          {/* Dots */}
          <div className="mt-8 flex justify-center space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 w-3 rounded-full transition-all ${
                  currentSlide === index
                    ? 'w-8 bg-primary-600'
                    : 'bg-secondary-300 hover:bg-secondary-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
