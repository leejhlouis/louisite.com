import type { ComponentType } from 'react'

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
  Component: ComponentType
}
