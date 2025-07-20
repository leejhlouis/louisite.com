'use client'

import { lazy, useState } from 'react'
import clsx from 'clsx'
import useEventListener from '@/hooks/useEventListener'
import { RiArrowUpFill } from '@remixicon/react'

const IconButton = lazy(() => import('@/components/ui/button/IconButton'))

const SCROLL_OFFSET = 120

export default function ScrollToTopFAB(): JSX.Element {
  const [isButtonVisible, setButtonVisible] = useState<boolean>(false)

  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  useEventListener('scroll', (): void => {
    const { scrollY, innerHeight } = window
    const { scrollHeight } = document.documentElement
    setButtonVisible(
      scrollY + SCROLL_OFFSET > innerHeight && scrollY + innerHeight < scrollHeight - SCROLL_OFFSET
    )
  })

  return (
    <div className='fixed bottom-0 right-0 mb-8 mr-8'>
      <IconButton
        className={clsx('duration-300', {
          'opacity-100': isButtonVisible,
          'opacity-0': !isButtonVisible
        })}
        icon={<RiArrowUpFill size={24} />}
        screenReaderText='Scroll to top'
        onClick={scrollToTop}
      />
    </div>
  )
}
