import { projects } from '@/constants/projects'
import clsx from 'clsx'
import AnimatedSection from '@/components/layouts/AnimatedSection'
import ProjectCard from '@/components/projects/ProjectCard'
import Heading2 from '@/components/ui/heading/Heading2'
import Button from '@/components/ui/button/Button'
import { RiArrowRightLine } from '@remixicon/react'

export default function FeaturedProjects() {
  const featuredProjects = projects.filter(({ featured }) => featured)

  return (
    <AnimatedSection id='projects' className='scroll-mt-8'>
      <Heading2 className='animate-fade-in pb-6 text-center text-violet-950 !delay-200 dark:text-violet-50'>
        Featured projects
      </Heading2>
      <div
        className={clsx(
          'animate-fade-in !delay-300',
          'mx-auto mt-6 md:mt-8',
          'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {featuredProjects.map(project => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>
      <div className='animate-fade-in !delay-500'>
        <Button
          className='my-8'
          href='/projects'
          icon={<RiArrowRightLine size={20} />}
          iconPosition='right'
        >
          More projects
        </Button>
      </div>
    </AnimatedSection>
  )
}
