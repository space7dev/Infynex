import React from 'react';
import { pressItems } from '@/lib/pressData';
import PressCard from './PressCard';

export default function PressList() {
  return (
    <section
      className="customer-sec-padd-new flex-instacart-three-layout bg-white py-16"
      id="press-main"
    >
      <div className="container">
        <div className="row centeralign">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 flex justify-center">
            <ul className="flex-center-list press-main press-main-remove-hover inline-grid gap-6 md:grid-cols-2 lg:grid-cols-3 justify-items-center">
              {pressItems.map((item) => (
                <PressCard key={item.href} item={item} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
