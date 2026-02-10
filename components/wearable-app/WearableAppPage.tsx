'use client'

import { useState } from 'react'
import { submitContactForm } from '@/lib/contactApi'

const normalizeAssetUrl = (url: string) =>
  url.replace('https://www.Infynex.com/', 'https://www.suffescom.com/')

const heroHighlights = [
  'Healthcare-focused AI',
  'Secure by design',
  'Regulatory compliance development',
  'Seamless system integration',
  'End-to-end development',
  'Clinician-centric solutions',
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

const impactStats = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/efficiency.svg',
    value: '40%',
    label: 'Efficiency increase',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/decision.svg',
    value: '35%',
    label: 'Faster decisions',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/reduction.svg',
    value: '25%',
    label: 'Readmission reduction',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/engagement.svg',
    value: '30%',
    label: 'Higher engagement',
  },
]

const experienceHighlights = [
  'Specialized healthcare app developers',
  'AI-first medical app architecture',
  'Interoperability-driven development',
  'Compliance and security assured',
]

const healthcareSolutions = [
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ai-healthcare-solutions-for-precise-medication.webp',
    title: 'Precise Medication Solutions',
    description:
      'Develop individualized healthcare plans using AI-powered analytics and patient data.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ai-healthcare-solutions-for-adaptive-workflow.webp',
    title: 'Adaptive Workflow Solution',
    description:
      'Improve patient flow, inventory visibility, and radiology and lab workflows.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ai-healthcare-solutions-for-fraud-prevention.webp',
    title: 'Fraud Prevention and Data Security',
    description:
      'Protect patient data, detect errors, and safeguard against cyber threats.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ai-healthcare-solutions-for-clinical-trial.webp',
    title: 'Accurate Data Management',
    description:
      'Use NLP to standardize data and enable voice notes for EHR entries.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ai-healthcare-solutions-for-ai-driven-wellness.webp',
    title: 'Automate Administrative Workflow',
    description:
      'Automate manual tasks with ML, RPA, and NLP to boost patient care.',
  },
  {
    image:
      'https://www.Infynex.com/assets/img/blockchain-images/ai-healthcare-solutions-for-medical-image.webp',
    title: 'Patient-Readmission Prediction',
    description:
      'Identify high-risk patients early and provide timely follow-up care.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/clinical-decision-intelligence.webp',
    title: 'Clinical Decision Intelligence',
    description:
      'Use real-time patient data for accurate diagnosis and treatment planning.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/population-health-analytics.webp',
    title: 'Population Health Analytics',
    description:
      'Reveal health trends, risk patterns, and preventive measures at scale.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/predictive-risk-stratification.webp',
    title: 'Predictive Risk Stratification',
    description:
      'Recognize high-risk patients early with advanced ML models.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/healthcare-data-interoperability.webp',
    title: 'Healthcare Data Interoperability',
    description:
      'Enable secure data exchange across EHRs, labs, wearables, and systems.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/explainable-ai-models.webp',
    title: 'Explainable AI Models',
    description:
      'Provide transparent predictions to support ethical clinical decisions.',
  },
  {
    image: 'https://www.Infynex.com/assets/img/web-img/continuous-model-optimization.webp',
    title: 'Continuous Model Optimization',
    description:
      'Refine AI models with real-world outcomes to ensure precision and trust.',
  },
]

const processSteps = [
  {
    title: 'Identify Requirements and Collect Information',
    description:
      'Gather stakeholder input to define pain points, objectives, and KPIs.',
  },
  {
    title: 'Research and Analysis',
    description:
      'Analyze trends, competitors, and select the best-fit tech stack.',
  },
  {
    title: 'UI and UX Design',
    description:
      'Create architecture, design, and user experience aligned to requirements.',
  },
  {
    title: 'Initiation of Development',
    description:
      'Implement features, testing, and scalable data foundations.',
  },
  {
    title: 'Integration With Healthcare Systems',
    description:
      'Integrate EHRs, telemedicine platforms, and AI modules seamlessly.',
  },
  {
    title: 'Validation and Testing',
    description:
      'Test reliability and collect feedback for final refinements.',
  },
  {
    title: 'Implementation and Deployment',
    description:
      'Install, migrate, and train teams for smooth adoption.',
  },
  {
    title: 'Maintenance and Improvement',
    description:
      'Monitor performance and optimize continuously based on metrics.',
  },
]

