import { buildServiceMetadata } from '@/lib/seo'
import BlockchainEcommercePlatformPage from './components/BlockchainEcommercePlatformPage'

export const metadata = buildServiceMetadata({
  title: 'Blockchain Ecommerce Marketplace Development and Solutions',
  description:
    'We develop decentralized ecommerce platforms for buying and selling with blockchain security and transparency.',
  canonical: '/blockchain-ecommerce-platform',
  image: 'https://www.suffescom.com/assets/img/blockchain-images/blockchain-ecommerce-marketplace-banner.webp',
  imageAlt: 'Blockchain ecommerce marketplace development',
})

export default function BlockchainEcommercePlatform() {
  return <BlockchainEcommercePlatformPage />
}
