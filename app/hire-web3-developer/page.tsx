import type { Metadata } from 'next'
import HireWeb3DeveloperPage from '@/components/hire-web3-developer/HireWeb3DeveloperPage'

export const metadata: Metadata = {
  title: 'Hire Dedicated Web3 Developers | Hire Remote Web3 Developers',
  description:
    'From idea to deployment, hire Web3 developers who deliver quality code, robust architecture, and unmatched speed for your Web3 platform.',
  alternates: {
    canonical: '/hire-web3-developer',
  },
  openGraph: {
    title: 'Hire Dedicated Web3 Developers | Hire Remote Web3 Developers',
    description:
      'From idea to deployment, hire Web3 developers who deliver quality code, robust architecture, and unmatched speed for your Web3 platform.',
    url: '/hire-web3-developer',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Hire Web3 Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire Dedicated Web3 Developers | Hire Remote Web3 Developers',
    description:
      'From idea to deployment, hire Web3 developers who deliver quality code, robust architecture, and unmatched speed for your Web3 platform.',
    images: [
      'https://www.Infynex.com/assets/img/remote-developers/hire-remote-web3-developers-banner.webp',
    ],
  },
}

export default function HireWeb3Developer() {
  return <HireWeb3DeveloperPage />
}
