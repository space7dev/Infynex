import type { Metadata } from 'next'
import AiChatbotDevelopmentPage from '@/components/ai-chatbot-development/AiChatbotDevelopmentPage'

export const metadata: Metadata = {
  title: 'AI Chatbot Development Services',
  description:
    'We provide AI chatbot development services to improve ROI, automate processes, and deliver secure, scalable chatbot solutions for businesses.',
  alternates: {
    canonical: '/ai-chatbot-development',
  },
  openGraph: {
    title: 'AI Chatbot Development Services',
    description:
      'We provide AI chatbot development services to improve ROI, automate processes, and deliver secure, scalable chatbot solutions for businesses.',
    url: '/ai-chatbot-development',
    images: [
      {
        url: 'https://www.suffescom.com/assets/img/blockchain-images/chatbot-development-solutions-banner.webp',
        width: 1200,
        height: 630,
        alt: 'AI chatbot development services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Chatbot Development Services',
    description:
      'We provide AI chatbot development services to improve ROI, automate processes, and deliver secure, scalable chatbot solutions for businesses.',
    images: [
      'https://www.suffescom.com/assets/img/blockchain-images/chatbot-development-solutions-banner.webp',
    ],
  },
}

export default function AiChatbotDevelopment() {
  return <AiChatbotDevelopmentPage />
}
