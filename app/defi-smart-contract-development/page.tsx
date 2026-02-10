import type { Metadata } from 'next'
import DefiSmartContractDevelopmentPage from '@/components/defi-smart-contract-development/DefiSmartContractDevelopmentPage'

export const metadata: Metadata = {
  title:
    'Best DeFi Smart Contract Development Company in USA, UK, Australia, Germany',
  description:
    'We are a DeFi smart contract development company delivering customized smart contract applications and services for decentralized finance.',
  alternates: {
    canonical: '/defi-smart-contract-development',
  },
  openGraph: {
    title:
      'Best DeFi Smart Contract Development Company in USA, UK, Australia, Germany',
    description:
      'We are a DeFi smart contract development company delivering customized smart contract applications and services for decentralized finance.',
    url: '/defi-smart-contract-development',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/blockchain-images/defi-smart-contract-development-banner.webp',
        width: 1200,
        height: 630,
        alt: 'DeFi smart contract development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Best DeFi Smart Contract Development Company in USA, UK, Australia, Germany',
    description:
      'We are a DeFi smart contract development company delivering customized smart contract applications and services for decentralized finance.',
    images: [
      'https://www.suffescom.com/assets/img/blockchain-images/defi-smart-contract-development-banner.webp',
    ],
  },
}

export default function DefiSmartContractDevelopment() {
  return <DefiSmartContractDevelopmentPage />
}
