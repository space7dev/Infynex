import React from 'react';

interface PortfolioCardProps {
  logo: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ratings?: string;
  downloads?: string;
  caseStudyLink?: string;
  technologies?: string[];
  isVideo?: boolean;
}

export default function PortfolioCard({
  logo,
  title,
  subtitle,
  description,
  image,
  ratings,
  downloads,
  caseStudyLink,
  technologies,
  isVideo = false,
}: PortfolioCardProps) {
  return (
    <li className="w-full">
      <div className="Infynex-portfolios-list-sec-wrap flex flex-col md:flex-row gap-6 bg-white rounded-lg shadow-lg overflow-hidden p-6 hover:shadow-xl transition">
        {/* Left Content Section */}
        <div className="Infynex-new-portfolio-content flex-1">
          {/* Logo/Image Header */}
          <div className="new-uae-port-app-details mb-4">
            {logo && (
              <img
                src={logo}
                alt={title}
                className="img-responsive gb-blur-image w-20 h-20 object-contain mb-3"
                loading="lazy"
              />
            )}
            <h4 className="suffesv3-main-heading text-3xl font-bold mt-2 text-gray-900">
              {title}
            </h4>
            <h5 className="suffesv3-sub-heading text-xl mt-1 text-gray-600">
              {subtitle}
            </h5>
          </div>

          {/* Description */}
          <p className="suffesv3-sub-para mt-3 text-xl text-gray-700 leading-relaxed">
            {description}
          </p>

          {/* Ratings and Downloads */}
          {(ratings || downloads) && (
            <ul className="Infynex-app-stacks flex gap-8 mt-4">
              {ratings && (
                <li>
                  <div className="Infynex-app-stacks-wrap">
                    <h6 className="suffesv3-sub-heading font-bold text-lg">
                      {ratings}
                    </h6>
                    <p className="suffesv3-sub-para text-sm text-gray-600">
                      Avg. Ratings
                    </p>
                  </div>
                </li>
              )}
              {downloads && (
                <li>
                  <div className="Infynex-app-stacks-wrap">
                    <h6 className="suffesv3-sub-heading font-bold text-lg">
                      {downloads}
                    </h6>
                    <p className="suffesv3-sub-para text-sm text-gray-600">
                      Downloads
                    </p>
                  </div>
                </li>
              )}
            </ul>
          )}

          {/* Technologies Stack */}
          {technologies && technologies.length > 0 && (
            <div className="mt-6">
              <h6 className="suffesv3-sub-heading font-semibold mb-3 text-gray-900">
                Technology
              </h6>
              <ul className="Infynex-new-portfolio-tech-list flex flex-wrap gap-2">
                {technologies.map((tech, idx) => (
                  <li key={idx} className="bg-gray-100 rounded px-3 py-1">
                    <img
                      src={`https://www.Infynex.com/assets/img/portfolio/${tech
                        .toLowerCase()
                        .replace(/[.\s]/g, '-')}-icon.webp`}
                      alt={tech}
                      className="w-10 h-10 object-contain"
                      loading="lazy"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Case Study Link */}
          {caseStudyLink && (
            <div className="Infynex-new-portfolio-mobiles-btns mt-6">
              <a
                href={caseStudyLink}
                className="suffesv3-themebtn inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Case Study
              </a>
            </div>
          )}
        </div>

        {/* Right Image/Video Section */}
        <div className="Infynex-new-portfolio-img flex-1 flex items-center justify-center">
          {isVideo ? (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="gb-blur-video w-1/2 h-auto rounded-lg object-cover"
            >
              <source src={image} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={image}
              alt={title}
              className="img-responsive gb-blur-image w-1/2 h-auto rounded-lg"
              loading="lazy"
            />
          )}
        </div>
      </div>
    </li>
  );
}
