import type { ReactNode } from 'react'
import type ComponentProps from '@/types/components/ComponentProps'
import type LinkProps from '@/types/LinkProps'

export default interface ProjectProps extends ComponentProps {
  slug: string
  title: string
  featured?: boolean
  illustrations?: {
    src: string
    alt: string
  }[]
  description: ReactNode
  category: string
  techStacks: string[]
  otherTechStacks?: string[]
  links: LinkProps[]
  icon: string
}
