import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'
import LinkProps from '@/types/LinkProps'
import Badge from '@/components/ui/Badge'
import Card from '@/components/ui/Card'
import Heading3 from '@/components/ui/heading/Heading3'

export default function ProjectCard({
  title,
  description,
  techStacks,
  links
}: ProjectProps) {
  const techStacksEntry = techStacks.map(
    (techStack: string, index: number) => (
      <Badge
        key={index}
        className={clsx(
          'mr-2 last-of-type:mr-0',
          'text-base font-medium text-primary-dark dark:text-primary-light'
        )}
      >
        {techStack}
      </Badge>
    )
  )

  const linksEntry = links.map(
    (link: LinkProps, index: number) => (
      <li
        key={index}
        className='z-10'
      >
        <a
          href={link.url}
          target='_blank'
          rel='noreferrer'
          aria-label={link.label}
        >
          {link.icon}
        </a>
      </li>
    )
  )

  return (
    <Card className='flex flex-col justify-between'>
      <header>
        <Heading3>
          <a
            href={
              links.find(({ label }) => label === 'Source code')?.url ??
              links.find(({ label }) => label === 'Live')?.url
            }
            className={clsx(
              'no-default z-0',
              'group-hover:text-primary-dark group-hover:dark:text-primary-light'
            )}
            target='_blank'
            rel='noreferrer'
          >
            {title}
          </a>
        </Heading3>
        <p className='text-muted-dark dark:text-muted'>{description}</p>
      </header>
      <footer>
        <div className='mb-6 flex flex-wrap'>{techStacksEntry}</div>
        <ul className='flex space-x-3'>{linksEntry}</ul>
      </footer>
    </Card>
  )
}
