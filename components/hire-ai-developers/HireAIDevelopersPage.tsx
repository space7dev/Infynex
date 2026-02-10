'use client'

import { useState } from 'react'
import Link from 'next/link'

const heroHighlights = [
  'Quick on-boarding',
  'NDA secured contracts',
  'SLA-backed delivery',
  'Flexible hiring models',
  'Global timezone compatibility',
  'Dedicated project manager',
]

const stats = [
  {
    value: '13+',
    label: 'years experience',
    icon: 'https://www.Infynex.com/assets/img/icons/years-experience.svg',
  },
  {
    value: '1000+',
    label: 'clients served',
    icon: 'https://www.Infynex.com/assets/img/icons/client.svg',
  },
  {
    value: '250+',
    label: 'AI experts',
    icon: 'https://www.Infynex.com/assets/img/icons/expertise.svg',
  },
  {
    value: '40+',
    label: 'countries covered',
    icon: 'https://www.Infynex.com/assets/img/icons/countries.svg',
  },
]

const aiSpecialists = [
  {
    title: 'Narrow AI Developers',
    description:
      'Focused AI systems for specific business needs like fraud detection, recommendations, and analytics.',
    icon: 'https://www.Infynex.com/assets/img/icons/narrow-ai.svg',
  },
  {
    title: 'AGI Developers',
    description:
      'Research-oriented engineers exploring multi-domain reasoning and adaptable intelligence.',
    icon: 'https://www.Infynex.com/assets/img/icons/agi-developer.svg',
  },
  {
    title: 'ASI Developers',
    description:
      'Future-ready AI research for strategic, ethical systems and next-gen intelligence planning.',
    icon: 'https://www.Infynex.com/assets/img/icons/asi-developer.svg',
  },
  {
    title: 'Generative AI Developers',
    description:
      'Build text, image, and video generation solutions with automation workflows.',
    icon: 'https://www.Infynex.com/assets/img/icons/generative-ai.svg',
  },
  {
    title: 'Agentic AI Developers',
    description:
      'Develop AI agents that plan, reason, and execute tasks with autonomy.',
    icon: 'https://www.Infynex.com/assets/img/icons/agentic-ai.svg',
  },
  {
    title: 'LLM Developers',
    description:
      'Design, tune, and deploy LLM-based copilots and enterprise automation tools.',
    icon: 'https://www.Infynex.com/assets/img/icons/llm-developer.svg',
  },
  {
    title: 'NLP Developers',
    description:
      'Deliver AI that understands language for chatbots, analysis, and insights.',
    icon: 'https://www.Infynex.com/assets/img/icons/nlp-developer.svg',
  },
  {
    title: 'Adaptive AI Developers',
    description:
      'Create AI that learns continuously and adapts to real-time behavior and data.',
    icon: 'https://www.Infynex.com/assets/img/icons/adaptive-ai.svg',
  },
  {
    title: 'ML Developers',
    description:
      'Build predictive models for forecasting, personalization, and fraud prevention.',
    icon: 'https://www.Infynex.com/assets/img/icons/ml-developer.svg',
  },
]

const aiMomentumStats = [
  '78% of companies worldwide now use AI in at least one business function.',
  'AI-exposed sectors report a 4.8x rise in labor productivity.',
  'Job postings requiring AI skills are growing 3.5x faster than other roles.',
  'AI-skilled roles command a wage premium of up to 56%.',
  'Automatable roles still saw job growth of 7.5% per year.',
]

