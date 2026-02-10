"use client";

import React, { useEffect, useState } from 'react';
import PartnersHero from './components/PartnersHero'
import PartnersLogoWall from './components/PartnersLogoWall'
import SalesPartners from './components/SalesPartners'
import BecomePartner from './components/BecomePartner'
import PartnersModalForm from './components/PartnersModalForm'
import './partners.css';

export default function PartnersPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <main className="partners-page">
     
      <button
        type="button"
        className="partners-quick-quote-icon abvmobhide"
        aria-label="Chat Quotation"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          className="partners-quick-icon mobile_qoute"
          src="https://www.Infynex.com/assets/img/new_suffes_images/quotation.webp"
          alt="Chat Quotation"
        />
      </button>
      <PartnersHero onOpenModal={() => setIsModalOpen(true)} />
      <PartnersLogoWall />
      <SalesPartners />
      <BecomePartner />
      <div
        className={`partners-modal ${isModalOpen ? 'is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isModalOpen}
      >
        <div className="partners-modal-backdrop" onClick={() => setIsModalOpen(false)} />
        <div className="partners-modal-content" role="document">
          <button
            type="button"
            className="partners-modal-close"
            aria-label="Close modal"
            onClick={() => setIsModalOpen(false)}
          >
            ×
          </button>
          <div className="partners-modal-grid">
            <div className="partners-modal-copy">
              <h5>
                Rise Above the <br />
                <strong>
                  Ordinary, and <span>Rule the Market.</span>
                </strong>
              </h5>
              <div className="partners-modal-logos">
                <h6>We are trusted by the best in the world.</h6>
                <div className="partners-modal-badges">
                  <img
                    src="https://www.Infynex.com/assets/img/icons/clutch-2025.webp"
                    alt="Clutch 2025 Logo"
                    loading="lazy"
                  />
                  <img
                    src="https://www.Infynex.com/assets/img/icons/popup-g2-leader.webp"
                    alt="G2 2025 Logo"
                    loading="lazy"
                  />
                  <img
                    src="https://www.Infynex.com/assets/img/new_suffes_images/good-firms.webp"
                    alt="Good Firms Logo"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
            <div className="partners-modal-form">
              <h4>Get Free Consultation From Top Industry Experts</h4>
              <PartnersModalForm />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
