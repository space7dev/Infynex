'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { useAccordion } from '@/lib/useAccordion'
import FaqSectionCardItems from './FaqSectionCardItems'
import TrustedLogosStrip from './TrustedLogosStrip'

const ASSET_BASE = 'https://www.suffescom.com'
const normalizeAssetUrl = (url: string) =>
  url.replace('https://www.Infynex.com', ASSET_BASE)

const heroStats = [
  '40% Cost Reduction',
  'Instant Customer Delight',
  'Revenue-Driving Insights',
  'Effortless Scalability',
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

const proofStats = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/years-experience.svg',
    value: '13+',
    label: 'Years of Experience',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/countries.svg',
    value: '40+',
    label: 'Countries Served',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/expertise.svg',
    value: '250+',
    label: 'Development Experts',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/client.svg',
    value: '1000+',
    label: 'Happy Clients',
  },
]

const automationBenefits = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/efficiency.svg',
    title: '24/7 Efficiency',
    description:
      'AI agents work nonstop, managing customer queries and essential tasks without interruption.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/cost.svg',
    title: 'Lower Costs',
    description:
      'Automation can cut operational expenses by up to 40%, freeing budget for growth initiatives.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/real-time.svg',
    title: 'Real-Time Decisions',
    description:
      'AI delivers instant insights based on actual conversations, helping you act faster and smarter.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/customer.svg',
    title: 'Better Customer Support',
    description:
      'Instant, personalized replies improve satisfaction and loyalty for your customers.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/competitive-edge.svg',
    title: 'Competitive Edge',
    description:
      'Adopting AI early gives you a clear lead over manual process-driven competitors.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/scalability.svg',
    title: 'Easy Scalability',
    description:
      'AI expands with your business from startups to enterprises without extra staff.',
  },
]

const trustPoints = [
  'Strategic Business Understanding',
  'ROI Focused Approach',
  'Industry-Specific Expertise',
  'End-to-End Support',
  'Cutting-Edge Technology Stack',
  'Estimates impact metrics',
]

const serviceCards = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/consulting.svg',
    title: 'AI Agent Strategy Consulting',
    description:
      'Define scope, goals, and roadmap aligned with business outcomes and measurable ROI.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/development.svg',
    title: 'Custom AI Agent Development',
    description:
      'Build tailored AI agents and multi-agent systems to automate complex workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/integration.svg',
    title: 'AI Agent Integration',
    description:
      'Connect agents with CRM, ERP, and enterprise platforms for seamless automation.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/design.svg',
    title: 'AI Agent Design',
    description:
      'Branded UX and conversational design that feels natural and consistent.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/support.svg',
    title: 'AI Agent Support and Maintenance',
    description:
      '24/7 monitoring, updates, and performance improvements as your needs evolve.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/security.svg',
    title: 'AI Agent Security and Compliance',
    description:
      'Data protection and compliance aligned with regional and industry standards.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/optimization.svg',
    title: 'AI Agent Optimization',
    description:
      'Fine-tune algorithms and reduce latency to keep accuracy high.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-training.svg',
    title: 'AI Agent Training',
    description:
      'Behavioral models and learning loops for smarter decision making.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/services.svg',
    title: 'AI Agent-as-a-Service',
    description:
      'Ready-to-use agents managed by your team with a fast deployment path.',
  },
]

