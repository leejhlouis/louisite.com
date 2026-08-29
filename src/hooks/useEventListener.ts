'use client'
import { type RefObject, useEffect, useRef } from 'react'

export default function useEventListener<K extends keyof WindowEventMap>(
  eventType: K,
  listener: (event: WindowEventMap[K]) => void,
  element?: RefObject<HTMLElement | null>
): void {
  const listenerRef = useRef(listener)
  listenerRef.current = listener

  useEffect(() => {
    const el = element?.current ?? window
    const handleEvent = (event: Event) => listenerRef.current(event as WindowEventMap[K])

    el.addEventListener(eventType, handleEvent)
    return () => el.removeEventListener(eventType, handleEvent)
  }, [element, eventType])
}
