import clsx from 'clsx'
import { cva } from 'class-variance-authority'
import Link from 'next/link'
import ButtonProps from '@/types/components/buttons/ButtonProps'

const buttonVariants = cva(
  'group/btn relative inline-flex w-fit select-none items-center gap-1.5 font-medium transition-all duration-300 ease-in-out',
  {
    variants: {
      variant: {
        ghost: 'rounded-md px-1 py-0.5',
        filled: 'rounded-xl border px-4 py-2'
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
        class: 'text-default-dark dark:text-default-light'
      },
      {
        variant: 'ghost',
        inverted: false,
        active: false,
        class: 'hover:text-primary-dark dark:hover:text-primary-light'
      },
      {
        variant: 'filled',
        inverted: false,
        class: clsx(
          'border-primary-dark/20 bg-primary-dark text-white',
          'shadow-sm hover:-translate-y-0.5 hover:bg-primary-lighter-dark dark:border-primary-light/20 dark:bg-primary-light dark:text-slate-950 dark:hover:bg-primary-lighter'
        )
      },
      {
        variant: 'filled',
        inverted: true,
        class:
          'border-slate-500/25 bg-white/20 text-default-dark hover:-translate-y-0.5 hover:border-primary-dark hover:text-primary-dark dark:border-slate-500/30 dark:bg-primary-dark/10 dark:text-default-light dark:hover:border-primary-light dark:hover:text-primary-light'
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
  'absolute bottom-0 left-0 h-px w-0 transition-[width] duration-300 ease-in-out group-hover/btn:w-full',
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

const buttonIconVariants = cva('flex shrink-0 items-center transition-transform duration-300', {
  variants: {
    variant: {
      ghost: '',
      filled: ''
    },
    inverted: {
      true: '',
      false: ''
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
    },
    {
      variant: 'filled',
      inverted: false,
      class: '[&_svg]:!fill-white dark:[&_svg]:!fill-slate-950'
    },
    {
      variant: 'filled',
      inverted: true,
      class: '[&_svg]:!fill-default-dark dark:[&_svg]:!fill-default-light'
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

  const iconEl = icon && (
    <span className={buttonIconVariants({ variant, inverted, active })}>{icon}</span>
  )

  const content = (
    <>
      {iconPosition === 'left' && iconEl}
      {!!children && ghostLabel}
      {iconPosition === 'right' && iconEl}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={classes} aria-current={active ? 'page' : undefined}>
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
