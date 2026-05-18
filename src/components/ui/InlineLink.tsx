import { lazy } from 'react'
import { cva } from 'class-variance-authority'
import InlineLinkProps from '@/types/components/InlineLinkProps'

const SlidingInUnderline = lazy(() => import('@/components/ui/SlidingInUnderline'))

const inlineLinkVariants = cva('z-[9999] cursor-pointer font-semibold duration-300', {
  variants: {
    inverted: {
      true: 'text-emphasis-dark dark:text-emphasis-light',
      false:
        'text-primary-dark hover:text-primary-lighter-dark dark:text-primary-light dark:hover:text-primary-lighter'
    }
  },
  defaultVariants: {
    inverted: false
  }
})

export default function InlineLink({ href, children, inverted }: InlineLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={inlineLinkVariants({ inverted })}
    >
      <SlidingInUnderline type={inverted ? 'default' : 'primary'}>{children}</SlidingInUnderline>
    </a>
  )
}
