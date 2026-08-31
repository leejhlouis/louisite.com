import { RiExternalLinkFill, RiGithubFill } from '@remixicon/react'
import type LinkProps from '@/types/LinkProps'

type ProjectLinkIconProps = {
  icon: LinkProps['icon']
  size?: number
}

export default function ProjectLinkIcon({ icon, size = 16 }: ProjectLinkIconProps) {
  const Icon = icon === 'github' ? RiGithubFill : RiExternalLinkFill

  return <Icon size={size} />
}
