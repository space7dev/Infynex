'use client'

import { useMemo, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAccordion } from '@/lib/useAccordion'
import FaqSectionButtonItems from './FaqSectionButtonItems'
import TrustedLogosStrip from './TrustedLogosStrip'

const normalizeAssetUrl = (url: string) =>
  url.replace('https://www.Infynex.com/', 'https://www.suffescom.com/')

const heroHighlights = [
  'Value-driven conversational features',
  'Smooth AI chatbot integration',
  'Top-tier data security protocols',
  'Multi-channel communication support',
]

const trustedLogos = [
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/iso.webp',
    alt: 'ISO',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/aws-icon.svg',
    alt: 'AWS',
  },
  {
    src: 'https://www.Infynex.com/assets/img/icons/open-ai-icon.svg',
    alt: 'OpenAI',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/fox.webp',
    alt: 'Fox',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/market-watch.webp',
    alt: 'Market Watch',
  },
  {
    src: 'https://www.Infynex.com/assets/img/new_suffes_images/google-partner-logo.webp',
    alt: 'Google Partner',
  },
]

const experienceStats = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/years-of-experience-svg.svg',
    value: '13+',
    label: 'Years of services',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/therapy-app-delivered-svg.svg',
    value: '500+',
    label: 'White label projects',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/client-retention-rate-svg.svg',
    value: '90%',
    label: 'Client retention rate',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/cost-saving-on-each-project-svg.svg',
    value: '25%',
    label: 'Cost savings on each project',
  },
]

const scopeStats = [
  'Chatbots deliver a 40% response rate on average.',
  'Nearly 60% of millennials use chatbots to manage online issues.',
  'Almost 70% of businesses say chatbots boosted sales.',
  'The global chatbot market is valued at around $7 billion.',
  'About 68% of users enjoy interacting with chatbots.',
  'Nearly 55% of businesses generate quality leads with chatbots.',
  'Chatbot commerce transactions could reach $100 billion by 2030.',
]

const chatbotServices = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/consulting.svg',
    title: 'AI Chatbot Consulting',
    description:
      'Define goals, user journeys, and automation scope with a tailored roadmap for ROI and scalability.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai.svg',
    title: 'Custom AI Chatbot Development',
    description:
      'Build chatbots aligned with your brand voice, operational needs, and audience preferences.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/chatbot.svg',
    title: 'Chatbot Integration',
    description:
      'Integrate bots with websites, CRMs, business tools, and mobile apps for consistent experiences.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/maintenance.svg',
    title: 'Maintenance and Support',
    description:
      'Continuous monitoring, upgrades, and model retraining to keep your chatbot performant.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/platform.svg',
    title: 'Multi-Platform Deployment',
    description:
      'Launch chatbots across web, mobile, and social channels with unified orchestration.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/compliance.svg',
    title: 'Security and Compliance Services',
    description:
      'Enterprise-grade security with encryption, authentication, and GDPR, HIPAA, and ISO alignment.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/integration.svg',
    title: 'NLP Engine Integration',
    description:
      'Enable intent, context, and sentiment understanding for more natural conversations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/architecture.svg',
    title: 'AI Chatbot Architecture Design',
    description:
      'Design scalable, modular architectures that handle high volumes reliably.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/architecture.svg',
    title: 'AI Chatbot Proof of Concept',
    description:
      'Validate feasibility, accuracy, and integration readiness before full deployment.',
  },
]

const portfolioProjects = [
  {
    name: 'Aragon',
    type: 'AI Tool',
    description:
      'AI headshot generator that transforms selfies into professional studio-quality headshots.',
    image: 'https://www.Infynex.com/assets/img/portfolio/aragon-banner.webp',
  },
  {
    name: 'MyCoach AI',
    type: 'AI Tool',
    description:
      'Fitness and nutrition coaching platform with automated messaging and progress insights.',
    image: 'https://www.Infynex.com/assets/img/portfolio/mycoachai-banner.webp',
  },
  {
    name: 'Kai',
    type: 'AI Tool',
    description:
      'Conversation analytics platform for healthcare and pharma teams to reveal hidden insights.',
    image: 'https://www.Infynex.com/assets/img/portfolio/kai-banner.webp',
  },
  {
    name: 'UniBee',
    type: 'AI Tool',
    description:
      'Subscription analytics platform delivering actionable SaaS insights and growth signals.',
    image: 'https://www.Infynex.com/assets/img/portfolio/unibee-banner.webp',
  },
]

const deliveredProjects = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/legal-case.svg',
    title: 'AI Legal Assistant Chatbot',
    solution:
      'Automated case tracking, document management, and client communication for law firms.',
    challenges: [
      'Secure handling of sensitive legal data',
      'Document accuracy with NLP models',
      'CRM integration and workflow alignment',
      'Compliance with data protection laws',
    ],
    results: [
      '45% faster case responses',
      '60% reduced manual effort',
      '99.9% data accuracy',
      'Higher client satisfaction',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/sales.svg',
    title: 'AI Sales Agents',
    solution:
      'Retail chatbot for multilingual engagement, product recommendations, and CRM sync.',
    challenges: [
      'Multi-language support',
      'CRM and ecommerce integrations',
      'Accurate product suggestions',
      'Consistent brand tone',
    ],
    results: [
      '3x qualified leads',
      '55% higher conversions',
      '24/7 customer engagement',
      'Reduced manual dependency',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/recruitment.svg',
    title: 'AI Staff Recruitment Agent',
    solution:
      'Recruitment chatbot that screens candidates, schedules interviews, and integrates ATS.',
    challenges: [
      'High applicant volume',
      'Job portal and ATS integrations',
      'Unbiased AI screening',
      'Candidate data confidentiality',
    ],
    results: [
      '50% faster hiring',
      '40% lower recruitment costs',
      '35% higher engagement',
      'Improved HR productivity',
    ],
  },
]

