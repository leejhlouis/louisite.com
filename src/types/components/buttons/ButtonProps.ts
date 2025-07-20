import ComponentProps from '@/types/components/ComponentProps'

export default interface ButtonProps extends ComponentProps {
  onClick?: () => void
  icon?: React.ReactNode
  screenReaderText?: string
  active?: boolean
  href?: string
}
