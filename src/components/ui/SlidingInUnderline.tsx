import clsx from 'clsx'
import UnderlineProps from '@/types/components/UnderlineProps'

export default function SlidingInUnderline({
  children,
  type,
  height
}: UnderlineProps): JSX.Element {
  const isPrimary = (type: string | undefined): boolean => {
    if (!type) {
      return true
    }
    return type === 'primary'
  }

  return (
    <span className='group/underline relative inline-block'>
      {children}
      <span
        className={clsx(
          {
            'bg-primary-lighter-dark dark:bg-primary-lighter': isPrimary(type),
            'bg-primary-dark dark:bg-primary-light': !isPrimary(type),
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
