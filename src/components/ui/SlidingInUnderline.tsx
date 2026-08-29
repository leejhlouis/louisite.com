import { cva } from 'class-variance-authority'
import UnderlineProps from '@/types/components/UnderlineProps'

const underlineBarVariants = cva(
  'absolute inset-x-0 bottom-0.5 w-0 transition-width duration-300 group-hover/underline:w-full',
  {
    variants: {
      type: {
        primary: 'bg-signal',
        default: 'bg-ink',
        secondary: 'bg-signal',
        unset: 'bg-signal'
      },
      height: {
        lg: 'h-0.5',
        sm: 'h-[0.075rem]'
      }
    },
    defaultVariants: {
      type: 'unset',
      height: 'sm'
    }
  }
)

export default function SlidingInUnderline({ children, type, height }: UnderlineProps) {
  return (
    <span className='group/underline relative inline-block'>
      {children}
      <span
        className={underlineBarVariants({
          type: type ?? 'unset',
          height: height === 'lg' ? 'lg' : 'sm'
        })}
      />
    </span>
  )
}
