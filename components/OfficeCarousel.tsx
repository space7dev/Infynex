'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const officeImages = [
  'https://www.Infynex.com/assets/img/new-suff-img/contact-slide1.webp',
  'https://www.Infynex.com/assets/img/new-suff-img/contact-slide2.webp',
  'https://www.Infynex.com/assets/img/new-suff-img/contact-slide3.webp',
  'https://www.Infynex.com/assets/img/new-suff-img/contact-slide4.webp',
  'https://www.Infynex.com/assets/img/new-suff-img/contact-slide5.webp',
  'https://www.Infynex.com/assets/img/new-suff-img/contact-slide6.webp'
]

export default function OfficeCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % officeImages.length)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? officeImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % officeImages.length)
  }

  const getVisibleSlides = () => {
    const slides = []
    for (let i = -1; i <= 2; i++) {
      const index = (currentIndex + i + officeImages.length) % officeImages.length
      slides.push({
        index,
        position: i,
        image: officeImages[index]
      })
    }
    return slides
  }

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center">
          
          {/* Section Heading */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-12">
            A Place Where Ideas Flow, Teams Connect, and Results Matter!
          </h3>

          {/* Carousel Container */}
          <div className="relative mb-12">
            {/* Slides Container */}
            <div className="overflow-hidden">
              <div className="flex items-center justify-center gap-4 md:gap-6 py-8">
                {getVisibleSlides().map((slide, idx) => (
                  <div
                    key={`${slide.index}-${idx}`}
                    className={`flex-shrink-0 transition-all duration-500 ease-out ${
                      slide.position === 0
                        ? 'w-64 md:w-80 lg:w-96 opacity-100 z-10'
                        : slide.position === -1 || slide.position === 1
                        ? 'w-64 md:w-80 lg:w-96 opacity-100'
                        : 'w-64 md:w-80 lg:w-96 opacity-100 hidden md:block'
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={`Office slide ${slide.index + 1}`}
                      width={300}
                      height={220}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={goToNext}
              className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 bg-white/90 text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-20"
              aria-label="Next slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {officeImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gradient-to-r from-orange-600 to-red-600 w-8'
                      : 'bg-gray-300'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Get in Touch
            </button>
          </div>

        </div>
      </div>
    </section>
  )
}
