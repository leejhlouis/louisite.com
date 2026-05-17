import { lazy } from 'react'
import clsx from 'clsx'
import InlineLinkProps from '@/types/components/InlineLinkProps'

const SlidingInUnderline = lazy(() => import('@/components/ui/SlidingInUnderline'))

export default function InlineLink({ href, children, inverted }: InlineLinkProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className={clsx('z-[9999] cursor-pointer', 'font-semibold duration-300', {
        'text-primary-dark hover:text-primary-lighter-dark dark:text-primary-light dark:hover:text-primary-lighter':
          !inverted,
        'text-emphasis-dark dark:text-emphasis-light': inverted
      })}
    >
      <SlidingInUnderline type={inverted ? 'default' : 'primary'}>{children}</SlidingInUnderline>
    </a>
  )
}
