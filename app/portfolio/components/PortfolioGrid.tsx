import React from 'react';
import PortfolioCard from './PortfolioCard';
import { PortfolioItem } from '@/lib/portfolioData';

interface PortfolioGridProps {
  items: PortfolioItem[];
}

export default function PortfolioGrid({ items }: PortfolioGridProps) {
  return (
    <section className="customer-sec-padd-new portfolio-grid-section py-16">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div className="tab-content">
              <div className="tab-pane fade in active">
                <div className="row centeralign">
                  <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ul className="flex-center-list Infynex-portfolios-list flex flex-col gap-8">
                      {items.length > 0 ? (
                        items.map((item) => (
                          <PortfolioCard
                            key={item.id}
                            logo={item.logo}
                            title={item.title}
                            subtitle={item.subtitle}
                            description={item.description}
                            image={item.image}
                            ratings={item.ratings}
                            downloads={item.downloads}
                            caseStudyLink={item.caseStudyLink}
                            technologies={item.technologies}
                            isVideo={item.isVideo}
                          />
                        ))
                      ) : (
                        <div className="col-lg-12 text-center py-12">
                          <p className="text-gray-600 text-lg font-semibold">
                            No portfolio items found in this category.
                          </p>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
