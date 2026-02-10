import type { Metadata } from 'next'
import BlockchainEcommercePlatformPage from '@/components/blockchain-ecommerce-platform/BlockchainEcommercePlatformPage'

export const metadata: Metadata = {
  title: 'Blockchain Ecommerce Marketplace Development and Solutions',
  description:
    'We develop decentralized ecommerce platforms for buying and selling with blockchain security and transparency.',
  alternates: {
    canonical: '/blockchain-ecommerce-platform',
  },
  openGraph: {
    title: 'Blockchain Ecommerce Marketplace Development and Solutions',
    description:
      'We develop decentralized ecommerce platforms for buying and selling with blockchain security and transparency.',
    url: '/blockchain-ecommerce-platform',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Blockchain ecommerce marketplace development',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blockchain Ecommerce Marketplace Development and Solutions',
    description:
      'We develop decentralized ecommerce platforms for buying and selling with blockchain security and transparency.',
    images: [
      'https://www.suffescom.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-banner.webp',
    ],
  },
}

export default function BlockchainEcommercePlatform() {
  return <BlockchainEcommercePlatformPage />
}
