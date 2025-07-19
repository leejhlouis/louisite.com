import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = [
    'https://louisite.com/',
    'https://louisite.com/blog',
    'https://louisite.com/projects',
    'https://louisite.com/about'
  ]

  return baseUrls.map(url => ({
    url,
    lastModified: new Date().toISOString().split('T')[0]
  }))
}
