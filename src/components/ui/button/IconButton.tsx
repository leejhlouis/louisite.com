import clsx from 'clsx'
import { forwardRef, type ButtonHTMLAttributes } from 'react'
import ButtonProps from '@/types/components/buttons/ButtonProps'

type IconButtonProps = ButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonProps | 'children'>

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(
  { onClick, className, screenReaderText, icon, ...buttonProps },
  ref
) {
  return (
    <button
      ref={ref}
      type='button'
      onClick={onClick}
      {...buttonProps}
      className={clsx(
        className,
        'group flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface/70 text-ink',
        'transition-colors duration-200 hover:border-signal hover:text-signal'
      )}
    >
      <span className='sr-only'>{screenReaderText}</span>
      <span className='transition-colors group-hover:text-signal'>{icon}</span>
    </button>
  )
})

export default IconButton
