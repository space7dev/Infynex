import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface CaseStudyCardProps {
  title: string
  client: string
  category: string
  description: string
  results: string[]
  image?: string
  href: string
}

export default function CaseStudyCard({
  title,
  client,
  category,
  description,
  results,
  image,
  href,
}: CaseStudyCardProps) {
  return (
    <Link
      href={href}
      className="card group overflow-hidden transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image Placeholder */}
      <div className="relative -mx-6 -mt-6 mb-4 h-48 overflow-hidden bg-gradient-to-br from-primary-100 to-secondary-100">
        {image ? (
          <Image src={image} alt={title} fill className="object-cover" />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-4xl font-bold text-primary-200">{client.charAt(0)}</span>
          </div>
        )}
        <div className="absolute right-4 top-4 rounded-full bg-white px-3 py-1 text-xs font-semibold text-primary-600">
          {category}
        </div>
      </div>

      {/* Content */}
      <div className="space-y-3">
        <h3 className="text-xl font-bold text-secondary-900">{title}</h3>
        <p className="text-sm font-medium text-primary-600">{client}</p>
        <p className="text-secondary-600">{description}</p>

        {/* Results */}
        {results && results.length > 0 && (
          <div className="border-t border-secondary-200 pt-4">
            <p className="mb-2 text-sm font-semibold text-secondary-700">Key Results:</p>
            <ul className="space-y-1">
              {results.slice(0, 2).map((result, index) => (
                <li key={index} className="flex items-start text-sm text-secondary-600">
                  <span className="mr-2 text-primary-600">•</span>
                  <span>{result}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* CTA */}
        <div className="flex items-center pt-2 text-sm font-semibold text-primary-600 opacity-0 transition-opacity group-hover:opacity-100">
          <span>View Case Study</span>
          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  )
}
