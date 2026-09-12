import { cache } from 'react'
import readingTime from 'reading-time'
import { defineCollections } from 'fumadocs-mdx/macro'
import rehypePrettyCode, { type Options as PrettyCodeOptions } from 'rehype-pretty-code'
import { z } from 'zod'
import type { PostEntry } from '@/types/Post'

const prettyCodeOptions: PrettyCodeOptions = {
  theme: { light: 'github-light', dark: 'github-dark-default' },
  keepBackground: false,
  bypassInlineCode: true,
  defaultLang: { block: 'text' }
}

const blog = defineCollections({
  type: 'doc',
  dir: 'src/content/posts',
  files: ['**/*.mdx'],
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.iso.date(),
    tags: z.array(z.string()).default([]),
    originalUrl: z.url().optional(),
    draft: z.boolean().default(false)
  }),
  mdxOptions: { rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]] }
})

const toSlug = (path: string) => path.replace(/\.(md|mdx)$/, '')

const toPost = async (entry: (typeof blog.entries)[number]): Promise<PostEntry> => {
  const source = await entry.getText('raw')

  return {
    slug: toSlug(entry.info.path),
    title: entry.title,
    description: entry.description,
    publishedAt: entry.publishedAt,
    tags: entry.tags,
    originalUrl: entry.originalUrl,
    readingTime: Math.max(1, Math.ceil(readingTime(source).minutes)),
    Component: entry.body
  }
}

export const getPosts = cache(async (): Promise<PostEntry[]> => {
  const posts = await Promise.all(blog.entries.filter(entry => !entry.draft).map(toPost))
  return [...posts].sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
})

export const getPost = cache(async (slug: string): Promise<PostEntry | undefined> => {
  const posts = await getPosts()
  return posts.find(post => post.slug === slug)
})
