'use client'

import { useMemo, useState } from 'react'

type GeoLocation = {
  id: string
  label: string
  title: string
  description: string
  link?: string
}

type GeoTabsProps = {
  locations: GeoLocation[]
}

export default function GeoTabs({ locations }: GeoTabsProps) {
  const [activeId, setActiveId] = useState(locations[0]?.id ?? '')
  const activeLocation = useMemo(
    () => locations.find((location) => location.id === activeId) ?? locations[0],
    [locations, activeId]
  )

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Regions
        </p>
        <div className="flex flex-col gap-2">
          {locations.map((location) => (
            <button
              key={location.id}
              type="button"
              onClick={() => setActiveId(location.id)}
              className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                location.id === activeId
                  ? 'bg-white text-secondary-900'
                  : 'bg-white/5 text-white hover:bg-white/15'
              }`}
            >
              {location.label}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
        <h3 className="text-2xl font-semibold text-white">
          {activeLocation?.link ? (
            <a href={activeLocation.link} target="_blank" rel="noreferrer">
              {activeLocation.title}
            </a>
          ) : (
            activeLocation?.title
          )}
        </h3>
        <p className="mt-3 text-white/70">{activeLocation?.description}</p>
      </div>
    </div>
  )
}
