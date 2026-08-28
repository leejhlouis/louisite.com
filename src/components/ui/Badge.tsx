import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import BadgeProps from '@/types/components/BadgeProps'

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-lg bg-primary-dark/10 px-2 py-1 font-mono text-xs font-semibold text-primary-dark transition-colors duration-200 dark:bg-primary-light/10 dark:text-primary-light',
  {
    variants: {
      active: {
        true: 'bg-primary-dark text-white dark:bg-primary-light dark:text-slate-950',
        false: ''
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

export default function Badge({ className, children, active, onClick }: BadgeProps) {
  const classes = clsx(
    badgeVariants({ active: !!active }),
    onClick && 'cursor-pointer',
    onClick && !active && 'hover:bg-primary-dark/20 dark:hover:bg-primary-light/20',
    className
  )

  return onClick ? (
    <button type='button' className={classes} onClick={onClick} aria-pressed={!!active}>
      {children}
    </button>
  ) : (
    <span className={classes}>{children}</span>
  )
}
