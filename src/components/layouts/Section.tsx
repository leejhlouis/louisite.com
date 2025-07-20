import clsx from 'clsx'
import { SectionProps } from '@/types/components/SectionProps'

export default function Section({
  id,
  className,
  maxWidthClass,
  children
}: SectionProps) {
  return (
    <section
      id={id || ''}
      className={clsx(
        className,
        maxWidthClass,
        {
          'xl:max-w-screen-xl': !maxWidthClass
        },
        'container py-6 sm:py-12'
      )}
    >
      {children}
    </section>
  )
}
