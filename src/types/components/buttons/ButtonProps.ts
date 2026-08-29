import ComponentProps from '@/types/components/ComponentProps'

export type ButtonVariant = 'ghost' | 'filled'

export default interface ButtonProps extends ComponentProps {
  onClick?: () => void
  icon?: React.ReactNode
  iconPosition?: 'left' | 'right'
  screenReaderText?: string
  active?: boolean
  href?: string
  inverted?: boolean
  variant?: ButtonVariant
}