const industries = [
  {
    id: 'Healthcare',
    label: 'Healthcare',
    icon: 'https://www.Infynex.com/assets/img/icons/healthcare.svg',
    description:
      'AI agents improve patient engagement, automate records, and assist diagnostics.',
    bullets: [
      'Patient engagement assistants',
      'Medical record automation',
      'Diagnostic support agents',
      'Appointment scheduling bots',
      'Medication reminder agents',
      'Clinical workflow automation',
      'Symptom checker AI',
      'Insurance verification assistants',
    ],
  },
  {
    id: 'E-Commerce',
    label: 'E-Commerce',
    icon: 'https://www.Infynex.com/assets/img/icons/e-commerce.svg',
    description:
      'Personalized journeys, smarter operations, and higher conversions.',
    bullets: [
      'Product recommendation agents',
      'Customer support chatbots',
      'Order management automation',
      'Cart recovery agents',
      'Inventory forecasting bots',
      'Personalized marketing AI',
      'Return and exchange automation',
      'Seller onboarding assistants',
    ],
  },
  {
    id: 'Education',
    label: 'Education',
    icon: 'https://www.Infynex.com/assets/img/icons/education.svg',
    description:
      'Personalized learning with faster teacher support and automation.',
    bullets: [
      'Virtual teaching assistants',
      'Personalized learning bots',
      'Student performance trackers',
      'AI training assistance',
      'Assessment grading bots',
      'Course recommendation AI',
      'Attendance automation agents',
      'LMS workflow automation',
    ],
  },
  {
    id: 'Customer-Service',
    label: 'Customer Service',
    icon: 'https://www.Infynex.com/assets/img/icons/customer.svg',
    description:
      '24/7 support, faster resolution, and consistent experiences.',
    bullets: [
      'AI chatbot development',
      'Ticket triage agents',
      'Self-service support assistants',
      'Sentiment analysis bots',
      'Multilingual support AI',
      'Call center automation',
      'Conversation summarization agents',
      'Knowledge-base automation',
    ],
  },
  {
    id: 'Legal-Compliance',
    label: 'Legal & Compliance',
    icon: 'https://www.Infynex.com/assets/img/icons/compliance.svg',
    description:
      'Reduce risk with legal research, monitoring, and audits.',
    bullets: [
      'Contract review bots',
      'Compliance monitoring agents',
      'Legal research assistants',
      'Document comparison AI',
      'Policy update trackers',
      'Risk assessment automation',
      'Case summarization bots',
      'E-discovery agents',
    ],
  },
  {
    id: 'Operations-Logistics',
    label: 'Operations & Logistics',
    icon: 'https://www.Infynex.com/assets/img/icons/logistics.svg',
    description:
      'Optimize supply chains and improve delivery accuracy.',
    bullets: [
      'Route optimization agents',
      'Inventory management bots',
      'Warehouse automation assistants',
      'Delivery tracking AI',
      'Freight cost prediction bots',
      'Order fulfillment automation',
      'Demand forecasting agents',
      'Supplier communication assistants',
    ],
  },
  {
    id: 'Security',
    label: 'Security',
    icon: 'https://www.Infynex.com/assets/img/icons/security.svg',
    description:
      'Detect threats, prioritize alerts, and automate protection.',
    bullets: [
      'Threat detection bots',
      'Incident response agents',
      'Monitoring and surveillance assistants',
      'Access control automation',
      'Fraud detection AI',
      'Risk scoring bots',
      'Cyber hygiene checkers',
      'Alert prioritization agents',
    ],
  },
  {
    id: 'Sales-Marketing',
    label: 'Sales & Marketing',
    icon: 'https://www.Infynex.com/assets/img/icons/marketing.svg',
    description:
      'Drive pipeline growth with automation and insights.',
    bullets: [
      'Lead qualification agents',
      'Campaign optimization bots',
      'AI voice sales assistant',
      'CRM data enrichment bots',
      'Customer segmentation AI',
      'Predictive sales forecasting',
      'Email automation agents',
      'Social media engagement bots',
    ],
  },
  {
    id: 'Human-Resources',
    label: 'Human Resources',
    icon: 'https://www.Infynex.com/assets/img/icons/hr.svg',
    description:
      'Automate hiring, employee support, and insights.',
    bullets: [
      'Recruitment automation agents',
      'Employee HR assistants',
      'Workforce analytics bots',
      'Resume screening AI',
      'Interview scheduling bots',
      'New-hire onboarding agents',
      'Policy FAQ automation',
      'Performance insights agents',
    ],
  },
  {
    id: 'Retail',
    label: 'Retail',
    icon: 'https://www.Infynex.com/assets/img/icons/retail.svg',
    description:
      'Smarter inventory and better experiences at scale.',
    bullets: [
      'Customer service chatbots',
      'Inventory refill agents',
      'Return and exchange automation',
      'Pricing optimization AI',
      'Shelf management assistants',
      'Visual search agents',
      'Loyalty program bots',
      'Store operations automation',
    ],
  },
  {
    id: 'Finance-Accounting',
    label: 'Finance & Accounting',
    icon: 'https://www.Infynex.com/assets/img/icons/finance.svg',
    description:
      'Automate finance workflows with secure AI agents.',
    bullets: [
      'Automated expense classification',
      'Fraud detection agents',
      'Financial reconciliation bots',
      'Invoice processing AI',
      'Budget forecasting agents',
      'Tax compliance assistants',
      'Accounts payable automation',
      'Audit support bots',
    ],
  },
  {
    id: 'Manufacturing-Supply-Chain',
    label: 'Manufacturing & Supply Chain',
    icon: 'https://www.Infynex.com/assets/img/icons/supply-chain.svg',
    description:
      'Improve production cycles and predictive maintenance.',
    bullets: [
      'Predictive maintenance agents',
      'Supply planning agents',
      'Quality inspection automation',
      'Production scheduling AI',
      'Equipment monitoring bots',
      'Factory workflow automation',
      'Resource allocation agents',
      'Delivery route forecasting',
    ],
  },
  {
    id: 'Information-Technology',
    label: 'Information Technology',
    icon: 'https://www.Infynex.com/assets/img/icons/technology.svg',
    description:
      'Automate IT support, monitoring, and DevOps tasks.',
    bullets: [
      'IT helpdesk assistants',
      'System monitoring agents',
      'Automated incident response bots',
      'Code review helpers',
      'Debugging automation bots',
      'Release management AI',
      'Cloud cost optimization agents',
      'Configuration management assistants',
    ],
  },
  {
    id: 'Real-Estate',
    label: 'Real Estate',
    icon: 'https://www.Infynex.com/assets/img/icons/real-estate.svg',
    description:
      'Streamline property management and lead response.',
    bullets: [
      'Virtual property assistants',
      'Tenant management bots',
      'Lead qualification agents',
      'Document verification AI',
      'Rental payment automation',
      'Property search assistants',
      'Maintenance request bots',
      'Real estate analytics AI',
    ],
  },
  {
    id: 'Energy-Utilities',
    label: 'Energy & Utilities',
    icon: 'https://www.Infynex.com/assets/img/icons/energy.svg',
    description:
      'Predict outages and optimize energy operations.',
    bullets: [
      'Smart grid monitoring',
      'Energy forecasting agents',
      'Incident detection bots',
      'Consumption pattern analysis',
      'Renewable energy planning AI',
      'Outage prediction bots',
      'Utility billing automation',
      'Asset maintenance agents',
    ],
  },
  {
    id: 'Insurance',
    label: 'Insurance',
    icon: 'https://www.Infynex.com/assets/img/icons/insurance.svg',
    description:
      'Accelerate claims and improve policy servicing.',
    bullets: [
      'Claims processing agents',
      'Fraud assessment bots',
      'Policy recommendation assistants',
      'Automated underwriting AI',
      'Customer inquiry bots',
      'Document validation agents',
      'Renewal reminder automation',
      'Risk scoring engines',
    ],
  },
  {
    id: 'Media-Entertainment',
    label: 'Media & Entertainment',
    icon: 'https://www.Infynex.com/assets/img/icons/entertainment.svg',
    description:
      'Automate content workflows and audience insights.',
    bullets: [
      'Content recommendation engines',
      'Audience engagement bots',
      'Media workflow automation',
      'Script generation AI',
      'Social listening agents',
      'Ad performance optimization',
      'Content tagging bots',
      'Rights management automation',
    ],
  },
  {
    id: 'Travel-Hospitality',
    label: 'Travel & Hospitality',
    icon: 'https://www.Infynex.com/assets/img/icons/travel.svg',
    description:
      'Instant support and personalized planning.',
    bullets: [
      'Travel planning assistants',
      'Reservation management bots',
      'Guest experience agents',
      'Itinerary recommendation AI',
      'Feedback management bots',
      'Price prediction agents',
      'Check-in automation assistants',
      'Hotel operations automation',
    ],
  },
  {
    id: 'Agriculture',
    label: 'Agriculture',
    icon: 'https://www.Infynex.com/assets/img/icons/agriculture.svg',
    description:
      'Data-driven farming with automated monitoring.',
    bullets: [
      'Crop health monitoring agents',
      'Weather prediction systems',
      'Supply chain coordination bots',
      'Smart irrigation automation',
      'Yield forecasting AI',
      'Pest detection assistants',
      'Soil quality monitoring bots',
      'Farm equipment tracking agents',
    ],
  },
  {
    id: 'Telecommunications',
    label: 'Telecommunications',
    icon: 'https://www.Infynex.com/assets/img/icons/telecommunications.svg',
    description:
      'Network performance and customer automation.',
    bullets: [
      'Network optimization agents',
      'Customer service chatbots',
      'Fraud detection assistants',
      'Outage prediction bots',
      'Billing automation AI',
      'Usage analytics agents',
      'Device configuration bots',
      'Retention optimization assistants',
    ],
  },
  {
    id: 'Government-Public-Services',
    label: 'Government & Public Services',
    icon: 'https://www.Infynex.com/assets/img/icons/government.svg',
    description:
      'Faster public services with compliant AI agents.',
    bullets: [
      'Citizen service assistants',
      'Document processing agents',
      'Compliance monitoring systems',
      'Permit application bots',
      'Public data analysis AI',
      'Complaint management assistants',
      'Resource allocation bots',
      'Emergency response automation',
    ],
  },
]

