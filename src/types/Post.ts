import type { ComponentType } from 'react'
import type { MDXComponents } from 'mdx/types'

export type PostMetadata = {
  slug: string
  title: string
  description: string
  publishedAt: string
  tags: string[]
  readingTime: number
  originalUrl?: string
}

export type PostEntry = PostMetadata & {
  Component: ComponentType<{ components?: MDXComponents }>
}
