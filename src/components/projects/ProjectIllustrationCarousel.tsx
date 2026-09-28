'use client'

import { RiArrowLeftLine, RiArrowRightLine } from '@remixicon/react'
import Image from 'next/image'
import { useRef, useState } from 'react'
import IconButton from '@/components/ui/button/IconButton'
import type ProjectProps from '@/types/components/ProjectProps'

type Illustration = NonNullable<ProjectProps['illustrations']>[number]

export default function ProjectIllustrationCarousel({
  illustrations
}: {
  illustrations: Illustration[]
}) {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const moveCarousel = (direction: -1 | 1) => {
    const carousel = carouselRef.current

    if (!carousel) return

    const nextIndex = Math.min(Math.max(activeIndex + direction, 0), illustrations.length - 1)

    if (nextIndex === activeIndex) return

    setActiveIndex(nextIndex)
    carousel.scrollTo({
      left: carousel.clientWidth * nextIndex,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    })
  }

  return (
    <section aria-label='Project illustrations'>
      <div
        ref={carouselRef}
        className='border-line bg-elevated/70 snap-x snap-mandatory [scrollbar-width:none] overflow-x-auto overscroll-x-contain rounded-2xl border lg:overflow-x-hidden [&::-webkit-scrollbar]:hidden'
        aria-roledescription='carousel'
        tabIndex={0}
        onScroll={event => {
          const { clientWidth, scrollLeft } = event.currentTarget

          if (clientWidth) {
            setActiveIndex(Math.round(scrollLeft / clientWidth))
          }
        }}
      >
        <div className='flex'>
          {illustrations.map((illustration, index) => (
            <div
              key={illustration.src}
              className='relative aspect-4/3 w-full min-w-full shrink-0 snap-start'
            >
              <Image
                fill
                src={illustration.src}
                alt={illustration.alt}
                sizes='(min-width: 1024px) 38vw, (min-width: 640px) 50vw, calc(100vw - 2rem)'
                className='pointer-events-none object-contain p-4'
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      <div className='mt-3 flex items-center justify-end gap-2'>
        <IconButton
          screenReaderText='Previous illustrations'
          icon={<RiArrowLeftLine size={18} />}
          onClick={() => moveCarousel(-1)}
          disabled={activeIndex === 0}
          className='disabled:cursor-not-allowed disabled:opacity-40'
        />
        <IconButton
          screenReaderText='Next illustrations'
          icon={<RiArrowRightLine size={18} />}
          onClick={() => moveCarousel(1)}
          disabled={activeIndex === illustrations.length - 1}
          className='disabled:cursor-not-allowed disabled:opacity-40'
        />
      </div>
    </section>
  )
}