const agentTypes = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/simple-reflex.svg',
    title: 'Simple Reflex Agents',
    description:
      'Rule-based agents that respond to specific triggers and automate basic tasks.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/model-based.svg',
    title: 'Model-Based Reflex Agents',
    description:
      'Context-aware agents that consider past and present data for better decisions.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/utility-based.svg',
    title: 'Utility-Based Agents',
    description:
      'Evaluate outcomes to optimize decisions in uncertain environments.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/learning-agent.svg',
    title: 'Learning Agents',
    description:
      'Continuously improve with feedback loops and training data.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/logic-based.svg',
    title: 'Logic-Based Agents',
    description:
      'Structured reasoning agents for complex inference and rules.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/autonomous-agents.svg',
    title: 'Autonomous Agents',
    description:
      'Self-driven agents that execute sophisticated tasks with minimal oversight.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai.svg',
    title: 'AI Copilots',
    description:
      'Assist teams with recommendations, automation, and productivity boosts.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-assistant.svg',
    title: 'Intelligent Virtual Assistants',
    description:
      'Context-aware conversational agents across channels and workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-agent.svg',
    title: 'Hierarchical Agents',
    description:
      'Coordinated multi-agent systems for complex workflow orchestration.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/crypto.svg',
    title: 'Crypto AI Agents',
    description:
      'Blockchain-enabled agents for trading, portfolio, and DeFi operations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/maintenance.svg',
    title: 'Predictive Maintenance Agents',
    description:
      'Monitor equipment and predict failures to reduce downtime.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/quality-assurance.svg',
    title: 'Quality Assurance Agents',
    description:
      'Automated testing and monitoring for consistent software quality.',
  },
]

const portfolioItems = [
  {
    name: 'Aragon',
    category: 'AI Tool',
    description:
      'AI-powered headshot generator for fast, studio-quality results.',
    image: 'https://www.Infynex.com/assets/img/portfolio/aragon-banner.webp',
  },
  {
    name: 'MyCoach AI',
    category: 'AI Tool',
    description:
      'Automation platform for fitness and nutrition coaches with smart messaging.',
    image: 'https://www.Infynex.com/assets/img/portfolio/mycoachai-banner.webp',
  },
  {
    name: 'Kai',
    category: 'AI Tool',
    description:
      'Healthcare conversation analytics that reveal hidden insights.',
    image: 'https://www.Infynex.com/assets/img/portfolio/kai-banner.webp',
  },
  {
    name: 'UniBee',
    category: 'AI Tool',
    description:
      'Financial analytics for subscription businesses with actionable insights.',
    image: 'https://www.Infynex.com/assets/img/portfolio/unibee-banner.webp',
  },
]

const automationSteps = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/data.svg',
    title: 'Data Collection and Perception',
    description:
      'Agents gather inputs from sensors, APIs, users, and integrated systems.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/intelligent-processing.svg',
    title: 'Intelligent Processing',
    description:
      'NLP and ML models decode context and intent to generate insights.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/decision-making.svg',
    title: 'Decision-Making Engine',
    description:
      'Agents evaluate options and select optimal actions aligned to goals.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/autonomous.svg',
    title: 'Autonomous Execution',
    description:
      'Tasks are executed instantly, from responses to complex workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/learning.svg',
    title: 'Continuous Learning',
    description:
      'Feedback loops improve accuracy and performance after each interaction.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/logistics.svg',
    title: 'Adaptation and Evolution',
    description:
      'Agents evolve with market changes to stay efficient and relevant.',
  },
]

const complianceTabs = [
  {
    id: 'Global-AI-Ethics-Compliance',
    label: 'Global AI Ethics & Compliance',
    description:
      'Enterprise AI agent development aligned with global AI governance frameworks.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/wcag.webp',
        title: 'WCAG',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/unesco-ai-compliance-logo.svg',
        title: 'UNESCO AI Ethics',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/gpai.svg',
        title: 'GPAI',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/eu-ai-act-compliance-logo.svg',
        title: 'EU AI Act',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/oecd-compliance-logo.svg',
        title: 'OECD AI Principles',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/nist-ai-rmf-compliance-logo.svg',
        title: 'NIST AI RMF',
      },
    ],
  },
  {
    id: 'Data-Protection-Standards',
    label: 'Data Protection Standards',
    description:
      'Powerful data protection measures aligned with global privacy standards.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/gdpr.svg',
        title: 'GDPR',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/hipaa-compliance.webp',
        title: 'HIPAA',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/ccpa.svg',
        title: 'CCPA',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/pdpa.webp',
        title: 'PDPA',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/soc2.svg',
        title: 'SOC 2 Type II',
      },
    ],
  },
  {
    id: 'Trusted-Security-Frameworks',
    label: 'Trusted Security Frameworks',
    description:
      'Security frameworks embedded into our AI agent development process.',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/iso-27018-compliance-logo.svg',
        title: 'ISO/IEC 27001',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/iso-iec-42001-compliance-logo.svg',
        title: 'ISO/IEC 42001',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/pci-dss-icon-grey.svg',
        title: 'PCI DSS',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/nist-csf-1.svg',
        title: 'NIST Cybersecurity Framework',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/zero-trust-architecture.webp',
        title: 'Zero Trust Architecture',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/encryption-grey.svg',
        title: 'End-to-End Encryption',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/security-grey.svg',
        title: 'Regular Security Audits',
      },
    ],
  },
]

