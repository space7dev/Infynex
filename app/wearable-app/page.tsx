import type { Metadata } from 'next'
import WearableAppPage from '@/components/wearable-app/WearableAppPage'

export const metadata: Metadata = {
  title: 'AI Healthcare Software Development | AI Medical Solutions',
  description:
    'Sustain business growth with AI healthcare software solutions from a leading development company.',
  alternates: {
    canonical: '/wearable-app',
  },
  openGraph: {
    title: 'AI Healthcare Software Development | AI Medical Solutions',
    description:
      'Sustain business growth with AI healthcare software solutions from a leading development company.',
    url: '/wearable-app',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/web-img/ai-healthcare-development-revolutionize.webp',
        width: 1200,
        height: 630,
        alt: 'AI healthcare software development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Healthcare Software Development | AI Medical Solutions',
    description:
      'Sustain business growth with AI healthcare software solutions from a leading development company.',
    images: [
      'https://www.suffescom.com/assets/img/web-img/ai-healthcare-development-revolutionize.webp',
    ],
  },
}

export default function WearableApp() {
  return <WearableAppPage />
}
