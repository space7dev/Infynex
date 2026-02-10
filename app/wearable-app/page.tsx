import { buildServiceMetadata } from '@/lib/seo'
import WearableAppPage from './components/WearableAppPage'

export const metadata = buildServiceMetadata({
  title: 'AI Healthcare Software Development | AI Medical Solutions',
  description:
    'Sustain business growth with AI healthcare software solutions from a leading development company.',
  canonical: '/wearable-app',
  image: 'https://www.suffescom.com/assets/img/web-img/ai-healthcare-development-revolutionize.webp',
  imageAlt: 'AI healthcare software development',
})

export default function WearableApp() {
  return <WearableAppPage />
}
