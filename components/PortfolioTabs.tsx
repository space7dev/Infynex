import React, { type ReactNode } from 'react';

interface PortfolioTabsProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function PortfolioTabs({ activeTab, onTabChange }: PortfolioTabsProps) {
  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'ai', label: 'AI' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'metaverse', label: 'Metaverse' },
  ];

  return (
    <section className="customer-sec-padd-new pt-0 pb-8">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-xs-12">
            <ul className="new-apps-tab-layout transparent-bg all-new-portfolio flex flex-wrap gap-2 md:gap-4 border-b-2 border-gray-300">
              {tabs.map((tab) => (
                <li key={tab.id} className="list-none">
                  <button
                    onClick={() => onTabChange(tab.id)}
                    className={`px-4 md:px-6 py-3 text-sm md:text-base font-semibold transition-all whitespace-nowrap ${
                      activeTab === tab.id
                        ? 'text-blue-600 border-b-4 border-blue-600 -mb-2'
                        : 'text-gray-700 hover:text-blue-600 active:text-blue-600'
                    }`}
                    style={{width:'290px'}}
                  >
                    {tab.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
