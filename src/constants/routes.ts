import type { MetadataRoute } from 'next'

export type SiteRoute = {
  href: '/' | '/about' | '/blog' | '/projects'
  name: string
  sitemap: Pick<MetadataRoute.Sitemap[number], 'changeFrequency' | 'priority'>
}

export const siteRoutes: SiteRoute[] = [
  { href: '/', name: 'Home', sitemap: { changeFrequency: 'monthly', priority: 1 } },
  { href: '/blog', name: 'Blog', sitemap: { changeFrequency: 'monthly', priority: 0.8 } },
  { href: '/projects', name: 'Projects', sitemap: { changeFrequency: 'monthly', priority: 0.9 } },
  { href: '/about', name: 'About', sitemap: { changeFrequency: 'yearly', priority: 0.8 } }
]
