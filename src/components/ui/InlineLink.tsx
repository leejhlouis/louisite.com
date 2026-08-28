import { lazy } from 'react'
import { cva } from 'class-variance-authority'
import InlineLinkProps from '@/types/components/InlineLinkProps'

const SlidingInUnderline = lazy(() => import('@/components/ui/SlidingInUnderline'))

const inlineLinkVariants = cva('cursor-pointer font-semibold duration-200', {
  variants: {
    inverted: {
      true: 'text-ink',
      false: 'text-signal'
    }
  },
  defaultVariants: {
    inverted: false
  }
})

export default function InlineLink({ href, children, inverted }: InlineLinkProps) {
  return (
    <a href={href} target='_blank' rel='noreferrer' className={inlineLinkVariants({ inverted })}>
      <SlidingInUnderline type={inverted ? 'default' : 'primary'}>{children}</SlidingInUnderline>
    </a>
  )
}
