'use client'

import { useMemo, useState } from 'react'

type VideoOption = {
  label: string
  src: string
}

type IndustryTab = {
  id: string
  label: string
  blurb?: string
  videos: VideoOption[]
}

type IndustryVideoTabsProps = {
  tabs: IndustryTab[]
  ctaText?: string
}

export default function IndustryVideoTabs({ tabs, ctaText }: IndustryVideoTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '')
  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [tabs, activeTabId]
  )
  const [activeVideoIndex, setActiveVideoIndex] = useState(0)

  const videos = activeTab?.videos ?? []
  const activeVideo = videos[activeVideoIndex] ?? videos[0]

  return (
    <div className="grid gap-10 lg:grid-cols-[260px_1fr]">
      <div className="rounded-3xl border border-white/20 bg-white/10 p-5 backdrop-blur">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Industries
        </p>
        <div className="flex flex-col gap-2">
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => {
                  setActiveTabId(tab.id)
                  setActiveVideoIndex(0)
                }}
                className={`rounded-xl px-4 py-3 text-left text-sm font-semibold transition ${
                  isActive
                    ? 'bg-white text-secondary-900'
                    : 'bg-white/5 text-white hover:bg-white/15'
                }`}
              >
                {tab.label}
              </button>
            )}
          )}
        </div>
        {ctaText ? (
          <button
            type="button"
            className="mt-6 w-full rounded-full border border-white/40 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/20"
          >
            {ctaText}
          </button>
        ) : null}
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-transparent p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-semibold text-white">{activeTab?.label}</h3>
          {activeTab?.blurb ? <p className="mt-2 text-white/70">{activeTab.blurb}</p> : null}
        </div>
        {activeVideo ? (
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-black/40">
            <iframe
              className="aspect-video w-full"
              src={activeVideo.src}
              title={activeVideo.label}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        ) : null}
        {videos.length > 1 ? (
          <div className="mt-4 flex flex-wrap gap-3">
            {videos.map((video, index) => (
              <button
                key={video.label}
                type="button"
                onClick={() => setActiveVideoIndex(index)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition ${
                  index === activeVideoIndex
                    ? 'bg-white text-secondary-900'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                {video.label}
              </button>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  )
}
