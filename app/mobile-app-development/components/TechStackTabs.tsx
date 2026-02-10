'use client'

import { useMemo, useState } from 'react'

type TechItem = {
  name: string
  icon: string
}

type TechTab = {
  id: string
  label: string
  items: TechItem[]
}

type TechStackTabsProps = {
  tabs: TechTab[]
}

export default function TechStackTabs({ tabs }: TechStackTabsProps) {
  const [activeTabId, setActiveTabId] = useState(tabs[0]?.id ?? '')
  const activeTab = useMemo(
    () => tabs.find((tab) => tab.id === activeTabId) ?? tabs[0],
    [tabs, activeTabId]
  )

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-3">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTabId(tab.id)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                isActive
                  ? 'bg-white text-secondary-900'
                  : 'border border-white/30 text-white hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          )
        })}
      </div>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {activeTab?.items.map((item) => (
          <div
            key={item.name}
            className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-center"
          >
            <img src={item.icon} alt={item.name} className="h-12 w-12" loading="lazy" />
            <p className="text-sm font-semibold text-white">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