const solutionOptions = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/white-label.svg',
    title: 'AI Agent Development on White Label',
    description:
      'Launch ready-made AI agents with instant branding and rapid deployment.',
    bullets: [
      'Fastest way to go live',
      'Fully brandable interface',
      'Reduced upfront investment',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/low-code.svg',
    title: 'No-Code AI Agent Development',
    description:
      'Build and scale AI agents without heavy technical complexity.',
    bullets: [
      'Ideal for non-technical teams',
      'Easy workflow updates',
      'Rapid experimentation',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/solutions.svg',
    title: 'AI Agent Clone Solutions',
    description:
      'Clone top-performing platforms to accelerate time-to-market.',
    bullets: [
      'Lower development risks',
      'Faster launch',
      'Cost-efficient delivery',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-agent.svg',
    title: 'Custom AI Agent Development',
    description:
      'Fully tailored AI agents for your unique workflows and data models.',
    bullets: [
      '100% bespoke logic',
      'Scalable architecture',
      'Advanced AI behavior modeling',
    ],
  },
]

const techStackTabs = [
  {
    id: 'Programming-Languages',
    label: 'Programming Languages',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/scala.webp',
        title: 'Scala',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-development-java.svg',
        title: 'Java',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-golang-icon.svg',
        title: 'Golang',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/blockchain-development-python.svg',
        title: 'Python',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/c++-tech-icon.svg',
        title: 'C++',
      },
    ],
  },
  {
    id: 'Mobility',
    label: 'Mobility',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/android.svg',
        title: 'Android',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/ios.svg',
        title: 'iOS',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/cross-platform.svg',
        title: 'Cross Platform',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/python-tech-icon.svg',
        title: 'Python',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/windows.webp',
        title: 'Windows',
      },
    ],
  },
  {
    id: 'Frameworks',
    label: 'Frameworks',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/nodejs-tech-icon.svg',
        title: 'Node.js',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-angular-icon.svg',
        title: 'AngularJS',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/dapp-service-vuejs-icon.svg',
        title: 'Vue.js',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/react-js-tech-icon.svg',
        title: 'React.js',
      },
    ],
  },
  {
    id: 'Cloud',
    label: 'Cloud',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/custom-blockchain-development-service-aws.svg',
        title: 'AWS',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/vr-software-development-microsoft-azure.svg',
        title: 'Microsoft Azure',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/google-cloud-icon.svg',
        title: 'Google Cloud',
      },
    ],
  },
  {
    id: 'SDK',
    label: 'SDK',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/blog-images/web3-elearning-app-solution-kotlin.webp',
        title: 'Kotlin',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blog-images/web3-elearning-app-solution-ionic.webp',
        title: 'Ionic',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/xamrin.webp',
        title: 'Xamarin',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-react-native.webp',
        title: 'React Native',
      },
    ],
  },
  {
    id: 'Hardware',
    label: 'Hardware',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/raspberry.webp',
        title: 'Raspberry',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/arduino.webp',
        title: 'Arduino',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/beaglebone.webp',
        title: 'BeagleBone',
      },
    ],
  },
  {
    id: 'OCR',
    label: 'OCR',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/tesseract.webp',
        title: 'Tesseract',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/metaverse-platform-development-tensor-flow.webp',
        title: 'TensorFlow',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/copyfish.webp',
        title: 'CopyFish',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/abby-finereader.webp',
        title: 'ABBY Finereader',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/ocr-space.webp',
        title: 'OCR.Space',
      },
    ],
  },
  {
    id: 'Data',
    label: 'Data',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/apache-hadoop.webp',
        title: 'Apache Hadoop',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/apache-kafka.svg',
        title: 'Apache Kafka',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/opentsdb.webp',
        title: 'OpenTSDB',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/elasticsearch.svg',
        title: 'Elasticsearch',
      },
    ],
  },
  {
    id: 'NLP',
    label: 'NLP',
    items: [
      {
        icon: 'https://www.Infynex.com/assets/img/icons/wit-ai.webp',
        title: 'Wit.ai',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/blockchain-images/chatbot-development-services-dialogflow.webp',
        title: 'Dialogflow',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/amazon-lex.webp',
        title: 'Amazon Lex',
      },
      {
        icon: 'https://www.Infynex.com/assets/img/icons/watsonx-assistant.webp',
        title: 'watsonx Assistant',
      },
    ],
  },
]

const processSteps = [
  {
    number: '01',
    title: 'Analyzing Business Goals',
    description:
      'Align AI agent development with business priorities and measurable outcomes.',
    bullets: [
      'Identify automation opportunities',
      'Define success criteria',
      'Align AI with core goals',
    ],
  },
  {
    number: '02',
    title: 'Requirement Gathering',
    description:
      'Collect workflows, expectations, and technical requirements.',
    bullets: [
      'Document functional needs',
      'Validate with stakeholders',
      'Set realistic timelines',
    ],
  },
  {
    number: '03',
    title: 'Designing User Experience',
    description:
      'Design workflows and interfaces for intuitive agent interactions.',
    bullets: [
      'Create UI/UX prototypes',
      'Map agent responses',
      'Optimize engagement',
    ],
  },
  {
    number: '04',
    title: 'Data Preparation & Management',
    description:
      'Prepare datasets to boost accuracy and agent performance.',
    bullets: [
      'Curate quality datasets',
      'Apply data governance',
      'Structure consistent data',
    ],
  },
  {
    number: '05',
    title: 'Agile Development & Integration',
    description:
      'Build and integrate AI agents in iterative sprints.',
    bullets: [
      'Connect AI models to platforms',
      'Ensure scalability',
      'Run continuous feedback loops',
    ],
  },
  {
    number: '06',
    title: 'Testing & Quality Assurance',
    description:
      'Validate accuracy, responsiveness, and reliability.',
    bullets: [
      'Functional and performance tests',
      'Scenario-based testing',
      'Bug fixes before launch',
    ],
  },
  {
    number: '07',
    title: 'Deployment & Continuous Support',
    description:
      'Deploy smoothly and optimize post-launch.',
    bullets: [
      'Release with minimal disruption',
      'Monitor performance',
      'Provide ongoing updates',
    ],
  },
]

