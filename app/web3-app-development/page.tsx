import type { Metadata } from 'next'
import Web3AppDevelopmentPage from '@/components/web3-app-development/Web3AppDevelopmentPage'

export const metadata: Metadata = {
  title: 'Web3 App Development Service | Web3 dApp Company',
  description:
    'We build secure, scalable web3 mobile apps for Android and iOS using the most advanced web3 technologies.',
  alternates: {
    canonical: '/web3-app-development',
  },
  openGraph: {
    title: 'Web3 App Development Service | Web3 dApp Company',
    description:
      'We build secure, scalable web3 mobile apps for Android and iOS using the most advanced web3 technologies.',
    url: '/web3-app-development',
    images: [
      {
        url: 'https://s3.us-east-2.amazonaws.com/suffescom.com/168913834564ae34a96666d.webp',
        width: 1200,
        height: 630,
        alt: 'Web3 app development service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Web3 App Development Service | Web3 dApp Company',
    description:
      'We build secure, scalable web3 mobile apps for Android and iOS using the most advanced web3 technologies.',
    images: [
      'https://s3.us-east-2.amazonaws.com/suffescom.com/168913834564ae34a96666d.webp',
    ],
  },
}

export default function Web3AppDevelopment() {
  return <Web3AppDevelopmentPage />
}
