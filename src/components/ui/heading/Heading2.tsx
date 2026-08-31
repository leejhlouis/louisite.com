import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function Heading2({ id, className, children }: ComponentProps) {
  return (
    <h2
      id={id}
      className={clsx(
        className,
        'py-4 text-2xl font-bold tracking-[-0.025em] text-ink md:text-3xl'
      )}
    >
      {children}
    </h2>
  )
}
