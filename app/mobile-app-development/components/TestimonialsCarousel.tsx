'use client'

import { useMemo } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'

type Testimonial = {
  name: string
  quote: string
  avatar: string
}

type TestimonialsCarouselProps = {
  testimonials: Testimonial[]
}

export default function TestimonialsCarousel({
  testimonials,
}: TestimonialsCarouselProps) {
  const autoplay = useMemo(() => Autoplay({ delay: 3800, stopOnInteraction: false }), [])
  const [emblaRef] = useEmblaCarousel({ loop: true }, [autoplay])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-6">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_55%] lg:flex-[0_0_33%]"
          >
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm text-white/80">"{testimonial.quote}"</p>
              <div className="mt-6 flex items-center gap-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="h-10 w-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-semibold text-white">{testimonial.name}</p>
                  <p className="text-xs text-white/60">5.0 rating</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
