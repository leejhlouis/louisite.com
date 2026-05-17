import clsx from 'clsx'
import Link from 'next/link'
import ButtonProps, { ButtonVariant } from '@/types/components/buttons/ButtonProps'

export default function Button({
  className,
  onClick,
  icon,
  iconPosition = 'left',
  children,
  inverted = false,
  active = false,
  href,
  variant = 'ghost'
}: ButtonProps) {
  const base = clsx(
    'group/btn relative inline-flex w-fit items-center gap-1.5 transition-all duration-300 ease-in-out select-none',
    { 'cursor-default': active, 'cursor-pointer': !active },
    className
  )

  const variantClasses: Record<ButtonVariant, string> = {
    ghost: clsx(
      ' px-1 py-0.5 rounded-md',
      {
        'font-extrabold text-primary-dark dark:text-primary-light': active,
        'font-medium': !active
      },
      {
        'rounded-xl px-3 py-1 text-slate-100 dark:text-white': inverted,
        'text-primary-dark dark:text-primary-light': inverted,
        'hover:text-primary-dark hover:dark:text-primary-light': !inverted && !active
      }
    ),
    filled: clsx('rounded-xl py-2 px-4 backdrop-blur-sm backdrop-filter', {
      'border border-primary-lighter-dark/20 dark:border-primary-lighter/20 bg-primary-dark/10 dark:bg-primary-light/10 text-primary-dark dark:text-primary-light hover:bg-primary-dark/20 hover:dark:bg-primary-light/20':
        !inverted,
      'border border-slate-500/20 dark:border-slate-600/30 bg-slate-100/10 dark:bg-slate-600/10 hover:bg-slate-100/20 dark:hover:bg-slate-600/20 hover:text-emphasis-dark dark:hover:text-emphasis-light':
        inverted
    })
  }

  const ghostLabel =
    variant === 'ghost' && !active ? (
      <span className='relative'>
        {children}
        <span
          className={clsx(
            'absolute bottom-0 left-0 h-[1.5px] w-0 rounded-full transition-[width] duration-300 ease-in-out group-hover/btn:w-full',
            inverted ? 'bg-primary-light' : 'bg-primary-dark dark:bg-primary-light'
          )}
        />
      </span>
    ) : (
      <span>{children}</span>
    )

  const iconEl = icon && (
    <span
      className={clsx(
        'flex items-center transition-transform duration-300',
        variant !== 'ghost' && !active && 'group-hover/btn:translate-x-0.5'
      )}
    >
      {icon}
    </span>
  )

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      {!!children && ghostLabel}
      {iconPosition === 'right' && iconEl}
    </>
  )

  const classes = clsx(base, variantClasses[variant])

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    )
  }

  return (
    <button type='button' className={classes} onClick={onClick} disabled={active}>
      {content}
    </button>
  )
}
