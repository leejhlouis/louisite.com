'use client'

import { RiArrowUpLine } from '@remixicon/react'
import { lazy } from 'react'

const PrimaryButton = lazy(() => import('@/components/ui/button/PrimaryButton'))

export default function BackToTop(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <PrimaryButton
      onClick={scrollToTop}
      className='mx-auto mb-6'
      icon={<RiArrowUpLine />}
    >
      Back to top
    </PrimaryButton>
  )
}