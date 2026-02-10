import type { Metadata } from 'next';
import VideoTestimonials from './components/VideoTestimonials'
import TextTestimonials from './components/TextTestimonials'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Infynex Client Video Review | Infynex Client Testimonial and Reviews',
  description: 'We love being appreciated. Read all Infynex clients feedback and review. Infynex negative and positive reviews and ratings. List of all Infynex Clients',
  keywords: [
    'client testimonials',
    'video reviews',
    'client feedback',
    'Infynex reviews',
    'client ratings',
    'app development reviews',
    'software development testimonials',
    'mobile app reviews',
    'blockchain development reviews',
    'AI development testimonials'
  ],
  openGraph: {
    title: 'Infynex Client Video Review | Infynex Client Testimonial and Reviews',
    description: 'We love being appreciated. Read all Infynex clients feedback and review. Infynex negative and positive reviews and ratings. List of all Infynex Clients.',
    url: 'https://www.Infynex.com/testimonials',
    type: 'website',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/new_suffes_images/new_logo_new.webp',
        width: 1200,
        height: 630,
        alt: 'Infynex Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    site: '@Infynex',
    creator: '@Infynex',
    title: 'Infynex Client Video Review | Infynex Client Testimonial and Reviews',
    description: 'We love being appreciated. Read all Infynex clients feedback and review. Infynex negative and positive reviews and ratings. List of all Infynex Clients.',
    images: ['https://www.Infynex.com/assets/img/new_suffes_images/new_logo_new.webp']
  },
  alternates: {
    canonical: 'https://www.Infynex.com/testimonials'
  }
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen">
      {/* Video Testimonials Section */}
      <VideoTestimonials />

      {/* Client Motto Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-primary-600 to-secondary-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Motto</h3>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Client Satisfaction and Proactive Support
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Our services are regarded as the most reliable by our clients. Check out what our valuable clients say about their experience working with Infynex Solutions.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
            >
              Get Free Consultation!
            </Link>
          </div>
        </div>
      </section>

      {/* Text Testimonials Section */}
      <TextTestimonials />

      {/* Additional Testimonials Highlights */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Why Clients Choose Us
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Delivering Excellence Through Innovation and Dedication
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">300+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">4.9/5</h3>
                <p className="text-gray-600">Average Rating</p>
              </div>

              <div className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-secondary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">15+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Clients Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                Trusted by Industry Leaders
              </h2>
              <p className="text-lg text-gray-600">
                We&apos;re proud to work with some of the world&apos;s most innovative companies
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center opacity-60 hover:opacity-100 transition-opacity duration-300">
              <div className="flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">NBCUniversal</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">Chili&apos;s</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">Universal</p>
                </div>
              </div>
              <div className="flex items-center justify-center p-4">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-800">Radisson</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your Success Story?
            </h2>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Join hundreds of satisfied clients who have transformed their businesses with our innovative solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-primary-600 text-white font-bold rounded-lg hover:bg-primary-700 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                Start Your Project
              </Link>
              <Link
                href="/portfolio"
                className="inline-block px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
