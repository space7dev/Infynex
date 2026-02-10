import React from 'react';
import { partnerLogos } from '@/lib/partnersData';

export default function PartnersLogoWall() {
  const groups = [1, 2, 3];
  const groupedLogos = groups.map((size, index) => {
    const start = groups.slice(0, index).reduce((sum, count) => sum + count, 0);
    return partnerLogos.slice(start, start + size);
  });
  const remainingStart = groups.reduce((sum, count) => sum + count, 0);
  const remainingLogos = partnerLogos.slice(remainingStart);

  return (
    <section className="successful-blockchain-technologies customer-sec-padd-new pt-0">
      <div className="partners-content">
        <div className="container">
          <div className="row suffesv3-heading-bottom-padd">
            <div className="col-lg-12 col-xs-12 text-center">
              <h3 className="partners-section-title">Our Partners</h3>
            </div>
          </div>
          <div className="partners-row">
            {groupedLogos.map((group, groupIndex) => (
              <ul key={`partners-group-${groupIndex}`}>
                {group.map((logo) => (
                  <li key={logo.src}>
                    {logo.href ? (
                      <a
                        href={logo.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="partners-logo"
                          alt={logo.alt}
                          src={logo.src}
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        className="partners-logo"
                        alt={logo.alt}
                        src={logo.src}
                        loading="lazy"
                      />
                    )}
                  </li>
                ))}
              </ul>
            ))}
            {remainingLogos.length > 0 && (
              <ul>
                {remainingLogos.map((logo) => (
                  <li key={logo.src}>
                    {logo.href ? (
                      <a
                        href={logo.href}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                      >
                        <img
                          className="partners-logo"
                          alt={logo.alt}
                          src={logo.src}
                          loading="lazy"
                        />
                      </a>
                    ) : (
                      <img
                        className="partners-logo"
                        alt={logo.alt}
                        src={logo.src}
                        loading="lazy"
                      />
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
