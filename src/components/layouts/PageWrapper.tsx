import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'
import Providers from '@/app/_lib/providers'

export default function PageWrapper({ className, children }: ComponentProps) {
  return (
    <div className={clsx(className, 'bg-overlay dark:bg-overlay-dark pt-18')}>
      <Providers>
        {children}
      </Providers>
    </div>
  )
}
