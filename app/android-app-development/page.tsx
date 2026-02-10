import { buildServiceMetadata } from '@/lib/seo'
import AndroidAppDevelopmentPage from './components/AndroidAppDevelopmentPage'

export const metadata = buildServiceMetadata({
  title: 'Android App Development Company in USA | Infynex',
  description:
    'Infynex is a top-rated Android app development services company with 13+ years of proven success.',
  canonical: '/android-app-development',
  image: 'https://www.suffescom.com/assets/img/android-app/android-app-development-services-banner.webp',
  imageAlt: 'Android app development services',
})

export default function AndroidAppDevelopment() {
  return <AndroidAppDevelopmentPage />
}
