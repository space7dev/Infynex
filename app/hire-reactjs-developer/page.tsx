import type { Metadata } from 'next'
import HireReactJsDeveloperPage from '@/components/hire-reactjs-developer/HireReactJsDeveloperPage'

export const metadata: Metadata = {
  title: 'ReactJs App Development Company and Services',
  description:
    'Consult with our ReactJs developers to create high performing web app with unique and latest frameworks libraries and development tools. Hire us now.',
  alternates: {
    canonical: '/hire-reactjs-developer',
  },
  openGraph: {
    title: 'ReactJs App Development Company and Services',
    description:
      'Consult with our ReactJs developers to create high performing web app with unique and latest frameworks libraries and development tools. Hire us now.',
    url: '/hire-reactjs-developer',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/new_suffes_images/reactjsbanner.webp',
        width: 1200,
        height: 630,
        alt: 'ReactJS App Development Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ReactJs App Development Company and Services',
    description:
      'Consult with our ReactJs developers to create high performing web app with unique and latest frameworks libraries and development tools. Hire us now.',
    images: ['https://www.Infynex.com/assets/img/new_suffes_images/reactjsbanner.webp'],
  },
}

export default function HireReactJsDeveloper() {
  return <HireReactJsDeveloperPage />
}
