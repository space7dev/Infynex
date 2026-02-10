import type { Metadata } from 'next'
import AndroidAppDevelopmentPage from '@/components/android-app-development/AndroidAppDevelopmentPage'

export const metadata: Metadata = {
  title: 'Android App Development Company in USA | Infynex',
  description:
    'Infynex is a top-rated Android app development services company with 13+ years of proven success.',
  alternates: {
    canonical: '/android-app-development',
  },
  openGraph: {
    title: 'Android App Development Company in USA | Infynex',
    description:
      'Infynex is a top-rated Android app development services company with 13+ years of proven success.',
    url: '/android-app-development',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/android-app/android-app-development-services-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Android app development services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Android App Development Company in USA | Infynex',
    description:
      'Infynex is a top-rated Android app development services company with 13+ years of proven success.',
    images: ['https://www.suffescom.com/assets/img/android-app/android-app-development-services-banner.webp'],
  },
}

export default function AndroidAppDevelopment() {
  return <AndroidAppDevelopmentPage />
}
