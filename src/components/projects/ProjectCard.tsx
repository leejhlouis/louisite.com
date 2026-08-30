import ProjectProps from '@/types/components/ProjectProps'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/button/Button'

export default function ProjectCard({
  title,
  description,
  category,
  techStacks,
  links
}: ProjectProps) {
  return (
    <article className='grid border-t border-line py-7 sm:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] sm:gap-10 sm:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.5fr)] lg:gap-16'>
      <div>
        <p className='pb-0 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-muted'>
          {category}
        </p>
        <h3 className='mt-2 text-lg font-semibold tracking-[-0.02em] text-ink'>{title}</h3>
      </div>
      <div className='mt-5 min-w-0 sm:mt-0'>
        <div className='text-pretty max-w-[70ch] text-sm leading-6 text-muted'>{description}</div>
        <div className='mt-4 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <ul className='flex flex-wrap gap-2'>
            {techStacks.map(tech => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
        {!!links.length && (
          <div className='mt-4 flex shrink-0 flex-wrap gap-3'>
            {links.map(link => (
              <Button
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='touch-target text-sm text-muted'
                icon={link.icon}
              >
                {link.label}
              </Button>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}
