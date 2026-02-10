import { LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  href?: string
  features?: string[]
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  features,
}: ServiceCardProps) {
  const CardContent = (
    <>
      <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-primary-100 p-3">
        <Icon className="h-6 w-6 text-primary-600" />
      </div>
      <h3 className="mb-3 text-xl font-bold text-secondary-900">{title}</h3>
      <p className="mb-4 text-secondary-600">{description}</p>
      {features && features.length > 0 && (
        <ul className="space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start text-sm text-secondary-600">
              <span className="mr-2 text-primary-600">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      )}
    </>
  )

  if (href) {
    return (
      <Link
        href={href}
        className="card group block transition-all duration-300 hover:-translate-y-1"
      >
        {CardContent}
        <div className="mt-4 flex items-center text-sm font-semibold text-primary-600 opacity-0 transition-opacity group-hover:opacity-100">
          Learn More →
        </div>
      </Link>
    )
  }

  return <div className="card">{CardContent}</div>
}
