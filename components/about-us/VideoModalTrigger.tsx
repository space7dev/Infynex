'use client';

import { useState } from 'react';

interface VideoModalTriggerProps {
  label: string;
  videoUrl: string;
  className?: string;
  asLink?: boolean;
}

export default function VideoModalTrigger({
  label,
  videoUrl,
  className,
  asLink = false,
}: VideoModalTriggerProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className={
          className ||
          (asLink
            ? 'text-primary-600 underline underline-offset-4 hover:text-primary-700'
            : 'inline-flex items-center gap-2 rounded-md bg-primary-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary-700')
        }
      >
        {label}
      </button>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-4xl overflow-hidden rounded-xl bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="absolute right-4 top-3 text-3xl text-white/80 hover:text-white"
              aria-label="Close video"
            >
              ×
            </button>
            <div className="relative w-full pt-[56.25%]">
              <iframe
                src={videoUrl}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                referrerPolicy="strict-origin-when-cross-origin"
                title={label}
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
