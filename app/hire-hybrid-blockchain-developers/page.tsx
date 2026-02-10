import type { Metadata } from 'next'
import HireHybridBlockchainDevelopersPage from '@/components/hire-hybrid-blockchain-developers/HireHybridBlockchainDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire Hybrid Blockchain Developers | Public and Private Blockchain Programmer',
  description:
    'A hybrid blockchain is a unique type of blockchain and it is combination of both public and private entities. Hire our remote hybrid blockchain developers team at affordable price.',
  alternates: {
    canonical: '/hire-hybrid-blockchain-developers',
  },
  openGraph: {
    title: 'Hire Hybrid Blockchain Developers | Public and Private Blockchain Programmer',
    description:
      'A hybrid blockchain is a unique type of blockchain and it is combination of both public and private entities. Hire our remote hybrid blockchain developers team at affordable price.',
    url: '/hire-hybrid-blockchain-developers',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-hybrid-blockchain-developer-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Hire Hybrid Blockchain Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Hybrid Blockchain Developers | Public and Private Blockchain Programmer',
    description:
      'A hybrid blockchain is a unique type of blockchain and it is combination of both public and private entities. Hire our remote hybrid blockchain developers team at affordable price.',
    images: [
      'https://www.Infynex.com/assets/img/remote-developers/hire-dedicated-hybrid-blockchain-developer-banner.webp',
    ],
  },
}

export default function HireHybridBlockchainDevelopers() {
  return <HireHybridBlockchainDevelopersPage />
}
