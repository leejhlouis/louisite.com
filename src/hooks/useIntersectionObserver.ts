'use client'
import { useState, useEffect, RefObject } from 'react'

export default function useIntersectionObserver(
  ref: RefObject<HTMLElement> | null,
  onIntersection: () => void
): void {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false)

  useEffect((): (() => void) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting)
      },
      { rootMargin: '-100px' }
    )
    const element = ref?.current
    if (element) observer.observe(element)
    return (): void => observer.disconnect()
  }, [isIntersecting, ref])

  useEffect((): void => {
    if (ref?.current && isIntersecting) {
      onIntersection()
    }
  }, [isIntersecting, onIntersection, ref])
}
