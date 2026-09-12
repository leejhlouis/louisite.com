import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog'
import { siteConfig } from '@/constants/seo'
import { siteRoutes } from '@/constants/routes'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()
  const pages: MetadataRoute.Sitemap = siteRoutes.map(route => ({
    url: route.href === '/' ? siteConfig.url : `${siteConfig.url}${route.href}`,
    ...route.sitemap
  }))

  const articles: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'yearly',
    priority: 0.7
  }))

  return [...pages, ...articles]
}
