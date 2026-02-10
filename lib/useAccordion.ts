'use client'

import { useState } from 'react'

type UseAccordionResult = {
  openIndex: number | null
  toggleIndex: (index: number) => void
  setOpenIndex: (index: number | null) => void
}

export const useAccordion = (initialIndex: number | null = 0): UseAccordionResult => {
  const [openIndex, setOpenIndex] = useState<number | null>(initialIndex)

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index))
  }

  return { openIndex, toggleIndex, setOpenIndex }
}
