'use client'
import { RefObject, useEffect } from 'react'

export default function useEventListener(
  eventType: string,
  listener: (e: Event) => void,
  element?: RefObject<HTMLElement>
): void {
  useEffect(() => {
    const el = element?.current ?? window
    if (!el?.addEventListener) return

    el.addEventListener(eventType, listener)
    return () => {
      el.removeEventListener(eventType, listener)
    }
  }, [element, eventType, listener])
}
