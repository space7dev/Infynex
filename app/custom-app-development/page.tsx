import { buildServiceMetadata } from '@/lib/seo'
import CustomAppDevelopmentPage from './components/CustomAppDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'Custom Application Development | User Specific App Development',
  description:
    'Get user specific custom app development services with easy migration and porting functionality to make your business applications more effective.',
  canonical: '/custom-app-development',
  image: 'https://www.suffescom.com/assets/img/new_suffes_images/custom-app-development.webp',
  imageAlt: 'Custom application development',
})

export default function CustomAppDevelopment() {
  return <CustomAppDevelopmentPage />
}
