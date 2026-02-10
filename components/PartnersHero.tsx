import React from 'react';

interface PartnersHeroProps {
  onOpenModal?: () => void;
}

export default function PartnersHero({ onOpenModal }: PartnersHeroProps) {
  return (
    <section className="partners-hero suffesv3-banner partnership-banner-bg mb-3">
      <div className="container">
        <div className="row centeralign">
          <div className="col-lg-6 col-md-6 col-xs-12">
            <div className="suffesv3-banner-wrap">
              <h1 className="partners-hero-title">
                <span>Our Partners</span>
              </h1>
              <p className="partners-hero-subtext">
                Our commitment to serving our clients with best services has let us become a
                trusted partner.
              </p>
              <img
                className="partnership-line mb-3"
                alt="partnership line"
                src="/leading/line.webp"
                loading="lazy"
              />
              {/* <button
                type="button"
                className="partners-hero-cta"
                onClick={onOpenModal}
              >
                Get Matched
              </button> */}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-xs-12 text-center partnership-banner-img">
            <img
              className="img-responsive partners-hero-image"
              width={300}
              height={310}
              alt="Our Partners"
              src="/parterners/1.webp"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
