'use client'

import Section from '@/components/layouts/Section'
import useIntersectionObserver from '@/hooks/useIntersectionObserver'
import ComponentProps from '@/types/components/ComponentProps'
import { RefObject, useRef } from 'react'

export default function AnimatedSection({ id = '', className = '', children }: ComponentProps) {
  const ref = useRef<HTMLDivElement>(null) as RefObject<HTMLDivElement> | null
  useIntersectionObserver(ref, (): void => {
    ref?.current?.classList.add('animate-start')
  })

  return (
    <div ref={ref}>
      <Section id={id} className={className}>{children}</Section>
    </div>
  )
}
  