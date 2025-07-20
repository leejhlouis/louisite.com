import MailFillIcon from 'remixicon-react/MailFillIcon'
import LinkedinFillIcon from 'remixicon-react/LinkedinFillIcon'
import GithubFillIcon from 'remixicon-react/GithubFillIcon'
import SocialProps from '@/types/SocialProps'
import { social } from '@/constants'

const _social: SocialProps[] = [
  {
    name: 'Mail',
    url: `mailto:${social.mail}`,
    icon: (
      <MailFillIcon
        size={22}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'LinkedIn',
    url: social.linkedin,
    icon: (
      <LinkedinFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  },
  {
    name: 'GitHub',
    url: `https://github.com/${social.github}`,
    icon: (
      <GithubFillIcon
        size={24}
        className='text-muted-dark dark:text-muted'
      />
    )
  }
]

export default _social