const exceptionalSolutions = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/medical-images-analyses.svg',
    title: 'Medical Images Analyses',
    description:
      'Review MRI, CT scans, and X-rays to detect abnormalities earlier.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/invoice.svg',
    title: 'Accurate Bills and Payment Invoices',
    description:
      'Automate invoicing with AI verification to reduce human error.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/monitoring.svg',
    title: 'Remote Monitoring and Telemedicine',
    description:
      'Enable real-time consultation and chronic condition monitoring.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/research.svg',
    title: 'Research and Development',
    description:
      'Accelerate drug discovery with AI-driven clinical simulations.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-chatbots.svg',
    title: 'Virtual Health Assistants and AI Chatbots',
    description:
      'Provide 24/7 support, reminders, and patient guidance.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/robot-surgeries.svg',
    title: 'Robot Surgeries',
    description:
      'Improve surgical precision with AI and ML assisted instruments.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/personalized.svg',
    title: 'Personalized Care Platforms',
    description:
      'Adapt treatment plans dynamically based on patient progress.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/hospital.svg',
    title: 'Smart Hospital Systems',
    description:
      'Optimize staff, bed management, resources, and workflows.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/mental-health.svg',
    title: 'Mental Health Solutions',
    description:
      'Monitor wellness and detect early warning signals for intervention.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/wearable.svg',
    title: 'Wearable Health Intelligence',
    description:
      'Process wearable data to support preventive and post-treatment care.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/platform.svg',
    title: 'Clinical Trial Platforms',
    description:
      'Automate recruitment, monitoring, and trial data analytics.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/voice.svg',
    title: 'Voice Documentation Systems',
    description:
      'Convert conversations into structured clinical records.',
  },
]

