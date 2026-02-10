import type { Metadata } from 'next'
import HireAIDevelopersPage from '@/components/hire-ai-developers/HireAIDevelopersPage'

export const metadata: Metadata = {
  title: 'Hire AI Developers | Remote AI Experts for Hire',
  description:
    'Hire AI developers with expertise in enterprise AI systems, automation, LLMs, and AI apps. Build intelligent and scalable solutions with remote or dedicated AI developers.',
  alternates: {
    canonical: '/hire-ai-developers',
  },
  openGraph: {
    title: 'Hire AI Developers | Remote AI Experts for Hire',
    description:
      'Hire AI developers with expertise in enterprise AI systems, automation, LLMs, and AI apps. Build intelligent and scalable solutions with remote or dedicated AI developers.',
    url: '/hire-ai-developers',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/web-img/hire-ai-developers-engineers-banner.webp',
        width: 1200,
        height: 630,
        alt: 'Hire AI Developers',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hire AI Developers | Remote AI Experts for Hire',
    description:
      'Hire AI developers with expertise in enterprise AI systems, automation, LLMs, and AI apps. Build intelligent and scalable solutions with remote or dedicated AI developers.',
    images: ['https://www.Infynex.com/assets/img/web-img/hire-ai-developers-engineers-banner.webp'],
  },
}

export default function HireAIDevelopers() {
  return <HireAIDevelopersPage />
}
