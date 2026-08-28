import ProjectListClient from '@/components/projects/ProjectListClient'
import { projects } from '@/constants/projects'
import FadeInSection from '@/components/layouts/FadeInSection'
import Heading1 from '@/components/ui/heading/Heading1'

export default function Projects() {
  return (
    <FadeInSection className='min-h-[calc(100vh-320px)]'>
      <Heading1 className='animate-fade-in pb-2 pt-2 text-violet-950 dark:text-violet-50'>Projects</Heading1>
      <p className='animate-fade-in pb-0 !delay-200'>A collection of projects I&apos;ve built and contributed to.</p>
      <ProjectListClient initialProjects={projects} />
    </FadeInSection>
  )
}
