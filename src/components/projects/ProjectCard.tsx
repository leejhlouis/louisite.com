import ProjectProps from '@/types/components/ProjectProps'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/button/Button'
import ProjectDescription from '@/components/projects/ProjectDescription'
import ProjectLinkIcon from '@/components/projects/ProjectLinkIcon'
import { RiArrowRightLine } from '@remixicon/react'

export default function ProjectCard({
  slug,
  title,
  description,
  category,
  featured,
  techStacks,
  caseStudy,
  links
}: ProjectProps) {
  return (
    <article className='border-line grid border-t py-7 sm:py-8 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2.5fr)] lg:gap-16'>
      <div>
        <div className='flex flex-wrap items-center gap-2'>
          <p className='text-muted pb-0 font-mono text-[0.7rem] font-semibold tracking-[0.18em] uppercase'>
            {category}
          </p>
          {featured && <Badge>Featured</Badge>}
        </div>
        <h3 className='text-ink mt-2 text-lg font-semibold tracking-[-0.02em]'>{title}</h3>
      </div>
      <div className='mt-5 min-w-0 md:mt-0'>
        <div className='text-muted max-w-[80ch] text-sm leading-6 text-pretty'>
          <ProjectDescription description={description} />
        </div>
        <div className='mt-4 flex flex-col items-start gap-4 lg:flex-row lg:items-end lg:justify-between'>
          <ul className='flex flex-wrap gap-2'>
            {techStacks.map(tech => (
              <li key={tech}>
                <Badge>{tech}</Badge>
              </li>
            ))}
          </ul>
        </div>
        {(caseStudy || links.length > 0) && (
          <div className='mt-4 flex shrink-0 flex-wrap gap-3'>
            {caseStudy && (
              <Button
                href={`/projects/${slug}`}
                variant='filled'
                className='text-xs'
                icon={<RiArrowRightLine size={16} />}
                iconPosition='right'
              >
                View case study
              </Button>
            )}
            {links.map(link => (
              <Button
                key={link.url}
                href={link.url}
                target='_blank'
                rel='noreferrer'
                className='touch-target text-muted text-xs'
                icon={<ProjectLinkIcon icon={link.icon} />}
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
