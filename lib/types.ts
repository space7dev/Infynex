export interface Service {
  icon: any
  title: string
  description: string
  href?: string
  features?: string[]
}

export interface Testimonial {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

export interface CaseStudy {
  title: string
  client: string
  category: string
  description: string
  results: string[]
  image?: string
  href: string
}

export interface NavItem {
  name: string
  href: string
}

export interface SiteConfig {
  name: string
  description: string
  url: string
  phone: string
  email: string
  address: string
  social: {
    twitter: string
    linkedin: string
    github: string
    facebook: string
  }
}
