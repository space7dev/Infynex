import React from 'react';
import { PressItem } from '@/lib/pressData';

interface PressCardProps {
  item: PressItem;
}

export default function PressCard({ item }: PressCardProps) {
  return (
    <li>
      <a
        target="_blank"
        href={item.href}
        rel="noopener noreferrer nofollow"
        className="suffesv3-btn block bg-white border border-slate-200 rounded-2xl p-4 shadow-sm hover:border-slate-300 hover:shadow-md transition"
      >
        <div className="flex-instacart-three-layout-inner">
          <div className="flex-instacart-three-layout-inner-overhiden text-center mb-3 overflow-hidden rounded-xl">
            <img
              alt={item.imageAlt}
              className="img-responsive gb-blur-image w-full h-44 object-cover"
              width={500}
              height={233}
              src={item.image}
              loading="lazy"
            />
          </div>
          <div className="flex-instacart-three-layout-inner-content">
            <h2 className="suffesv3-sub-heading text-left text-slate-900 text-base md:text-lg font-semibold">
              {item.title}
            </h2>
          </div>
          <div className="know-more-btn mt-3">
            <span className="press-cta inline-flex items-center gap-2 text-amber-600 text-sm font-semibold">
              <span>View Press</span>
              <span className="text-lg">&#x2192;</span>
            </span>
          </div>
        </div>
      </a>
    </li>
  );
}
