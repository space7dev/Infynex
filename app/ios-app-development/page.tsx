import type { Metadata } from 'next'
import IosAppDevelopmentPage from '@/components/ios-app-development/IosAppDevelopmentPage'

export const metadata: Metadata = {
  title: 'iPhone App Development Services | iPhone App Developers - Infynex Solutions',
  description:
    'Infynex Solutions is a leading provider of iPhone App Development Services that takes pride in delivering highly robust and comprehensive app.',
  alternates: {
    canonical: '/ios-app-development',
  },
  openGraph: {
    title:
      'iPhone App Development Services | iPhone App Developers - Infynex Solutions',
    description:
      'Infynex Solutions is a leading provider of iPhone App Development Services that takes pride in delivering highly robust and comprehensive app.',
    url: '/ios-app-development',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/new_suffes_images/exp.webp',
        width: 1200,
        height: 630,
        alt: 'iPhone app development services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'iPhone App Development Services | iPhone App Developers - Infynex Solutions',
    description:
      'Infynex Solutions is a leading provider of iPhone App Development Services that takes pride in delivering highly robust and comprehensive app.',
    images: ['https://www.suffescom.com/assets/img/new_suffes_images/exp.webp'],
  },
}

export default function IosAppDevelopment() {
  return <IosAppDevelopmentPage />
}
