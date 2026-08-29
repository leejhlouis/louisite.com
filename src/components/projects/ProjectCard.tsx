import clsx from 'clsx'
import ProjectProps from '@/types/components/ProjectProps'
import Badge from '@/components/ui/Badge'

export default function ProjectCard({
  title,
  description,
  category,
  techStacks,
  links
}: ProjectProps) {
  return (
    <article
      className={clsx(
        'flex h-full flex-col rounded-2xl border border-line bg-surface/80 p-5 transition-colors duration-300 hover:border-signal/50 sm:p-6'
      )}
    >
      <div className='mb-5 flex items-start justify-between gap-4'>
        <p className='eyebrow pb-0'>{category}</p>
        <div className='flex flex-wrap justify-end gap-2'>
          {links.map(link => (
            <a
              key={link.url}
              href={link.url}
              target='_blank'
              rel='noreferrer'
              aria-label={`${link.label}: ${title}`}
              className='min-h-11 flex items-center gap-2 rounded-lg border border-line px-3 text-sm font-semibold text-muted transition-colors hover:border-signal hover:text-signal'
            >
              {link.icon}
              <span>{link.label}</span>
            </a>
          ))}
        </div>
      </div>
      <h3 className='text-lg font-semibold tracking-tight text-ink'>{title}</h3>
      <div className='mt-3 flex-1 text-sm leading-6 text-muted'>{description}</div>
      <ul className='mt-6 flex flex-wrap gap-2'>
        {techStacks.map(tech => (
          <li key={tech}>
            <Badge>{tech}</Badge>
          </li>
        ))}
      </ul>
    </article>
  )
}
