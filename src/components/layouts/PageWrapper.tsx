import PageWrapperProps from '@/types/PageWrapperProps.ts'

export default function PageWrapper({
  className,
  children
}: PageWrapperProps) {
  return (
    <div className={`${className ?? ''} bg-primary-overlay dark:bg-primary-overlay-dark pt-18`}>
      {children}
    </div>
  )
}
