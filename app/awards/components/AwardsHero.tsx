import React from 'react';

export default function AwardsHero() {
  return (
    <section
      className="relative overflow-hidden bg-white py-20 md:py-28 ]"
      style={{
        backgroundImage:
          'radial-gradient(700px 320px at 70% 20%, rgba(255, 200, 120, 0.32), transparent 60%), radial-gradient(520px 260px at 18% 75%, rgba(255, 170, 120, 0.22), transparent 60%), radial-gradient(360px 220px at 85% 80%, rgba(255, 220, 170, 0.2), transparent 65%), linear-gradient(180deg, #fff7ed 0%, #ffffff 60%, #f8fafc 100%)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="container-custom ">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
            Where Innovation Meets Recognition.
          </h1>
          <p className="mt-4 text-base md:text-lg text-slate-700">
            Building Future With Excellence - Recognized by the World\'s Leading Platforms.
          </p>
          <p className="mt-3 text-base md:text-lg text-slate-600">
            We are honored to be acknowledged by global industry leaders for our innovation in
            blockchain and mobile app development. Each award is a milestone of trust and
            dedication from our clients worldwide.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center justify-center rounded-full bg-amber-500 px-7 py-3 text-sm md:text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition hover:bg-amber-400"
          >
            Explore Our Achievements
          </a>
        </div>
      </div>
    </section>
  );
}
