'use client'

import Section from '@/components/layouts/Section'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import ComponentProps from '@/types/components/ComponentProps'
import clsx from 'clsx'

export default function FadeInSection({
  className = '',
  children,
  maxWidthClass
}: ComponentProps & {
  maxWidthClass?: string
}): JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <Section className={clsx(animationClass, className)} maxWidthClass={maxWidthClass}>
      {children}
    </Section>
  )
}
