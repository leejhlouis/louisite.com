export default interface UnderlineProps {
  id?: string
  className?: string
  children?: React.ReactNode
  type?: 'primary' | 'default' | 'secondary'
  height?: 'lg' | 'sm'
}
