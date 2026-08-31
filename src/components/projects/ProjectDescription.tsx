import InlineLink from '@/components/ui/InlineLink'
import type { ProjectDescription as ProjectDescriptionType } from '@/types/components/ProjectProps'

type ProjectDescriptionProps = {
  description: ProjectDescriptionType
}

export default function ProjectDescription({ description }: ProjectDescriptionProps) {
  if (typeof description === 'string') {
    return description
  }

  return description.map((part, index) => {
    if (part.type === 'link') {
      return (
        <InlineLink key={index} href={part.href}>
          {part.content}
        </InlineLink>
      )
    }

    if (part.type === 'emphasis') {
      return <i key={index}>{part.content}</i>
    }

    return part.content
  })
}
