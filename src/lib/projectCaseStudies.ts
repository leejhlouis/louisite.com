import { defineCollections } from 'fumadocs-mdx/macro'
import { z } from 'zod'
import type { ProjectCaseStudyEntry } from '@/types/ProjectCaseStudy'

const projects = defineCollections({
  type: 'doc',
  dir: 'src/content/projects',
  files: ['**/*.mdx'],
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.iso.date()
  })
})

const toSlug = (path: string) => path.replace(/\.(md|mdx)$/, '')

const toEntry = (entry: (typeof projects.entries)[number]): ProjectCaseStudyEntry => ({
  slug: toSlug(entry.info.path),
  title: entry.title,
  description: entry.description,
  publishedAt: entry.publishedAt,
  Component: entry.body
})

export const getProjectCaseStudies = (): ProjectCaseStudyEntry[] => projects.entries.map(toEntry)

export const getProjectCaseStudy = (slug: string): ProjectCaseStudyEntry | undefined => {
  const entry = projects.entries.find(item => toSlug(item.info.path) === slug)
  return entry ? toEntry(entry) : undefined
}
