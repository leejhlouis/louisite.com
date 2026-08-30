import clsx from 'clsx'
import type { ImgHTMLAttributes } from 'react'

type ArticleImageProps = Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  'height' | 'loading' | 'width'
> & {
  height: number
  width: number
}

export default function ArticleImage({ className, height, width, ...props }: ArticleImageProps) {
  return (
    <img
      {...props}
      width={width}
      height={height}
      loading='lazy'
      decoding='async'
      className={clsx('h-auto w-full', className)}
    />
  )
}
