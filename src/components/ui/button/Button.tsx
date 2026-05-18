import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import ButtonProps from '@/types/components/buttons/ButtonProps'

const buttonVariants = cva(
  'group/btn relative inline-flex w-fit select-none items-center gap-1.5 transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        ghost: 'rounded-md px-1 py-0.5',
        filled: 'rounded-xl px-4 py-2 backdrop-blur-sm backdrop-filter'
      },
      active: {
        true: 'cursor-default',
        false: 'cursor-pointer'
      },
      inverted: {
        true: '',
        false: ''
      }
    },
    compoundVariants: [
      {
        variant: 'ghost',
        active: true,
        class: 'font-extrabold text-primary-dark dark:text-primary-light'
      },
      {
        variant: 'ghost',
        active: false,
        class: 'font-medium'
      },
      {
        variant: 'ghost',
        inverted: true,
        class: 'py-1text-primary-dark rounded-xl px-3 dark:text-primary-light'
      },
      {
        variant: 'ghost',
        inverted: false,
        active: false,
        class: 'hover:text-primary-dark hover:dark:text-primary-light'
      },
      {
        variant: 'filled',
        inverted: false,
        class: clsx(
          'bg-gradient-to-tr from-primary-light/30 to-primary-dark/5',
          'border-0.5 border-primary-dark/20 dark:border-primary-light/20',
          'shadow-sm shadow-primary-dark/50',
          'hover:to-primary-light/20 hover:text-primary-dark hover:shadow-md hover:shadow-primary-dark/25 dark:hover:text-primary-light',
          'dark:from-primary-dark/30 dark:to-primary-light/5 dark:shadow-primary-light/50'
        )
      },
      {
        variant: 'filled',
        inverted: true,
        class:
          'border border-slate-600/20 bg-gradient-to-tr from-transparent hover:border-primary-dark hover:to-primary-dark/5 hover:text-primary-dark dark:border-slate-500/25 dark:bg-slate-600/10 dark:hover:to-primary-light/10 dark:hover:text-violet-100'
      }
    ],
    defaultVariants: {
      variant: 'ghost',
      active: false,
      inverted: false
    }
  }
)

const buttonUnderlineVariants = cva(
  'absolute bottom-0 left-0 h-[1.5px] w-0 rounded-full transition-[width] duration-300 ease-in-out group-hover/btn:w-full',
  {
    variants: {
      inverted: {
        true: 'bg-primary-light',
        false: 'bg-primary-dark dark:bg-primary-light'
      }
    },
    defaultVariants: {
      inverted: false
    }
  }
)

const buttonIconVariants = cva('flex items-center transition-transform duration-300', {
  variants: {
    variant: {
      ghost: '',
      filled: ''
    },
    active: {
      true: '',
      false: ''
    }
  },
  compoundVariants: [
    {
      variant: 'filled',
      active: false,
      class: 'group-hover/btn:translate-x-0.5'
    }
  ],
  defaultVariants: {
    variant: 'ghost',
    active: false
  }
})

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
  const classes = clsx(buttonVariants({ variant, inverted, active }), className)

  const ghostLabel =
    variant === 'ghost' && !active ? (
      <span className='relative'>
        {children}
        <span className={buttonUnderlineVariants({ inverted })} />
      </span>
    ) : (
      <span>{children}</span>
    )

  const iconEl = icon && <span className={buttonIconVariants({ variant, active })}>{icon}</span>

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      {!!children && ghostLabel}
      {iconPosition === 'right' && iconEl}
    </>
  )

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
