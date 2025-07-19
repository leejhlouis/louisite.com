'use client'

import useIntersectionObserver from "@/hooks/useIntersectionObserver"
import { useRef } from "react"

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, (): void => {
    ref.current?.classList.add('animate-start')
  })

  return <div ref={ref}>{children}</div>
}
