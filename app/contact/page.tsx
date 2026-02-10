import type { Metadata } from 'next'
import ContactPage from './components/ContactPage'

export const metadata: Metadata = {
  title: 'Contact Us - Infynex Solutions',
  description:
    'Convert your ideas into reality with our app and web development services. Contact us or request a quote, and we will respond within 24 hours.',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Us - Infynex Solutions',
    description:
      'Convert your ideas into reality with our app and web development services. Contact us or request a quote, and we will respond within 24 hours.',
    url: '/contact',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/new_suffes_images/nice-met.webp',
        width: 1200,
        height: 630,
        alt: 'Contact Infynex Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Us - Infynex Solutions',
    description:
      'Convert your ideas into reality with our app and web development services. Contact us or request a quote, and we will respond within 24 hours.',
    images: ['https://www.Infynex.com/assets/img/new_suffes_images/nice-met.webp'],
  },
}

export default function Contact() {
  return <ContactPage />
}
