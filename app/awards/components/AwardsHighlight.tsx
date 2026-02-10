import React from 'react';
import { AwardsHighlight as AwardsHighlightType } from '@/lib/awardsData';

interface AwardsHighlightProps {
  highlight: AwardsHighlightType;
  reverse?: boolean;
}

export default function AwardsHighlight({ highlight, reverse = false }: AwardsHighlightProps) {
  return (
    <section className="bg-slate-50 py-16 md:py-20">
      <div className="container-custom">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className={`text-center ${reverse ? 'md:order-2' : ''}`}>
            <img
              src={highlight.image}
              alt={highlight.imageAlt}
              width={555}
              height={514}
              className="mx-auto rounded-xl shadow-lg"
              loading="lazy"
            />
          </div>
          <div className={`${reverse ? 'md:order-1' : ''} text-center md:text-left`}>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
              {highlight.title}
            </h2>
            <p className="mt-4 text-base md:text-lg text-slate-600">
              {highlight.description}{' '}
              {highlight.link && (
                <a
                  href={highlight.link.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="underline hover:text-slate-900"
                >
                  {highlight.link.text}
                </a>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
