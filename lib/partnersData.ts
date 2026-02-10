export interface PartnerLogo {
  src: string;
  alt: string;
  href?: string;
}

export interface SalesPartner {
  name: string;
  href: string;
  logo: string;
  alt: string;
  description: string;
}

export const partnerLogos: PartnerLogo[] = [
  {
    src: '/parterners/2.webp',
    alt: 'Klarna logo',
  },
  {
    src: '/parterners/3.webp',
    alt: 'Twilio logo',
  },
  {
    src: '/parterners/4.webp',
    alt: 'Google Maps logo',
  },
  {
    src: '/parterners/5.webp',
    alt: 'Cloudflare logo',
  },
  {
    src: '/parterners/6.webp',
    alt: 'Consegna Cloud logo',
  },
  {
    src: '/parterners/7.webp',
    alt: 'Stripe logo',
  },
  {
    src: '/parterners/8.webp',
    alt: 'Shopify logo',
  },
  {
    src: '/parterners/9.webp',
    alt: 'OpenAI logo',
  },
  {
    src: '/parterners/10.webp',
    alt: 'ButterCMS logo',
    href: 'https://buttercms.com/partners/Infynex-solutions',
  },
  {
    src: '/parterners/11.webp',
    alt: 'AWS logo',
  },
  {
    src: '/parterners/12.webp',
    alt: 'Kentico Bronze Partner',
  },
  {
    src: '/parterners/13.webp',
    alt: 'Squarespace Circle Member',
  },
  {
    src: '/parterners/14.webp',
    alt: 'Google Play Developer',
  },
  {
    src: '/parterners/15.webp',
    alt: 'Microsoft Azure Partner',
  },
  {
    src: '/parterners/16.webp',
    alt: 'Uniswap Partner',
  },
  {
    src: '/parterners/17.webp',
    alt: 'Moonpay Partner',
  },
  {
    src: '/parterners/18.webp',
    alt: 'Transak logo',
  },
  {
    src: '/parterners/19.webp',
    alt: 'Firebase logo',
  },
];

export const salesPartners: SalesPartner[] = [
  {
    name: 'RisingMax Inc.',
    href: 'https://risingmax.com',
    logo: '/parterners/21.webp',
    alt: 'RisingMax Inc. logo',
    description:
      'RisingMax is our proud sales partner in South/North America and Europe and seamlessly carries out marketing and sales operations in these regions to bring tremendous sales and growth to the company.',
  },
  {
    name: 'BestWeb3Development',
    href: 'https://bestweb3development.com',
    logo: '/parterners/22.webp',
    alt: 'BestWeb3Development logo',
    description:
      'BestWeb3Development focuses on delivering next gen Web3 solutions. The services extend from Web3 based social media platforms to Web3 game development services backed by next gen tech stack.',
  },
  {
    name: 'Ai Development Services',
    href: 'https://aidevelopmentservice.com',
    logo: '/parterners/23.webp',
    alt: 'Ai Development Services logo',
    description:
      'AI Development Services works closely with their clients and aims at offering dynamic AI powered solutions globally. With innovative and scalable solutions, they drive massive growth and maintain a competitive advantage.',
  },
];

export const partnerBenefits: string[] = [
  'Signed NDA to keep all project-related information confidential',
  'Free consultation for your project',
  'Transparent pricing policy',
  'Flexible engagement models',
  'SWIFT kick start to your project',
  'We always deliver the source code with the project',
];

export const partnerBadges: PartnerLogo[] = [
  {
    src: '/parterners/31.svg',
    alt: 'G2 Users Love Us',
  },
  {
    src: '/parterners/32.webp',
    alt: 'DesignRush 2025',
  },
  {
    src: '/parterners/33.webp',
    alt: 'Clutch 2025',
  },
  {
    src: '/parterners/34.webp',
    alt: 'Top App Development Companies',
  },
];
