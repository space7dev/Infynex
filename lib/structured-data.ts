// Enhanced Structured Data for SEO
// This provides rich snippets for Google search results

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Infynex',
  alternateName: 'Infynex Solutions',
  url: 'https://infynex.agency',
  logo: 'https://infynex.agency/agency-logo.png',
  description: 'Infynex is a leading technology solutions provider specializing in Mobile App Development, Blockchain, AI, and Custom Software Development.',
  email: 'contact@infynex.agency',
  telephone: '+1-234-206-0062',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Street',
    addressLocality: 'Silicon Valley',
    addressRegion: 'CA',
    postalCode: '94025',
    addressCountry: 'US',
  },
  sameAs: [
    'https://twitter.com/infynex',
    'https://linkedin.com/company/infynex',
    'https://facebook.com/infynex',
    'https://github.com/infynex',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-206-0062',
    contactType: 'Customer Service',
    email: 'contact@infynex.com',
    availableLanguage: ['English'],
  },
  founder: {
    '@type': 'Person',
    name: 'Infynex Team',
  },
  foundingDate: '2020',
  areaServed: 'Worldwide',
  serviceType: [
    'Mobile App Development',
    'Blockchain Development',
    'AI Development',
    'Custom Software Development',
    'Web3 Development',
  ],
}

export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Infynex',
  url: 'https://infynex.agency',
  description: 'Leading technology solutions provider for mobile apps, blockchain, and AI.',
  publisher: {
    '@type': 'Organization',
    name: 'Infynex',
  },
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://infynex.agency/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
}

export const professionalServiceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Infynex Solutions',
  image: 'https://infynex.agency/agency-logo.png',
  '@id': 'https://infynex.agency',
  url: 'https://infynex.agency',
  telephone: '+1-234-206-0062',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Tech Street',
    addressLocality: 'Silicon Valley',
    addressRegion: 'CA',
    postalCode: '94025',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.3861,
    longitude: -122.0839,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  sameAs: [
    'https://twitter.com/infynex',
    'https://linkedin.com/company/infynex',
    'https://facebook.com/infynex',
  ],
}

export const breadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

export const serviceSchema = (service: {
  name: string
  description: string
  url: string
  image?: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: service.name,
  description: service.description,
  provider: {
    '@type': 'Organization',
    name: 'Infynex',
    url: 'https://infynex.agency',
  },
  areaServed: 'Worldwide',
  url: service.url,
  image: service.image || 'https://infynex.agency/agency-logo.png',
})

export const faqSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
})
