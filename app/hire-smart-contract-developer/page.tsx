import type { Metadata } from 'next'
import HireSmartContractDeveloperPage from '@/components/hire-smart-contract-developer/HireSmartContractDeveloperPage'

export const metadata: Metadata = {
  title:
    'Hire Dedicated Smart Contract Developers | Hire Outsource Smart Contract Developer USA',
  description:
    'We are the leading smart contract development company providing solutions to every size of business globally. We deliver quality-oriented blockchain-based smart contracts that enhance security and growth.',
  alternates: {
    canonical: '/hire-smart-contract-developer',
  },
  openGraph: {
    title:
      'Hire Dedicated Smart Contract Developers | Hire Outsource Smart Contract Developer USA',
    description:
      'We are the leading smart contract development company providing solutions to every size of business globally. We deliver quality-oriented blockchain-based smart contracts that enhance security and growth.',
    url: '/hire-smart-contract-developer',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-smart-contract-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Hire Smart Contract Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title:
      'Hire Dedicated Smart Contract Developers | Hire Outsource Smart Contract Developer USA',
    description:
      'We are the leading smart contract development company providing solutions to every size of business globally. We deliver quality-oriented blockchain-based smart contracts that enhance security and growth.',
    images: [
      'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-smart-contract-banner.webp',
    ],
  },
}

export default function HireSmartContractDeveloper() {
  return <HireSmartContractDeveloperPage />
}