const aiServices = [
  {
    title: 'Custom AI Development',
    description:
      'Design and develop scalable AI systems aligned to business goals and industry requirements.',
    solutions: [
      'Predictive analytics engines',
      'Recommendation systems',
      'AI workflow automation',
      'Domain-trained AI models',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/ai-development.svg',
  },
  {
    title: 'AI Agent Development',
    description:
      'Build intelligent AI agent systems that reason, learn, and act autonomously.',
    solutions: [
      'AI agents for automation',
      'Multi-agent workflows',
      'Context-aware assistants',
      'Self-learning systems',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/ai-agent.svg',
  },
  {
    title: 'Generative AI Development',
    description:
      'Create next-gen tools for content generation, coding, and knowledge automation.',
    solutions: [
      'Custom generative AI agents',
      'AI-powered code assistants',
      'Intelligent content generation',
      'Autonomous task execution',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/generative-ai.svg',
  },
  {
    title: 'Enterprise AI Integration',
    description:
      'Embed AI within CRM, ERP, SaaS, and enterprise systems.',
    solutions: [
      'CRM and ERP automation',
      'Workflow intelligence layers',
      'SaaS AI integrations',
      'Third-party API integrations',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/enterprise.svg',
  },
  {
    title: 'Web and App Development Using AI',
    description:
      'Create scalable AI web and mobile platforms with automation and analytics.',
    solutions: [
      'AI SaaS web apps',
      'Intelligent dashboards',
      'Data-driven web apps',
      'Cloud AI ecosystems',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/ai-powered.svg',
  },
  {
    title: 'Enterprise AI Chatbot Creation',
    description:
      'Deliver conversational chatbots for sales, HR, customer support, and internal ops.',
    solutions: [
      'AI sales assistants',
      'AI receptionists',
      'AI therapy assistants',
      'Adult chatbot (NSFW compliant)',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/chatbot.svg',
  },
  {
    title: 'AI-Based Wearable Applications',
    description:
      'Create intelligent wearable experiences backed by sensor data.',
    solutions: [
      'Fitness analytics AI',
      'Health monitoring engines',
      'Real-time notification AI',
      'Sensor-triggered automation',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/wearable.svg',
  },
  {
    title: 'Intelligent Process Automation (IPA)',
    description:
      'Apply AI logic and decision automation to streamline operations.',
    solutions: [
      'Back-office automation',
      'Document processing AI',
      'Workflow optimization tools',
      'Smart operational routing',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/automation.svg',
  },
  {
    title: 'AI Co-Pilot Development and Integration',
    description:
      'Build copilots that help teams with documentation, analysis, and execution.',
    solutions: [
      'AI productivity copilots',
      'Analysis copilots',
      'Workflow copilots',
      'Industry-specific copilots',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/integration.svg',
  },
  {
    title: 'AI Cybersecurity and Threat Detection',
    description:
      'Protect systems with real-time threat, fraud, and anomaly detection.',
    solutions: [
      'Real-time threat monitors',
      'Fraud detection AI',
      'Network anomaly scanners',
      'Risk scoring engines',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/cybersecurity.svg',
  },
  {
    title: 'Business Intelligence and Analytics Systems',
    description:
      'Build dashboards and analytics platforms for proactive decisions.',
    solutions: [
      'Executive dashboards',
      'KPI intelligence systems',
      'Predictive analytics',
      'Data visualization tools',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/business.svg',
  },
  {
    title: 'Data-Driven AI Solutions',
    description:
      'Transform operational data into intelligent decision systems.',
    solutions: [
      'Data-to-AI engines',
      'Forecasting systems',
      'Optimization algorithms',
      'Real-time decision models',
    ],
    icon: 'https://www.Infynex.com/assets/img/icons/data-driven.svg',
  },
]

const rolesTabs = [
  {
    id: 'essential-roles',
    label: 'Essential AI Roles',
    heading: 'Essential AI Roles',
    items: [
      {
        title: 'Model Building',
        description: 'ML engineers train, optimize, and maintain production models.',
      },
      {
        title: 'Data Insights',
        description: 'Data scientists analyze datasets and craft predictive features.',
      },
      {
        title: 'Ops Stability',
        description: 'MLOps engineers deploy, monitor, and manage model lifecycles.',
      },
      {
        title: 'LLM Tuning',
        description: 'LLM engineers tune models and build RAG pipelines for accuracy.',
      },
      {
        title: 'App Integration',
        description: 'AI app developers connect AI backends with user interfaces.',
      },
    ],
  },
  {
    id: 'core-technical',
    label: 'Core Technical',
    heading: 'Core Technical and Framework Skills',
    items: [
      {
        title: 'Python Expertise',
        description: 'Strong Python skills with PyTorch and TensorFlow frameworks.',
      },
      {
        title: 'RAG Systems',
        description: 'Design pipelines using embeddings, vector stores, and LLMs.',
      },
      {
        title: 'Cloud Deployment',
        description: 'Deploy models on AWS, Azure, and GCP securely.',
      },
      {
        title: 'API Handling',
        description: 'Integrate AI APIs, microservices, and backend logic.',
      },
      {
        title: 'Scalable Setup',
        description: 'Use Docker and Kubernetes for stable, scalable environments.',
      },
    ],
  },
  {
    id: 'soft-skills',
    label: 'Soft Skills',
    heading: 'Soft Skills That Make a Difference',
    items: [
      {
        title: 'Product Thinking',
        description: 'Align AI features to business goals and user needs.',
      },
      {
        title: 'Clear Communication',
        description: 'Smooth collaboration across remote and cross-functional teams.',
      },
      {
        title: 'Data Discipline',
        description: 'Ensure clean datasets, documentation, and workflows.',
      },
      {
        title: 'Adaptability Factor',
        description: 'Learn new tools quickly and adapt to emerging AI methods.',
      },
      {
        title: 'Quality Mindset',
        description: 'Prioritize accuracy, compliance, and responsible AI practices.',
      },
    ],
  },
]

const advancedExpertise = [
  {
    title: 'Machine Learning and Deep Learning Expertise',
    description:
      'Use TensorFlow, PyTorch, Keras, CNNs, RNNs, and Transformers to build high-performance models.',
    icon: 'https://www.Infynex.com/assets/img/icons/machine-learning.svg',
  },
  {
    title: 'NLP and Language Understanding Systems',
    description:
      'Deliver semantic search, summarization, sentiment analysis, and conversational systems.',
    icon: 'https://www.Infynex.com/assets/img/icons/system.svg',
  },
  {
    title: 'LLM Training, Fine-Tuning, and Optimization',
    description:
      'Transform foundation models into enterprise intelligence with domain-specific tuning.',
    icon: 'https://www.Infynex.com/assets/img/icons/training.svg',
  },
  {
    title: 'Neural Network Architecture Engineering',
    description:
      'Design multilayer neural networks and attention-based architectures for complex problems.',
    icon: 'https://www.Infynex.com/assets/img/icons/architecture.svg',
  },
  {
    title: 'Computer Vision and Visual Intelligence',
    description:
      'Build CV models for OCR, video analysis, object detection, and classification.',
    icon: 'https://www.Infynex.com/assets/img/icons/computer-vision.svg',
  },
  {
    title: 'Predictive Analytics and Forecasting Models',
    description:
      'Deliver time-series forecasting, risk scoring, and scenario simulations.',
    icon: 'https://www.Infynex.com/assets/img/icons/analytics.svg',
  },
  {
    title: 'Data Engineering and Pipeline Orchestration',
    description:
      'Build ETL pipelines, data lakes, ingestion layers, and scalable warehousing.',
    icon: 'https://www.Infynex.com/assets/img/icons/pipeline.svg',
  },
  {
    title: 'AI Model Lifecycle Management (MLOps)',
    description:
      'Handle deployment, drift monitoring, retraining cycles, and performance tuning.',
    icon: 'https://www.Infynex.com/assets/img/icons/management.svg',
  },
  {
    title: 'AI Integration and Deployment Expertise',
    description:
      'Integrate AI across CRM, ERP, and digital workflows on cloud or on-premise.',
    icon: 'https://www.Infynex.com/assets/img/icons/deployment.svg',
  },
  {
    title: 'Custom AI Model Engineering',
    description:
      'Build industry-specific AI models for healthcare, fintech, retail, and logistics.',
    icon: 'https://www.Infynex.com/assets/img/icons/engineering.svg',
  },
  {
    title: 'AI-Powered Workflow Automation Expertise',
    description:
      'Automate reporting, analytics, and enterprise operations with intelligent workflows.',
    icon: 'https://www.Infynex.com/assets/img/icons/workflow.svg',
  },
  {
    title: 'IoT and AI Development with Sensor Intelligence',
    description:
      'Fuse AI with IoT devices and sensors for smart monitoring and edge analytics.',
    icon: 'https://www.Infynex.com/assets/img/icons/iot.svg',
  },
  {
    title: 'Advanced Algorithm Design and Optimization',
    description:
      'Build algorithms for personalization, route optimization, and prediction engines.',
    icon: 'https://www.Infynex.com/assets/img/icons/algorithm.svg',
  },
  {
    title: 'Responsible AI, Compliance, and Data Governance',
    description:
      'Align AI systems with GDPR, CCPA, HIPAA when applicable, and ethical AI practices.',
    icon: 'https://www.Infynex.com/assets/img/icons/governance.svg',
  },
]

const techStackTabs = [
  {
    id: 'languages',
    label: 'Programming Languages',
    items: [
      {
        title: 'JavaScript',
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-javascript-icon.svg',
      },
      {
        title: 'Python',
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/python-tech-stack.svg',
      },
      {
        title: 'R',
        icon: 'https://www.Infynex.com/assets/img/icons/r-technology.webp',
      },
      {
        title: 'TypeScript',
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/Typescript-icon.svg',
      },
    ],
  },
  {
    id: 'frameworks',
    label: 'Frameworks',
    items: [
      {
        title: 'PyTorch',
        icon: 'https://www.Infynex.com/assets/img/new_landing_img/pytorch.svg',
      },
      {
        title: 'TensorFlow',
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-tensor-flow.webp',
      },
      {
        title: 'Scikit-learn',
        icon: 'https://www.Infynex.com/assets/img/icons/scikit-learn-tech-icon.svg',
      },
      {
        title: 'Keras',
        icon: 'https://www.Infynex.com/assets/img/icons/keras-tech-icon.svg',
      },
      {
        title: 'AutoML',
        icon: 'https://www.Infynex.com/assets/img/icons/automl.webp',
      },
      {
        title: 'CNTK',
        icon: 'https://www.Infynex.com/assets/img/icons/cntk-tech-icon.svg',
      },
    ],
  },
  {
    id: 'ai-nlp',
    label: 'AI and NLP Technologies',
    items: [
      {
        title: 'Hugging Face',
        icon: 'https://www.Infynex.com/assets/img/icons/hf-tech-icon.svg',
      },
      {
        title: 'NLTK',
        icon: 'https://www.Infynex.com/assets/img/icons/nltk.webp',
      },
      {
        title: 'spaCy',
        icon: 'https://www.Infynex.com/assets/img/icons/spacy.webp',
      },
    ],
  },
  {
    id: 'visualization',
    label: 'Visualization Tools',
    items: [
      {
        title: 'Tableau',
        icon: 'https://www.Infynex.com/assets/img/icons/tableau.svg',
      },
      {
        title: 'Power BI',
        icon: 'https://www.Infynex.com/assets/img/icons/power-bi.svg',
      },
    ],
  },
  {
    id: 'data-processing',
    label: 'Data Processing',
    items: [
      {
        title: 'NumPy',
        icon: 'https://www.Infynex.com/assets/img/icons/numpy.webp',
      },
      {
        title: 'Pandas',
        icon: 'https://www.Infynex.com/assets/img/icons/pandas.webp',
      },
      {
        title: 'Matplotlib',
        icon: 'https://www.Infynex.com/assets/img/icons/matplotlib.webp',
      },
    ],
  },
  {
    id: 'project-management',
    label: 'Project and Model Management',
    items: [
      {
        title: 'Databricks',
        icon: 'https://www.Infynex.com/assets/img/icons/databricks.webp',
      },
      {
        title: 'JIRA',
        icon: 'https://www.Infynex.com/assets/img/icons/jira.svg',
      },
      {
        title: 'GitHub',
        icon: 'https://www.Infynex.com/assets/img/icons/github.webp',
      },
      {
        title: 'GitLab',
        icon: 'https://www.Infynex.com/assets/img/icons/gitlab.webp',
      },
    ],
  },
]

const integrationServices = [
  {
    title: 'Integration of AI and ML Models',
    description:
      'Embed AI and ML models to improve automation, predictions, and decision-making.',
  },
  {
    title: 'Integration of NLP Solutions',
    description:
      'Enable text analysis, automated conversation, and language understanding.',
  },
  {
    title: 'ChatGPT and Bard Integration',
    description:
      'Power dialogue flows, smart replies, and automated assistance with LLMs.',
  },
  {
    title: 'Chatbot Integrations',
    description:
      'Deploy AI chatbots across web, mobile, and enterprise tools.',
  },
  {
    title: 'Image, Audio, and Video Recognition',
    description:
      'Analyze multimedia in real time to automate and generate insights.',
  },
  {
    title: 'Large Language Model Integration',
    description:
      'Deploy LLMs for classification, summarization, and workflow automation.',
  },
]

const sectorExpertise = [
  {
    title: 'Government',
    description:
      'Modernize public services with AI-enabled workflows and security compliance.',
    icon: 'https://www.Infynex.com/assets/img/icons/government.svg',
  },
  {
    title: 'Industrial and Manufacturing',
    description:
      'Optimize production, predictive maintenance, and resource planning.',
    icon: 'https://www.Infynex.com/assets/img/icons/manufacturing.svg',
  },
  {
    title: 'NGOs',
    description:
      'Improve outreach and impact measurement with AI-driven insights.',
    icon: 'https://www.Infynex.com/assets/img/icons/ngo.svg',
  },
  {
    title: 'Agriculture',
    description:
      'Monitor crop growth, optimize inputs, and forecast yields.',
    icon: 'https://www.Infynex.com/assets/img/icons/agriculture.svg',
  },
  {
    title: 'Private Enterprises',
    description:
      'Deploy scalable AI systems that reduce costs and boost efficiency.',
    icon: 'https://www.Infynex.com/assets/img/icons/enterprises.svg',
  },
  {
    title: 'Startups',
    description:
      'Accelerate MVP delivery and long-term AI scalability planning.',
    icon: 'https://www.Infynex.com/assets/img/icons/startups.svg',
  },
]

const growthIndustries = [
  {
    title: 'AI in Healthcare',
    description:
      'Build systems that enhance diagnostics, automate workflows, and improve care.',
    icon: 'https://www.Infynex.com/assets/img/icons/healthcare.svg',
    capabilities: [
      'Medical image analysis',
      'Appointment automation',
      'Patient monitoring systems',
      'Predictive healthcare analytics',
      'Clinical decision support',
      'HIPAA-compliant AI tools',
      'EHR and EMR automation',
      'Healthcare chatbots',
    ],
  },
  {
    title: 'AI in Fintech',
    description:
      'Deliver secure fintech automation for fraud prevention and risk assessment.',
    icon: 'https://www.Infynex.com/assets/img/icons/fintech.svg',
    capabilities: [
      'Fraud detection engines',
      'Risk scoring models',
      'AI-powered KYC and AML',
      'Financial chatbots',
      'Credit underwriting AI',
      'Portfolio optimization',
      'Transaction anomaly detection',
      'Automated compliance checks',
    ],
  },
  {
    title: 'AI in Ecommerce',
    description:
      'Increase conversions with personalization, analytics, and automation.',
    icon: 'https://www.Infynex.com/assets/img/icons/ecommerce.svg',
    capabilities: [
      'Recommendation engines',
      'Personalized product feeds',
      'Dynamic pricing models',
      'AI-powered search',
      'Demand forecasting',
      'Cart recovery automation',
      'Customer sentiment analysis',
      'Inventory prediction',
    ],
  },
  {
    title: 'AI in Real Estate',
    description:
      'Streamline property discovery, pricing analysis, and tenant management.',
    icon: 'https://www.Infynex.com/assets/img/icons/real-estate.svg',
    capabilities: [
      'Property recommendation engines',
      'AI-powered pricing predictions',
      'Tenant screening automation',
      'Virtual assistants for buyers',
      'Document and contract AI',
      'Lead qualification tools',
      'Real estate chatbots',
      'Market trend forecasting',
    ],
  },
  {
    title: 'AI in EdTech',
    description:
      'Deliver adaptive learning platforms and automated evaluations.',
    icon: 'https://www.Infynex.com/assets/img/icons/edtech.svg',
    capabilities: [
      'Adaptive learning engines',
      'AI exam proctoring',
      'Personalized content creation',
      'Student performance analytics',
      'AI tutors and chatbots',
      'Automated grading',
      'Engagement prediction',
      'Language learning AI',
    ],
  },
  {
    title: 'AI in Gaming',
    description:
      'Enhance gameplay, engagement, and analytics with AI systems.',
    icon: 'https://www.Infynex.com/assets/img/icons/gaming.svg',
    capabilities: [
      'NPC behavior modeling',
      'Generative game content',
      'Matchmaking algorithms',
      'Player behavior analytics',
      'Fraud and bot detection',
      'Real-time game balancing',
      'AI-powered voice assistants',
      'Predictive engagement tools',
    ],
  },
  {
    title: 'AI in Supply Chain',
    description:
      'Improve logistics, real-time tracking, and operational efficiency.',
    icon: 'https://www.Infynex.com/assets/img/icons/supply-chain.svg',
    capabilities: [
      'Demand forecasting',
      'Route optimization',
      'Inventory automation',
      'Shipment tracking AI',
      'Supply chain visibility dashboards',
      'Predictive logistics',
      'Warehouse automation',
      'Supplier risk prediction',
    ],
  },
  {
    title: 'AI in Insurance',
    description:
      'Automate claims, detect fraud, and optimize underwriting.',
    icon: 'https://www.Infynex.com/assets/img/icons/insurance.svg',
    capabilities: [
      'Claims automation',
      'Fraud detection models',
      'Underwriting AI engines',
      'Policy recommendation systems',
      'Document extraction (OCR)',
      'Customer service chatbots',
      'Risk analysis models',
      'Predictive loss modeling',
    ],
  },
]

const portfolioItems = [
  {
    title: 'Aragon',
    subtitle: 'AI Tool',
    description:
      'AI headshot generator that turns selfies into studio-quality headshots in minutes.',
    image: 'https://www.Infynex.com/assets/img/portfolio/aragon-banner.webp',
  },
  {
    title: 'MyCoach AI',
    subtitle: 'AI Tool',
    description:
      'A platform for fitness and nutrition coaches with automated messaging and progress tracking.',
    image: 'https://www.Infynex.com/assets/img/portfolio/mycoachai-banner.webp',
  },
  {
    title: 'Kai',
    subtitle: 'AI Tool',
    description:
      'Analyzes healthcare conversations to reveal insights and improve outcomes.',
    image: 'https://www.Infynex.com/assets/img/portfolio/kai-banner.webp',
  },
  {
    title: 'UniBee',
    subtitle: 'AI Tool',
    description:
      'Transforms subscription data into actionable SaaS business insights.',
    image: 'https://www.Infynex.com/assets/img/portfolio/unibee-banner.webp',
  },
]

const comparisonRows = [
  {
    model: 'In-house Team',
    speed: 'Slow',
    cost: 'High',
    control: 'Full',
    quality: 'High',
    scalability: 'Limited',
  },
  {
    model: 'Remote Team',
    speed: 'Fast',
    cost: 'Medium/Low',
    control: 'Medium',
    quality: 'High',
    scalability: 'High',
  },
  {
    model: 'Marketplace Talent',
    speed: 'Very Fast',
    cost: 'Variable',
    control: 'Medium',
    quality: 'Depends on vetting',
    scalability: 'Very High',
  },
]

const hiringPipeline = [
  {
    title: 'Rigorously Vetting Steps',
    description:
      'Resume review, coding tests, architecture interviews, and trial evaluations to ensure fit.',
  },
  {
    title: 'Onboarding and Delivery Cadence',
    description:
      'Sprint-based delivery, CI/CD pipelines, code reviews, and transparent documentation.',
  },
]

const processSteps = [
  {
    title: 'Schedule a Consultation Meeting',
    description:
      'Connect with our experts to explore the best AI solutions for your project.',
    icon: 'https://www.Infynex.com/assets/img/icons/schedule-a-consultation-meeting-svg.svg',
  },
  {
    title: 'Talk About Your Requirements',
    description:
      'Collaborate with our AI developers to map your goals and expectations.',
    icon: 'https://www.Infynex.com/assets/img/icons/talk-about-your-requirements-svg.svg',
  },
  {
    title: 'Find the Best Solutions for You',
    description: 'We craft personalized AI solutions aligned to your needs.',
    icon: 'https://www.Infynex.com/assets/img/icons/find-the-best-solutions-for-you-svg.svg',
  },
  {
    title: 'Begin with the Project',
    description: 'Kick off delivery with a dedicated team and clear milestones.',
    icon: 'https://www.Infynex.com/assets/img/icons/begin-with-the-project-svg.svg',
  },
]

const pricingPlans = [
  {
    title: 'Dedicated Team',
    description:
      'Take command of your project with a dedicated AI development team.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-polygon-blockchain-developer-dedicated-team.svg',
  },
  {
    title: 'Extended Team',
    description: 'Add the right expertise quickly with flexible engagement.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-polygon-blockchain-developer-extended-team.svg',
    highlighted: true,
  },
  {
    title: 'Project Model',
    description: 'End-to-end delivery with predictable pricing and support.',
    icon: 'https://www.Infynex.com/assets/img/remote-developers/hire-polygon-blockchain-developer-project-model.svg',
  },
]

const whyUs = [
  {
    title: 'Low-Cost AI Developers',
    description: 'Hiring starts at $21 per hour with high-quality delivery.',
  },
  {
    title: 'AI Security and Maintenance',
    description: 'Comprehensive security protocols and ongoing maintenance.',
  },
  {
    title: 'Manual and Tool Testing',
    description: 'Rigorous manual and automated testing for flawless results.',
  },
  {
    title: 'Hassle-Free Client Interactions',
    description: 'Clear communication with dedicated project support.',
  },
  {
    title: 'Timely Project Delivery',
    description: 'Milestones delivered on time without compromising quality.',
  },
  {
    title: 'High-Quality Services',
    description: 'Excellence from development through deployment.',
  },
]

const faqs = [
  {
    question: 'What is the best way to hire AI developers?',
    answer:
      'The best way is to hire through a trusted AI development company that provides pre-vetted experts tailored to your project needs.',
  },
  {
    question: 'How do I choose the right AI developer for my project?',
    answer:
      'Select developers based on technical skills, domain expertise, and proven project success. We match you with aligned specialists.',
  },
  {
    question: 'What skills should an AI developer have?',
    answer:
      'AI developers should be proficient in machine learning, deep learning, Python, TensorFlow, PyTorch, data modeling, and cloud platforms.',
  },
  {
    question: 'Can I hire AI developers on a project basis?',
    answer:
      'Yes. Flexible engagement models include dedicated, part-time, and project-based teams tailored to your timeline and budget.',
  },
  {
    question: 'Why hire remote AI developers instead of building an in-house team?',
    answer:
      'Remote hiring provides global talent access, lower costs, and faster scaling based on project requirements.',
  },
  {
    question: 'Is hiring AI developers exclusively for my project possible?',
    answer:
      'Yes. Dedicated AI developers can work only on your project and adopt your internal processes.',
  },
  {
    question: 'Can I hire AI app developers for custom mobile or web projects?',
    answer:
      'Absolutely. Our AI app developers build intelligent mobile apps, enterprise platforms, chatbots, and automation systems.',
  },
  {
    question: 'Do you offer short-term and long-term AI developer hiring models?',
    answer:
      'Yes. We provide flexible hiring engagements for short, medium, or long-term collaboration.',
  },
  {
    question: 'What main features can I expect when I hire AI developers from you?',
    answer:
      'You receive end-to-end support covering development, integration, testing, optimization, deployment, and maintenance.',
  },
  {
    question: 'How long does it take to onboard an AI developer?',
    answer:
      'Most clients are matched with a qualified AI developer within 48 to 72 hours after requirements are finalized.',
  },
  {
    question: 'Do you offer AI development for specific industries?',
    answer:
      'Yes. We serve healthcare, fintech, logistics, retail, gaming, and more with industry-specific AI solutions.',
  },
  {
    question: 'What is the cost of hiring an AI developer in 2025?',
    answer:
      'Rates vary by skills and project needs. Our hourly pricing starts at $21 for top-tier AI talent.',
  },
  {
    question: 'Are your AI developers familiar with the latest AI tools and frameworks?',
    answer:
      'Yes. Our developers stay current with GPT models, OpenCV, Keras, Scikit-learn, and cloud AI services.',
  },
  {
    question: 'How do you assure quality when businesses hire remote AI developers?',
    answer:
      'Developers go through a multi-stage vetting process with technical tests and expert evaluations.',
  },
  {
    question: 'Can I scale my AI development team anytime after hiring?',
    answer:
      'Yes. You can scale the team up or down quickly based on delivery goals and budget.',
  },
  {
    question: 'Do you provide a trial period before hiring dedicated AI developers?',
    answer:
      'Yes. Trial engagements allow you to evaluate skills, communication, and problem-solving.',
  },
  {
    question: 'Are your AI developers experienced with enterprise-level projects?',
    answer:
      'Yes. Our developers have delivered AI solutions for enterprises across healthcare, fintech, retail, logistics, and more.',
  },
]

export default function HireAIDevelopersPage() {
  const [activeRoleTab, setActiveRoleTab] = useState(rolesTabs[0].id)
  const [activeTechTab, setActiveTechTab] = useState(techStackTabs[0].id)
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  const currentRoleTab = rolesTabs.find((tab) => tab.id === activeRoleTab) ?? rolesTabs[0]
  const currentTechTab = techStackTabs.find((tab) => tab.id === activeTechTab) ?? techStackTabs[0]

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-slate-900">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h1 className="text-4xl font-semibold text-white md:text-5xl">Hire AI Developers</h1>
            <p className="mt-4 text-lg text-slate-200">
              Take your business headway with dedicated AI developers who deliver smart, scalable,
              and personalized solutions. Hire remote or dedicated AI experts to build automated
              systems that enhance efficiency and measurable results.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-orange-400" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white"
              >
                Hire Our AI Developers
              </Link>
              <Link
                href="/contact"
                className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white"
              >
                Talk to an Expert
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/web-img/hire-ai-developers-engineers-banner.webp"
              alt="Hire AI Developers"
              className="w-full max-w-md rounded-3xl object-cover"
              width={510}
              height={510}
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              A History of Accomplishments That Attest to Our AI Capabilities
            </h2>
            <p className="mt-4 text-slate-600">
              We deliver AI solutions that create measurable business results with reliable
              timelines, global delivery experience, and proven success.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-slate-200 p-4">
                  <div className="flex items-center gap-4">
                    <img src={stat.icon} alt={stat.label} className="h-12 w-12" />
                    <div>
                      <div className="text-2xl font-semibold">{stat.value}</div>
                      <div className="text-sm text-slate-500">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/web-img/hire-the-best-engineers.webp"
              alt="Hire the best AI engineers"
              className="w-full max-w-sm rounded-3xl object-cover"
              width={350}
              height={350}
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h3 className="text-3xl font-semibold">
            Typical Timeline to Hire AI Developer - From Request to Kickoff in Minutes
          </h3>
          <p className="mt-4 text-slate-200">
            Initial consultation takes 30 minutes, followed by requirement alignment, developer
            shortlisting, and onboarding. Start AI development within days without long waits.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Know Hourly Rate
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Hire Artificial Intelligence Developers Tailored to Your Business Needs
            </h2>
            <p className="mt-4 text-slate-600">
              Hire specialized AI developers who align with your goals and build scalable,
              future-ready AI solutions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aiSpecialists.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-center gap-4">
                  <img src={item.icon} alt={item.title} className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            AI Momentum Is Here - Reasons to Hire AI Developers in 2026
          </h2>
          <p className="mt-4 text-slate-600">
            AI adoption is accelerating across industries. Hiring now helps you stay ahead with
            faster innovation and productivity.
          </p>
          <h3 className="mt-8 text-xl font-semibold">Key AI Industry Statistics (2024-2025)</h3>
          <ul className="mt-4 grid gap-3 text-sm text-slate-600">
            {aiMomentumStats.map((stat) => (
              <li key={stat} className="flex items-start gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                {stat}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/web-img/hire-ai-dev-level.webp"
              alt="Hire AI developers"
              className="w-full max-w-md rounded-3xl object-cover"
              width={500}
              height={500}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              Hire AI Developers - Level Up Your Business with Intelligent Solutions
            </h2>
            <p className="mt-4 text-slate-600">
              Our AI engineers build custom models, automation pipelines, intelligent agents, and
              scalable applications tailored to your workflows and business goals.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Hire AI Developers for Full-Scale AI Development and Integration Services
            </h2>
            <p className="mt-4 text-slate-600">
              End-to-end AI services that help you innovate, scale, and automate business
              operations.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {aiServices.map((service) => (
              <div key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-center gap-4">
                  <img src={service.icon} alt={service.title} className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">{service.description}</p>
                <ul className="mt-4 grid gap-2 text-sm text-slate-600">
                  {service.solutions.map((solution) => (
                    <li key={solution} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-500" />
                      {solution}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-3xl font-semibold">Hire Remote AI Developers to Accelerate Your AI Roadmap</h2>
          <p className="mt-4 text-slate-200">
            Access top AI talent across time zones, reduce development costs, and speed up
            innovation with vetted experts.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Discuss Before Hire
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div className="flex justify-center">
            <img
              src="https://www.Infynex.com/assets/img/web-img/why-ai-dev-stand.webp"
              alt="AI developer for hire"
              className="w-full max-w-md rounded-3xl object-cover"
              width={500}
              height={555}
            />
          </div>
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">
              AI Developer for Hire to Create the Smartest Move for Your Business
            </h2>
            <p className="mt-4 text-slate-600">
              Work with a trusted AI development partner that understands both technology and
              business outcomes. Hire our AI developers to:
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-600">
              <li>Develop AI aligned to your business flow.</li>
              <li>Automate repetitive tasks and reduce operational costs.</li>
              <li>Integrate AI with mobile apps, platforms, and enterprise systems.</li>
              <li>Deploy LLMs, generative AI, and intelligent automation.</li>
              <li>Scale data pipelines and gain real-time insights.</li>
              <li>Fuse AI agents, copilots, and chatbot systems.</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Hire Our AI Developers: Explore Skills and Roles for Specific Needs
            </h2>
            <p className="mt-4 text-slate-200">
              Know the roles and skills that add value to AI projects, from model creation to
              deployment.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {rolesTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveRoleTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeRoleTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-8 rounded-3xl bg-white/10 p-8">
            <h3 className="text-xl font-semibold text-center">{currentRoleTab.heading}</h3>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {currentRoleTab.items.map((item) => (
                <div key={item.title} className="rounded-2xl bg-white/5 p-4">
                  <h4 className="text-base font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-slate-200">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Advanced Technical Expertise That Makes Our AI Developers Your First Choice
          </h2>
          <p className="mt-4 text-slate-600">
            Our AI developers build secure, flexible, and industry-ready systems that solve real
            business hurdles.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {advancedExpertise.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <div className="flex items-start gap-4">
                  <img src={item.icon} alt={item.title} className="h-12 w-12" />
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h3 className="text-3xl font-semibold">Take a Step Towards Change, Hire AI Engineers</h3>
          <p className="mt-4 text-slate-200">
            Hire AI engineers to get industry-specific solutions and transform ideas into measurable
            results.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Know Hourly Rate
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <div className="text-center">
            <h2 className="text-3xl font-semibold md:text-4xl">
              Technologies Our AI Developers Leverage to Build Smart Systems
            </h2>
            <p className="mt-4 text-slate-200">
              Modern, scalable tech stacks for reliable AI systems.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {techStackTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTechTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeTechTab === tab.id
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/10 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentTechTab.items.map((item) => (
              <div key={item.title} className="rounded-2xl bg-white/10 p-6 text-center">
                <img src={item.icon} alt={item.title} className="mx-auto h-12 w-12" />
                <h4 className="mt-3 text-base font-semibold">{item.title}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Hire Artificial Intelligence Developers for Smooth System Integration
          </h2>
          <p className="mt-4 text-slate-600">
            Integrate AI across apps, platforms, and enterprise systems with security and scale.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {integrationServices.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Top 1% AI Developers for Hiring: Excellence Across Sectors
          </h2>
          <p className="mt-4 text-slate-600">
            Domain-savvy AI developers tailor solutions to industry-specific challenges.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sectorExpertise.map((sector) => (
              <div key={sector.title} className="rounded-2xl border border-slate-200 p-6 text-center">
                <img src={sector.icon} alt={sector.title} className="mx-auto h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">{sector.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{sector.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h3 className="text-3xl font-semibold">Hire Pioneer Artificial Intelligence Programmers and Engineers</h3>
          <p className="mt-4 text-slate-200">
            Unlock innovative AI solutions tailored to your business needs.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Know Hourly Rate
          </Link>
        </div>
      </section>

      <section className="bg-slate-900 py-16">
        <div className="mx-auto max-w-6xl px-6 text-white">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Fast-Growing Industries Hire AI App Developers for Smarter Solutions
          </h2>
          <p className="mt-4 text-slate-200">
            Hire remote AI developers to create industry-ready AI systems and workflows.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {growthIndustries.map((industry) => (
              <div key={industry.title} className="rounded-3xl bg-white/10 p-6">
                <div className="flex items-center gap-4">
                  <img src={industry.icon} alt={industry.title} className="h-12 w-12" />
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                </div>
                <p className="mt-3 text-sm text-slate-200">{industry.description}</p>
                <p className="mt-4 text-sm font-semibold">Key capabilities:</p>
                <ul className="mt-2 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
                  {industry.capabilities.map((capability) => (
                    <li key={capability} className="flex items-start gap-2">
                      <span className="mt-2 h-2 w-2 rounded-full bg-orange-400" />
                      {capability}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            Real AI Success Stories Powered by Our Expert Developers
          </h2>
          <p className="mt-4 text-slate-600">
            Explore how our AI engineers deliver measurable success and innovation.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {portfolioItems.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-center">
                  <div className="md:w-2/3">
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="text-sm text-orange-500">{item.subtitle}</p>
                    <p className="mt-3 text-sm text-slate-600">{item.description}</p>
                  </div>
                  <div className="md:w-1/3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-40 w-full rounded-2xl object-cover"
                      width={518}
                      height={403}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Hiring Comparison: In-House vs Remote vs Marketplace AI Talent
          </h3>
          <div className="mt-8 overflow-x-auto">
            <table className="min-w-full border border-slate-200 text-sm">
              <thead className="bg-white">
                <tr className="text-left">
                  <th className="border border-slate-200 px-4 py-3">Model</th>
                  <th className="border border-slate-200 px-4 py-3">Speed</th>
                  <th className="border border-slate-200 px-4 py-3">Cost</th>
                  <th className="border border-slate-200 px-4 py-3">Control</th>
                  <th className="border border-slate-200 px-4 py-3">Quality</th>
                  <th className="border border-slate-200 px-4 py-3">Scalability</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.model} className="bg-white">
                    <td className="border border-slate-200 px-4 py-3">{row.model}</td>
                    <td className="border border-slate-200 px-4 py-3">{row.speed}</td>
                    <td className="border border-slate-200 px-4 py-3">{row.cost}</td>
                    <td className="border border-slate-200 px-4 py-3">{row.control}</td>
                    <td className="border border-slate-200 px-4 py-3">{row.quality}</td>
                    <td className="border border-slate-200 px-4 py-3">{row.scalability}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 p-4">
              Companies that hire AI developers in-house gain strong control but face slower
              recruitment and higher cost.
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              Remote AI developers offer faster onboarding, global talent access, and flexible
              contracts.
            </div>
            <div className="rounded-2xl border border-slate-200 p-4">
              Talent marketplaces offer speed and scalability but require careful vetting.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-3xl font-semibold">Launch Your Next AI Project With Certified AI Engineers</h2>
          <p className="mt-4 text-slate-200">
            From prototypes to production-grade AI applications, we deliver measurable business
            impact.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Discuss Your Project
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">
            A Transparent Hiring Pipeline for Businesses to Hire Remote AI Developers
          </h2>
          <p className="mt-4 text-slate-600">
            Our multi-phase hiring and delivery process ensures trust, quality, and visibility.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {hiringPipeline.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 p-6">
                <h3 className="text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h3 className="text-3xl font-semibold">Hire Dedicated AI Developers Now!</h3>
          <p className="mt-4 text-slate-200">
            Hire AI engineers to accelerate transformation with services from AI-powered IoT to
            chatbots and automation.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Know Hourly Rate
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold md:text-4xl">Hire AI Developers Team in 4 Easy Steps</h2>
            <p className="mt-4 text-slate-600">
              A hassle-free process to bring your vision to life quickly and efficiently.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white"
            >
              Consult Our Experts
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            {processSteps.map((step) => (
              <div key={step.title} className="rounded-2xl border border-slate-200 p-6">
                <img src={step.icon} alt={step.title} className="h-12 w-12" />
                <h3 className="mt-4 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold md:text-4xl">
            2026 Pricing Plan for Hiring Our Expert AI Developers
          </h3>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <div
                key={plan.title}
                className={`rounded-2xl border p-6 ${
                  plan.highlighted
                    ? 'border-orange-500 bg-white shadow-lg'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <img src={plan.icon} alt={plan.title} className="h-12 w-12" />
                <h4 className="mt-4 text-lg font-semibold">{plan.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{plan.description}</p>
                <ul className="mt-4 text-sm text-slate-600">
                  <li>Communication: Skype, Mail, Phone, Slack, Chatbot</li>
                  <li>Hiring period: Right away</li>
                  <li>No hidden charges</li>
                </ul>
                <Link
                  href="/contact"
                  className={`mt-6 inline-flex w-full justify-center rounded-full px-4 py-2 text-sm font-semibold ${
                    plan.highlighted
                      ? 'bg-orange-500 text-white'
                      : 'border border-slate-300 text-slate-700'
                  }`}
                >
                  Hire Us Now
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h3 className="text-3xl font-semibold">Hire Dedicated AI Developers Under the Budget</h3>
          <p className="mt-4 text-slate-200">
            Hire dedicated AI developers at fair prices with proven expertise.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Know Hourly Rate
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-6">
          <h3 className="text-3xl font-semibold md:text-4xl">
            Partner with Our AI Engineers to Build Scalable AI Products
          </h3>
          <p className="mt-4 text-slate-600">
            Hire freelance AI developers who deliver secure, efficient, and scalable solutions.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-200 p-6">
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-14">
        <div className="mx-auto max-w-5xl px-6 text-center text-white">
          <h2 className="text-3xl font-semibold">Hire Dedicated AI Developers to Transform Your Business</h2>
          <p className="mt-4 text-slate-200">
            Join hands with Infynex to build AI systems that drive innovation and ROI.
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold"
          >
            Know Hourly Rate
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-3xl font-semibold md:text-4xl">FAQs</h2>
          <div className="mt-8 grid gap-4">
            {faqs.map((faq, index) => (
              <div key={faq.question} className="rounded-2xl border border-slate-200">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between px-6 py-4 text-left"
                >
                  <span className="text-base font-semibold text-slate-900">{faq.question}</span>
                  <span className="text-xl text-orange-500">{openFaq === index ? '-' : '+'}</span>
                </button>
                {openFaq === index && (
                  <div className="border-t border-slate-200 px-6 py-4 text-sm text-slate-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
