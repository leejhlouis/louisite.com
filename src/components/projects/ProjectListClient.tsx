import ProjectCard from '@/components/projects/ProjectCard'
import type ProjectProps from '@/types/components/ProjectProps'
import Heading2 from '@/components/ui/heading/Heading2'

export default function ProjectListClient({
  initialProjects
}: {
  initialProjects: ProjectProps[]
}) {
  const moreProjects = initialProjects.filter(project => !project.featured)

  return (
    <div className='animate-fade-in mt-16 !delay-500 sm:mt-20'>
      <section aria-labelledby='more-projects-heading'>
        <div className='mb-6 max-w-2xl'>
          <Heading2
            id='more-projects-heading'
            className='pb-0 text-2xl font-bold tracking-[-0.025em] text-ink sm:text-3xl'
          >
            More projects
          </Heading2>
          <p className='mt-2 pb-0 leading-7 text-muted'>
            Additional builds, experiments, and earlier work from across the archive.
          </p>
        </div>
        <div className='grid grid-cols-1'>
          {moreProjects.map(project => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      </section>
    </div>
  )
}