const chatbotSolutions = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/erp-chatbot.svg',
    title: 'ERP Chatbots',
    description:
      'Automate inventory, HR, and finance queries while boosting real-time insights.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/crm-chatbot.svg',
    title: 'CRM Chatbots',
    description:
      'Streamline lead capture, follow-ups, and client interactions at scale.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-nsfw-chatbot-svg.svg',
    title: 'AI NSFW Chatbot',
    description:
      'Adult-themed chatbots with compliance, personalization, and moderation controls.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/roleplay-chatbot-svg.svg',
    title: 'Role Play Chatbot',
    description:
      'Scenario-based roleplay bots for immersive conversational experiences.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/hybrid-chatbot-svg.svg',
    title: 'Hybrid Chatbot',
    description:
      'Combine rules and AI for adaptable and reliable conversations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/insurance-bots-svg.svg',
    title: 'Insurance Bots',
    description:
      'Automate onboarding, claims inquiries, and policy guidance.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/reminder-bots-svg.svg',
    title: 'Reminder Bot',
    description:
      'Schedule reminders for medicines, workouts, and tasks automatically.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/concierge-bots-svg.svg',
    title: 'Concierge Bots',
    description:
      'Deliver premium support and guidance on messaging platforms.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/superbots-svg.svg',
    title: 'Superbots',
    description:
      'Multi-domain assistants for education, supply chain, and travel use cases.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ml-based-chatbot-svg.svg',
    title: 'ML-Based Chatbots',
    description:
      'Machine learning bots that improve outcomes through feedback and analytics.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/conversation-chatbot-svg.svg',
    title: 'Conversational Chatbots',
    description: 'Natural conversation across messaging platforms and web chat.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/right-query-svg.svg',
    title: 'Right Query Suggestion Bot',
    description: 'Suggests precise queries to deliver faster, accurate answers.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/productivity.svg',
    title: 'Internal Productivity Bot',
    description: 'Automate task distribution, meeting reminders, and workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/voice.svg',
    title: 'Voice-Enabled Bot',
    description: 'Hands-free voice interactions for accessibility and convenience.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ecommerce.svg',
    title: 'Ecommerce Chatbot',
    description: 'Product recommendations, order tracking, and purchase assistance.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/lead-generation.svg',
    title: 'Lead Generation Bots',
    description: 'Qualify and nurture leads with AI-driven conversations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/transactional.svg',
    title: 'Transactional Chatbot',
    description: 'Automate payments, confirmations, and invoice updates securely.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/information.svg',
    title: 'Informational Chatbot',
    description: 'Deliver FAQs, updates, and internal knowledge instantly.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/social-media.svg',
    title: 'Social Media Chatbot',
    description: 'Automate responses, sentiment analysis, and moderation.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/entertainment.svg',
    title: 'Entertainment Chatbot',
    description: 'Engaging experiences with personalized content and suggestions.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/naughty.svg',
    title: 'Naughty AI Chatbot',
    description:
      'Adult chat solutions with personalization, safety, and compliance guardrails.',
  },
]

const chatbotConcepts = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/natural-language-processing.svg',
    title: 'Natural Language Processing',
    description:
      'Understands intent, tone, and meaning to generate more natural responses.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/machine-learning.svg',
    title: 'Machine Learning',
    description:
      'Improves accuracy over time through feedback and interaction history.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/analysis.svg',
    title: 'Sentiment Analysis',
    description:
      'Detects emotion and adapts responses to improve user satisfaction.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/language.svg',
    title: 'Large Language Models',
    description:
      'Advanced models like GPT or Gemini provide human-like, contextual answers.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/conversational.svg',
    title: 'Voice Recognition and Conversational AI',
    description:
      'Enables hands-free voice interactions and natural dialogue flow.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/vision.svg',
    title: 'Computer Vision',
    description:
      'Image and document understanding for verification and automation.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/contextual.svg',
    title: 'Contextual AI Engines',
    description:
      'Maintains conversation history for consistent and relevant replies.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/multilingual.svg',
    title: 'Multilingual AI Models',
    description:
      'Supports communication across regions with localized responses.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/learning.svg',
    title: 'Reinforcement Learning',
    description:
      'Optimizes decisions using feedback loops and goal-driven training.',
  },
]

