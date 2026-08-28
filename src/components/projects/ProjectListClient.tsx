'use client'

import { useMemo, useState } from 'react'
import { filters } from '@/constants/projects'
import Badge from '@/components/ui/Badge'
import ProjectCard from '@/components/projects/ProjectCard'
import InlineLink from '@/components/ui/InlineLink'
import ProjectProps from '@/types/components/ProjectProps'

export default function ProjectListClient({
  initialProjects
}: {
  initialProjects: ProjectProps[]
}) {
  const [selected, setSelected] = useState<string[]>([])

  const filtered: ProjectProps[] = useMemo(() => {
    return selected.length === 0
      ? initialProjects
      : initialProjects.filter(project => {
          const techs = [...project.techStacks, ...(project.otherTechStacks || [])]
          return selected.every(filter => techs.includes(filter))
        })
  }, [selected, initialProjects])

  return (
    <>
      <ul className='animate-fade-in mb-8 mt-8 flex flex-wrap items-center gap-2'>
        <li className='mr-2 text-sm font-semibold'>Filters:</li>
        {filters.map(filter => (
          <li key={filter}>
            <Badge
              active={selected.includes(filter)}
              onClick={() => {
                setSelected(prev =>
                  prev.includes(filter) ? prev.filter(f => f !== filter) : [...prev, filter]
                )
              }}
            >
              {filter}
            </Badge>
          </li>
        ))}
      </ul>
      {!filtered.length ? (
        <p>
          Results not found.{' '}
          <span onClick={() => setSelected([])}>
            <InlineLink>Clear filters</InlineLink>
          </span>
        </p>
      ) : (
        <div className='animate-fade-in grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3'>
          {filtered.map(project => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
      )}
    </>
  )
}
