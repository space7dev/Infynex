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