const evidenceStats = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/productivity.svg',
    title: '40% Productivity Boost',
    description:
      'AI agents handle repetitive tasks so teams focus on strategic work.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/enterprise.svg',
    title: 'AI Agent Adoption to Hit 75% by 2026',
    description:
      'Businesses adopt agents for faster decisions and automated workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/reduction.svg',
    title: 'Customer Service Cost Reduction of 35%',
    description:
      'AI agent solutions reduce response time and support costs.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/data.svg',
    title: 'Fast Data Processing',
    description:
      'Agents analyze data at 10,000x speed for real-time insights.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/market.svg',
    title: '50% Faster Go-To-Market',
    description:
      'AI agents accelerate development and product launches.',
  },
]

const workflowBenefits = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/automating-routine.svg',
    title: 'Automating Routine Operations',
    description:
      'Agents automate daily operations so teams focus on core initiatives.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/customer-interaction.svg',
    title: 'Enhancing Customer Interactions',
    description:
      'AI agents respond quickly and keep conversations consistent.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/workflow.svg',
    title: 'Streamlining Workflows',
    description:
      'Reduce manual effort and improve process flow.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/decision-making.svg',
    title: 'Supporting Decision-Making',
    description:
      'Agents learn from data and make informed recommendations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/coding.svg',
    title: 'Code Generation and Verification',
    description:
      'Automated code generation and bug verification speed delivery.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/audits.svg',
    title: 'Audits and Reviews',
    description:
      'Analyze datasets and surface compliance insights automatically.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/skills.svg',
    title: 'Skill Improvement',
    description:
      'Agents coach teams with up-to-date guidance and workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/content.svg',
    title: 'Content Creation',
    description:
      'Generate reports, knowledge articles, and marketing content.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/data.svg',
    title: 'Data Visualization',
    description:
      'Transform data into actionable charts and dashboards.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/modal.svg',
    title: 'Multimodal Understanding',
    description:
      'Process text, images, audio, and video together.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/feedback.svg',
    title: 'Feedback Loops for Learning',
    description:
      'Improve performance over time with iterative learning.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/analysis.svg',
    title: 'Research and Analysis',
    description:
      'Automate competitive research and market intelligence.',
  },
]

const caseStudies = [
  {
    title: 'Challenge: Inconsistent Decision-Making',
    issue:
      'Teams made decisions from partial data, leading to conflicts and lost opportunities.',
    solution:
      'AI agents for data analysis unified insights across departments in real time.',
    results: [
      '60% better decision precision',
      '35% less time for strategic planning',
      '50% reduction in conflicting decisions',
    ],
    image: 'https://www.Infynex.com/assets/img/web-img/ai-agent-decision-making.webp',
  },
  {
    title: 'Challenge: Difficulty Scaling Operations',
    issue:
      'Scaling operations required more staff and resources, slowing growth.',
    solution:
      'Enterprise AI agents automated scaling without added headcount.',
    results: [
      '80% cut in scaling costs',
      '65% faster market expansion',
      '70% improvement in operational flexibility',
    ],
    image: 'https://www.Infynex.com/assets/img/web-img/ai-agent-difficulty-operations.webp',
  },
  {
    title: 'Challenge: High Operational Costs',
    issue:
      'Manual processes consumed 60% of team time with low ROI tasks.',
    solution:
      'AI agents automated data entry, scheduling, and reporting.',
    results: [
      '40% reduction in operational expenses',
      '55% decrease in manual processing time',
      '30% improvement in employee productivity',
    ],
    image: 'https://www.Infynex.com/assets/img/web-img/ai-agent-operational-costs.webp',
  },
  {
    title: 'Challenge: Slow Customer Response Times',
    issue:
      'Support queues created delays and impacted brand reputation.',
    solution:
      'Custom AI agents delivered 24/7 support with human escalation.',
    results: [
      '75% faster average reply time',
      '90% customer issue resolution rate',
      '45% higher customer satisfaction ratings',
    ],
    image: 'https://www.Infynex.com/assets/img/web-img/ai-agent-customer-response.webp',
  },
]

const costFactors = [
  'Advanced automation use',
  'Multi-model support',
  'Omnichannel communication',
  'Team structure size',
  'System integration needs',
]

const costSavings = [
  'White-label platforms',
  'AI agent MVPs',
  'Remote developer teams',
  'Pre-built chatbot scripts',
  'Third-party APIs',
]

const differentiators = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/market-research.svg',
    title: 'Human-like Intelligence',
    description:
      'NLP-powered interactions with human-centered responses.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/analysis.svg',
    title: 'Customizability',
    description:
      'Tailor AI agents to your workflows and operational expectations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/customer.svg',
    title: 'Continuous Learning Capabilities',
    description:
      'Agents improve with every interaction for better accuracy.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/features.svg',
    title: 'Robust Security Features',
    description:
      'Encryption and compliance built in from day one.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/scalability.svg',
    title: 'Reliable and Scalable',
    description:
      'Architecture that grows with your business operations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/tech-partner.svg',
    title: 'Defined Multi-Agent Workflow',
    description:
      'Structured coordination between multiple AI agents.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/capabilities.svg',
    title: 'Advanced LLM Capabilities',
    description:
      'Large language models for deeper context understanding.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/conversation.svg',
    title: 'Tailored Conversation Models',
    description:
      'Custom flows designed for your use cases and channels.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/context-aware.svg',
    title: 'Context-Aware Intelligence',
    description:
      'Agents remember history for smarter responses.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/emotional.svg',
    title: 'Emotional Intelligence Integration',
    description:
      'Sentiment-aware responses for empathetic support.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/problem-solving.svg',
    title: 'Proactive Problem Solving',
    description:
      'Agents detect issues and recommend next steps.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/architecture.svg',
    title: 'Seamless Integration Architecture',
    description:
      'Integrations across CRM, ERP, and enterprise systems.',
  },
]

const phaseHighlights = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/development.svg',
    title: 'Agile Development Methodology',
    description:
      'Flexible iterations and rapid feedback loops for adaptive delivery.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/testing.svg',
    title: 'Thorough Testing for Quality',
    description:
      'Accuracy, reliability, and safety validation before deployment.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/launch.svg',
    title: 'Support and Improvement After Launch',
    description:
      'Monitoring and updates to keep agents delivering value.',
  },
]

