import { projects } from '@/constants/projects'
import AnimatedSection from '@/components/layouts/AnimatedSection'
import Heading2 from '@/components/ui/heading/Heading2'
import Button from '@/components/ui/button/Button'
import { RiArrowRightLine } from '@remixicon/react'
import Badge from '@/components/ui/Badge'

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(project => project.featured)

  return (
    <AnimatedSection id='projects' className='scroll-mt-8'>
      <div className='animate-fade-in flex max-w-3xl flex-col gap-3 !delay-200'>
        <Heading2 className='pb-0 text-ink'>Selected work</Heading2>
        <p className='pb-0 text-muted lg:text-lg'>
          Three projects that show how I build products, learn inside engineering teams, and lead
          community work.
        </p>
      </div>
      <div className='animate-fade-in mt-10 divide-y divide-line border-y border-line !delay-300'>
        {featuredProjects.map(project => (
          <article
            key={project.slug}
            className='grid gap-6 py-8 sm:py-10 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-12'
          >
            <div>
              <p className='eyebrow pb-3'>{project.category}</p>
              <h3 className='text-balance text-2xl font-semibold tracking-tight text-ink sm:text-3xl'>
                {project.title}
              </h3>
            </div>
            <div>
              <div className='max-w-[70ch] text-muted'>{project.description}</div>
              <ul className='mt-5 flex flex-wrap gap-2'>
                {project.techStacks.map(tech => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              <div className='mt-6 flex flex-wrap gap-3'>
                {project.links.map(link => (
                  <a
                    key={link.url}
                    href={link.url}
                    target='_blank'
                    rel='noreferrer'
                    className='min-h-11 flex items-center gap-2 rounded-lg border border-line px-3 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal'
                  >
                    {link.icon}
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className='animate-fade-in flex justify-start !delay-500'>
        <Button
          className='my-8'
          href='/projects'
          icon={<RiArrowRightLine size={20} />}
          iconPosition='right'
        >
          Browse all projects
        </Button>
      </div>
    </AnimatedSection>
  )
}
