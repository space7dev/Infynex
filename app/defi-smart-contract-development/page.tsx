import { buildServiceMetadata } from '@/lib/seo'
import DefiSmartContractDevelopmentPage from './components/DefiSmartContractDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'Best DeFi Smart Contract Development Company in USA, UK, Australia, Germany',
  description:
    'We are a DeFi smart contract development company delivering customized smart contract applications and services for decentralized finance.',
  canonical: '/defi-smart-contract-development',
  image: 'https://www.suffescom.com/assets/img/blockchain-images/defi-smart-contract-development-banner.webp',
  imageAlt: 'DeFi smart contract development',
})

export default function DefiSmartContractDevelopment() {
  return <DefiSmartContractDevelopmentPage />
}
