import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import { RiArrowLeftLine, RiArrowRightUpLine } from '@remixicon/react'
import Badge from '@/components/ui/Badge'
import Button from '@/components/ui/button/Button'
import Prose from '@/components/layouts/Prose'
import ProjectDescription from '@/components/projects/ProjectDescription'
import ProjectIllustrationCarousel from '@/components/projects/ProjectIllustrationCarousel'
import ProjectLinkIcon from '@/components/projects/ProjectLinkIcon'
import type ProjectProps from '@/types/components/ProjectProps'

export default function ProjectCaseStudy({
  project,
  children
}: {
  project: ProjectProps
  children: ReactNode
}) {
  const allTechnologies = [...new Set([...project.techStacks, ...(project.otherTechStacks ?? [])])]
  const hasMultipleIllustrations = (project.illustrations?.length ?? 0) > 1

  return (
    <article className='pt-8 pb-12 sm:pt-12 sm:pb-20'>
      <div className='mx-auto max-w-6xl px-4 sm:px-8 xl:px-12'>
        <Button href='/projects' icon={<RiArrowLeftLine size={18} />}>
          All projects
        </Button>

        <header className='mt-10 grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)] lg:items-end lg:gap-16'>
          <div className='max-w-2xl'>
            <h1 className='text-ink text-4xl font-bold tracking-[-0.035em] text-balance sm:text-5xl lg:text-6xl'>
              {project.title}
            </h1>
            <div className='text-muted mt-6 max-w-[65ch] text-lg leading-8 text-pretty'>
              <ProjectDescription description={project.description} />
            </div>
            <div className='mt-8 flex flex-wrap gap-4'>
              {project.links.map(link => (
                <Button
                  key={link.url}
                  href={link.url}
                  target='_blank'
                  rel='noreferrer'
                  variant='ghost'
                  className='text-sm'
                  icon={<ProjectLinkIcon icon={link.icon} size={18} />}
                  iconPosition='left'
                >
                  {link.label}
                </Button>
              ))}
            </div>
          </div>

          {project.illustrations?.length ? (
            hasMultipleIllustrations ? (
              <ProjectIllustrationCarousel illustrations={project.illustrations} />
            ) : (
              <div className='border-line bg-elevated/70 grid overflow-hidden rounded-2xl border'>
                {project.illustrations.map((illustration, index) => (
                  <div key={illustration.src} className='relative aspect-4/3 min-w-0'>
                    <Image
                      fill
                      src={illustration.src}
                      alt={illustration.alt}
                      sizes='(min-width: 1024px) 38vw, (min-width: 640px) 50vw, calc(100vw - 2rem)'
                      className='object-contain p-4 transition-transform duration-500 hover:scale-[1.03]'
                      priority={index === 0}
                    />
                  </div>
                ))}
              </div>
            )
          ) : null}
        </header>

        <dl className='border-line sm:divide-line mt-12 grid border-y sm:grid-cols-[minmax(12rem,0.5fr)_minmax(0,1.5fr)] sm:divide-x lg:mt-16'>
          <div className='border-line py-5 sm:border-0 sm:pr-8'>
            <dt className='text-muted font-mono text-xs font-semibold tracking-[0.14em] uppercase'>
              Category
            </dt>
            <dd className='text-ink mt-2 font-medium'>{project.category}</dd>
          </div>
          <div className='border-line border-t py-5 sm:border-t-0 sm:pl-8'>
            <dt className='text-muted font-mono text-xs font-semibold tracking-[0.14em] uppercase'>
              Technology
            </dt>
            <dd>
              <ul className='mt-3 flex flex-wrap gap-2'>
                {allTechnologies.map(technology => (
                  <li key={technology}>
                    <Badge>{technology}</Badge>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>

        <div className='mt-14 max-w-3xl sm:mt-20'>
          <Prose>{children}</Prose>
        </div>

        <nav className='border-line mt-16 border-t pt-8 sm:mt-20' aria-label='Project navigation'>
          <Link
            href='/projects'
            className='group text-ink hover:text-signal focus-visible:outline-signal inline-flex items-center gap-2 text-lg font-semibold tracking-[-0.02em] transition-colors focus-visible:outline-2 focus-visible:outline-offset-4'
          >
            Explore more projects
            <RiArrowRightUpLine
              className='transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
              size={20}
            />
          </Link>
        </nav>
      </div>
    </article>
  )
}
