'use client'

import { RiArrowUpLine } from '@remixicon/react'
import Button from '@/components/ui/button/Button'

export default function BackToTop() {
  const scrollToTop = (): void => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <Button onClick={scrollToTop} icon={<RiArrowUpLine />}>
      Back to top
    </Button>
  )
}
