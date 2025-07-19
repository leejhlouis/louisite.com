'use client'

import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import HeroContent from '@/components/home/HeroContent'

const ArrowDownSLineIcon = lazy(() => import('remixicon-react/ArrowDownSLineIcon'))
const PrimaryButton = lazy(() => import('@/components/ui/button/PrimaryButton'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Hero(): JSX.Element {
  const { animationClass } = useFadeInMounted()
  const scrollToProjects = (): void => window.location.assign('#projects')

  return (
    <Section
      className={clsx(animationClass, 'flex h-[88vh] min-h-[480px] flex-col justify-between')}
    >
      <HeroContent />
      <PrimaryButton
        className='mx-auto animate-bounce'
        icon={<ArrowDownSLineIcon />}
        onClick={scrollToProjects}
      >
        Featured projects
      </PrimaryButton>
    </Section>
  )
}
