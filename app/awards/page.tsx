import React from 'react';
import AwardsHero from '@/components/AwardsHero';
import AwardsFeatured from '@/components/AwardsFeatured';
import AwardsGridSection from '@/components/AwardsGridSection';
import AwardsCta from '@/components/AwardsCta';
import AwardsHighlight from '@/components/AwardsHighlight';
import Footer from '@/components/Footer';
import {
  blockchainAwards,
  mobileAwards,
  awardsHighlights,
} from '@/lib/awardsData';

export default function AwardsPage() {
  return (
    <main className="awards-page">
      <AwardsHero />
      <AwardsFeatured />
      <AwardsGridSection
        title="Blockchain Awards"
        subtitle="Blockchain Excellence Recognized Worldwide"
        description="Infynex Solutions has been a pioneer in blockchain technology - delivering cutting-edge decentralized applications, crypto platforms, and Web3 ecosystems. Our innovation and reliability have earned us recognition from global rating platforms."
        items={blockchainAwards}
      />
      <AwardsCta />
      <AwardsGridSection
        title="Mobile App Awards"
        subtitle="Award-Winning Mobile App Development"
        description="From idea to app store success - our mobile app solutions are known for performance, design, and innovation. Recognized by top platforms for delivering feature-rich, scalable, and user-centric apps."
        items={mobileAwards}
      />
      <section className="bg-slate-50 py-12">
        <div className="container-custom">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              We Are Trusted, Rated, and Featured Across Top Global Technology Platforms
            </h2>
          </div>
        </div>
      </section>
      <AwardsHighlight highlight={awardsHighlights[0]} />
      <AwardsHighlight highlight={awardsHighlights[1]} reverse />
      <AwardsHighlight highlight={awardsHighlights[2]} />
    </main>
  );
}
