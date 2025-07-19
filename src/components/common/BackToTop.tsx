'use client'

import { lazy } from 'react'

const PrimaryButton = lazy(() => import('@/components/ui/button/PrimaryButton'))
const ArrowUpSLineIcon = lazy(() => import('remixicon-react/ArrowUpSLineIcon'))

export default function BackToTop(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <PrimaryButton
      onClick={scrollToTop}
      className='mx-auto mb-6'
      icon={<ArrowUpSLineIcon />}
    >
      Back to top
    </PrimaryButton>
  )
}