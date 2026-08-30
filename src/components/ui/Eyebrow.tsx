import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function Eyebrow({ id, className, children }: ComponentProps) {
  return (
    <p
      id={id}
      className={clsx(
        'font-mono text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-muted',
        className
      )}
    >
      {children}
    </p>
  )
}
