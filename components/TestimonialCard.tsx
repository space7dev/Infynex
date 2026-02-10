import { Star } from 'lucide-react'

interface TestimonialCardProps {
  name: string
  role: string
  company: string
  content: string
  rating: number
  image?: string
}

export default function TestimonialCard({
  name,
  role,
  company,
  content,
  rating,
  image,
}: TestimonialCardProps) {
  return (
    <div className="card h-full">
      {/* Rating */}
      <div className="mb-4 flex space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-secondary-300'
            }`}
          />
        ))}
      </div>

      {/* Content */}
      <blockquote className="mb-6 text-secondary-700">
        &ldquo;{content}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center space-x-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-lg font-bold text-primary-600">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-secondary-900">{name}</div>
          <div className="text-sm text-secondary-600">
            {role} at {company}
          </div>
        </div>
      </div>
    </div>
  )
}
