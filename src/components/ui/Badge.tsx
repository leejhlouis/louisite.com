import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import BadgeProps from '@/types/components/BadgeProps'

const badgeVariants = cva(
  [
    'my-auto list-none rounded-lg px-2 py-1 text-sm duration-300',
    'hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175]'
  ],
  {
    variants: {
      active: {
        true: 'bg-primary-dark/20 font-bold text-primary-dark dark:bg-primary-light/20 dark:text-primary-light',
        false:
          'bg-primary-dark/10 font-semibold text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95'
      }
    },
    defaultVariants: {
      active: false
    }
  }
)

export default function Badge({ className, children, active, onClick }: BadgeProps) {
  return (
    <div
      className={clsx(badgeVariants({ active: !!active }), className)}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
