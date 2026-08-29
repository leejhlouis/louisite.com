'use client'

import { lazy, useRef } from 'react'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'
import useMounted from '@/hooks/useMounted'
import { RiArrowLeftLine } from '@remixicon/react'

const Button = lazy(() => import('@/components/ui/button/Button'))
const Heading1 = lazy(() => import('@/components/ui/heading/Heading1'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function NotFound() {
  const ref = useRef<HTMLDivElement>(null)

  useEventListener('mousemove', (e: Event): void => {
    if (!(e instanceof MouseEvent) || !ref.current) {
      return
    }
    const { clientX, clientY } = e
    ref.current.style.setProperty('--gradientPosition', `${clientX}px ${clientY}px`)
  })

  const mounted: boolean = useMounted()

  return (
    <div
      className={clsx({
        'animate-start': mounted
      })}
    >
      <div ref={ref} className='cursor-tracking-gradient'>
        <Section
          className='flex h-[90vh] flex-col justify-center md:items-center'
          maxWidthClass='md:max-w-screen-md'
        >
          <Heading1
            className={clsx(
              'animate-fade-in',
              'text-violet-950 dark:text-violet-50',
              'text-4xl md:text-center md:text-5xl'
            )}
          >
            The page is not available
          </Heading1>
          <p className={clsx('animate-fade-in', 'mb-4 text-lg md:text-center md:text-xl')}>
            Oh, snap! You're in the middle of nowhere, but don't worry, returning home is just one
            click away.
          </p>
          <Button icon={<RiArrowLeftLine />} className='animate-fade-in pl-1 md:mx-auto' href='/'>
            Go home
          </Button>
        </Section>
      </div>
    </div>
  )
}
