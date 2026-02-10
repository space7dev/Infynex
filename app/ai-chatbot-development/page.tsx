import { buildServiceMetadata } from '@/lib/seo'
import AiChatbotDevelopmentPage from './components/AiChatbotDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'AI Chatbot Development Services',
  description:
    'We provide AI chatbot development services to improve ROI, automate processes, and deliver secure, scalable chatbot solutions for businesses.',
  canonical: '/ai-chatbot-development',
  image: 'https://www.suffescom.com/assets/img/blockchain-images/chatbot-development-solutions-banner.webp',
  imageAlt: 'AI chatbot development services',
})

export default function AiChatbotDevelopment() {
  return <AiChatbotDevelopmentPage />
}
