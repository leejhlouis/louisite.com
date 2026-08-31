import type ComponentProps from '@/types/components/ComponentProps'
import type LinkProps from '@/types/LinkProps'

export type ProjectDescriptionPart =
  | { type: 'text'; content: string }
  | { type: 'link'; content: string; href: string }
  | { type: 'emphasis'; content: string }

export type ProjectDescription = string | ProjectDescriptionPart[]

export default interface ProjectProps extends ComponentProps {
  slug: string
  title: string
  featured?: boolean
  illustrations?: {
    src: string
    alt: string
  }[]
  description: ProjectDescription
  category: string
  techStacks: string[]
  otherTechStacks?: string[]
  links: LinkProps[]
  icon: string
}
