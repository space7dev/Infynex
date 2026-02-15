import { Metadata } from 'next'
import { siteConfig } from '@/lib/config'
import HeroCarousel from './components/HeroCarousel'
import PartnersCarouselSection from './components/PartnersCarouselSection'
import SmartAppSolutions from './components/SmartAppSolutions'
import ScalableSolutions from './components/ScalableSolutions'
import IndustrySolutions from './components/IndustrySolutions'
import TeamShowcase from './components/TeamShowcase'
import ConsultingServices from './components/ConsultingServices'
import EcoSystemBenefits from './components/EcoSystemBenefits'
import OfficeCarousel from './components/OfficeCarousel'
import ClientTestimonials from './components/ClientTestimonials'
import EliteCustomers from './components/EliteCustomers'
import ContactSection from './components/ContactSection'
import BlogSection from './components/BlogSection'

export const metadata: Metadata = {
  title: 'Infynex - Leading Technology Solutions | Mobile, Blockchain & AI Development',
  description: 'Infynex provides world-class mobile app development, blockchain solutions, AI services, and custom software development. Transform your business with our expert developers.',
  keywords: [
    'Infynex',
    'mobile app development company',
    'blockchain development services',
    'AI development',
    'custom software development',
    'web3 development',
    'hire developers',
    'technology consulting',
    'app development agency',
  ],
  openGraph: {
    title: 'Infynex - Leading Technology Solutions Provider',
    description: 'Transform your business with cutting-edge mobile apps, blockchain, and AI solutions from Infynex.',
    url: siteConfig.url,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Infynex - Technology Solutions',
    description: 'Leading provider of mobile app, blockchain, and AI development services.',
  },
  alternates: {
    canonical: siteConfig.url,
  },
}

export default function Home() {
  return (
    <>
      {/* Hero Carousel with 4 Slides */}
      <HeroCarousel />

      {/* Partner Logos Carousel */}
      <PartnersCarouselSection />

      {/* Smart App Solutions for Modern Businesses */}
      <SmartAppSolutions />

      {/* Innovate with Scalable Solutions */}
      <ScalableSolutions />

      {/* Modern Technologies for Industry-Specific Solutions */}
      <IndustrySolutions />

      {/* The Team Behind Exceptional Digital Experiences */}
      <TeamShowcase />

      {/* Data-Driven Mobile App and Web3 Consulting Services */}
      <ConsultingServices />

      {/* We Help Build An Eco System That Benefits All + Awards */}
      <EcoSystemBenefits />

      {/* Office Photos Carousel */}
      {/* <OfficeCarousel /> */}

      {/* Discover Client Perspectives on Our Work */}
      <ClientTestimonials />

      {/* Our Elite Customers */}
      <EliteCustomers />

      {/* Contact Form with Map */}
      <ContactSection />

      {/* Read Our Groundbreaking Research - Blog Posts */}
      <BlogSection />
    </>
  )
}