const industries = [
  {
    image: 'https://www.Infynex.com/assets/img/web-img/healthcare.webp',
    title: 'Healthcare',
    description:
      'Improve patient engagement and compliance while protecting sensitive data.',
    bullets: [
      'Automates appointment scheduling and reminders',
      'Provides instant symptom checks and FAQs',
      'Secures patient data handling',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/ecommerce.webp',
    title: 'Ecommerce / Retail',
    description:
      'Digital sales assistants that lift conversions and reduce cart abandonment.',
    bullets: [
      'Product search, recommendations, and checkout help',
      'Order tracking and return automation',
      'Real-time engagement to reduce churn',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/accounting.webp',
    title: 'Banking and Finance',
    description:
      'Secure, fast customer support for account inquiries and insights.',
    bullets: [
      '24/7 account management and inquiry support',
      'Personalized investment and budgeting advice',
      'Secure data exchange and KYC automation',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/education.webp',
    title: 'Education',
    description:
      'Consistent academic support and personalized student engagement.',
    bullets: [
      'Answers admission and course queries',
      'Shares schedules, results, and updates',
      'Boosts engagement and retention',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/manufacturing.webp',
    title: 'Manufacturing',
    description:
      'Automation and predictive insights for efficient operations.',
    bullets: [
      'Monitors operations in real time',
      'Predicts maintenance needs with analytics',
      'Automates coordination and reduces downtime',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/travel.webp',
    title: 'Travel and Hospitality',
    description:
      'Personalized and multilingual travel assistance around the clock.',
    bullets: [
      'Handles bookings, cancellations, and travel inquiries',
      'Provides destination recommendations and policy info',
      'Supports global users with multilingual chat',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/social-media.webp',
    title: 'Social Media',
    description:
      'Instant engagement and sentiment-driven responses for brand channels.',
    bullets: [
      'Responds instantly to messages and comments',
      'Generates insights through sentiment analysis',
      'Automates scheduling and content personalization',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/real-estate.webp',
    title: 'Real Estate',
    description:
      'Faster lead handling and personalized property discovery.',
    bullets: [
      'Automates property search and scheduling',
      'Delivers personalized property recommendations',
      'Streamlines lead qualification and follow-ups',
    ],
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/agriculture.webp',
    title: 'Agriculture',
    description:
      'Smart insights and automation to improve yield and operations.',
    bullets: [
      'Provides weather, soil, and crop insights',
      'Detects pests and nutrient deficiencies early',
      'Predicts yields and optimizes logistics',
    ],
  },
]

const impactBenefits = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/customer.svg',
    title: 'Improved Customer Service',
    description: '24/7 support that reduces wait time and boosts satisfaction.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/engagement.svg',
    title: 'Higher Engagement',
    description: 'Interactive conversations that deepen relationships.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/efficiency.svg',
    title: 'Efficiency and Savings',
    description: 'Automate repetitive tasks and reduce operational costs.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/lead-generation.svg',
    title: 'Improved Lead Generation',
    description: 'Qualify leads with intent-driven AI dialogue.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/scalability.svg',
    title: 'Seamless Scalability',
    description: 'Handle growing conversation volumes without extra headcount.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/data.svg',
    title: 'Data Collection and Analytics',
    description: 'Capture insights to optimize workflows and decisions.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/brand.svg',
    title: 'Brand Consistency',
    description: 'Maintain a unified brand voice across every interaction.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/multilingual.svg',
    title: 'Multilingual and Omnichannel',
    description: 'Reach customers in their preferred language and platform.',
  },
]

const frameworks = [
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-mircrosoft-chatbot.webp',
    title: 'Microsoft Chatbot',
    description:
      'Azure Bot and Microsoft Bot Framework for secure enterprise deployments.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-ibm-watson.webp',
    title: 'IBM Watson',
    description:
      'Natural language dialogue with analytics and discovery capabilities.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-dialogflow.webp',
    title: 'Dialogflow',
    description:
      'Conversational workflows for web, mobile, IoT, and messaging channels.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-facebook-bot.webp',
    title: 'Facebook Bot',
    description: 'Messenger bots for instant and intuitive user engagement.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-chatfuel.webp',
    title: 'Chatfuel',
    description: 'Rapid bot creation for high retention experiences.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-amazon-lex.webp',
    title: 'Amazon Lex',
    description: 'Natural language interfaces powered by AWS.',
  },
]

const processSteps = [
  {
    title: 'Understanding and Analyzing Business Requirements',
    description:
      'We study workflows and objectives to map the best chatbot strategy.',
  },
  {
    title: 'Freezing Scope and Development Technologies',
    description:
      'Finalize scope, success metrics, and the optimal tech stack.',
  },
  {
    title: 'Wireframing and Data Flow Architecture',
    description:
      'Design conversational flows and architecture for scalable delivery.',
  },
  {
    title: 'Project Management and Code Engineering',
    description:
      'Build and orchestrate development with dedicated delivery owners.',
  },
  {
    title: 'API, Automated, Manual, and User Acceptance Testing',
    description: 'Validate reliability, security, and performance with QA.',
  },
  {
    title: 'Monitoring and Analytics Integration',
    description:
      'Track chatbot performance across sales, support, and marketing.',
  },
]

const aiModels = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/chatgpt.webp',
    name: 'ChatGPT',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/deepseek.webp',
    name: 'DeepSeek',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/gemini.webp',
    name: 'Google Gemini',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/meta-ai.webp',
    name: 'Meta AI',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/claude.webp',
    name: 'Claude',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/microsoft-copilot.webp',
    name: 'Microsoft Copilot',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/perplexity.webp',
    name: 'Perplexity',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/cohere.webp',
    name: 'Cohere',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/grok.webp',
    name: 'Grok',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/openai.webp',
    name: 'OpenAI',
  },
]

const techStackTabs = [
  {
    id: 'deep-learning',
    label: 'Deep Learning Frameworks',
    items: [
      { label: 'Tensorflow', icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-tensor-flow.webp' },
      { label: 'PyTorch', icon: 'https://www.Infynex.com/assets/img/new_landing_img/pytorch.svg' },
      { label: 'Keras', icon: 'https://www.Infynex.com/assets/img/icons/keras-tech-icon.svg' },
      { label: 'Caffe', icon: 'https://www.Infynex.com/assets/img/icons/caffe-tech-icon.svg' },
      { label: 'MXNet', icon: 'https://www.Infynex.com/assets/img/icons/mxnet-tech-icon.svg' },
      { label: 'Theano', icon: 'https://www.Infynex.com/assets/img/icons/theano-tech-icon.svg' },
      { label: 'Chainer', icon: 'https://www.Infynex.com/assets/img/icons/chainer-tech-icon.svg' },
      { label: 'Microsoft Cognitive Toolkit', icon: 'https://www.Infynex.com/assets/img/icons/cntk-tech-icon.svg' },
      { label: 'Torch', icon: 'https://www.Infynex.com/assets/img/icons/torch-tech-icon.svg' },
      { label: 'Deeplearning4j', icon: 'https://www.Infynex.com/assets/img/icons/deep-learning-tech-icon.svg' },
    ],
  },
  {
    id: 'modules',
    label: 'Modules and Toolkits',
    items: [
      { label: 'OpenAI GPT', icon: 'https://www.Infynex.com/assets/img/icons/openai-gpt-tech-icon.svg' },
      { label: 'OpenAI DALL-E', icon: 'https://www.Infynex.com/assets/img/icons/openai-gpt-tech-icon.svg' },
      { label: 'NVIDIA StyleGAN', icon: 'https://www.Infynex.com/assets/img/icons/nvidia-tech-icon.svg' },
      { label: 'Hugging Face Transformers', icon: 'https://www.Infynex.com/assets/img/icons/hf-tech-icon.svg' },
      { label: 'Facebook AI Research PyTorch Hub', icon: 'https://www.Infynex.com/assets/img/icons/facebook-ai-tech-icon.svg' },
      { label: 'DeepMind Sonnet', icon: 'https://www.Infynex.com/assets/img/icons/deepmind-sonnet-tech-icon.svg' },
      { label: 'TensorFlow Probability', icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-tensor-flow.webp' },
      { label: 'Fast.ai', icon: 'https://www.Infynex.com/assets/img/icons/fast-ai-tech-icon.svg' },
      { label: 'AllenNLP', icon: 'https://www.Infynex.com/assets/img/icons/allen-nlp-tech-icon.svg' },
      { label: 'NVIDIA NeMo', icon: 'https://www.Infynex.com/assets/img/icons/nvidia-tech-icon.svg' },
    ],
  },
  {
    id: 'generative',
    label: 'Generative AI Models',
    items: [
      { label: 'GPT-3', icon: 'https://www.Infynex.com/assets/img/icons/openai-gpt-tech-icon.svg' },
      { label: 'GPT-4', icon: 'https://www.Infynex.com/assets/img/icons/gpt-tech-icon.svg' },
      { label: 'DALL-E', icon: 'https://www.Infynex.com/assets/img/icons/openai-gpt-tech-icon.svg' },
      { label: 'VQ-VAE', icon: 'https://www.Infynex.com/assets/img/icons/vq-vae-tech-icon.svg' },
      { label: 'VAE', icon: 'https://www.Infynex.com/assets/img/icons/vae-tech-icon.svg' },
      { label: 'CycleGAN', icon: 'https://www.Infynex.com/assets/img/icons/cycle-gan-tech-icon.svg' },
      { label: 'Pix2Pix', icon: 'https://www.Infynex.com/assets/img/icons/pix-2-pix-tech-icon.svg' },
      { label: 'WaveGAN', icon: 'https://www.Infynex.com/assets/img/icons/wavegan-tech-icon.svg' },
      { label: 'DeepArt', icon: 'https://www.Infynex.com/assets/img/icons/deepart-tech-icon.svg' },
      { label: 'DeepDream', icon: 'https://www.Infynex.com/assets/img/icons/deep-dream-tech-icon.svg' },
    ],
  },
  {
    id: 'neural',
    label: 'Neural Networks',
    items: [
      { label: 'RNN', icon: 'https://www.Infynex.com/assets/img/icons/rnn-tech-icon.svg' },
      { label: 'CNN', icon: 'https://www.Infynex.com/assets/img/icons/cnn-tech-icon.svg' },
      { label: 'GAN', icon: 'https://www.Infynex.com/assets/img/icons/gan-tech-icon.svg' },
      { label: 'VAE', icon: 'https://www.Infynex.com/assets/img/icons/vae-tech-icon.svg' },
      { label: 'Transformers', icon: 'https://www.Infynex.com/assets/img/icons/transformers-tech-icon.svg' },
      { label: 'LSTM Networks', icon: 'https://www.Infynex.com/assets/img/icons/lstm-tech-icon.svg' },
      { label: 'Autoencoders', icon: 'https://www.Infynex.com/assets/img/icons/autoencoders-tech-icon.svg' },
      { label: 'RBM', icon: 'https://www.Infynex.com/assets/img/icons/rbm-tech-icon.svg' },
      { label: 'DBN', icon: 'https://www.Infynex.com/assets/img/icons/dbn-tech-icon.svg' },
      { label: 'DRLN', icon: 'https://www.Infynex.com/assets/img/icons/drln-tech-icon.svg' },
    ],
  },
  {
    id: 'libraries',
    label: 'Libraries',
    items: [
      { label: 'Tensorflow', icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-tensor-flow.webp' },
      { label: 'PyTorch', icon: 'https://www.Infynex.com/assets/img/new_landing_img/pytorch.svg' },
      { label: 'Keras', icon: 'https://www.Infynex.com/assets/img/icons/keras-tech-icon.svg' },
      { label: 'OpenAI Gym', icon: 'https://www.Infynex.com/assets/img/icons/openai-gpt-tech-icon.svg' },
      { label: 'Theano', icon: 'https://www.Infynex.com/assets/img/icons/theano-tech-icon.svg' },
      { label: 'Caffe', icon: 'https://www.Infynex.com/assets/img/icons/caffe-tech-icon.svg' },
      { label: 'MXNet', icon: 'https://www.Infynex.com/assets/img/icons/mxnet-tech-icon.svg' },
      { label: 'GPyTorch', icon: 'https://www.Infynex.com/assets/img/icons/gpytorch-tech-icon.svg' },
      { label: 'Scikit-learn', icon: 'https://www.Infynex.com/assets/img/icons/scikit-learn-tech-icon.svg' },
      { label: 'FastAI', icon: 'https://www.Infynex.com/assets/img/icons/fast-ai-tech-icon.svg' },
    ],
  },
  {
    id: 'image',
    label: 'Image Classification Models',
    items: [
      { label: 'AlexNet', icon: 'https://www.Infynex.com/assets/img/icons/alexnet-tech-icon.svg' },
      { label: 'VGGNet', icon: 'https://www.Infynex.com/assets/img/icons/vggnet-tech-icon.svg' },
      { label: 'ResNet', icon: 'https://www.Infynex.com/assets/img/icons/resnet-tech-icon.svg' },
      { label: 'Inception', icon: 'https://www.Infynex.com/assets/img/icons/inception-tech-icon.svg' },
      { label: 'MobileNet', icon: 'https://www.Infynex.com/assets/img/icons/mobilenet-tech-icon.svg' },
      { label: 'DenseNet', icon: 'https://www.Infynex.com/assets/img/icons/densenet-tech-icon.svg' },
      { label: 'EfficientNet', icon: 'https://www.Infynex.com/assets/img/icons/efficientnet-tech-icon.svg' },
      { label: 'Xception', icon: 'https://www.Infynex.com/assets/img/icons/xception-tech-icon.svg' },
      { label: 'SqueezeNet', icon: 'https://www.Infynex.com/assets/img/icons/squeezenet-tech-icon.svg' },
      { label: 'GoogLeNet', icon: 'https://www.Infynex.com/assets/img/icons/googlenet-tech-icon.svg' },
    ],
  },
]

const hiringModels = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/fixed-price.svg',
    title: 'Fixed Price Model',
    description:
      'Pre-defined scope and timeline with clear project cost visibility.',
    bullets: [
      'Best for small to mid-size projects',
      'Defined scope, cost, and milestones',
      'Ideal for MVPs and feature builds',
      'On-time delivery with minimal revisions',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/hiring.svg',
    title: 'Dedicated Hiring Model',
    description:
      'Hire AI developers and a full team dedicated exclusively to your project.',
    bullets: [
      'Full-time engagement and reporting',
      'Direct team communication',
      'Scale team based on workload',
      'Best for long-term chatbot solutions',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/time.svg',
    title: 'Time and Material Model',
    description:
      'Flexible scope with billing based on actual effort and resources.',
    bullets: [
      'Adaptive scope and timelines',
      'Ideal for R and D or evolving needs',
      'Transparent utilization billing',
      'Fast iteration and improvements',
    ],
  },
]

const whyChooseUs = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/expertise.svg',
    title: 'Extensive Development Expertise',
    description:
      'Years of delivery experience crafting high-performance chatbots.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/experience-build.svg',
    title: 'Diverse Chatbot Experience',
    description:
      'Lead generation, virtual assistants, and industry-specific bots.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/tech-stack.svg',
    title: 'Advanced Technology Stack',
    description:
      'NLP, ML, and generative AI for context-aware conversations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/personalization.svg',
    title: 'Customization and Personalization',
    description:
      'Chatbots tailored to your brand voice and customer expectations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/scalability.svg',
    title: 'Scalable Solutions',
    description:
      'Built to perform consistently as your business grows.',
  },
]

const testimonials = [
  {
    name: 'Suzzain',
    role: 'AI Financial Chatbot',
    quote:
      'Infynex delivered a secure, finance-focused chatbot with strong NLP and compliance. We are thrilled with the results.',
    icon: 'https://www.Infynex.com/assets/img/icons/suzzain.webp',
  },
  {
    name: 'Egon',
    role: 'Education Bot',
    quote:
      'Our study bot now manages course queries and updates smoothly. The team is professional, creative, and reliable.',
    icon: 'https://www.Infynex.com/assets/img/icons/egon.webp',
  },
  {
    name: 'Terry',
    role: 'AI Legal Assistant Chatbot',
    quote:
      'The AI legal chatbot simplified case tracking and client communication, boosting productivity and accuracy.',
    icon: 'https://www.Infynex.com/assets/img/icons/terry.webp',
  },
]

const faqs = [
  {
    question: 'How can your AI chatbot solutions help my business?',
    answer:
      'AI chatbots reduce operational spend, improve ROI, and enhance customer service and engagement.',
  },
  {
    question: 'What industries can benefit from your AI chatbot solutions?',
    answer:
      'Healthcare, ecommerce, education, finance, and many other sectors benefit from custom chatbot solutions.',
  },
  {
    question: 'How do your AI chatbots work?',
    answer:
      'Our AI models use NLP to detect intent and improve response accuracy through continuous interactions.',
  },
  {
    question: 'What features do your AI chatbots offer?',
    answer:
      'Features include context detection, multilingual support, omnichannel delivery, and customized responses.',
  },
  {
    question: 'Can AI chatbots be customized to my business needs?',
    answer:
      'Yes, we design chatbots aligned with your brand, objectives, and customer expectations.',
  },
  {
    question: 'What data privacy and security measures are in place?',
    answer:
      'We provide encryption, role-based access control, and compliance with global data regulations.',
  },
  {
    question: 'Do your chatbots support multiple languages?',
    answer:
      'Yes, our chatbots can support multilingual audiences with localized interactions.',
  },
  {
    question: 'Why hire AI chatbot developers from Infynex?',
    answer:
      'Our developers deliver enterprise-grade chatbot solutions with deep AI and domain expertise.',
  },
  {
    question: 'How can I integrate your AI chatbot with existing systems?',
    answer:
      'We integrate with websites, mobile apps, CRMs, ERPs, and third-party tools for seamless deployment.',
  },
  {
    question: 'How much time and cost does it take to build a chatbot?',
    answer:
      'Cost and timelines depend on scope, complexity, and the required feature set.',
  },
  {
    question: 'Where can I find AI-enabled chatbot development services?',
    answer:
      'We deliver intelligent, scalable chatbot services with smooth integration and measurable outcomes.',
  },
  {
    question: 'Which company provides white label AI chatbots?',
    answer:
      'We offer white-label AI chatbots that can be fully branded for your organization.',
  },
  {
    question: 'What do your AI chatbot solutions include?',
    answer:
      'NLP integration, real-time analytics, omnichannel support, and enterprise security controls.',
  },
  {
    question: 'How can I incorporate agentic commerce in chatbots?',
    answer:
      'We connect leading AI vendor APIs to enable chatbots to handle actions, suggestions, and purchases.',
  },
  {
    question: 'How do I train my integrated chatbot?',
    answer:
      'Chatbots can learn from website content, FAQs, and user interactions to improve accuracy over time.',
  },
  {
    question: 'Which company provides AI chatbot development with a builder?',
    answer:
      'We provide a visual chatbot builder with drag-and-drop workflows and seamless deployment.',
  },
]

export default function AiChatbotDevelopmentPage() {
  const autoplay = useMemo(() => Autoplay({ delay: 4500, stopOnInteraction: false }), [])
  const [portfolioRef] = useEmblaCarousel({ loop: true }, [autoplay])
  const [testimonialRef] = useEmblaCarousel({ loop: true }, [autoplay])
  const [activeStack, setActiveStack] = useState(techStackTabs[0].id)
  const { openIndex: openFaqIndex, toggleIndex: toggleFaqIndex } = useAccordion(0)

  const activeStackContent = techStackTabs.find((tab) => tab.id === activeStack)

  return (
    <div className="bg-white text-slate-900 ">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white pb-[100px]">
        <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6 py-16 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-200">
              AI Chatbot Development
            </p>
            <h1 className="mt-3 text-xl font-semibold leading-tight md:text-5xl">
              AI Chatbot Development Company - Automate Business Operations
            </h1>
            <p className="mt-4 text-base text-slate-200 md:text-lg ">
              Infynex Solutions delivers intelligent AI chatbots that transform
              customer engagement, internal workflows, and business efficiency. We
              build secure, accurate, and integration-ready chatbot experiences
              tailored for enterprise ecosystems.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-emerald-300">
                I want Chatbot Demo
              </button>
              <button className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white">
                Talk to Experts
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-solutions-banner.webp'
                )}
                alt="AI Chatbot Development Company"
                className="h-full w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <TrustedLogosStrip
        logos={trustedLogos.map((logo) => ({
          ...logo,
          src: normalizeAssetUrl(logo.src),
        }))}
        sectionClassName="border-b border-slate-100 bg-white"
        containerClassName="mx-auto max-w-6xl px-6 py-10"
        listClassName="flex flex-wrap items-center justify-center gap-6"
        imageClassName="h-10 w-auto opacity-80"
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Our Experience, Excellence, and Innovation in AI Development
            </h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {experienceStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-white p-6 text-center shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(stat.icon)}
                  alt={stat.label}
                  className="mx-auto h-14 w-14"
                  loading="lazy"
                />
                <p className="mt-4 text-2xl font-semibold text-slate-900">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-slate-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">
              Scope of AI Chatbot Development Solutions
            </h2>
            <p className="mt-4 text-slate-600">
              We implement AI chatbot services that deliver analytical and
              conversational capabilities like humans, grounded in business data
              and performance goals.
            </p>
            <p className="mt-4 text-slate-600">
              Witness the scope of AI chatbot development with these market
              signals:
            </p>
           
          </div>
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
            <ul className="space-y-3 text-sm text-slate-700">
              {scopeStats.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              AI Chatbot Development Services We Offer
            </h2>
            <p className="mt-4 text-slate-600">
              From strategy to deployment, we build advanced AI chatbots that
              increase engagement, automate workflows, and improve customer
              experience.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {chatbotServices.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={normalizeAssetUrl(service.icon)}
                    alt={service.title}
                    className="h-10 w-10"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.3fr_1fr] md:items-center">
          <div>
            <h3 className="text-2xl font-semibold md:text-3xl">
              Still Managing Customer Chats Manually?
            </h3>
            <p className="mt-4 text-slate-600">
              Time is now to build your own chatbot with a team that understands
              enterprise security, automation, and customer experience.
            </p>
            <button className="mt-6 rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-white">
              Ask Proposal - It is Free
            </button>
          </div>
          <div className="rounded-2xl bg-slate-100 p-4">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/web-img/still-manage-chatbot-cta.webp'
              )}
              alt="AI Chatbot Development Services"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="text-center">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Featured AI Project Portfolio
            </h3>
          </div>
          <div className="mt-10 overflow-hidden" ref={portfolioRef}>
            <div className="flex">
              {portfolioProjects.map((project) => (
                <div
                  key={project.name}
                  className="min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="grid gap-8 rounded-3xl bg-white/5 p-8 md:grid-cols-[1.1fr_0.9fr] md:items-center">
                    <div>
                      <h4 className="text-2xl font-semibold">{project.name}</h4>
                      <p className="mt-2 text-sm uppercase text-emerald-200">
                        {project.type}
                      </p>
                      <p className="mt-4 text-sm text-slate-200">
                        {project.description}
                      </p>
                      <button className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900">
                        Get Free Consultation
                      </button>
                    </div>
                    <div className="rounded-2xl bg-white/10 p-4">
                      <img
                        src={normalizeAssetUrl(project.image)}
                        alt={project.name}
                        className="w-full rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Delivered AI Enabled Chatbot Projects
            </h2>
            <p className="mt-4 text-slate-600">
              We deliver AI chatbot solutions for multiple industries that
              optimize processes, enhance user experiences, and produce measurable
              ROI.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {deliveredProjects.map((project) => (
              <div key={project.title} className="rounded-2xl border border-slate-100 p-6 shadow-sm">
                <img
                  src={normalizeAssetUrl(project.icon)}
                  alt={project.title}
                  className="h-14 w-14"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{project.title}</h3>
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-800">Solution</p>
                  <p>{project.solution}</p>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-800">Challenges</p>
                  <ul className="mt-2 space-y-1">
                    {project.challenges.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div className="mt-4 text-sm text-slate-600">
                  <p className="font-semibold text-slate-800">Results</p>
                  <ul className="mt-2 space-y-1">
                    {project.results.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Unlock Scalable AI Chatbot Solutions for Your Business
            </h2>
            <p className="mt-4 text-slate-600">
              We specialize in enterprise AI chatbot development services that
              scale operations, automate intelligently, and improve ROI with
              next-gen frameworks and APIs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {chatbotSolutions.map((solution) => (
              <div
                key={solution.title}
                className="rounded-2xl bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(solution.icon)}
                  alt={solution.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{solution.title}</h3>
                <p className="mt-3 text-sm text-slate-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Concepts Behind Chatbot Development
            </h2>
            <p className="mt-4 text-slate-600">
              We use advanced AI technologies like NLP, ML, and LLMs to design
              contextual, scalable, and enterprise-ready chatbots.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {chatbotConcepts.map((concept) => (
              <div
                key={concept.title}
                className="rounded-2xl border border-slate-100 p-6"
              >
                <div className="flex items-center gap-3">
                  <img
                    src={normalizeAssetUrl(concept.icon)}
                    alt={concept.title}
                    className="h-12 w-12"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold">{concept.title}</h3>
                </div>
                <p className="mt-4 text-sm text-slate-600">
                  {concept.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Tailored Chatbot Solutions Across Industries
            </h2>
            <p className="mt-4 text-slate-600">
              We deliver AI chatbot development services customized for each
              industry, improving communication, automation, and efficiency.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {industries.map((industry) => (
              <div
                key={industry.title}
                className="overflow-hidden rounded-2xl bg-white shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(industry.image)}
                  alt={industry.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{industry.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {industry.description}
                  </p>
                  <ul className="mt-4 space-y-1 text-sm text-slate-600">
                    {industry.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Need Expert Chatbot Development and Ongoing Support?
          </h2>
          <p className="mt-3 text-slate-200">
            Partner with a top-rated team for tailored solutions and seamless
            performance.
          </p>
          <button className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900">
            Let us Connect
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Smart AI Chatbot Development for Real Results
            </h2>
            <p className="mt-4 text-slate-600">
              We create measurable business impact in customer engagement,
              automation, and analytics with enterprise-grade chatbots.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {impactBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-2xl border border-slate-100 p-6 text-center"
              >
                <img
                  src={normalizeAssetUrl(benefit.icon)}
                  alt={benefit.title}
                  className="mx-auto h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-base font-semibold">{benefit.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Create Bespoke Chatbots: Make Your Business Speak for Itself
          </h2>
          <button className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900">
            Consult With Experts
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Frameworks We Use to Develop AI Chatbots
            </h2>
            <p className="mt-4 text-slate-600">
              Our engineers use top frameworks to build secure, scalable, and
              high-performing chatbot assistants.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {frameworks.map((framework) => (
              <div
                key={framework.title}
                className="rounded-2xl border border-slate-100 p-6"
              >
                <img
                  src={normalizeAssetUrl(framework.icon)}
                  alt={framework.title}
                  className="h-14 w-14"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{framework.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {framework.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">
              We Follow the Chatbot Development Process Step By Step
            </h2>
            <p className="mt-4 text-slate-600">
              A proven workflow from ideation to launch ensures a high-performing
              chatbot delivery.
            </p>
            <div className="mt-6 space-y-4">
              {processSteps.map((step, index) => (
                <div key={step.title} className="rounded-2xl bg-white p-5 shadow-sm">
                  <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                    Step {index + 1}
                  </p>
                  <h3 className="mt-2 text-base font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow-sm">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/blockchain-images/ai-chatbot-development-services-our-chatbot-app-development.webp'
              )}
              alt="Chatbot development process"
              className="w-full rounded-xl"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              AI Chatbot Models We Have Expertise In
            </h2>
            <p className="mt-4 text-slate-600">
              We integrate advanced AI models, APIs, and frameworks to build
              intelligent, agentic chatbots for every business need.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-5">
            {aiModels.map((model) => (
              <div
                key={model.name}
                className="flex flex-col items-center rounded-2xl border border-slate-100 p-5 text-center"
              >
                <img
                  src={normalizeAssetUrl(model.icon)}
                  alt={model.name}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <p className="mt-3 text-sm font-semibold text-slate-700">
                  {model.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Tech Stack We Use in Chatbot Development Services
            </h2>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {techStackTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveStack(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  activeStack === tab.id
                    ? 'bg-emerald-400 text-slate-900'
                    : 'border border-white/20 text-white hover:border-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-5">
            {activeStackContent?.items.map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
              >
                <img
                  src={normalizeAssetUrl(item.icon)}
                  alt={item.label}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <p className="mt-3 text-xs font-semibold text-white">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Chatbot Development Team Hiring Model
            </h2>
            <p className="mt-4 text-slate-600">
              Choose a flexible engagement model that fits your timeline, scope,
              and budget with full control over resources and deliverables.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {hiringModels.map((model) => (
              <div key={model.title} className="rounded-2xl border border-slate-100 p-6">
                <img
                  src={normalizeAssetUrl(model.icon)}
                  alt={model.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{model.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {model.description}
                </p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  {model.bullets.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Ready to Experience Our Best-in-Class Chatbot Development Service
          </h2>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700">
            Partner With Us
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[0.9fr_1.1fr] md:items-start">
          <div>
            <h2 className="text-2xl font-semibold md:text-4xl">
              Why Infynex for Custom AI Chatbot Development?
            </h2>
            <p className="mt-4 text-slate-600">
              Partner with a trusted leader in AI chatbot development for smart,
              scalable, and business-ready solutions.
            </p>
            <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              Talk To Our Experts
            </button>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {whyChooseUs.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-100 p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(item.icon)}
                  alt={item.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-3 text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Our Clients' Views on Our Customized AI Chatbot Development Services
            </h2>
            <p className="mt-4 text-slate-600">
              We have delivered AI-enabled chatbot solutions that help businesses
              automate, engage, and scale. Here is what clients say.
            </p>
          </div>
          <div className="mt-10 overflow-hidden" ref={testimonialRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.name}
                  className="min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="rounded-3xl bg-white p-8 shadow-sm">
                    <div className="flex items-center gap-4">
                      <img
                        src={normalizeAssetUrl(testimonial.icon)}
                        alt={testimonial.name}
                        className="h-14 w-14 rounded-full"
                        loading="lazy"
                      />
                      <div>
                        <p className="text-lg font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="mt-6 text-sm text-slate-600">
                      {testimonial.quote}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FaqSectionButtonItems
        items={faqs}
        openIndex={openFaqIndex}
        onToggle={toggleFaqIndex}
        sectionClassName="bg-white"
        containerClassName="mx-auto max-w-6xl px-6 py-14"
        headerWrapperClassName="max-w-3xl"
        title="FAQs Related To AI Chatbot Development Services"
        titleTag="h2"
        titleClassName="text-2xl font-semibold md:text-4xl"
        subtitle="Answers to the most common questions about AI chatbot development."
        subtitleClassName="mt-4 text-slate-600"
        listClassName="mt-10 grid gap-6 md:grid-cols-2"
        itemButtonClassName="rounded-2xl border border-slate-100 p-5 text-left"
        headerClassName="flex items-center justify-between gap-4"
        questionClassName="text-sm font-semibold text-slate-800"
        iconClassName="text-lg text-emerald-500"
        answerClassName="mt-3 text-sm text-slate-600"
      />
    </div>
  )
}
