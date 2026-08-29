import clsx from 'clsx'
import ComponentProps from '@/types/components/ComponentProps'

export default function Prose({ id, className, children }: ComponentProps) {
  return (
    <div
      id={id}
      className={clsx(
        'prose max-w-none dark:prose-invert prose-headings:!p-0 prose-headings:tracking-[-0.03em] prose-headings:text-ink prose-p:pb-0 prose-p:text-muted prose-a:text-signal prose-a:no-underline hover:prose-a:underline prose-strong:text-ink prose-code:text-signal prose-li:text-muted sm:prose-p:text-lg',
        className
      )}
    >
      {children}
    </div>
  )
}
