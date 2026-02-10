import type { Metadata } from 'next'
import HireDappDevelopersPage from '@/components/hire-dapp-developers/HireDappDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire dApp Developers | How to Hire dApp Developers',
  description:
    'Hire our dedicated dApps developers to launch fully functional blockchain apps for any industry. Get dApp updates and migration services with our outsource dApp developers.',
  alternates: {
    canonical: '/hire-dapp-developers',
  },
  openGraph: {
    title: 'Hire dApp Developers | How to Hire dApp Developers',
    description:
      'Hire our dedicated dApps developers to launch fully functional blockchain apps for any industry. Get dApp updates and migration services with our outsource dApp developers.',
    url: '/hire-dapp-developers',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/blockchain-images/web3-testing-coding.gif',
        width: 1200,
        height: 630,
        alt: 'Hire dApp Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire dApp Developers | How to Hire dApp Developers',
    description:
      'Hire our dedicated dApps developers to launch fully functional blockchain apps for any industry. Get dApp updates and migration services with our outsource dApp developers.',
    images: ['https://www.Infynex.com/assets/img/blockchain-images/web3-testing-coding.gif'],
  },
}

export default function HireDappDevelopers() {
  return <HireDappDevelopersPage />
}
