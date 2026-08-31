import ProjectListClient from '@/components/projects/ProjectListClient'
import { projects } from '@/constants/projects'
import FadeInSection from '@/components/layouts/FadeInSection'
import FeaturedProjects from '@/components/sections/FeaturedProjects'

export default function Projects() {
  return (
    <FadeInSection className='min-h-[calc(100vh-320px)]'>
      <FeaturedProjects embedded showBrowseAll={false} />
      <ProjectListClient initialProjects={projects} />
    </FadeInSection>
  )
}
