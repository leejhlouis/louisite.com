import { projects } from '@/constants/projects'
import AnimatedSection from '@/components/layouts/AnimatedSection'
import Eyebrow from '@/components/ui/Eyebrow'
import Button from '@/components/ui/button/Button'
import { RiArrowRightLine } from '@remixicon/react'
import Badge from '@/components/ui/Badge'
import Heading1 from '@/components/ui/heading/Heading1'
import Heading2 from '@/components/ui/heading/Heading2'
import Heading3 from '@/components/ui/heading/Heading3'
import Image from 'next/image'
import clsx from 'clsx'

type FeaturedProjectsProps = {
  embedded?: boolean
  showBrowseAll?: boolean
}

export default function FeaturedProjects({
  embedded = false,
  showBrowseAll = true
}: FeaturedProjectsProps = {}) {
  const featuredProjects = projects.filter(project => project.featured)
  const SectionHeading = embedded ? Heading1 : Heading2

  const content = (
    <>
      <div className='animate-fade-in flex max-w-3xl flex-col gap-3 !delay-200'>
        <SectionHeading
          id='featured-projects-heading'
          className='pb-0 text-2xl font-bold tracking-[-0.025em] text-ink sm:text-3xl'
        >
          Featured projects
        </SectionHeading>
        <p className='text-pretty max-w-2xl pb-0 text-muted'>
          Selected works that showcase my full-stack engineering expertise.
        </p>
      </div>
      <div
        className='animate-fade-in mt-10 divide-y divide-line border-y border-line !delay-300'
        aria-labelledby='featured-projects-heading'
      >
        {featuredProjects.map((project, index) => (
          <article
            key={project.slug}
            aria-labelledby={`${project.slug}-title`}
            className='grid items-start gap-8 py-10 sm:py-12 lg:grid-cols-2 lg:gap-16 lg:py-14'
          >
            <div className={clsx('min-w-0', index % 2 === 1 && 'lg:order-2')}>
              <Eyebrow className='pb-3'>{project.category}</Eyebrow>
              <Heading3 id={`${project.slug}-title`}>{project.title}</Heading3>
              <div className='text-pretty max-w-[70ch] leading-7 text-muted'>
                {project.description}
              </div>
              <ul className='mt-5 flex flex-wrap gap-2'>
                {project.techStacks.map(tech => (
                  <li key={tech}>
                    <Badge>{tech}</Badge>
                  </li>
                ))}
              </ul>
              {!!project.links.length && (
                <div className='mt-6 flex flex-wrap gap-4'>
                  {project.links.map(link => (
                    <Button
                      key={link.url}
                      href={link.url}
                      target='_blank'
                      rel='noreferrer'
                      className='text-sm'
                      icon={link.icon}
                    >
                      {link.label}
                    </Button>
                  ))}
                </div>
              )}
            </div>
            {project.illustrations && (
              <div
                className={clsx(
                  'grid w-full overflow-hidden rounded-xl border border-line bg-elevated/70 xs:grid-cols-2',
                  project.illustrations.length === 1 && 'max-w-sm',
                  index % 2 === 0 ? 'lg:order-2 lg:ml-auto' : 'lg:order-1 lg:mr-auto'
                )}
              >
                {project.illustrations.map(illustration => (
                  <div
                    key={illustration.src}
                    className={
                      project.illustrations?.length === 1
                        ? 'relative aspect-[16/10] min-w-0 xs:col-span-2'
                        : 'relative aspect-[4/3] min-w-0 border-line even:border-t xs:even:border-l xs:even:border-t-0'
                    }
                  >
                    <Image
                      fill
                      src={illustration.src}
                      alt={illustration.alt}
                      sizes={
                        project.illustrations?.length === 1
                          ? '(min-width: 416px) 384px, calc(100vw - 2rem)'
                          : '(min-width: 1024px) 28vw, (min-width: 480px) 50vw, 100vw'
                      }
                      className='object-contain'
                    />
                  </div>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>
      {showBrowseAll && (
        <div className='animate-fade-in flex justify-start !delay-500'>
          <Button
            className='my-8 sm:my-10'
            href='/projects'
            icon={<RiArrowRightLine size={20} />}
            iconPosition='right'
          >
            Browse all projects
          </Button>
        </div>
      )}
    </>
  )

  return embedded ? (
    <section id='featured-projects' className='scroll-mt-20'>
      {content}
    </section>
  ) : (
    <AnimatedSection id='projects' className='scroll-mt-20'>
      {content}
    </AnimatedSection>
  )
}
