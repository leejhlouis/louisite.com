'use client'

import { RiArrowUpLine } from '@remixicon/react'
import { lazy } from 'react'

const Button = lazy(() => import('@/components/ui/button/Button'))

export default function BackToTop() {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <Button onClick={scrollToTop} icon={<RiArrowUpLine />}>
      Back to top
    </Button>
  )
}