const whyChoose = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/expertise.svg',
    title: 'Expertise in Cutting-edge AI Technologies',
    description:
      'We use the latest AI tools, LLMs, and automation frameworks.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/scalability.svg',
    title: 'Scalable & Secure AI Architecture',
    description:
      'Infrastructure that scales with enterprise-grade security protocols.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/customize.svg',
    title: 'Customized Solutions',
    description:
      'AI agents tailored to your processes, goals, and challenges.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/support.svg',
    title: 'Ongoing Support & Maintenance',
    description:
      'Continuous monitoring, enhancements, and optimization.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/industry.svg',
    title: 'Industry-Specific AI Solutions',
    description:
      'Solutions aligned with industry standards and regulations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/proven-track-record-of-success.svg',
    title: 'Proven Track Record',
    description:
      'Trusted by clients across industries for AI delivery excellence.',
  },
]

const testimonials = [
  {
    quote:
      'The AI agent they built boosted our recommendations and customer support. Team was easy to work with and delivered exactly what we wanted.',
    name: 'Mason Clarke',
    role: 'Product Lead, Trendora',
    avatar: 'https://www.Infynex.com/assets/img/icons/ai-agent.webp',
  },
  {
    quote:
      'These guys nailed our AI agent. Onboarding and compliance got smoother fast.',
    name: 'Eunice AI',
    role: 'CTO, Chatsinai',
    avatar: 'https://www.Infynex.com/assets/img/icons/chatsinai.webp',
  },
  {
    quote:
      'Infynex AI agents simplified our workflows and improved delivery speed.',
    name: 'Amanda',
    role: 'CTO, Helpmom.net',
    avatar: 'https://www.Infynex.com/assets/img/icons/helpmom.webp',
  },
]

const faqs = [
  {
    question: 'What are the benefits of using AI agents in my business?',
    answer:
      'AI agents simplify operations and deliver better customer experiences while handling standard tasks so teams can focus on strategy.',
  },
  {
    question: 'How do you develop intelligent agents similar to AutoGPT?',
    answer:
      'We use advanced learning models and training methods to build specialized agents for specific tasks.',
  },
  {
    question:
      'What AI agent frameworks do you use to build robust generative AI agents?',
    answer:
      'We use frameworks like TensorFlow and PyTorch plus custom solutions for secure, scalable agents.',
  },
  {
    question: 'How do you ensure the security and integrity of AI agents?',
    answer:
      'We implement secure development protocols from day one and execute periodic audits.',
  },
  {
    question: 'How do you ensure the quality and performance of your AI agents?',
    answer:
      'Quality assurance includes complete testing and performance analysis across the lifecycle.',
  },
  {
    question: 'How long does it take to build an AI agent?',
    answer:
      'Timelines depend on complexity, but we work for fast and reliable results.',
  },
  {
    question: 'What capabilities do the AI agents developed by your team possess?',
    answer:
      'Our AI agents automate workflows, enhance information exchange, and deliver data-backed conclusions.',
  },
  {
    question: 'Do I need technical expertise to implement AI agents in my business?',
    answer:
      'No. Our team assists with implementation to ensure a seamless transition.',
  },
  {
    question: 'How much does AI agent development cost?',
    answer:
      'AI agent development typically starts around $10,000 and varies with features and integrations.',
  },
  {
    question: 'Do your AI agents connect with existing software or CRM?',
    answer:
      'Yes. We integrate with CRMs, ERPs, APIs, databases, and custom systems.',
  },
]

const sectionHeading = (title: string, subtitle?: string, dark = false) => (
  <div className="text-center">
    <h2
      className={`text-3xl font-semibold md:text-4xl ${
        dark ? 'text-white' : 'text-slate-900'
      }`}
    >
      {title}
    </h2>
    {subtitle ? (
      <p
        className={`mt-3 text-base md:text-lg ${
          dark ? 'text-slate-200' : 'text-slate-600'
        }`}
      >
        {subtitle}
      </p>
    ) : null}
  </div>
)

