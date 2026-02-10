'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image: string;
  testimonial: string;
  link?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Bruno Tackon",
    position: "Founder",
    company: "Petitplya",
    image: "/avatar/1.webp",
    testimonial: "I was looking for a trustworthy digital marketing company to elevate the website's organic traffic. After massive online research, I learned about Infynex and its previous deliverables. I have to say they have the best team with in-depth knowledge of SEO and content marketing. Within the first three months, the website traffic surged, and the content was ranked in the top SERPs. They did a phenomenal job boosting the conversion rates. For anyone looking for leading digital marketing services, I highly recommend their name."
  },
  {
    id: 2,
    name: "Manuel",
    position: "CEO",
    company: "justryde, USA",
    image: "/avatar/2.webp",
    testimonial: "We came into contact with Infynex for Just Ryde app. It is an on-demand taxi booking that we developed with an aim to provide passengers with more security features and more chances to earn for drivers. Infynex team listened to our requirements and develop the app according to them. In the end, they delivered what we were expecting them from us. They did a fantastic job and handed us a solution that meets our expectations. We would highly recommend them for their amazing services."
  },
  {
    id: 3,
    name: "Martin Zejda",
    position: "",
    company: "UFM Underwears, Florida",
    image: "/avatar/3.webp",
    testimonial: "Working with Infynex Solutions was really good. I hired them for the SEO of my website, upon my friend's recommendation. And I was just amazed at the results which shown an improvement after a month they start working on it. With their proven and dedicated marketing efforts, they not only increased my website's traffic but also reduced bounce rate, boosted up the conversion rate and brought my website in the top rankings. I would definitely recommend them if you are looking for the best internet marketing services."
  },
  {
    id: 4,
    name: "Stipo Jovanovic",
    position: "",
    company: "Fashion and tech Blogger",
    image: "/avatar/4.webp",
    testimonial: "Working with the Infynex Solutions team was a pleasant experience. Two things in particular about their service is exceptional: their speed of response to emails, they were always available to answer my questions and provide feedback as the project went along. Secondly they demonstrated a clear understanding of the scope and nature of the project and delivered accordingly."
  },
  {
    id: 5,
    name: "Stephen S. Kleckner",
    position: "Digital marketing consultant",
    company: "Australia",
    image: "/avatar/5.webp",
    testimonial: "Infynex Solutions has helped us the best with redesigning our website. They not only reduced its loading time by implementing the right technology but also ensured that it is attractive and easy-to-use. They developed custom modules by understanding our needs effectively, ensured seamless communication for managing exigencies and delivered regular updates. Highly recommend them if you are looking for great output."
  },
  {
    id: 6,
    name: "Liton Roy",
    position: "CTO",
    company: "Tele-bond, Portugal",
    image: "/avatar/6.webp",
    testimonial: "I assigned Infynex to a redesigning job of my existing site. They left no loophole exposed in their redesigning work and created a fresh, eye-tempting design for my site. Really, the new design is very user-friendly and responsive as well! Looking forward to hire them again to design my next upcoming site."
  },
  {
    id: 7,
    name: "Nika Alison",
    position: "Marketing Manager",
    company: "New York",
    image: "/avatar/7.webp",
    testimonial: "SEO Guys at Infynex Rock!!! My search for a top quality SEO service provider has positively ended with Infynex! Not only these SEO guys are perfect in their digital marketing efforts but they're also trustworthy. My site was facing some Google penalty issues when I approached them. Instead of working silently to just complete the given working hours, they informed me all along the way and delivered the best possible result. I've already worked on a few smaller ones with Infynex and have recently entrusted them with a million-dollar project! These SEO guys at Infynex rock!!"
  },
  {
    id: 8,
    name: "Amina Knowles",
    position: "CTO",
    company: "Los Angeles",
    image: "/avatar/8.webp",
    testimonial: "Infynex Solutions Pvt. Ltd. - one of the great web development companies in North India I have ever worked with. My PHP based website developed exactly as what I wanted. With an eye for detail & a great understanding of PHP, Infynex helped me to open up lots more possibilities of PHP for my project. Great project management with the delivery of desired result. Highly recommend this company for PHP web development!"
  },
  {
    id: 9,
    name: "Michael Peters",
    position: "CEO",
    company: "vision tech systems, USA",
    image: "/avatar/9.webp",
    testimonial: "Infynex Solutions is a highly skilled team with an eye for details. We got exactly what we wanted and more. The project management and communication works really well through the online project tools and the dedicated project manager made a great job keeping things together. We are looking forward to the next collaboration!"
  },
  {
    id: 10,
    name: "Mike Davis",
    position: "",
    company: "New York",
    image: "/avatar/10.webp",
    testimonial: "Infynex offered us the right guidance when we required an application to promote our business. Before hiring them, we had a discussion with their development team and they guided us on how to convert our idea into an app. The development team was in touch with us throughout the development process and ensured that they are creating everything as per our need. In the end, we get an app solution that has been helping us grow our business. Thanks a ton, Infynex!"
  },
  {
    id: 11,
    name: "Marchin O.",
    position: "CTO",
    company: "Social Networking Company",
    image: "/avatar/11.jpg",
    testimonial: "Partnering with Infynex was the best decision for launching Erotic.fun. Their team delivered a robust Candy AI clone with smooth NSFW chat features and a scalable architecture. They keep entire process transparent, timely, and beyond clients' expectations.",
    link: "/candy-ai-clone#candy-ai-testimonial"
  },
  {
    id: 12,
    name: "Eunice",
    position: "Manager",
    company: "Adult Live Chat Platform",
    image: "/avatar/12.webp",
    testimonial: "Infynex transformed our vision into reality with chatsinai.com. They are experts in AI chatbot development and white-label solutions helped us build a unique platform that attracts and retains users seamlessly. Highly recommend them for NSFW AI projects.",
    link: "/candy-ai-clone#candy-ai-testimonial"
  }
];

export default function TextTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsPerPage = 3;
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalPages);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const getCurrentTestimonials = () => {
    const start = currentIndex * testimonialsPerPage;
    return testimonials.slice(start, start + testimonialsPerPage);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
            Client&apos;s Testimonials
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Our Innovative Solution Reinvent The Digital World
          </p>
        </div>

        <div className="relative">
          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {getCurrentTestimonials().map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="relative w-16 h-16 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">
                      {testimonial.link ? (
                        <a
                          href={testimonial.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-primary-600 underline"
                        >
                          {testimonial.name}
                        </a>
                      ) : (
                        testimonial.name
                      )}
                    </h3>
                    {testimonial.position && (
                      <p className="text-sm text-gray-600">{testimonial.position}</p>
                    )}
                    <p className="text-sm text-primary-600 font-medium">{testimonial.company}</p>
                  </div>
                </div>

                <div className="relative">
                  <svg
                    className="w-8 h-8 text-primary-200 mb-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                  <p className="text-gray-700 leading-relaxed line-clamp-6">
                    {testimonial.testimonial}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={prevSlide}
              disabled={currentIndex === 0}
              className="w-10 h-10 rounded-full bg-primary-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
              aria-label="Previous testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {Array.from({ length: totalPages }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-primary-600 w-8'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to page ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              disabled={currentIndex === totalPages - 1}
              className="w-10 h-10 rounded-full bg-primary-600 text-white disabled:bg-gray-300 disabled:cursor-not-allowed hover:bg-primary-700 transition-colors duration-300 flex items-center justify-center"
              aria-label="Next testimonials"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
