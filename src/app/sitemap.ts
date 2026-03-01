import type { MetadataRoute } from 'next'
import { fetchMediumFeed, getSlugFromLink } from '@/utils/medium'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrls = [
    'https://louisite.com/',
    'https://louisite.com/blog',
    'https://louisite.com/projects',
    'https://louisite.com/about'
  ].map(url => ({ url, lastModified: new Date().toISOString().split('T')[0] }))

  let posts: MetadataRoute.Sitemap = []

  try {
    const feed = await fetchMediumFeed()
    posts = (feed || [])
      .map(item => {
        const link = item?.link
        const slug = link ? getSlugFromLink(link) : ''
        if (!slug) return null
        const lastModified = item?.pubDate
          ? new Date(item.pubDate).toISOString().split('T')[0]
          : new Date().toISOString().split('T')[0]

        return {
          url: `https://louisite.com/blog/${slug}`,
          lastModified
        }
      })
      .filter(Boolean) as MetadataRoute.Sitemap
  } catch (e) {
    posts = []
  }

  return [...baseUrls, ...posts]
}
