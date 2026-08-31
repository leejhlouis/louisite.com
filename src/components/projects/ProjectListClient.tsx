'use client'

import { useMemo, useState } from 'react'
import { filters } from '@/constants/projects'
import ProjectCard from '@/components/projects/ProjectCard'
import type ProjectProps from '@/types/components/ProjectProps'
import Badge from '@/components/ui/Badge'
import Heading2 from '@/components/ui/heading/Heading2'

export default function ProjectListClient({
  initialProjects
}: {
  initialProjects: ProjectProps[]
}) {
  const moreProjects = initialProjects.filter(project => !project.featured)
  const [selected, setSelected] = useState<string[]>([])

  const filteredProjects = useMemo(() => {
    if (!selected.length) {
      return moreProjects
    }

    const projects = selected?.length ? initialProjects : moreProjects

    return projects.filter(project => {
      const techStacks = [...project.techStacks, ...(project.otherTechStacks ?? [])]
      return selected.every(filter => techStacks.includes(filter))
    })
  }, [moreProjects, selected])

  return (
    <div className='animate-fade-in mt-16 !delay-500 sm:mt-20'>
      <section
        id='more-projects'
        className='scroll-mt-20'
        aria-labelledby='more-projects-heading'
      >
        <div className='mb-6 max-w-2xl'>
          <Heading2 id='more-projects-heading' className='pb-0'>
            More projects
          </Heading2>
          <p className='mt-2 pb-0 leading-7 text-muted'>
            Additional builds, experiments, and earlier work from across the archive.
          </p>
        </div>
        <ul
          className='mb-8 flex flex-wrap items-center gap-2'
          aria-label='Filter more projects by technology'
        >
          <li className='mr-2 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-muted'>
            Filter
          </li>
          {filters.map(filter => (
            <li key={filter}>
              <Badge
                active={selected.includes(filter)}
                onClick={() => {
                  setSelected(previous =>
                    previous.includes(filter)
                      ? previous.filter(selectedFilter => selectedFilter !== filter)
                      : [...previous, filter]
                  )
                }}
              >
                {filter}
              </Badge>
            </li>
          ))}
        </ul>
        {!filteredProjects.length ? (
          <p className='text-muted'>
            No projects match these filters.{' '}
            <button
              type='button'
              className='font-semibold text-signal underline-offset-4 hover:underline'
              onClick={() => setSelected([])}
            >
              Clear all filters
            </button>
            .
          </p>
        ) : (
          <div className='grid grid-cols-1'>
            {filteredProjects.map(project => (
              <ProjectCard key={project.slug} {...project} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}
