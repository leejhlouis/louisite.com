import type { ComponentType } from 'react'
import type { MDXComponents } from 'mdx/types'

export type ProjectCaseStudyEntry = {
  slug: string
  title: string
  description: string
  publishedAt: string
  Component: ComponentType<{ components?: MDXComponents }>
}
