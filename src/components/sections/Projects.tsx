import clsx from 'clsx'
import FadeInSection from '@/components/layouts/FadeInSection'
import Heading1 from '@/components/ui/heading/Heading1'
import ProjectListClient from '@/components/projects/ProjectListClient'
import { projects } from '@/constants/projects'

export default function Projects(): JSX.Element {
  return (
    <FadeInSection className='min-h-[calc(100vh-320px)]'>
      <Heading1
        className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'pb-2 pt-2')}
      >
        Projects
      </Heading1>
      <p className='animate-fade-in !delay-200'>Archives of my projects.</p>
      <ProjectListClient initialProjects={projects} />
    </FadeInSection>
  )
}
