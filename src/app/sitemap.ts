import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrls = [
    'https://louisite.com/',
    'https://louisite.com/blog',
    'https://louisite.com/projects',
    'https://louisite.com/about',
    'https://louisite.com/blog/how-i-build-my-portfolio-site-with-react-typescript-and-tailwind-css-479778cf2960'
  ]

  return baseUrls.map(url => ({
    url,
    lastModified: new Date().toISOString().split('T')[0]
  }))
}
