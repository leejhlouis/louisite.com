import SocialProps from '@/types/SocialProps'
import { social } from '@/constants'
import { RiGithubFill, RiLinkedinFill, RiMailFill } from '@remixicon/react'

const _social: SocialProps[] = [
  {
    name: 'Mail',
    url: `mailto:${social.mail}`,
    icon: (
      <RiMailFill
        size={22}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'LinkedIn',
    url: social.linkedin,
    icon: (
      <RiLinkedinFill
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'GitHub',
    url: `https://github.com/${social.github}`,
    icon: (
      <RiGithubFill
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  }
]

export default _social
