'use client'

import { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

const slides = [
  {
    id: 1,
    title: 'Where Ideas Meet Innovation, Your App Journey Starts Here',
    description:
      'Transform your app inception with our result-oriented development methods! Infynex provides futuristic app development services that meet your unique requirements. Stay ahead of the competition by creating robust apps to elevate your business.',
    badges: [
      {
        src: '/Home/11.webp',
        alt: 'Clutch Mobile App 2025',
        width: 141,
        height: 157,
      },
      {
        src: '/Home/12.svg',
        alt: 'G2 Users Love Us',
        width: 125,
        height: 134,
      },
      {
        src: '/Home/13.webp',
        alt: 'Design Rush 2025',
        width: 125,
        height: 154,
      },
      {
        src: '/Home/14.webp',
        alt: 'Top App Development Companies',
        width: 150,
        height: 150,
      },
    ],
    heroImage:
      '/Home/1.webp',
    heroAlt: 'Where Ideas Meet Innovation, Your App Journey Starts Here',
  },
  {
    id: 2,
    title: 'Leading Web3 Consulting Company - Discover The Possibilities',
    description:
      'Our developers help you unveil the full potential of Web3 to ensure that you always step ahead in a bullish and highly competitive market. Our web3 consulting services focus on extracting the best from emerging technologies that embrace you in the market.',
    badges: [
      {
        src: '/Home/21.webp',
        alt: 'Clutch Blockchain 2025',
        width: 141,
        height: 157,
      },
      {
        src: '/Home/22.svg',
        alt: 'G2 Users Love Us',
        width: 125,
        height: 134,
      },
      {
        src: '/Home/23.webp',
        alt: 'Top Blockchain Development Companies Designrush',
        width: 125,
        height: 154,
      },
      {
        src: '/Home/24.webp',
        alt: 'Top Rated Blockchain Service Providers',
        width: 150,
        height: 150,
      },
    ],
    heroVideo: '/Home/2.mp4',
    heroAlt: 'Leading Web3 Consulting Company - Discover The Possibilities',
  },
  {
    id: 3,
    title: 'Driving Tangible Results with Artificial Intelligence Expertise',
    description:
      'Revolutionize your business with modern custom AI services and transform your visions into reality. Get our complete suite of AI-enabled services, from AI consulting services to building innovative applications.',
    badges: [
      {
        src: '/Home/31.webp',
        alt: 'Clutch 2025',
        width: 141,
        height: 157,
      },
      {
        src: '/Home/32.svg',
        alt: 'G2 Users Love Us',
        width: 125,
        height: 134,
      },
      {
        src: '/Home/33.webp',
        alt: 'Design Rush 2025',
        width: 125,
        height: 154,
      },
      {
        src: '/Home/34.webp',
        alt: 'Top App Development Companies',
        width: 150,
        height: 150,
      },
    ],
    heroImage: '/Home/4.webp',
    heroVideo: '/Home/5.mp4',
    heroAlt: 'Driving Tangible Results with Artificial Intelligence Expertise',
  },
  {
    id: 4,
    title: 'Greater Connectivity In The Virtual World',
    description:
      'We help businesses in creating immersive experiences in the world of virtual reality. Our team develops digital products through creative Augmented & Virtual Reality (AR & VR) development services for industries such as Healthcare, Real Estate, and eCommerce.',
    badges: [
      {
        src: '/Home/41.webp',
        alt: 'Clutch 2025',
        width: 141,
        height: 157,
      },
      {
        src: '/Home/42.svg',
        alt: 'G2 Users Love Us',
        width: 125,
        height: 134,
      },
      {
        src: '/Home/43.webp',
        alt: 'Design Rush 2025',
        width: 125,
        height: 154,
      },
      {
        src: '/Home/44.webp',
        alt: 'Top App Development Companies',
        width: 150,
        height: 150,
      },
    ],
    heroImage:
      '/Home/5.webp',
    heroVideo: '/Home/3.mp4',
    heroAlt: 'Greater Connectivity In The Virtual World',
  },
]

export default function HeroCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false })
  ])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  useEffect(() => {
    if (!emblaApi) return

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap())
    }

    emblaApi.on('select', onSelect)
    onSelect()

    return () => {
      emblaApi.off('select', onSelect)
    }
  }, [emblaApi])

  return (
    <section className="relative overflow-hidden bg-[#e8f0ff]">
      <div className="embla relative" ref={emblaRef}>
        <div className="embla__container flex">
          {slides.map((slide) => (
            <div key={slide.id} className="embla__slide flex-[0_0_100%] min-w-0">
              <div className="container mx-auto px-4 py-16 md:py-24" style={{paddingBottom:'2.4rem'}}>
                <div className="grid lg:grid-cols-2 gap-10 items-center">
                  {/* Content */}
                  <div className="space-y-6 ">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                      {slide.title}
                    </h1>
                    
                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                      {slide.description}
                    </p>

                    {/* Badges */}
                    <div className="flex items-center gap-4 flex-nowrap overflow-x-auto">
                      {slide.badges.map((badge, idx) => (    
                        <img
                          key={idx}
                          src={badge.src}
                          alt={badge.alt}
                          width={badge.width}
                          height={badge.height}
                          loading="lazy"
                          className="h-24 w-auto"
                        />
                      ))}
                    </div>

                    <Link
                      href="/contact"
                      className="mt-6 inline-flex px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl"
                    >
                      Talk To Experts Now
                    </Link>
                  </div>

                  {/* Image/Visual */}
                    <div className="relative flex w-[555px]  aspect-square items-center justify-end " >
                      {slide.heroVideo && (
                        <div
                          className={`absolute -z-10 overflow-hidden bg-indigo-100 ${
                            slide.id === 2 ? 'rounded-none ' : 'rounded-full'
                          } ${
                            slide.id === 2
                              ? 'h-[420px] w-[420px] sm:h-[400px] sm:w-[700px] left-1/2 top-1/2 -translate-x-1/2 translate-x-[-200px] -translate-y-1/2'
                              : slide.id === 3
                              ? 'h-[600px] w-[600px] sm:h-[540px] sm:w-[540px] left-1/2 top-1/2 -translate-x-1/2 translate-x-[-200px] -translate-y-1/2'
                              : 'h-[300px] w-[300px] sm:h-[320px] sm:w-[320px] -left-[40px] -top-[20px]'
                          }`}
                        >
                          <video
                            className="h-full w-full object-cover"
                            autoPlay
                            muted
                            playsInline
                            loop
                          >
                            <source src={slide.heroVideo} type="video/mp4" />
                          </video>
                        </div>
                      )}
                      {slide.heroImage && (
                       
                        <img
                          src={slide.heroImage}
                          alt={slide.heroAlt}
                          width={555}
                          height={555}
                          loading={slide.id === 1 ? 'eager' : 'lazy'}
                         className='absolute'
                        />
                      )}
                    </div>
                  </div>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="absolute right-6 top-1/2 z-20 -translate-y-1/2">
        <div className="flex flex-col items-center gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all ${
                index === selectedIndex 
                  ? 'w-8 bg-indigo-600' 
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
