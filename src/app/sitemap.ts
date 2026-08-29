import type { MetadataRoute } from 'next'
import { posts } from '@/content/posts'
import { siteConfig } from '@/constants/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = [
    { url: siteConfig.url, changeFrequency: 'monthly', priority: 1 },
    { url: `${siteConfig.url}/projects`, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${siteConfig.url}/about`, changeFrequency: 'yearly', priority: 0.8 },
    { url: `${siteConfig.url}/blog`, changeFrequency: 'monthly', priority: 0.8 }
  ]

  const articles: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt,
    changeFrequency: 'yearly',
    priority: 0.7
  }))

  return [...pages, ...articles]
}
