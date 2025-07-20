import { lazy } from 'react'
import clsx from 'clsx'
import PrimaryButtonProps from '@/types/components/buttons/PrimaryButtonProps'
import Link from 'next/link'

const SlidingInUnderline = lazy(() => import('@/components/ui/SlidingInUnderline'))

export default function PrimaryButton({
  className,
  onClick,
  icon,
  children,
  inverted,
  active,
  href
}: PrimaryButtonProps) {
  const baseClasses = clsx(
    className,
    'group/underline flex w-fit items-center transition duration-300 ease-in-out',
    {
      'font-extrabold text-primary-dark dark:text-white': active,
      'font-semibold': !active
    },
    {
      'rounded-xl px-3 py-1': inverted,
      'text-primary-dark dark:text-primary-light': inverted,
      'hover:bg-primary-dark/5 dark:hover:bg-primary-light/5': inverted && !active,
      'hover:text-primary-dark dark:hover:text-primary-light': !inverted && !active
    }
  )

  const content = (
    <>
      {icon && <div className='pe-1'>{icon}</div>}
      {!active ? (
        <SlidingInUnderline type='secondary'>{children}</SlidingInUnderline>
      ) : (
        children
      )}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    )
  }

  return (
    <button className={baseClasses} onClick={onClick}>
      {content}
    </button>
  )
}
