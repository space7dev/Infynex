export const siteConfig = {
  name: 'Infynex',
  fullName: 'Infynex Solutions',
  description:
    'Infynex is a leading technology solutions provider specializing in Mobile App Development, Blockchain, AI, and Custom Software Development. Transform your business with our expert developers.',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://infynex.agency',
  phone: '+1 (234) 206-0062',
  email: 'contact@infynex.agency',
  address: '123 Tech Street, Silicon Valley, CA 94025',
  social: {
    twitter: 'https://twitter.com/infynex',
    linkedin: 'https://linkedin.com/company/infynex',
    github: 'https://github.com/infynex',
    facebook: 'https://facebook.com/infynex',
  },
}

export const navItems = [
  {
    name: 'Services',
    megaMenu: {
      title: 'Hire the Best-in-class Developers!',
      description: 'Our Developers Employ The Most Advanced Technical Skills To Create The Best Projects.',
      ctaText: 'Contact Us Now!',
      ctaLink: '/contact',
      columns: [
        {
          items: [
            { name: 'Mobile App Development', href: '/mobile-app-development' },
            { name: 'Custom App Development', href: '/custom-app-development' },
            { name: 'Android App Development', href: '/android-app-development' },
            { name: 'iOS App Development', href: '/ios-app-development' },
          ]
        },
        {
          items: [
            { name: 'AI Agent Development', href: '/ai-agent-development' },
            { name: 'AI Chatbot Development', href: '/ai-chatbot-development' },
            { name: 'AI Healthcare Software', href: '/wearable-app' },
          ]
        },
        {
          items: [
            { name: 'Blockchain Ecommerce Platform', href: '/blockchain-ecommerce-platform' },
            { name: 'web3 App Development', href: '/web3-app-development' },
            { name: 'DeFi Smart Contract Development', href: '/defi-smart-contract-development' },
          ]
        }
      ]
    }
  },

  // {
  //   name: 'Hire Developers',
  //   megaMenu: {
  //     title: 'Hire Developers',
  //     description: 'Hire Top-Tier Developers With Proven Expertise Across Modern Technologies And Platforms',
  //     ctaText: 'Contact Us Now!',
  //     ctaLink: '/contact',
  //     columns: [
  //       {
  //         items: [
  //           { name: 'Hire dApp Developers', href: '/hire-dapp-developers' },
  //           { name: 'Hire Smart Contract Developer', href: '/hire-smart-contract-developer' },
  //         ]
  //       },
  //       {
  //         items: [
  //           { name: 'Hire AI Developers', href: '/hire-ai-developers' },
  //           { name: 'Hire Web3 Developer', href: '/hire-web3-developer' },
  //         ]
  //       },
  //       {
  //         items: [
  //           { name: 'Hire Reactjs Developer', href: '/hire-reactjs-developer' },
  //           { name: 'Hire React Native Developers', href: '/hire-react-native-developers' },
  //           { name: 'Hire Hybrid Blockchain Developers', href: '/hire-hybrid-blockchain-developers' },
  //         ]
  //       }
  //     ]
  //   }
  // },
  {
    name: 'Portfolio',
    href: '/portfolio',
  },
  { name: 'Testimonials', href: '/testimonials' },
  { name: 'Job Board', href: '/job-board' },
  {
    name: 'About',
    megaMenu: {
      title: 'About',
      description: '',
      ctaText: '',
      ctaLink: '/about',
      layout: 'tiles',
      hideLeftPanel: true,
      columns: [
        {
          items: [
            { name: 'Our Team', href: '/about-us', iconKey: 'team' },
            { name: 'Awards', href: '/awards', iconKey: 'awards' },
            { name: 'Our Partners', href: '/partners', iconKey: 'partners' },
          ]
        }
      ]
    }
  },
]

export const phoneNumbers = [
  { country: 'USA', number: '+1-234-206-0062', flag: '🇺🇸' },
]
