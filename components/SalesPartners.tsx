import React from 'react';
import { salesPartners } from '@/lib/partnersData';

export default function SalesPartners() {
  return (
    <section className="successful-blockchain-technologies customer-sec-padd-new pt-0">
      <div className="container">
        <div className="row suffesv3-heading-bottom-padd">
          <div className="col-lg-12 col-xs-12 text-center">
            <h3 className="partners-section-title">Our Sales Partners</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <ul className="flex-center-list sales-partner-grid">
              {salesPartners.map((partner) => (
                <li key={partner.name}>
                  <div className="successful-blockchain-technologies-wrap">
                    <img
                      alt={partner.alt}
                      className="img-responsive partners-sales-logo"
                      width={253}
                      height={58}
                      src={partner.logo}
                      loading="lazy"
                    />
                    <h4 className="suffesv3-sub-heading">
                      <a href={partner.href} target="_blank" rel="noopener noreferrer">
                        {partner.name}
                      </a>
                    </h4>
                    <p className="suffesv3-sub-para">{partner.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
