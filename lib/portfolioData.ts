export interface PortfolioItem {
  id: string;
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: 'all' | 'mobile' | 'ai' | 'blockchain' | 'metaverse';
  ratings?: string;
  downloads?: string;
  caseStudyLink?: string;
  technologies?: string[];
  isVideo?: boolean;
}

export const portfolioData: PortfolioItem[] = [
  // All & Blockchain
  {
    id: 'stealthex',
    logo: '/portfolio/mark/1.webp',
    title: 'StealthEX',
    subtitle: 'Digital Currency Exchange Platform',
    description:
      'StealthEX is a digital currency exchange platform offering more than 400 digital currencies on the platform that can be bought using 4 different types of fiat money. The platform features high level of security and privacy during the exchange process on the platform.',
    image:
      '/portfolio/1.webp',
    category: 'blockchain',
    ratings: '4.6',
    downloads: '1K',
  },
  // All & Mobile
  {
    id: 'chills',
    logo: '/portfolio/mark/2.webp',
    title: 'Chilis',
    subtitle: 'Food App',
    description:
      'Go through the delectable menu of Chilis on your phone and order your food online. The app is designed to feature an easy interface with multiple payment options to let you enjoy the delicious delicacies of the world-renowned restaurant at home. Track the order status easily and get real-time updates.',
    image:
      '/portfolio/2.webp',
    category: 'mobile',
    ratings: '4.8',
    downloads: '1M+',
  },
  // All & Mobile
  {
    id: 'arriver-driver',
    logo: '/portfolio/mark/3.webp',
    title: 'Arriver Driver',
    subtitle: 'Real-Time Driver Tracking App',
    description:
      'Arriver Driver app is a smart mobility solution for professional drivers, providing GPS truck navigation, traffic, live regulatory tracking, and truck fleet integration in one app. Provides offline capabilities, safety alerts, and push notifications.',
    image:
      '/portfolio/3.webp',
    category: 'mobile',
    // caseStudyLink: 'https://www.Infynex.com/case-study/arriver-driver',
  },
  // All & Blockchain
  {
    id: 'universal-monsters',
    logo: '/portfolio/mark/4.webp',
    title: 'Universal Monsters',
    subtitle: 'eCommerce Store in Web3',
    description:
      'Universal Monsters is a website selling special monster apparel that infuses NFTs with clothing. They embed special NFC chips in their hoodies and beanies that can be scanned to access the hidden NFT.',
    image:
      '/portfolio/4.webp',
    category: 'blockchain',
    technologies: ['Ethereum', 'Binance', 'MetaMask', 'React', 'Node.js', 'MongoDB'],
    // caseStudyLink:
    //   'https://www.Infynex.com/case-study/case-study-universalmonsters-by-nbcuniversal',
  },
  // All & Mobile
  {
    id: 'medicover',
    logo: '/portfolio/mark/5.webp',
    title: 'Medicover Online',
    subtitle: 'Doctor Consultation App',
    description:
      'Conveniently arrange an online appointment with the doctor for medical help. This comes with the easy cancellation and rescheduling of the consultation with just one click. Get your report and download the prescription.',
    image:
      '/portfolio/5.webp',
    category: 'mobile',
    ratings: '4.5',
    downloads: '500K',
  },
  // All & Mobile
  {
    id: 'b8ak',
    logo: '/portfolio/mark/6.webp',
    title: 'B8ak',
    subtitle: 'Home Services App',
    description:
      'With the B8ak on-demand app, get solution for all your home care needs with just a click. Select from a list of technicians, like electricians, plumbers, manicurists, cleaners, and more.',
    image: '/portfolio/6.webp',
    category: 'mobile',
    ratings: '4.5',
    downloads: '100K+',
  },
  // All
  {
    id: 'radisson',
    logo: '/portfolio/mark/7.svg',
    title: 'Radisson Hotels',
    subtitle: 'Hotel Booking Platform',
    description:
      'Radisson Hotels is a globally recognized hotel chain headquartered in the United States. The web platform assists customers in booking a room, book meeting space, find deals of the day, availing of membership rewards.',
    image:
      '/portfolio/7.webp',
    category: 'all',
  },
  // All & Blockchain
  {
    id: 'dogedash',
    logo: '/portfolio/mark/8.webp',
    title: 'DogeDash',
    subtitle: 'Arcade Game',
    description:
      'Doge Dash is an adventurous 2D platform game centred around the main character Dash. Players must complete multiple challenges, cross obstacles and navigate platforms to reach the final stage.',
    image:
      '/portfolio/8.webp',
    category: 'blockchain',
    ratings: '4.2',
    downloads: '100K',
  },
  // All & Metaverse
  {
    id: 'setvrx',
    logo: '/portfolio/mark/9.svg',
    title: 'SetVR XL-Unleashed',
    subtitle: 'Martial Art App',
    description:
      'Get immersed in the mesmerizing world of virtual reality and enjoy the game that not only relaxes the mind but also improves physical health by improving muscle memory and stamina.',
    image:
      '/portfolio/setvr.mp4',
    category: 'metaverse',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-setvrx',
    isVideo: true,
  },
  // All & Blockchain
  {
    id: 'greenrycoin',
    logo: '/portfolio/mark/10.webp',
    title: 'GMC',
    subtitle: 'Environmental Meme Coin',
    description:
      'Green Meme Coin promotes community engagement, sustainability, and climate action with its low-energy blockchain technology. High volume usage of social media enables transparency in donations.',
    image: '/portfolio/10.webp',
    category: 'blockchain',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-greenrycoin',
  },
  // All & Blockchain
  {
    id: 'soorx',
    logo: '/portfolio/mark/11.svg',
    title: 'Soorx',
    subtitle: 'Crypto Trading Platform',
    description:
      'Enjoy a seamless trading experience within the boundaries of Islamic values. Witness the impressive fusion of tradition and technology with a comprehensive set of financial tools.',
    image: '/portfolio/11.webp',
    category: 'blockchain',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-soorx',
  },
  // All & AI
  {
    id: 'kai',
    logo: '/portfolio/mark/12.webp',
    title: 'Kai',
    subtitle: 'AI Tool',
    description:
      'KAI analyses conversations in the healthcare value chain. Conversations between Pharma field teams with healthcare professionals, and clinicians with patients. Our mission is to reveal hidden human insight.',
    image: '/portfolio/12.webp',
    category: 'ai',
  },
  // All & Mobile
  {
    id: '1timeshop',
    logo: '/portfolio/mark/13.webp',
    title: '1 Time Shop',
    subtitle: 'Delivery App',
    description:
      '1 Time Shop is designed to be one platform that offers all kinds of on-demand services, such as payments, taxi services, food delivery, pick-up and drop and grocery shopping.',
    image:
      '/portfolio/13.webp',
    category: 'mobile',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-1timeshop',
  },
  // All & Mobile
  {
    id: 'unity',
    logo: '/portfolio/mark/14.webp',
    title: 'Unity',
    subtitle: 'Entertainment App',
    description:
      'Unity is an entertainment app for video viewing and creation and offers the world\'s largest sound selection and multiple movie effects for videos.',
    image: '/portfolio/14.webp',
    category: 'mobile',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-unity',
  },
  // All & AI
  {
    id: 'memento',
    logo: '/portfolio/mark/15.svg',
    title: 'Memento',
    subtitle: 'AI-Powered Memory Bank',
    description:
      'Memento is a groundbreaking platform designed to honour and preserve the stories of our loved ones forever. With Memento, users can create unique QR codes linked to the biographies.',
    image: '/portfolio/15.webp',
    category: 'ai',
  },
  // All & AI
  {
    id: 'unibee',
    logo: '/portfolio/mark/16.webp',
    title: 'UniBee',
    subtitle: 'AI Tool',
    description:
      'UniBee\'s Financial Analytics transforms your subscription data into actionable insights. Our platform offers a clear view of your SaaS business performance.',
    image: '/portfolio/16.webp',
    category: 'ai',
  },
  // All & AI
  {
    id: 'ajav',
    logo: '/portfolio/mark/17.webp',
    title: 'Ajav',
    subtitle: 'Candy AI Clone',
    description:
      'Ajav is an adult chat platform like candy AI providing personalized, AI-driven experiences that are engaging, discreet, and suitable for your preferences.',
    image: '/portfolio/17.webp',
    category: 'ai',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-ajav',
  },
  // All & AI
  {
    id: 'gofans',
    logo: '/portfolio/mark/18.webp',
    title: 'GoFans',
    subtitle: 'AI Adult Chat',
    description:
      'GOFans is an AI-powered adult chat platform that features smart, realistic, and responsive dialogue that can be personalized according to your desires.',
    image: '/portfolio/18.webp',
    category: 'ai',
  },
  // All & AI
  {
    id: 'aragon',
    logo: '/portfolio/mark/19.webp',
    title: 'Aragon',
    subtitle: 'AI Tool',
    description:
      'Aragon.ai is an AI-powered headshot generator designed to transform selfies into professional, studio-quality headshots within minutes.',
    image: '/portfolio/19.webp',
    category: 'ai',
  },
  // All & Mobile
  {
    id: 'kucher',
    logo: '/portfolio/mark/20.svg',
    title: 'Kucher',
    subtitle: 'Taxi Booking App',
    description:
      'Kucher application is a user-friendly app integrated with marvelous features that will elevate cab driver services to the optimum level.',
    image: '/portfolio/20.webp',
    category: 'mobile',
    // caseStudyLink: 'https://www.Infynex.com/case-study/kucher-mobile-app',
  },
  // All & Mobile
  {
    id: 'mealed',
    logo: '/portfolio/mark/21.webp',
    title: 'Mealed',
    subtitle: 'Food Delivery App',
    description:
      'When you order from Mealed, we will hook you up with exclusive coupons, restaurant specials and rewards. We are here to serve breakfast, lunch and dinner at your doorsteps.',
    image:
      '/portfolio/21.webp',
    category: 'mobile',
    ratings: '4.9',
    downloads: '10k+',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-mealed',
  },
  // All & Mobile
  {
    id: 'hyperpay',
    logo: '/portfolio/mark/22.webp',
    title: 'HyperPay',
    subtitle: 'Wallet & Card App',
    description:
      'A wallet and card app designed to store a variety of digital assets. Features a user-friendly interface and a highly compatible HyperCard, which can be used in 50 million+ merchants.',
    image:
      '/portfolio/22.webp',
    category: 'mobile',
    ratings: '4.3',
    downloads: '100K+',
  },
  // All & Mobile
  {
    id: 'gocar-malaysia',
    logo: '/portfolio/mark/23.webp',
    title: 'GoCar Malaysia',
    subtitle: 'Mobility App',
    description:
      'With the GoCar Malaysia mobility app, get solutions to all your mobility needs in one place. From car sharing and repairs to car servicing and insurance.',
    image:
      '/portfolio/23.webp',
    category: 'mobile',
    ratings: '4.4',
    downloads: '500K+',
  },
  // All & Mobile
  {
    id: 'get-spiritz',
    logo: '/portfolio/mark/24.webp',
    title: 'Get Spiritz',
    subtitle: 'Liquor Delivery App',
    description:
      'Get Spiritz is an online alcohol delivery app that makes it easy for you to shop from local liquor stores in one app experience. From local craft beer to premium imported wines.',
    image:
      '/portfolio/24.webp',
    category: 'mobile',
    ratings: '3.2',
    downloads: '10K+',
  },
  // All & Mobile
  {
    id: 'cleancloud',
    logo: '/portfolio/mark/25.webp',
    title: 'CleanCloud',
    subtitle: 'Laundry Pickup and Delivery App',
    description:
      'CleanCloud is an application where users can book their laundry and dry cleaning orders with any service listed on the app. Users can choose pickup and delivery locations.',
    image: '/portfolio/25.webp',
    category: 'mobile',
    ratings: '4.3',
    downloads: '10K+',
  },
  // All & Mobile
  {
    id: 'hola-meds',
    logo: '/portfolio/mark/26.webp',
    title: 'Hola Meds - Pharmacy Delivery',
    subtitle: 'Pharmacy Marketplace App',
    description:
      'Hola Meds is an Australian pharmacy marketplace application where users can easily purchase medicines and get them delivered to their homes within 3 hours.',
    image: '/portfolio/26.webp',
    category: 'mobile',
    ratings: '4.9',
    downloads: '10K+',
  },
  // All & Metaverse
  {
    id: 'metaverse-real-estate',
    logo: '',
    title: 'Real Estate in Metaverse',
    subtitle: 'Virtual Real Estate Platform',
    description:
      'We are building a metaverse real estate universe that will bring real-world experience into the virtual world. Our Metaverse real estate project features meta cities, meta shopping malls, meta offices.',
    image: '/portfolio/mark/27.webp',
    category: 'metaverse',
    // technologies: ['Ethereum', 'Binance', 'MetaMask', 'React', 'Node.js', 'MongoDB'],
    isVideo: true,
  },
  // All & AI
  {
    id: 'mycoachai',
    logo: '/portfolio/mark/28.svg',
    title: 'Mycoachai',
    subtitle: 'AI Tool',
    description:
      'MyCoach AI offers a comprehensive platform designed for fitness and nutrition coaches to streamline client management. Key features include automated messaging.',
    image: '/portfolio/28.webp',
    category: 'ai',
  },
  // All & AI
  {
    id: 'gojot-down',
    logo: '/portfolio/mark/29.svg',
    title: 'GOJot_down',
    subtitle: 'Story Writing Tool',
    description:
      'GOJot_down employs a series of algorithms that can assist writers in crafting engaging and creative stories in a very short amount of time.',
    image: '/portfolio/29.webp',
    category: 'ai',
    // caseStudyLink: 'https://www.Infynex.com/case-study/case-study-gojot-down',
  },
  // All & Metaverse
  {
    id: 'virtual-training-game',
    logo: '/portfolio/mark/30.webp',
    title: 'Virtual Training Game',
    subtitle: 'VR-Based Training Platform',
    description:
      'SETVR or Self Enhancement Training in Virtual Reality is a life-like game that helps with training in a virtual space. With multiple options like virtual Dojo for warm up.',
    image: '/portfolio/38.mp4',
    category: 'metaverse',
    // technologies: ['Ethereum', 'Binance', 'MetaMask', 'React', 'Node.js', 'MongoDB'],
    isVideo: true,
  },
];

export function getPortfolioByCategory(
  category: string
): PortfolioItem[] {
  if (category === 'all') {
    return portfolioData;
  }
  return portfolioData.filter((item) => item.category === category);
}
