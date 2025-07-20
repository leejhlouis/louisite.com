'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function HighlightText({ children }: ComponentProps) {
  const ref = useRef<HTMLLinkElement>(null)
  const [degree, setDegree] = useState<number>(0)

  useEffect((): (() => void) => {
    const interval = setInterval((): void => {
      setDegree((degree + 15) % 360)
      if (ref.current) {
        ref.current.style.backgroundImage = `linear-gradient(${degree}deg, var(--tw-gradient-stops))`
      }
    }, 75)
    return (): void => clearInterval(interval)
  })

  return (
    <span
      ref={ref}
      className={clsx(
        'from-fuchsia-700 to-indigo-700 bg-clip-text',
        'dark:from-fuchsia-400 dark:to-blue-400',
        'text-transparent transition'
      )}
    >
      {children}
    </span>
  )
}
