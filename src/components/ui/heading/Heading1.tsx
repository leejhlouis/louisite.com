import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function Heading1({ id, className, children }: ComponentProps): JSX.Element {
  return (
    <h1
      id={id}
      className={clsx(
        className,
        'py-8',
        'text-[1.75rem] font-bold leading-8 md:text-4xl',
        'font-extrabold tracking-tight'
      )}
    >
      {children}
    </h1>
  )
}
