export interface AwardsLogo {
  src: string;
  alt: string;
}

export interface AwardsItem {
  src: string;
  alt: string;
  title: string;
}

export interface AwardsHighlight {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  link?: {
    href: string;
    text: string;
  };
}

export const featuredLogos: AwardsLogo[] = [
  {
    src: '/awards/1.webp',
    alt: 'G2 logo',
  },
  {
    src: '/awards/2.webp',
    alt: 'Designrush logo',
  },
  {
    src: '/awards/3.webp',
    alt: 'Clutch logo',
  },
  {
    src: '/awards/4.webp',
    alt: 'GoodFirms logo',
  },
  {
    src: '/awards/5.webp',
    alt: 'The Manifest logo',
  },
  {
    src: '/awards/6.webp',
    alt: 'Capterra logo',
  },
  {
    src: '/awards/7.webp',
    alt: 'Glassdoor logo',
  },
  {
    src: '/awards/8.webp',
    alt: 'Top Developer logo',
  },
  {
    src: '/awards/9.webp',
    alt: 'UpCity logo',
  },
  {
    src: '/awards/10.webp',
    alt: 'Yelp logo',
  },
  {
    src: '/awards/11.webp',
    alt: 'TrustFirms logo',
  },
  {
    src: '/awards/12.webp',
    alt: 'Crypto Expo Europe logo',
  },
  {
    src: '/awards/13.webp',
    alt: 'Business of Apps logo',
  },
  {
    src: '/awards/14.webp',
    alt: 'Google Ads logo',
  },
  {
    src: '/awards/15.webp',
    alt: 'Google Analytics logo',
  },
];

export const blockchainAwards: AwardsItem[] = [
  {
    src: '/awards/block awards/1.webp',
    alt: 'Top Blockchain Company 2025',
    title: 'Top Blockchain Company 2025',
  },
  {
    src: '/awards/block awards/2.webp',
    alt: 'Crypto Expo Award 2025',
    title: 'Crypto Expo Award 2025',
  },
  {
    src: '/awards/block awards/3.webp',
    alt: 'Global Spring Award 2025',
    title: 'Global Spring Award 2025',
  },
  {
    src: '/awards/block awards/4.webp',
    alt: 'G2 Grid Leader Award 2025',
    title: 'G2 Grid Leader Award 2025',
  },
  {
    src: '/awards/block awards/5.webp',
    alt: 'UpCity Excellence Blockchain Award',
    title: 'UpCity Excellence Blockchain Award',
  },
  {
    src: '/awards/block awards/6.webp',
    alt: 'G2 Leader Winter 2025',
    title: 'G2 Leader Winter 2025',
  },
  {
    src: '/awards/block awards/6.webp',
    alt: 'Top Blockchain Development Companies',
    title: 'Top Blockchain Development Companies',
  },
  {
    src: '/awards/block awards/7.webp',
    alt: 'G2 Leader Fall 2024',
    title: 'G2 Leader Fall 2024',
  },
  {
    src: '/awards/block awards/8.webp',
    alt: 'Top Smart Contract Testing Company',
    title: 'Top Smart Contract Testing Company',
  },
  {
    src: '/awards/block awards/9.webp',
    alt: 'Top Blockchain Service Providers',
    title: 'Top Blockchain Service Providers',
  },
  {
    src: '/awards/block awards/10.webp',
    alt: 'Top Creative Blockchain Agencies',
    title: 'Top Creative Blockchain Agencies',
  },
  {
    src: '/awards/block awards/11.webp',
    alt: 'Capterra Blockchain Award',
    title: 'Capterra Blockchain Award',
  },
];

