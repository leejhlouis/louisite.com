import clsx from 'clsx'
import UnderlineProps from '@/types/components/UnderlineProps'

export default function SlidingInUnderline({ children, type, height }: UnderlineProps) {
  return (
    <span className='group/underline relative inline-block'>
      {children}
      <span
        className={clsx(
          {
            'bg-primary-lighter-dark dark:bg-primary-lighter': type === 'primary',
            'bg-emphasis-dark dark:bg-emphasis-light': type === 'default',
            'bg-primary-dark dark:bg-primary-light': !type,
            'h-0.5': height === 'lg',
            'h-[0.075rem]': height !== 'lg'
          },
          `absolute inset-x-0 bottom-0.5`,
          'transition-width duration-300',
          'w-0 group-hover/underline:w-full'
        )}
      ></span>
    </span>
  )
}
