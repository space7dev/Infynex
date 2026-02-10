import React from 'react';
import { featuredLogos } from '@/lib/awardsData';

export default function AwardsFeatured() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
            Featured In & Partnered With
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            Our continuous innovation has earned us mentions in reputed media and technology
            publications across the world.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-10 gap-y-8">
          {featuredLogos.map((logo) => (
            <img
              key={logo.src}
              alt={logo.alt}
              className="h-10 md:h-14 lg:h-16 w-auto opacity-90 hover:opacity-100 transition"
              src={logo.src}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
