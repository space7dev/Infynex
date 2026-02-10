import { Metadata } from 'next'
import Hero from './components/Hero'
import ServiceCard from './components/ServiceCard'
import { Brain, MessageSquare, Eye, BarChart3, Bot, Sparkles } from 'lucide-react'

export const metadata: Metadata = {
  title: 'AI & Machine Learning Services',
  description:
    'Harness the power of artificial intelligence and machine learning to transform your business with intelligent automation and insights.',
}

export default function AIPage() {
  const services = [
    {
      icon: MessageSquare,
      title: 'Natural Language Processing',
      description: 'Build intelligent chatbots and text analysis systems',
      features: ['Chatbots', 'Sentiment analysis', 'Language translation'],
    },
    {
      icon: Eye,
      title: 'Computer Vision',
      description: 'Image recognition and video analysis solutions',
      features: ['Object detection', 'Facial recognition', 'Image classification'],
    },
    {
      icon: BarChart3,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-driven decisions',
      features: ['Forecasting models', 'Anomaly detection', 'Risk analysis'],
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Automate complex business processes with AI',
      features: ['Process automation', 'Document processing', 'Workflow optimization'],
    },
    {
      icon: Brain,
      title: 'Machine Learning Models',
      description: 'Custom ML models trained for your specific needs',
      features: ['Custom models', 'Model training', 'MLOps'],
    },
    {
      icon: Sparkles,
      title: 'Generative AI',
      description: 'Leverage GPT and other generative AI technologies',
      features: ['Content generation', 'Code generation', 'Creative AI'],
    },
  ]

  return (
    <>
      <Hero
        subtitle="AI & Machine Learning"
        title="Intelligent Solutions Powered by AI"
        description="Transform your business with artificial intelligence and machine learning. From chatbots to predictive analytics, we build AI solutions that drive real results."
        primaryCTA={{ text: 'Explore AI Solutions', href: '/contact' }}
        secondaryCTA={{ text: 'See Examples', href: '/portfolio' }}
      />

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mb-12 text-center">
            <h2 className="mb-4">AI & ML Services</h2>
            <p className="mx-auto max-w-2xl text-lg text-secondary-600">
              Cutting-edge artificial intelligence solutions
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-secondary-50">
        <div className="container-custom">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-6">AI Technologies We Use</h2>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {['TensorFlow', 'PyTorch', 'OpenAI GPT', 'Hugging Face', 'Scikit-learn', 'Keras', 'LangChain', 'Azure AI'].map(
                (tech) => (
                  <div key={tech} className="rounded-lg bg-white p-4 font-semibold shadow-sm">
                    {tech}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6">AI Use Cases</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                'Customer Service Automation',
                'Fraud Detection',
                'Personalized Recommendations',
                'Quality Control',
                'Sales Forecasting',
                'Medical Diagnosis',
              ].map((useCase) => (
                <div key={useCase} className="card text-left">
                  <h4 className="mb-2">{useCase}</h4>
                  <p className="text-sm text-secondary-600">
                    Leverage AI to enhance {useCase.toLowerCase()}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
