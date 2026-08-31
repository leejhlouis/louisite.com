import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import BadgeProps from '@/types/components/BadgeProps'

const badgeVariants = cva(
  'inline-flex w-fit items-center rounded-lg bg-signal/10 px-2 py-1 font-mono text-xs font-semibold text-signal transition-colors duration-200',
  {
    variants: {
      active: {
        true: 'border border-signal bg-signal text-canvas',
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
    onClick && 'h-8 cursor-pointer px-3',
    onClick && !active && 'hover:bg-signal/20',
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
