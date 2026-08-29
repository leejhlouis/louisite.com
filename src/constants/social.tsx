import SocialProps from '@/types/SocialProps'
import { social } from '@/constants'
import { RiGithubLine, RiLinkedinLine, RiMailLine } from '@remixicon/react'

const _social: SocialProps[] = [
  {
    name: 'Mail',
    url: `mailto:${social.mail}`,
    icon: <RiMailLine size={24} />
  },
  {
    name: 'LinkedIn',
    url: social.linkedin,
    icon: <RiLinkedinLine size={24} />
  },
  {
    name: 'GitHub',
    url: `https://github.com/${social.github}`,
    icon: <RiGithubLine size={24} />
  }
]

export default _social