export const mobileAwards: AwardsItem[] = [
  {
    src: '/awards/mobile/1.webp',
    alt: 'Best Design Awards 2025',
    title: 'Best Design Awards 2025',
  },
  {
    src: '/awards/mobile/2.webp',
    alt: 'Top Blockchain Company 2025',
    title: 'Top Blockchain Company 2025',
  },
  {
    src: '/awards/mobile/3.webp',
    alt: 'Crypto Expo Award 2025',
    title: 'Crypto Expo Award 2025',
  },
  {
    src: '/awards/mobile/4.webp',
    alt: 'Global Spring Award 2025',
    title: 'Global Spring Award 2025',
  },
  {
    src: '/awards/mobile/5.webp',
    alt: 'G2 Grid Leader Award 2025',
    title: 'G2 Grid Leader Award 2025',
  },
  {
    src: '/awards/mobile/6.webp',
    alt: 'UpCity Excellence Blockchain Award',
    title: 'UpCity Excellence Blockchain Award',
  },
  {
    src: '/awards/mobile/7.webp',
    alt: 'G2 Leader Winter 2025',
    title: 'G2 Leader Winter 2025',
  },
  {
    src: '/awards/mobile/8.webp',
    alt: 'Top Blockchain Development Companies',
    title: 'Top Blockchain Development Companies',
  },
  {
    src: '/awards/mobile/9.webp',
    alt: 'G2 Leader Fall 2024',
    title: 'G2 Leader Fall 2024',
  },
  {
    src: '/awards/mobile/10.webp',
    alt: 'Top Smart Contract Testing Company',
    title: 'Top Smart Contract Testing Company',
  },
  {
    src: '/awards/mobile/11.webp',
    alt: 'Top Creative Blockchain Agencies',
    title: 'Top Creative Blockchain Agencies',
  },
  {
    src: '/awards/mobile/12.webp',
    alt: 'Capterra Blockchain Award',
    title: 'Capterra Blockchain Award',
  },
  {
    src: '/awards/mobile/13.webp',
    alt: 'Top Mobile Apps Developers',
    title: 'Top Mobile Apps Developers',
  },
  {
    src: '/awards/mobile/14.webp',
    alt: 'Top Mobile Apps Developers',
    title: 'Top Mobile Apps Developers',
  },
  {
    src: '/awards/mobile/15.webp',
    alt: 'Top Company Wearable App',
    title: 'Top Company Wearable App',
  },
  {
    src: '/awards/mobile/16.webp',
    alt: 'Clutch Global Fall 2025',
    title: 'Clutch Global Fall 2025',
  },
];

export const awardsHighlights: AwardsHighlight[] = [
  {
    title: 'Recognized Among the Top Providers on the World\'s Leading Freelancing Platform',
    description:
      'We are proud to be acknowledged by Upwork, an extensively reputed freelance platform with a huge global active user base of businesses and talent. Our standing presents our commitment to the provision of first-class solutions, prompt communication, and professionalism in diverse industries. The frequent assessments on Upwork reaffirm clients\' confidence in our output and demonstrate our commitment to providing scalable, dependable, and inventive digital solutions that confidently enhance business growth.',
    image: '/awards/mobile/upwork.webp',
    imageAlt: 'Upwork',
  },
  {
    title: 'Top-rated on a Trusted Global B2B Reviews and Ratings Platform',
    description:
      'We are consistently featured on Clutch, a highly regarded B2B rating and review platform that is famous for its verified client feedback and transparency. Clutch has become a go to resource for businesses that are in need of trustworthy technology partners, and our ranking reflects the results we deliver. The positive reviews, client success stories, and industry recognition are all there to prove our quality, cooperation, and problem-solving approach. These all make us a preferred choice for businesses seeking trusted long-term partners.',
    image: '/awards/mobile/clutch.webp',
    imageAlt: 'Clutch',
    link: {
      href: 'https://clutch.co/press-releases/clutch-1000-2025',
      text: 'make us a preferred choice',
    },
  },
  {
    title: 'Featured on a Leading Global B2B Marketplace for Technology and Digital Services',
    description:
      'We are happy to be featured on DesignRush, a worldwide B2B agency portal where firms meet the best tech suppliers based on standard, ability, and project results. Our recognition on this site is an indicator of our capacity to provide user-centered design, flexible development, and measurable business value. We will continue to be recognized among the top-performing service providers, thereby reinforcing our standing as a preferred technology partner for new enterprises, established firms, and rapidly growing brands globally.',
    image: '/awards/mobile/design.webp',
    imageAlt: 'DesignRush',
    link: {
      href: 'https://www.designrush.com/best-designs/apps/next-up-app-design',
      text: 'top-performing service providers',
    },
  },
];
