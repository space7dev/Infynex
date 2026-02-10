'use client';

import { useState } from 'react';
import Image from 'next/image';

interface VideoTestimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  description: string;
  image: string;
  videoUrl: string;
  caseStudyUrl?: string;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Moonie Lantion",
    position: "Director - (DTP) NBCUniversal Media",
    company: "NBCUniversal",
    description: "I will give a 5/5 rating to the entire team for their professional technical skills, communication, and speed.",
    image: "/testimonials/1.webp",
    videoUrl: "https://www.youtube.com/embed/AdUtIxL9z3I?si=iafLlAIV3ia-FMI_",
    // caseStudyUrl: "/case-studies/nbc-universal"
  },
  {
    id: 2,
    name: "Reginald Lee",
    position: "SetvrXl unleashed",
    company: "SetvrXl",
    description: "Kudos to the game developers at Infynex, who made the entire development experience incredible.",
    image: "/testimonials/2.webp",
    videoUrl: "https://www.youtube.com/embed/eG5g6QxCNEw",
    // caseStudyUrl: "/case-studies/setvrx"
  },
  {
    id: 3,
    name: "Yuriy Biriukov",
    position: "Kucher",
    company: "Kucher",
    description: "Infynex deployed my application within the deadline. They indeed possess the needed app development expertise.",
    image: "/testimonials/3.webp",
    videoUrl: "https://www.youtube.com/embed/L7lqp6SxQsc?si=MfxN3E6V1toAu6tZ",
    // caseStudyUrl: "/case-studies/kucher"
  },
  {
    id: 4,
    name: "Israel Miller",
    position: "DELIVIT",
    company: "DELIVIT",
    description: "Delivered the best-in-class application of the highest degree at cost-effective prices. Incredible team with solid expertise!",
    image: "/testimonials/4.webp",
    videoUrl: "https://www.youtube.com/embed/_gh28sQZSUQ",
    // caseStudyUrl: "/case-studies/delivit"
  },
  {
    id: 5,
    name: "Bruno Tackon",
    position: "Petitplya",
    company: "Petitplya",
    description: "Infynex is a reliable digital marketing company that boosted our website traffic. Their expertise delivers exceptional results!",
    image: "/testimonials/5.webp",
    videoUrl: "https://www.youtube.com/embed/EWvUu8oqFpM?si=KiufOmeM-ODrwFYC",
    // caseStudyUrl: "/case-studies/petitpyla"
  },
  {
    id: 6,
    name: "Osama Abdul",
    position: "Taxi App",
    company: "Taxi App",
    description: "In the beginning, it was not at all cost-effective to hire workers 24*7 for taxi dispatches.",
    image: "/testimonials/16.webp",
    videoUrl: "https://player.vimeo.com/video/813165700?h=7f3ba67c22&badge=0&autopause=0&player_id=0&app_id=58479;autoplay=true",
    // caseStudyUrl: "/case-studies/bitaksi"
  },
  {
    id: 7,
    name: "David Colorado",
    position: "Founder",
    company: "Unity",
    description: "Initially, it was challenging to decide the best mobile app development company among Millions.",
    image: "/testimonials/7.webp",
    videoUrl: "https://player.vimeo.com/video/738511145?h=729b5487e6&badge=0&autopause=0&player_id=0&app_id=58479;autoplay=true",
    // caseStudyUrl: "/case-studies/unity"
  },
  {
    id: 8,
    name: "Jeffry J. O.",
    position: "1TimeShop",
    company: "1TimeShop",
    description: "The project manager is available as and when required to handle issues and guide for new functionalities added.",
    image: "/testimonials/18.webp",
    videoUrl: "https://player.vimeo.com/video/799774011?h=86a7246eff&badge=0&autopause=0&player_id=0&app_id=58479",
    // caseStudyUrl: "/case-studies/1timeshop"
  },
  {
    id: 9,
    name: "Scott Jutras",
    position: "My Pet Code",
    company: "My Pet Code",
    description: "I know what I exactly need, and the developer does what I expect and finish the project in the timeline.",
    image: "/testimonials/9.webp",
    videoUrl: "https://player.vimeo.com/video/219483355?title=1&byline=1&portrait=1&autoplay=true",
    // caseStudyUrl: "/case-studies/mypetcode"
  },
  {
    id: 10,
    name: "Jose Rosa",
    position: "Wristband Buddy",
    company: "Wristband Buddy",
    description: "Platform designed for awareness, promotions, celebrations as fashion statements.",
    image: "/testimonials/17.webp",
    videoUrl: "https://player.vimeo.com/video/219344922?title=1&byline=1&portrait=1&autoplay=true",
    // caseStudyUrl: "/case-studies/wristbandbuddy"
  },
  {
    id: 11,
    name: "Charlie and Arienne Williams",
    position: "Kinktok",
    company: "Kinktok",
    description: "Time to thank the Infynex Solutions development team for helping us to create the KinkTok app.",
    image: "/testimonials/11.webp",
    videoUrl: "https://player.vimeo.com/video/744454149?title=1&byline=1&portrait=1&autoplay=true",
    // caseStudyUrl: "/case-studies/kinktok"
  },
  {
    id: 12,
    name: "Stanley Jean",
    position: "JEAN GILLES CAPITAL",
    company: "JEAN GILLES CAPITAL",
    description: "Found Infynex Solutions on Google to try for my first project, and they reverted in a timely manner that I highly appreciate.",
    image: "/testimonials/12.webp",
    videoUrl: "https://player.vimeo.com/video/740988559?h=448b5f4c4f&badge=0&autopause=0&player_id=0&app_id=58479;autoplay=true",
    // caseStudyUrl: "/case-studies/jean-gilles-capital"
  }
];

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

function VideoModal({ isOpen, onClose, videoUrl }: VideoModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white text-4xl hover:text-gray-300"
          aria-label="Close video"
        >
          ×
        </button>
        <div className="relative pt-[56.25%]">
          <iframe
            src={videoUrl}
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default function VideoTestimonials() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  return (
    <>
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
              Testimonials
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Words Portraying Our Client&apos;s Experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-64 cursor-pointer group" onClick={() => setSelectedVideo(testimonial.videoUrl)}>
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                 
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{testimonial.name}</h3>
                  <h5 className="text-sm font-medium text-primary-600 mb-3">{testimonial.position}</h5>
                  <p className="text-gray-600 mb-4 line-clamp-3">{testimonial.description}</p>

                  <div className="flex gap-3">
                    {testimonial.caseStudyUrl && (
                      <a
                        href={testimonial.caseStudyUrl}
                        className="text-sm font-medium text-primary-600 hover:text-primary-700 underline"
                      >
                        Case Study
                      </a>
                    )}
                    <button
                      onClick={() => setSelectedVideo(testimonial.videoUrl)}
                      className="text-sm font-medium text-secondary-600 hover:text-secondary-700 flex items-center gap-1"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                      Watch Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        isOpen={selectedVideo !== null}
        onClose={() => setSelectedVideo(null)}
        videoUrl={selectedVideo || ''}
      />
    </>
  );
}
