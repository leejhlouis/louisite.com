import { projects } from '@/constants/projects'
import clsx from 'clsx'
import Link from 'next/link'
import AnimatedSection from '@/components/layouts/AnimatedSection'
import ProjectCard from '@/components/projects/ProjectCard'
import Heading2 from '@/components/ui/heading/Heading2'
import PrimaryButton from '@/components/ui/button/PrimaryButton'
import { RiArrowRightLine } from '@remixicon/react'

export default function Projects(): JSX.Element {
  const projectsEntry: JSX.Element[] = projects
    .filter(({ featured }) => !!featured)
    .map(project => <ProjectCard key={project.slug} {...project} />)

  return (
    <AnimatedSection id='projects' className='scroll-mt-8'>
      <Heading2 className='animate-fade-in pb-6 text-center text-primary-dark !delay-200 dark:text-white'>
        Featured projects
      </Heading2>
      <div
        className={clsx(
          'animate-fade-in !delay-300',
          'mx-auto mt-6 md:mt-8',
          'grid justify-items-center gap-x-6 gap-y-8 sm:grid-cols-2 xl:grid-cols-3'
        )}
      >
        {projectsEntry}
      </div>
      <div className='animate-fade-in !delay-500'>
        <Link href='/projects'>
          <PrimaryButton className='my-8' icon={<RiArrowRightLine size={20} />} inverted>
            More projects
          </PrimaryButton>
        </Link>
      </div>
    </AnimatedSection>
  )
}
