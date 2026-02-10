import type { Metadata } from 'next'
import AiAgentDevelopmentPage from '@/components/ai-agent-development/AiAgentDevelopmentPage'

export const metadata: Metadata = {
  title: 'Custom AI Agent Development Services',
  description:
    'Leading AI agent development company based in USA, UAE and India. We offer AI agents development services to autonomously perform tasks based on defined goals. Build multi-agent systems now.',
  alternates: {
    canonical: '/ai-agent-development',
  },
  openGraph: {
    title: 'Custom AI Agent Development Services',
    description:
      'Leading AI agent development company based in USA, UAE and India. We offer AI agents development services to autonomously perform tasks based on defined goals. Build multi-agent systems now.',
    url: '/ai-agent-development',
    images: [
      {
        url: 'https://www.Infynex.com/assets/img/web-img/ai-agent-development-company-bg.webp',
        width: 1200,
        height: 630,
        alt: 'AI agent development services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Custom AI Agent Development Services',
    description:
      'Leading AI agent development company based in USA, UAE and India. We offer AI agents development services to autonomously perform tasks based on defined goals. Build multi-agent systems now.',
    images: ['https://www.Infynex.com/assets/img/web-img/ai-agent-development-company-bg.webp'],
  },
}

export default function AiAgentDevelopment() {
  return <AiAgentDevelopmentPage />
}
