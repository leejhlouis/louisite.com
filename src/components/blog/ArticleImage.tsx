'use client'

import clsx from 'clsx'
import Image, { type ImageProps } from 'next/image'
import { useState } from 'react'

type ArticleImageProps = Omit<ImageProps, 'alt' | 'height' | 'loading' | 'width'> & {
  alt: string
  height: number
  width: number
}

export default function ArticleImage({ className, height, width, ...props }: ArticleImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)

  return (
    // The component contract requires a meaningful alt string.
    // eslint-disable-next-line jsx-a11y/alt-text
    <Image
      {...props}
      width={width}
      height={height}
      loading='lazy'
      sizes='(min-width: 768px) 768px, 100vw'
      onLoad={() => setIsLoaded(true)}
      className={clsx(
        'h-auto w-full scale-105 transition-[filter,transform] duration-500 ease-out',
        isLoaded ? 'scale-100 blur-0' : 'blur-md',
        className
      )}
    />
  )
}
