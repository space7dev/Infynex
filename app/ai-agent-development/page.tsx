import { buildServiceMetadata } from '@/lib/seo'
import AiAgentDevelopmentPage from './components/AiAgentDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'Custom AI Agent Development Services',
  description:
    'Leading AI agent development company based in USA, UAE and India. We offer AI agents development services to autonomously perform tasks based on defined goals. Build multi-agent systems now.',
  canonical: '/ai-agent-development',
  image: 'https://www.Infynex.com/assets/img/web-img/ai-agent-development-company-bg.webp',
  imageAlt: 'AI agent development services',
})

export default function AiAgentDevelopment() {
  return <AiAgentDevelopmentPage />
}
