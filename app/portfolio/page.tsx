'use client';

import React, { useState } from 'react';
import PortfolioBanner from '@/components/PortfolioBanner';
import PortfolioTabs from '@/components/PortfolioTabs';
import PortfolioGrid from '@/components/PortfolioGrid';
import { getPortfolioByCategory } from '@/lib/portfolioData';
import Footer from '@/components/Footer';

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState<string>('all');
  const portfolioItems = getPortfolioByCategory(activeTab);

  return (
    <>
      {/* Portfolio Page Main Content */}
      <main className="portfolio-page min-h-screen">
        {/* Banner Section */}
        <PortfolioBanner />

        {/* Tabs Section */}
        <div className="flex justify-center">
          <PortfolioTabs activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        {/* Portfolio Grid Section */}
        <div className="flex justify-center">
          <PortfolioGrid items={portfolioItems} />
        </div>
      </main>

    </>
  );
}
