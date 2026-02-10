import Link from 'next/link'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react'
import { siteConfig, navItems } from '@/lib/config'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    { name: 'Mobile App Development', href: '/mobile-app-development' },
    { name: 'Custom App Development', href: '/custom-app-development' },
    { name: 'Android App Development', href: '/android-app-development' },
    { name: 'ios App Development', href: '/ios-app-development' },
    { name: 'AI Agent Development', href: '/ai-agent-development' },
    { name: 'AI Chatbot Development', href: '/ai-chatbot-development' },
  ]

  const company = [
    { name: 'AI Healthcare Software', href: '/wearable-app' },
    { name: 'Blockchain Ecommerce Platform', href: '/blockchain-ecommerce-platform' },
    { name: 'Web3 App Development', href: '/web3-app-development' },
    { name: 'DeFi Smart Contract Development', href: '/defi-smart-contract-development' },

  ]

  const resources = [
    { name: 'Job Board', href: '/job-board' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <footer className="bg-secondary-900 text-secondary-200">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 flex items-center space-x-2">
              {/* <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary-600 to-primary-400">
                <span className="text-2xl font-bold text-white" ></span>
              </div> */}
              <span className="text-xl font-bold text-white">{siteConfig.name}</span>
            </Link>
            <p className="mb-6 text-secondary-400">
              Transforming businesses through innovative technology solutions. We specialize in
              mobile apps, blockchain, AI, and custom software development.
            </p>
            <div className="space-y-3">
              <a
                href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                className="flex items-center space-x-3 text-secondary-300 hover:text-primary-400"
              >
                <Phone className="h-5 w-5" />
                <span>{siteConfig.phone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center space-x-3 text-secondary-300 hover:text-primary-400"
              >
                <Mail className="h-5 w-5" />
                <span>{siteConfig.email}</span>
              </a>
              <div className="flex items-start space-x-3 text-secondary-300">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white " style={{color:'rgb(15 23 42 / var(--tw-bg-opacity, 1))'}}>Services</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-bold text-white">Resources</h3>
            <ul className="space-y-3">
              {resources.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-secondary-400 hover:text-primary-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-secondary-800">
        <div className="container-custom py-6">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-secondary-400">
              © {currentYear} {siteConfig.name}. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <a
                href={siteConfig.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-400 hover:text-primary-400"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
            </div>

            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-secondary-400 hover:text-primary-400">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-secondary-400 hover:text-primary-400">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
