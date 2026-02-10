import type { Metadata } from 'next'
import HireReactNativeDevelopersPage from '@/components/hire-react-native-developers/HireReactNativeDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire React Native Developers | Infynex',
  description:
    'Hire React Native Developers at Infynex Solutions to ensure efficient app performance across all platforms for an enhanced user experience and higher revenue.',
  alternates: {
    canonical: '/hire-react-native-developers',
  },
  openGraph: {
    title: 'Hire React Native Developers | Infynex',
    description:
      'Hire React Native Developers at Infynex Solutions to ensure efficient app performance across all platforms for an enhanced user experience and higher revenue.',
    url: '/hire-react-native-developers',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/web-img/hire-react-native-developer.webp',
        width: 1200,
        height: 630,
        alt: 'Hire React Native Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire React Native Developers | Infynex',
    description:
      'Hire React Native Developers at Infynex Solutions to ensure efficient app performance across all platforms for an enhanced user experience and higher revenue.',
    images: ['https://www.Infynex.com/assets/img/web-img/hire-react-native-developer.webp'],
  },
}

export default function HireReactNativeDevelopers() {
  return <HireReactNativeDevelopersPage />
}
