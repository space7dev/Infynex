import React from 'react';

export default function AwardsCta() {
  return (
    <section className="bg-white py-16 md:py-20">
      <div className="container-custom">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="text-center">
            <img
              src="/awards/block awards/winning.webp"
              alt="Infynex award certificate"
              width={555}
              height={402}
              className="mx-auto rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left">
            <h3 className="text-3xl md:text-4xl font-bold text-slate-900">
              Let\'s Build Your Award Winning Product Together.
            </h3>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              From concept to recognition - we transform ideas into products that make an impact.
              Join hands with a team that has already been recognized by Clutch, G2, and DesignRush.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
