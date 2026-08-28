import { cva } from 'class-variance-authority'
import SizeProps from '@/types/components/SizeProps'
import Link from 'next/link'

const titleTextVariants = cva('pb-0 font-light', {
  variants: {
    size: {
      lg: 'text-2xl md:text-3xl',
      default: 'text-2xl'
    }
  },
  defaultVariants: {
    size: 'default'
  }
})

export default function Title({ size }: SizeProps) {
  const titleSize = size === 'lg' ? 'lg' : 'default'

  return (
    <Link href='/' className='text-violet-950 dark:text-violet-100' aria-label='Louisite home'>
      <p className={titleTextVariants({ size: titleSize })}>
        loui<span className='font-bold'>site</span>
      </p>
    </Link>
  )
}