const useCases = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-diagnostics-disease.svg',
    title: 'AI Diagnostics and Disease Detection',
    description:
      'Analyze medical images and patient data to detect diseases earlier.',
    capabilities: [
      'Medical image analysis',
      'Early disease identification',
      'Diagnostic accuracy improvement',
      'Faster clinical decisions',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-care.svg',
    title: 'AI in Intensive Care Units',
    description:
      'Monitor patient health continuously to anticipate complications sooner.',
    capabilities: [
      'Real-time patient monitoring',
      'Early deterioration alerts',
      'ICU workload optimization',
      'Critical care decision support',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/treatment.svg',
    title: 'Personalized Treatment and Precision Medicine',
    description:
      'Use genetic and clinical data to personalize care plans.',
    capabilities: [
      'Genomic data analysis',
      'Personalized therapy planning',
      'Treatment response prediction',
      'Patient-specific care paths',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/workflow.svg',
    title: 'Hospital Operations and Workflow Automation',
    description:
      'Automate scheduling, resource allocation, and admin tasks.',
    capabilities: [
      'Staff and bed management',
      'Automated scheduling',
      'Resource utilization insights',
      'Operational efficiency improvement',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/chatbot.svg',
    title: 'Virtual Health Assistants and Chatbots',
    description:
      'Support patients with scheduling, guidance, and query handling.',
    capabilities: [
      'Symptom checking',
      'Patient query handling',
      'Appointment management',
      'Medication reminders',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/monitoring.svg',
    title: 'Remote Patient Monitoring (RPM)',
    description:
      'Analyze wearable data to provide proactive care outside hospitals.',
    capabilities: [
      'Wearable data analysis',
      'Chronic condition monitoring',
      'Real-time health alerts',
      'Post-treatment follow-ups',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/mental-health.svg',
    title: 'AI in Mental Health',
    description:
      'Monitor mood and behavior to provide timely mental wellness support.',
    capabilities: [
      'Mood and behavior tracking',
      'Therapy assistance tools',
      'Early risk identification',
      'Mental wellness insights',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-health.svg',
    title: 'AI in Public Health and Epidemiology',
    description:
      'Use population data to predict outbreaks and plan interventions.',
    capabilities: [
      'Disease outbreak prediction',
      'Population health analysis',
      'Risk trend identification',
      'Data-driven policy support',
    ],
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/ai-healthcare.svg',
    title: 'AI for Preventive Healthcare',
    description:
      'Identify early signs of disease and recommend lifestyle adjustments.',
    capabilities: [
      'Health risk prediction',
      'Preventive care recommendations',
      'Lifestyle pattern analysis',
      'Long-term wellness planning',
    ],
  },
]

const integrations = [
  {
    application: 'Telemedicine platform',
    integration: 'Twilio (messaging), Zoom',
    uses: 'Seamless communications',
  },
  {
    application: 'IoT and wearable devices',
    integration: 'Google Fit, Apple HealthKit',
    uses: 'Patient monitoring and engagement',
  },
  {
    application: 'Cloud computing',
    integration: 'AWS, Google Cloud, Azure',
    uses: 'Data storage and processing',
  },
  {
    application: 'Cyber security',
    integration: 'SSO, multi-factor authentication',
    uses: 'Data protection and identity management',
  },
  {
    application: 'AI-powered virtual assistance',
    integration: 'Google Assistant, Amazon Alexa Healthcare',
    uses: 'Personalized support and voice assistance',
  },
]

const revenueModels = [
  {
    icon: 'https://www.Infynex.com/assets/img/icons/licensing-fee.svg',
    title: 'Licensing Fee',
    description:
      'Integrate AI software with EHR systems and charge one-time or annual fees.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/freemium-model.svg',
    title: 'Freemium Model',
    description:
      'Offer a free version with premium upgrades for advanced features.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/subscription.svg',
    title: 'Subscription Model',
    description:
      'Provide monthly or annual plans for recurring revenue.',
  },
  {
    icon: 'https://www.Infynex.com/assets/img/icons/revenue-fee.svg',
    title: 'Revenue Fee',
    description:
      'Charge a share of profits from successful outcomes or customizations.',
  },
]

const whyChooseUs = [
  {
    title: 'Top-level expertise',
    description:
      'A skilled team focused on AI development services for healthcare.',
  },
  {
    title: '24/7 customer support',
    description:
      'Always-on support for every client inquiry and project update.',
  },
  {
    title: 'Transparent pricing policy',
    description:
      'Clear pricing models shared before project kickoff.',
  },
  {
    title: 'On-time product delivery',
    description:
      'Delivered solutions for 1200+ clients worldwide.',
  },
  {
    title: 'Advanced tech stack',
    description:
      'Modern frameworks like PyTorch and MXNet power our builds.',
  },
  {
    title: 'Global clients',
    description:
      'Trusted by organizations across regions and healthcare sectors.',
  },
]

const faqs = [
  {
    question: 'What is AI in healthcare?',
    answer:
      'AI in healthcare automates tasks using chatbots, deep learning, NLP, and machine learning tools.',
  },
  {
    question: 'What is the AI medical app development cost?',
    answer:
      'The cost ranges from $50K to $200K, depending on scope and features.',
  },
  {
    question: 'What are the benefits of using AI healthcare solutions?',
    answer:
      'Benefits include better patient care, improved ROI, streamlined tasks, and predictive analytics.',
  },
  {
    question: 'How is AI used in healthcare?',
    answer:
      'AI enhances patient monitoring, diagnosis, care delivery, and data analysis.',
  },
  {
    question: 'Which languages are used to develop AI healthcare software?',
    answer:
      'Common languages include Python, Java, Lisp, R, and Prolog.',
  },
  {
    question: 'What other healthcare software have you developed?',
    answer:
      'We build consultation apps, telemedicine apps, clinician apps, and EHR solutions.',
  },
  {
    question: 'What are the benefits of AI agent development in healthcare software?',
    answer:
      'AI agents automate interactions, scheduling, and monitoring to reduce staff workload.',
  },
]

export default function WearableAppPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setIsSubmitted(false)
    setErrorMessage('')

    const form = event.currentTarget
    const formData = new FormData(form)

    try {
      await submitContactForm({
        full_name: String(formData.get('full_name') || ''),
        email: String(formData.get('email') || ''),
        mobile_number: String(formData.get('mobile_number') || ''),
        message: String(formData.get('message') || ''),
        website: String(formData.get('website') || ''),
        source: 'wearable-app-hero',
      })
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : 'Unable to send message')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="bg-white text-slate-900">
      <section className="bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-900 text-white pb-[120px]">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl font-semibold md:text-5xl">
              AI Healthcare Software Development Company
            </h1>
            <p className="mt-4 text-base text-slate-200 md:text-lg">
              Infynex builds healthcare AI software that streamlines operations
              and enhances patient experience with regulatory-compliant, secure,
              and clinician-centric solutions.
            </p>
            <ul className="mt-6 grid gap-3 text-sm text-slate-100 sm:grid-cols-2">
              {heroHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-emerald-300" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-8 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900">
              Join The Paradigm Shift
            </button>
          </div>
          <div className="rounded-3xl bg-white/10 p-6">
            <h2 className="text-xl font-semibold">Talk to our experts</h2>
            <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60"
              />
              <input
                type="text"
                name="mobile_number"
                placeholder="Mobile Number With Country Code"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60"
              />
              <textarea
                rows={4}
                name="message"
                placeholder="Your Project Description"
                required
                className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/60"
              />
              <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900 disabled:opacity-70"
              >
                {isSubmitting ? 'Submitting...' : isSubmitted ? 'Submitted' : 'Submit'}
              </button>
              {errorMessage && <p className="text-sm text-red-200">{errorMessage}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="border-b border-slate-100 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustedLogos.map((logo) => (
              <img
                key={logo.alt}
                src={normalizeAssetUrl(logo.src)}
                alt={logo.alt}
                className="h-10 w-auto opacity-80"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="text-center">
            <h2 className="text-2xl font-semibold md:text-4xl">
              AI Healthcare App Development: Delivering Measurable Business Value
            </h2>
            <p className="mt-4 text-slate-600">
              We build AI-powered healthcare apps that reduce costs, improve
              outcomes, and deliver scalable solutions for modern care.
            </p>
          </div>
          <div className="mt-10 grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center">
            <img
              src={normalizeAssetUrl(
                'https://www.Infynex.com/assets/img/web-img/ai-healthcare-stats.webp'
              )}
              alt="AI Healthcare App Development"
              className="w-full rounded-3xl"
              loading="lazy"
            />
            <div className="grid gap-6 sm:grid-cols-2">
              {impactStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-3">
                    <img
                      src={normalizeAssetUrl(stat.icon)}
                      alt={stat.label}
                      className="h-10 w-10"
                      loading="lazy"
                    />
                    <div>
                      <p className="text-2xl font-semibold text-slate-900">
                        {stat.value}
                      </p>
                      <p className="text-sm text-slate-600">{stat.label}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-2 md:items-center">
          <div>
            <h3 className="text-2xl font-semibold md:text-4xl">
              Revolutionize Patient Experience With AI Healthcare Software Development
            </h3>
            <p className="mt-4 text-slate-600">
              We combine clinical knowledge with cutting-edge AI to build safe,
              interoperable, and data-driven healthcare solutions that drive
              real-time insights and efficient operations.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-600">
              {experienceHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-emerald-500" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white">
              Have A Consultation
            </button>
          </div>
          <img
            src={normalizeAssetUrl(
              'https://www.Infynex.com/assets/img/web-img/ai-healthcare-development-revolutionize.webp'
            )}
            alt="AI Healthcare Software Development"
            className="w-full rounded-3xl"
            loading="lazy"
          />
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Top Healthcare Solutions: AI Medical App Development Services
            </h2>
            <p className="mt-4 text-slate-600">
              Our healthcare AI application development services overcome modern
              challenges with precision, security, and operational efficiency.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {healthcareSolutions.map((solution) => (
              <div key={solution.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <img
                  src={normalizeAssetUrl(solution.image)}
                  alt={solution.title}
                  className="h-44 w-full object-cover"
                  loading="lazy"
                />
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{solution.title}</h3>
                  <p className="mt-2 text-sm text-slate-600">
                    {solution.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-emerald-600 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h2 className="text-2xl font-semibold md:text-4xl">
            Want to Build AI-Driven Solutions for Your Healthcare Business?
          </h2>
          <p className="mt-3 text-slate-100">
            Join hands with us to create AI-powered solutions that address
            healthcare challenges and drive innovation.
          </p>
          <button className="mt-6 rounded-full bg-white px-6 py-3 text-sm font-semibold text-emerald-700">
            Talk To Our Experts
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h3 className="text-2xl font-semibold md:text-4xl">
              Our AI Healthcare Software Development Process
            </h3>
            <p className="mt-4 text-slate-600">
              We follow a robust, secure, and customizable development workflow
              for AI healthcare software solutions.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {processSteps.map((step, index) => (
              <div key={step.title} className="rounded-2xl border border-slate-100 p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-emerald-500">
                  Step {String(index + 1).padStart(2, '0')}
                </p>
                <h4 className="mt-3 text-lg font-semibold">{step.title}</h4>
                <p className="mt-2 text-sm text-slate-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 text-white">
        <div className="mx-auto max-w-6xl px-6 py-14 text-center">
          <h3 className="text-2xl font-semibold md:text-4xl">
            Scale Your Business With AI Software For Healthcare
          </h3>
          <p className="mt-3 text-slate-200">
            Leverage AI and cutting-edge technologies to build reliable,
            scalable healthcare applications.
          </p>
          <button className="mt-6 rounded-full bg-emerald-400 px-6 py-3 text-sm font-semibold text-slate-900">
            Join The Paradigm Shift
          </button>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h4 className="text-2xl font-semibold md:text-4xl">
              We Deliver Exceptional AI-Based Healthcare Solutions
            </h4>
            <p className="mt-4 text-slate-600">
              Our AI-powered services drive innovation and operational efficiency
              across the healthcare ecosystem.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {exceptionalSolutions.map((solution) => (
              <div key={solution.title} className="rounded-2xl border border-slate-100 p-6">
                <img
                  src={normalizeAssetUrl(solution.icon)}
                  alt={solution.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h5 className="mt-4 text-lg font-semibold">{solution.title}</h5>
                <p className="mt-2 text-sm text-slate-600">
                  {solution.description}
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
              AI Healthcare Software Use Cases Transforming Modern Care
            </h2>
            <p className="mt-4 text-slate-600">
              See the measurable impact of AI across care delivery, operations,
              and patient engagement.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {useCases.map((useCase) => (
              <div key={useCase.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <img
                  src={normalizeAssetUrl(useCase.icon)}
                  alt={useCase.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{useCase.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{useCase.description}</p>
                <ul className="mt-4 space-y-1 text-sm text-slate-600">
                  {useCase.capabilities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h4 className="text-2xl font-semibold md:text-4xl">
              AI Software Development For Healthcare: Third-Party Integrations
            </h4>
            <p className="mt-4 text-slate-600">
              Our AI healthcare software supports smooth third-party integrations
              to enhance functionality and efficiency.
            </p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-slate-100">
            <table className="min-w-full divide-y divide-slate-100 text-sm">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    AI Healthcare Application
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Third-Party API Integration
                  </th>
                  <th className="px-4 py-3 text-left font-semibold text-slate-700">
                    Uses
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 bg-white">
                {integrations.map((row) => (
                  <tr key={row.application}>
                    <td className="px-4 py-3 text-slate-600">{row.application}</td>
                    <td className="px-4 py-3 text-slate-600">{row.integration}</td>
                    <td className="px-4 py-3 text-slate-600">{row.uses}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Revenue Models We Enable Through AI Healthcare Software
            </h2>
            <p className="mt-4 text-slate-600">
              We create intelligent healthcare platforms with multiple
              monetization opportunities and long-term ROI.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {revenueModels.map((model) => (
              <div key={model.title} className="rounded-2xl bg-white p-6 shadow-sm">
                <img
                  src={normalizeAssetUrl(model.icon)}
                  alt={model.title}
                  className="h-12 w-12"
                  loading="lazy"
                />
                <h3 className="mt-4 text-lg font-semibold">{model.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{model.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">
              Why Choose Infynex As Your AI Healthcare Software Development Company?
            </h2>
            <p className="mt-4 text-slate-600">
              We provide AI healthcare app development services that help modernize
              business plans and deliver reliable outcomes.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="rounded-2xl border border-slate-100 p-6">
                <h5 className="text-lg font-semibold">{item.title}</h5>
                <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-6 py-14">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold md:text-4xl">FAQs</h2>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {faqs.map((faq, index) => (
              <button
                key={faq.question}
                onClick={() => setOpenFaq((prev) => (prev === index ? null : index))}
                className="rounded-2xl border border-slate-100 bg-white p-5 text-left"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-slate-800">
                    {faq.question}
                  </h3>
                  <span className="text-lg text-emerald-500">
                    {openFaq === index ? '-' : '+'}
                  </span>
                </div>
                {openFaq === index ? (
                  <p className="mt-3 text-sm text-slate-600">{faq.answer}</p>
                ) : null}
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
