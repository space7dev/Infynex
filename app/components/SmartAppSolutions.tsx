import Link from 'next/link'

const solutions = [
  {
    title: "Software",
    description: "Our software engineers deliver solutions that automate tasks, boost productivity, and increase profits for startups and enterprises.",
    link: "#",
    image: '/modernizing-Software.webp',
    order: "left"
  },
  {
    title: "Application",
    description: "We are a reputable app development business with experience in all aspects of Android & iOS app development.",
    link: "#",
    image: '',
    order: "right"
  },
  {
    title: "Chatbot",
    description: "Smart AI chatbots simplify customer interactions. We build intelligent chatbots specifically for your domain based on your business needs.",
    link: "#",
    image: '/modernizing-chatbot.webp',
    order: "left"
  },
   {
    title: "Web",
    description: "At Infynex, we design and develop market-leading web-based products with engaging user experiences that add value for your clients.",
    link: "#",
    image: '',
    order: "right"
  },
]

export default function SmartAppSolutions() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Smart App Solutions for Modern Businesses
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Innovate, Create, Elevate: Unleash the Power of Digital Product Engineering.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid gap-8 md:grid-cols-10">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 md:col-span-10 ${
                index === 0
                  ? 'md:col-span-7'
                  : index === 1
                  ? 'md:col-span-3'
                  : index === 2
                  ? 'md:order-4 md:col-span-7'
                  : 'md:order-3 md:col-span-3'
              }`}
            >
              <div className={`${solution.image ? 'flex' : ''}`}>
                {solution.image && (
                  <div className="w-64 h-64 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center shrink-0">
                    <img
                      src={solution.image}
                      alt={solution.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                )}
                
                <div className="p-8 flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
