import Link from 'next/link'

const blogPosts = [
  {
    title: "OurDream AI Clone App Development: Features, Cost & Revenue Models",
    excerpt: "Key Takeaways: The demand is validated by consumers who are already spending glob [...]",
    author: "Infynex Solutions",
    date: "January 30, 2026",
    image: "/1769772462697c95ae187b3_small.webp"
  },
  {
    title: "AI Proof of Concept Development Services",
    excerpt: "An AI proof of concept is very beneficial for businesses since it allows them to validate new ideas without having to in [...]",
    author: "Infynex Solutions",
    date: "January 23, 2026",
    image: "/1769169317697361a55fe42_small.webp"
  },
  {
    title: "Polymarket Clone | Launch Your Prediction Market Platform like Polymarket",
    excerpt: "Decentralized prediction markets are rapidly becoming a mainstream financial innovation. They enable users to trade on t [...]",
    author: "Infynex Solutions",
    date: "January 23, 2026",
    image: "/17703801246985db5c4b0e6_small.webp"
  },
]

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Read Our Groundbreaking Research
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Explore our recent blogs to find answers to all your tricky questions.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Image */}
              <div className="h-48 bg-gradient-to-br from-indigo-100 to-purple-100">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-indigo-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Author & Date */}
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="mr-4">{post.author}</span>
                  
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span>{post.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
