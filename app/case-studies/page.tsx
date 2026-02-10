import { Metadata } from 'next'
import Hero from '@/components/Hero'
import CaseStudyCard from '@/components/CaseStudyCard'

export const metadata: Metadata = {
  title: 'Case Studies - Success Stories',
  description:
    'Explore our detailed case studies showcasing successful projects and the results we delivered for our clients.',
}

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      title: 'E-Commerce Mobile App Transformation',
      client: 'RetailCo',
      category: 'Mobile Development',
      description:
        'Redesigned and rebuilt a mobile shopping experience focusing on performance and user experience, resulting in significant improvements in conversion rates and customer satisfaction.',
      results: [
        '150% increase in mobile conversions',
        '40% faster page load times',
        '4.8★ average app store rating',
        '60% increase in daily active users',
      ],
      href: '/case-studies/retailco',
    },
    {
      title: 'DeFi Platform Development',
      client: 'CryptoFin',
      category: 'Blockchain',
      description:
        'Built a secure decentralized finance platform from scratch with multi-chain support, advanced security features, and intuitive user experience for both crypto natives and newcomers.',
      results: [
        '$10M+ daily trading volume',
        'Zero security breaches since launch',
        '50K+ active users',
        '99.9% uptime maintained',
      ],
      href: '/case-studies/cryptofin',
    },
    {
      title: 'AI-Powered Customer Service Platform',
      client: 'ServicePro',
      category: 'Artificial Intelligence',
      description:
        'Implemented an advanced AI chatbot with natural language processing capabilities that automated customer support, reducing costs while improving customer satisfaction scores.',
      results: [
        '80% of inquiries automated',
        '60% reduction in support costs',
        '95% customer satisfaction rate',
        '24/7 support availability',
      ],
      href: '/case-studies/servicepro',
    },
    {
      title: 'Food Delivery Platform',
      client: 'QuickEats',
      category: 'Mobile Development',
      description:
        'Created a comprehensive food delivery platform with real-time order tracking, intelligent restaurant recommendations, and seamless payment integration for iOS and Android.',
      results: [
        '500K+ monthly orders',
        '10K+ partner restaurants',
        '4.5★ app store rating',
        '85% customer retention rate',
      ],
      href: '/case-studies/quickeats',
    },
    {
      title: 'Blockchain-Based Medical Records',
      client: 'HealthChain',
      category: 'Blockchain',
      description:
        'Developed a secure, HIPAA-compliant electronic health records system using blockchain technology to ensure data privacy, interoperability, and patient control.',
      results: [
        '100% HIPAA compliance',
        '50+ hospitals integrated',
        '1M+ patient records secured',
        'Zero data breaches',
      ],
      href: '/case-studies/healthchain',
    },
    {
      title: 'Fitness Tracking Mobile App',
      client: 'FitLife',
      category: 'Mobile Development',
      description:
        'Built a comprehensive fitness tracking application with AI-powered workout recommendations, nutrition tracking, and social features to motivate users.',
      results: [
        '1M+ app downloads',
        '4.7★ app store rating',
        '85% monthly retention rate',
        'Featured on App Store',
      ],
      href: '/case-studies/fitlife',
    },
    {
      title: 'Predictive Maintenance AI System',
      client: 'ManufactureTech',
      category: 'Artificial Intelligence',
      description:
        'Deployed a machine learning system to predict equipment failures before they occur, reducing downtime and maintenance costs for manufacturing facilities.',
      results: [
        '70% reduction in unplanned downtime',
        '50% decrease in maintenance costs',
        '90% prediction accuracy',
        'ROI achieved in 6 months',
      ],
      href: '/case-studies/manufacturetech',
    },
    {
      title: 'NFT Marketplace Platform',
      client: 'ArtChain',
      category: 'Blockchain',
      description:
        'Launched a full-featured NFT marketplace with minting, trading, and auction capabilities, supporting multiple blockchain networks and digital asset types.',
      results: [
        '$5M+ in total sales',
        '25K+ registered users',
        '100K+ NFTs minted',
        'Multi-chain support',
      ],
      href: '/case-studies/artchain',
    },
    {
      title: 'Enterprise CRM Solution',
      client: 'SalesPro',
      category: 'Web Application',
      description:
        'Developed a custom CRM system with advanced analytics, automation features, and seamless integration with existing business tools.',
      results: [
        '45% increase in sales productivity',
        '30% improvement in lead conversion',
        '1000+ daily active users',
        '99.5% system uptime',
      ],
      href: '/case-studies/salespro',
    },
  ]

  const categories = ['All', 'Mobile Development', 'Blockchain', 'Artificial Intelligence', 'Web Application']

  return (
    <>
      <Hero
        subtitle="Success Stories"
        title="Real Results for Real Businesses"
        description="Explore detailed case studies of how we've helped businesses achieve their goals through innovative technology solutions."
        primaryCTA={{ text: 'Start Your Project', href: '/contact' }}
        secondaryCTA={{ text: 'View Portfolio', href: '/portfolio' }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="mb-12 flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-lg px-6 py-2 font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-primary-600 text-white'
                    : 'bg-secondary-100 text-secondary-700 hover:bg-secondary-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Case Studies Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {caseStudies.map((study, index) => (
              <CaseStudyCard key={index} {...study} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4">Want Similar Results?</h2>
            <p className="mb-8 text-lg text-secondary-600">
              These are just a few examples of how we&apos;ve helped businesses transform through
              technology. Let&apos;s discuss what we can achieve together.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a href="/contact" className="btn-primary">
                Discuss Your Project
              </a>
              <a href="/testimonials" className="btn-secondary">
                Read More Testimonials
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
