import clsx from 'clsx'
import SizeProps from '@/types/components/SizeProps'
import Link from 'next/link'

export default function Title({ size }: SizeProps) {
  const textSize = (): string => {
    if (size === 'lg') {
      return 'text-2xl md:text-3xl'
    }
    return 'text-2xl'
  }

  return (
    <Link
      href='/'
      className='title'
    >
      <p className={clsx('pb-0 font-light', textSize())}>
        loui<span className='font-bold'>site</span>
      </p>
    </Link>
  )
}
