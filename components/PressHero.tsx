import React from 'react';
import { pressLogos } from '@/lib/pressData';

export default function PressHero() {
  return (
    <section className="suffesv3-banner press-hero-bg bg-slate-950 py-20 md:py-28">
      <div className="container">
        <div className="row centeralign relative">
          <div className="press-hero-news-logo flex flex-wrap gap-4 md:gap-6 justify-center md:justify-start mb-8">
            {pressLogos.map((logo) => (
              <img
                key={logo.src}
                className="img-responsive gb-blur-image w-16 h-16 object-contain"
                alt={logo.alt}
                width={70}
                height={70}
                src={logo.src}
                loading="lazy"
              />
            ))}
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12" />
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="suffesv3-banner-wrap text-right">
              <h1 className="suffesv3-main-heading text-white text-4xl md:text-5xl font-bold leading-tight">
                Suffescom
                <br />
                News
              </h1>
              <p className="suffesv3-sub-heading text-white/90 mb-3 text-lg">
                News & Press Releases
              </p>
              <p className="suffesv3-main-para text-white/80 text-base md:text-lg">
                Fantastic episode with Suffescom Solutions, Great insights on customer relationship
                and Key challenges of meeting large companies' expectations.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-md-12 col-xs-12">
            <div className="arrow-scroll-down text-center mt-10">
              <span className="press-scroll-btn inline-flex flex-col items-center gap-2 text-white/80">
                <a href="#press-main" className="inline-flex items-center justify-center">
                  <span className="mouse inline-flex items-center justify-center w-10 h-10 rounded-full border border-white/30">
                    <span className="text-2xl">&#x2193;</span>
                  </span>
                </a>
                <p className="text-sm uppercase tracking-widest text-white/80">scroll me</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
