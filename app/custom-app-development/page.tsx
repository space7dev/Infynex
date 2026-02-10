import type { Metadata } from 'next'
import CustomAppDevelopmentPage from '@/components/custom-app-development/CustomAppDevelopmentPage'

export const metadata: Metadata = {
  title: 'Custom Application Development | User Specific App Development',
  description:
    'Get user specific custom app development services with easy migration and porting functionality to make your business applications more effective.',
  alternates: {
    canonical: '/custom-app-development',
  },
  openGraph: {
    title: 'Custom Application Development | User Specific App Development',
    description:
      'Get user specific custom app development services with easy migration and porting functionality to make your business applications more effective.',
    url: '/custom-app-development',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/new_suffes_images/custom-app-development.webp',
        width: 1200,
        height: 630,
        alt: 'Custom application development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom Application Development | User Specific App Development',
    description:
      'Get user specific custom app development services with easy migration and porting functionality to make your business applications more effective.',
    images: ['https://www.suffescom.com/assets/img/new_suffes_images/custom-app-development.webp'],
  },
}

export default function CustomAppDevelopment() {
  return <CustomAppDevelopmentPage />
}
