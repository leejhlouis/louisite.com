'use client'

import { useEffect, useState } from 'react'
import ComponentProps from '@/types/components/ComponentProps'

export default function HighlightText({ children }: ComponentProps) {
  const [degree, setDegree] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      setDegree(current => (current + 15) % 360)
    }, 75)

    return () => window.clearInterval(interval)
  }, [])

  return (
    <span
      className='bg-clip-text text-transparent'
      style={{
        backgroundImage: `linear-gradient(${degree}deg, rgb(var(--highlight-from)), rgb(var(--highlight-to)))`
      }}
    >
      {children}
    </span>
  )
}
