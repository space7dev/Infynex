import React from 'react';
import { AwardsItem } from '@/lib/awardsData';

interface AwardsGridSectionProps {
  title: string;
  subtitle: string;
  description: string;
  items: AwardsItem[];
}

export default function AwardsGridSection({
  title,
  subtitle,
  description,
  items,
}: AwardsGridSectionProps) {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-16 md:py-20">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            'radial-gradient(circle at 20% 20%, rgba(15, 23, 42, 0.08), transparent 40%), radial-gradient(circle at 80% 60%, rgba(15, 23, 42, 0.05), transparent 45%), linear-gradient(135deg, rgba(15, 23, 42, 0.06) 0%, rgba(15, 23, 42, 0) 55%)',
        }}
      />
      <div className="container-custom relative">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h2>
          <h3 className="mt-2 text-lg md:text-xl text-slate-700">{subtitle}</h3>
          <p className="mt-4 text-base md:text-lg text-slate-600">
            {description}
          </p>
        </div>
        <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <li key={item.alt}>
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-amber-200 bg-white px-5 py-6 text-center shadow-sm transition hover:border-amber-300 hover:shadow-md">
                <img
                  alt={item.alt}
                  className="mb-4 h-16 w-auto"
                  src={item.src}
                  loading="lazy"
                />
                <h4 className="text-sm md:text-base text-slate-700">{item.title}</h4>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
