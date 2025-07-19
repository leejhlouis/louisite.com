'use client'
import { useState } from 'react'
import useMounted from '@/hooks/useMounted'
import useEventListener from '@/hooks/useEventListener'

export default function useFadeInMounted(): {
  animationClass: Record<string, boolean>
} {
  const mounted: boolean = useMounted()
  const [hasScrolledToTop, setHasScrolledToTop] = useState<boolean>(false)

  useEventListener('scroll', (): void => {
    if (hasScrolledToTop) {
      return
    }
    setHasScrolledToTop(mounted && window.scrollY <= 25)
  })

  const animationClass = {
    'animate-start': mounted || hasScrolledToTop
  }

  return { animationClass }
}
