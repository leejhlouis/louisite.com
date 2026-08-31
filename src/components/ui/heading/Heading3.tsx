import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function Heading3({ id, className, children }: ComponentProps) {
  return (
    <h3
      id={id}
      className={clsx(
        className,
        'pb-4 text-xl font-semibold text-emphasis-dark dark:text-emphasis-light md:text-2xl'
      )}
    >
      {children}
    </h3>
  )
}
