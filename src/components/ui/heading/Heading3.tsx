import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function Heading3({ id, className, children }: ComponentProps): JSX.Element {
  return (
    // prettier-ignore
    <h3
      id={id}
      className={clsx(
        className,
        'pb-4',
        'font-semibold text-lg'
      )}
    >
      {children}
    </h3>
  )
}
