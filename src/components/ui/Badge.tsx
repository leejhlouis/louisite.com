import clsx from 'clsx'
import BadgeProps from '@/types/components/BadgeProps'

export default function Badge({ className, children, active, onClick }: BadgeProps): JSX.Element {
  // prettier-ignore
  return (
    <div
      className={clsx(
        className,
        'list-none',
        {
          'bg-primary-dark/10 font-semibold text-primary-dark/95 dark:bg-primary-light/10 dark:text-primary-light/95': !active,
          'bg-primary-dark/20 font-bold text-primary-dark dark:bg-primary-light/20 dark:text-primary-light': active
        },
        'duration-300 hover:bg-primary-dark/[0.175] hover:dark:bg-primary-light/[0.175]',
        'rounded-lg px-2 py-1 my-auto text-sm'
      )}
      onClick={onClick}
    >
      {children}
    </div>
  )
}
