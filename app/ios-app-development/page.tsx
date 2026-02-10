import { buildServiceMetadata } from '@/lib/seo'
import IosAppDevelopmentPage from './components/IosAppDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'iPhone App Development Services | iPhone App Developers - Infynex Solutions',
  description:
    'Infynex Solutions is a leading provider of iPhone App Development Services that takes pride in delivering highly robust and comprehensive app.',
  canonical: '/ios-app-development',
  image: 'https://www.suffescom.com/assets/img/new_suffes_images/exp.webp',
  imageAlt: 'iPhone app development services',
})

export default function IosAppDevelopment() {
  return <IosAppDevelopmentPage />
}