export default function AiAgentDevelopmentPage() {
  const [industryTab, setIndustryTab] = useState(industries[0].id)
  const [complianceTab, setComplianceTab] = useState(complianceTabs[0].id)
  const [techTab, setTechTab] = useState(techStackTabs[0].id)
  const { openIndex: openFaq, toggleIndex: toggleFaq } = useAccordion(0)

  const [portfolioRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 4500, stopOnInteraction: false })]
  )
  const [caseStudyRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5000, stopOnInteraction: false })]
  )
  const [testimonialRef] = useEmblaCarousel(
    { loop: true },
    [Autoplay({ delay: 5500, stopOnInteraction: false })]
  )

  const activeIndustry = useMemo(
    () => industries.find((industry) => industry.id === industryTab),
    [industryTab]
  )

  const activeCompliance = useMemo(
    () => complianceTabs.find((tab) => tab.id === complianceTab),
    [complianceTab]
  )

  const activeTech = useMemo(
    () => techStackTabs.find((tab) => tab.id === techTab),
    [techTab]
  )

  return (
    <main className="bg-white text-slate-900  ">
      <section className="relative overflow-hidden bg-slate-950 text-white pb-[35px]" >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.25),_transparent_55%)]" />
        <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-24">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-sky-300">
              Custom AI Agent Development Services
            </p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
              AI Agent Development Company
            </h1>
            <p className="mt-5 text-base text-slate-200 md:text-lg">
              We build intelligent AI agents using tools like AutoGen Studio and
              Crew AI. Our experts deliver autonomous systems that transform how
              businesses operate, with measurable efficiency and ROI.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-200 sm:grid-cols-2 pb-[30px]">
              {heroStats.map((stat) => (
                <li
                  key={stat}
                  className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {stat}
                </li>
              ))}
            </ul>
            <Link
              href="/contact"
              className="mt-8 rounded-full bg-sky-400 px-6 py-3 text-sm font-semibold text-slate-950"
            >
              Talk To Our Experts
            </Link>
          </div>
          <div className="relative">
            <div className="absolute -right-8 top-10 h-24 w-24 rounded-full bg-sky-400/20 blur-2xl" />
            <div className="absolute -left-8 bottom-8 h-32 w-32 rounded-full bg-indigo-500/20 blur-2xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/web-img/ai-agent-dev.webp'
                )}
                alt="AI Agent Development Company"
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
        sectionClassName="bg-white"
        containerClassName="mx-auto max-w-6xl px-4 py-8"
        listClassName="flex flex-wrap items-center justify-center gap-6"
        imageClassName="h-10 object-contain"
      />

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'We Have a Proven Track Record in Delivering Exceptional Custom AI Agent Development Services'
          )}
          <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/web-img/ai-agent-stats.webp'
                )}
                alt="Custom AI Agent Development Services"
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
            <ul className="grid gap-4 sm:grid-cols-2">
              {proofStats.map((stat) => (
                <li
                  key={stat.label}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <img
                      src={normalizeAssetUrl(stat.icon)}
                      alt={stat.label}
                      className="h-12 w-12"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'AI Agents: The Automation Revolution Every Business Needs',
            'AI agents bring intelligent automation to organizations that want to stay competitive.',
            true
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {automationBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <img
                  src={normalizeAssetUrl(benefit.icon)}
                  alt={benefit.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Accelerate Your Business With Intelligent Agents That Never Slow
              Down
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              AI-driven automation solutions reduce bottlenecks and free teams
              for strategic work.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Get Started Now
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 md:grid-cols-[0.9fr_1.1fr]">
          <img
            src={normalizeAssetUrl(
              'https://www.Infynex.com/assets/img/web-img/ai-agent-trusted.webp'
            )}
            alt="Trusted AI Agent Development Company"
            className="w-full rounded-3xl border border-slate-200 object-cover"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Trusted AI Agent Development Company Delivering Measurable ROI
            </h2>
            <p className="mt-4 text-sm text-slate-600">
              We deliver measurable business impact by automating complex
              workflows and optimizing operations.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3"
                >
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'We Offer Scalable AI Agent Development Services',
            'We build smart custom AI agents that help your business work smarter, faster, and more efficiently.'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {serviceCards.map((card) => (
              <div
                key={card.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(card.icon)}
                  alt={card.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 pb-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-900 px-6 py-10 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Start Building Your AI Agents with Custom AI Agent Development
              Company
            </h2>
            <p className="mt-3 text-sm text-slate-200 md:text-base">
              From multimodal agents to robust automation, our team delivers
              tailored solutions.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Schedule a Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'AI Agents We Develop for Multiple Industries',
            'Our AI agents automate workflows across every sector.'
          )}
          <div className="mt-10 grid gap-8 lg:grid-cols-[0.45fr_0.55fr]">
            <div className="space-y-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  type="button"
                  onClick={() => setIndustryTab(industry.id)}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition ${
                    industryTab === industry.id
                      ? 'border-sky-500 bg-sky-50 text-sky-700'
                      : 'border-slate-200 bg-white text-slate-600'
                  }`}
                >
                  {industry.label}
                  <span className="text-xs">+</span>
                </button>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              {activeIndustry ? (
                <>
                  <img
                    src={normalizeAssetUrl(activeIndustry.icon)}
                    alt={activeIndustry.label}
                    className="h-12 w-12"
                    loading="lazy"
                  />
                  <h3 className="mt-4 text-xl font-semibold text-slate-900">
                    {activeIndustry.label}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {activeIndustry.description}
                  </p>
                  <ul className="mt-4 grid gap-2 text-sm text-slate-700 sm:grid-cols-2">
                    {activeIndustry.bullets.map((bullet) => (
                      <li
                        key={bullet}
                        className="rounded-xl border border-slate-200 bg-white px-3 py-2"
                      >
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-indigo-700 to-sky-600 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Looking Forward to Automating Your Process Through AI-Powered
              Agents
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Talk to our experts to move forward with AI automation.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Talk To Our Experts
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Explore the Most Powerful Digital AI Agents We Develop for Your Business',
            'We build intelligent agents tailored to business needs.',
            true
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {agentTypes.map((agent) => (
              <div
                key={agent.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <img
                  src={normalizeAssetUrl(agent.icon)}
                  alt={agent.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {agent.title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  {agent.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Bring Intelligent Automation Into Every Corner of Your Business
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Optimize workflows and predict needs across operations.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Schedule A Demo
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Our Portfolio',
            "Explore how we've transformed businesses with AI solutions."
          )}
          <div className="mt-8 overflow-hidden" ref={portfolioRef}>
            <div className="flex">
              {portfolioItems.map((item) => (
                <div
                  key={item.name}
                  className="min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="grid gap-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 md:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <h3 className="text-2xl font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <p className="mt-1 text-sm text-slate-500">
                        {item.category}
                      </p>
                      <p className="mt-4 text-sm text-slate-600">
                        {item.description}
                      </p>
                      <button className="mt-6 rounded-full bg-slate-900 px-5 py-2 text-sm font-semibold text-white">
                        Get Free Consultation
                      </button>
                    </div>
                    <img
                      src={normalizeAssetUrl(item.image)}
                      alt={item.name}
                      className="w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'The Science of Automation: How AI Agents We Build Understand and Evolve',
            'AI agents rely on perception, decision-making, and action.'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {automationSteps.map((step) => (
              <div
                key={step.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <img
                  src={normalizeAssetUrl(step.icon)}
                  alt={step.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'We Develop AI Agents With Global Security Standards & Regulations',
            undefined,
            true
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {complianceTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setComplianceTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  complianceTab === tab.id
                    ? 'bg-white text-slate-900'
                    : 'border border-white/20 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {activeCompliance ? (
            <div className="mt-10">
              <p className="text-center text-sm text-slate-200">
                {activeCompliance.description}
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {activeCompliance.items.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
                  >
                    <img
                      src={normalizeAssetUrl(item.icon)}
                      alt={item.title}
                      className="mx-auto h-12 w-12"
                      loading="lazy"
                    />
                    <p className="mt-3 text-sm font-semibold text-white">
                      {item.title}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-600 via-slate-900 to-sky-600 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Build AI Agents That Meet Global Security Standards
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Enterprise-grade agents that are compliant, secure, and audit-ready.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'We Offer Customizable AI Agent Development Solutions for All Business Purposes',
            'Choose tailored delivery models that match your budget and time to market.'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutionOptions.map((option) => (
              <div
                key={option.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <img
                  src={normalizeAssetUrl(option.icon)}
                  alt={option.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {option.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {option.description}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  {option.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-sky-500" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Our Tech Stack for Building Custom AI Agent Solutions',
            'We utilize cutting-edge technologies and frameworks.',
            true
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {techStackTabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setTechTab(tab.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                  techTab === tab.id
                    ? 'bg-white text-slate-900'
                    : 'border border-white/20 text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          {activeTech ? (
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {activeTech.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center"
                >
                  <img
                    src={normalizeAssetUrl(item.icon)}
                    alt={item.title}
                    className="mx-auto h-12 w-12"
                    loading="lazy"
                  />
                  <p className="mt-3 text-sm font-semibold text-white">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Step-by-Step Process for Enterprise-Grade AI Agent Development',
            'A structured approach that ensures performance and measurable impact.'
          )}
          <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              {processSteps.map((step) => (
                <div
                  key={step.number}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-3xl font-semibold text-sky-500">
                      {step.number}
                    </span>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {step.title}
                    </h3>
                  </div>
                  <p className="mt-3 text-sm text-slate-600">
                    {step.description}
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-slate-700">
                    {step.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-sky-500" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <img
                src={normalizeAssetUrl(
                  'https://www.Infynex.com/assets/img/web-img/ai-agent-process.webp'
                )}
                alt="AI Agent Development Process"
                className="w-full rounded-2xl object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Do You Know Why AI Agent Development Is Leading the Way in Business Automation?',
            'Evidence that highlights the impact of AI agents across industries.'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {evidenceStats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 text-center"
              >
                <img
                  src={normalizeAssetUrl(stat.icon)}
                  alt={stat.title}
                  className="mx-auto h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {stat.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {stat.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-700 via-slate-900 to-sky-600 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Upgrade Your Systems With Reliable, High-Performance AI Agents
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Shift manual work to intelligent automation with our AI agents.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Talk to Our Experts
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'How Our AI Agents Development Services Simplify and Accelerate Your Workflows',
            'We automate repetitive tasks and deliver consistent performance.'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {workflowBenefits.map((benefit) => (
              <div
                key={benefit.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <img
                  src={normalizeAssetUrl(benefit.icon)}
                  alt={benefit.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Intelligent AI Agent Solutions for Real Business Challenges'
          )}
          <div className="mt-8 overflow-hidden" ref={caseStudyRef}>
            <div className="flex">
              {caseStudies.map((caseStudy) => (
                <div
                  key={caseStudy.title}
                  className="min-w-0 flex-[0_0_100%] px-4"
                >
                  <div className="grid gap-6 rounded-3xl border border-slate-200 bg-white p-6 md:grid-cols-[1.1fr_0.9fr]">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">
                        {caseStudy.title}
                      </h3>
                      <p className="mt-3 text-sm text-slate-600">
                        <strong>The Issue:</strong> {caseStudy.issue}
                      </p>
                      <p className="mt-3 text-sm text-slate-600">
                        <strong>The Solution:</strong> {caseStudy.solution}
                      </p>
                      <div className="mt-3 text-sm text-slate-600">
                        <strong>Measurable Results:</strong>
                        <ul className="mt-2 space-y-1">
                          {caseStudy.results.map((result) => (
                            <li key={result} className="flex items-center gap-2">
                              <span className="h-2 w-2 rounded-full bg-sky-500" />
                              {result}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <img
                      src={normalizeAssetUrl(caseStudy.image)}
                      alt={caseStudy.title}
                      className="w-full rounded-2xl object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-sky-600 via-indigo-600 to-slate-900 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Shift From Manual Tasks To Autonomous AI Operations with Infynex
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Empower your teams with agents that analyze, decide, and act.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Let's Get Started
            </button>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('AI Agent Development Cost: The Essentials')}
          <p className="mt-4 text-sm text-slate-600">
            AI agent development typically starts around $10,000 depending on
            complexity, integrations, and feature depth.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                What Factors Influence AI Agent Platform Development
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {costFactors.map((factor) => (
                  <li key={factor} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    {factor}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
              <h3 className="text-lg font-semibold text-slate-900">
                Steps to Reduce the Cost of AI Agent Development
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-slate-700">
                {costSavings.map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-sky-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'We Build The Smartest, Most Adaptive AI Agents for Modern Workflows',
            'Our AI agents stand out because of these differentiators.',
            true
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {differentiators.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6"
              >
                <img
                  src={normalizeAssetUrl(item.icon)}
                  alt={item.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-200">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading(
            'Each Phase of Our AI Agent Development is a Showpiece of Excellence'
          )}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {phaseHighlights.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <img
                  src={normalizeAssetUrl(item.icon)}
                  alt={item.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          {sectionHeading('Why Choose Infynex as Your Trusted AI Agent Developer?')}
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyChoose.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-6"
              >
                <img
                  src={normalizeAssetUrl(item.icon)}
                  alt={item.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-950">
        <div className="mx-auto max-w-6xl px-4 pb-12">
          <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-indigo-600 to-sky-600 p-8 text-center text-white">
            <h2 className="text-2xl font-semibold md:text-3xl">
              Ready to Build Your AI Agent With Industry Experts?
            </h2>
            <p className="mt-3 text-sm text-slate-100 md:text-base">
              Secure, scalable, and high-performing agents with continuous
              support.
            </p>
            <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      <section className="bg-slate-950 text-white">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-[0.4fr_0.6fr]">
            <div>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Client Testimonials
              </h2>
              <p className="mt-3 text-sm text-slate-200">
                Hear from satisfied clients who transformed operations with our
                AI agent development services.
              </p>
              <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900">
                View Testimonials
              </button>
            </div>
            <div className="overflow-hidden" ref={testimonialRef}>
              <div className="flex">
                {testimonials.map((testimonial) => (
                  <div
                    key={testimonial.name}
                    className="min-w-0 flex-[0_0_100%] px-3"
                  >
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
                      <p className="text-sm text-slate-200">{testimonial.quote}</p>
                      <div className="mt-6 flex items-center gap-3">
                        <img
                          src={normalizeAssetUrl(testimonial.avatar)}
                          alt={testimonial.name}
                          className="h-12 w-12 rounded-full"
                          loading="lazy"
                        />
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-slate-300">
                            {testimonial.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqSectionCardItems
        items={faqs}
        openIndex={openFaq}
        onToggle={toggleFaq}
        sectionClassName="bg-white"
        containerClassName="mx-auto max-w-6xl px-4 py-16"
        header={sectionHeading('Frequently Asked Questions')}
        listClassName="mt-8 grid gap-4 md:grid-cols-2"
        itemClassName="rounded-2xl border border-slate-200 bg-slate-50 p-5"
        buttonClassName="flex w-full items-center justify-between text-left"
        questionClassName="text-sm font-semibold text-slate-900"
        iconClassName="ml-4 text-xl text-sky-500"
        answerClassName="mt-3 text-sm text-slate-600"
        buttonType="button"
      />
    </main>
  )
}
