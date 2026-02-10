'use client'

import { useState } from 'react'
import { Play } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'David Colorado',
    position: 'Founder- Unity',
    image: '/testimage/1.jpg',
    testimonial: 'I was tired of the censorship of social media apps, so I wanted to create an app that allowed people to enter without censorship. Initially, it was challenging to decide on the best mobile app development company among Millions. I searched for some keywords regarding my project on Google search and found Infynex on the top. They covered all my cost and quality product challenges. Working with them blew my mind. To rate from 1-10, I would give them 10 or even more.',
    videoUrl: 'https://player.vimeo.com/video/738511145?h=729b5487e6&badge=0&autopause=0&player_id=0&app_id=58479;autoplay=true',
    caseStudyUrl: '/case-study/case-study-unity'
  },
  {
    id: 2,
    name: 'Jean Gilles Capital',
    position: 'Stanley Jean',
    image: '/testimage/2.jpg',
    testimonial: 'Found Infynex Solutions on Google to try for my first project, and they reverted promptly, which I highly appreciate it. Before them, I was highly charged for the low-quality product. But Infynex provides a cost-efficient product, and they are highly reliable. They were communicative, and we had our discussions mostly on Whatsapp. The time is very consistent and the best among others in the industry. I would refer Infynex to all my friends.',
    videoUrl: 'https://player.vimeo.com/video/740988559?h=448b5f4c4f&badge=0&autopause=0&player_id=0&app_id=58479;autoplay=true',
    caseStudyUrl: '/case-study/case-study-jean-gilles-capital'
  },
  {
    id: 3,
    name: 'Moonie Lantion',
    position: 'Director - (DTP) NBCUniversal Media',
    image: '/testimage/3.jpg',
    testimonial: '5 stars! The team at Infynex Solutions is incredible. I would definitely recommend Infynex to other entrepreneurs. I will give a 5/5 rating to the entire team for their professional technical skills, communication, and speed. I needed a blockchain-based website to sell my new products quickly. I found Infynex through google and was impressed with their client feedback. I contacted them and got the easy-to-navigate website ready on time. I would like to thank every member of Infynex who helped me with the project. Thank you again!',
    videoUrl: 'https://player.vimeo.com/video/757117421?h=733ae38330&badge=0&autopause=0&player_id=0&app_id=58479;autoplay=true',
    caseStudyUrl: '/case-study/case-study-universalmonsters-by-nbcuniversal'
  },
  {
    id: 4,
    name: 'Keoni Jones',
    position: 'Fare App',
    image: '/testimage/4.jpg',
    testimonial: 'Excellent communication skills and offering simple designs to develop services for all my needs. I was delighted with all the development processes. The Infynex team is super-friendly and problem-solving people. They provide an ease-of-work by solving any problem within a week. I would love to say "Thank You" to all the team members and will highly recommend Infynex to all my friends.',
    videoUrl: 'https://player.vimeo.com/video/543069084?title=1&byline=1&portrait=1&autoplay=true',
    caseStudyUrl: null
  },
  {
    id: 5,
    name: 'Michael Solomon',
    position: 'Founder- I M So Hungry',
    image: '/testimage/5.jpg',
    testimonial: 'Michael Solomon realized his dream project with the help of Infynex. He had an idea sitting in his head for 5 years but had yet to learn how to begin. After investing huge sums of money and 4 years of his time in the wrong companies, he felt disappointed. That\'s when he came across Infynex.',
    videoUrl: 'https://player.vimeo.com/video/794083246?h=29a5ca4f62&badge=0&autopause=0&player_id=0&app_id=58479',
    caseStudyUrl: null
  }
]

export default function ClientTestimonials() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Discover Client Perspectives on Our Work at Infynex
          </h3>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto">
            We have more than a thousand satisfied clients worldwide. As the best web3 consulting company, 
            we thrive on assisting businesses and delivering ideas that bring change at every step.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          
          {/* Client Images - Tabs */}
          <div className="flex justify-center items-center gap-4 md:gap-8 mb-12 flex-wrap">
            {testimonials.map((client, index) => (
              <button
                key={client.id}
                onClick={() => setActiveTab(index)}
                className={`relative rounded-full transition-all duration-300 ${
                  activeTab === index
                    ? 'ring-4 ring-orange-500 scale-110'
                    : 'opacity-60 hover:opacity-100 hover:scale-105'
                }`}
              >
                <img
                  src={client.image}
                  alt={client.name}
                  width={100}
                  height={100}
                  className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover"
                />
                {activeTab === index && (
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Testimonial Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
            <div className="text-center">
              <h4 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                {testimonials[activeTab].name}
              </h4>
              <h5 className="text-lg md:text-xl text-gray-600 mb-6">
                {testimonials[activeTab].position}
              </h5>
              
              <p className="text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                {testimonials[activeTab].testimonial}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                {/* <button
                  onClick={() => window.open(testimonials[activeTab].videoUrl, '_blank')}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-600 to-red-600 text-white font-semibold rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Watch Testimonial
                  <Play className="w-5 h-5 fill-white" />
                </button> */}
{/*                 
                {testimonials[activeTab].caseStudyUrl && (
                  <a
                    href={testimonials[activeTab].caseStudyUrl}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105"
                  >
                    View Case Study
                  </a>
                )} */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
