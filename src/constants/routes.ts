import type { MetadataRoute } from 'next'

export type SiteRoute = {
  href: '/' | '/about' | '/blog' | '/projects'
  name: string
  sitemap: Pick<MetadataRoute.Sitemap[number], 'lastModified' | 'changeFrequency' | 'priority'>
}

const lastModified = new Date().toISOString().slice(0, 10)

export const siteRoutes: SiteRoute[] = [
  { href: '/', name: 'Home', sitemap: { lastModified } },
  { href: '/blog', name: 'Blog', sitemap: { lastModified } },
  { href: '/projects', name: 'Projects', sitemap: { lastModified } },
  { href: '/about', name: 'About', sitemap: { lastModified } }
]
