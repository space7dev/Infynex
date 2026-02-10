import { buildServiceMetadata } from '@/lib/seo'
import Web3AppDevelopmentPage from './components/Web3AppDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'Web3 App Development Service | Web3 dApp Company',
  description:
    'We build secure, scalable web3 mobile apps for Android and iOS using the most advanced web3 technologies.',
  canonical: '/web3-app-development',
  image: 'https://s3.us-east-2.amazonaws.com/suffescom.com/168913834564ae34a96666d.webp',
  imageAlt: 'Web3 app development service',
})

export default function Web3AppDevelopment() {
  return <Web3AppDevelopmentPage />
}
