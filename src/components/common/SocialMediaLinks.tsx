import clsx from 'clsx'
import socialList from '@/constants/social'
import ComponentProps from '@/types/components/ComponentProps'
import SocialProps from '@/types/SocialProps'

export default function SocialMediaLinks({ className }: ComponentProps): JSX.Element {
  const social = socialList.map(
    (item: SocialProps, index: number): JSX.Element => (
      <li key={index}>
        <a
          href={item.url}
          target='_blank'
          rel='noreferrer'
          aria-label={item.name}
        >
          {item.icon}
        </a>
      </li>
    )
  )

  return (
    // prettier-ignore
    <ul
      className={clsx(
        className,
        'flex list-none items-center space-x-4'
      )}
    >
      {social}
    </ul>
  )
}
