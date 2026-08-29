import type { Metadata } from 'next'

export const siteConfig = {
  name: 'Louis Gustavo',
  siteName: 'LOUISITE',
  url: 'https://louisite.com',
  locale: 'en_US',
  language: 'en',
  description:
    'Louis Gustavo is a Software Engineer at Traveloka building web interfaces and backend systems with Spring Boot, Next.js, Vue.js, React, Laravel, and more.',
  email: 'louisgustavo07@gmail.com',
  github: 'https://github.com/leejhlouis',
  linkedin: 'https://www.linkedin.com/in/louis-gustavo'
} as const

type PageMetadataOptions = {
  title: string
  description: string
  path: string
  type?: 'website' | 'article'
  keywords?: string[]
  publishedTime?: string
}

export function createPageMetadata({
  title,
  description,
  path,
  type = 'website',
  keywords,
  publishedTime
}: PageMetadataOptions): Metadata {
  const canonical = path === '/' ? siteConfig.url : `${siteConfig.url}${path}`
  const socialTitle = title.includes(siteConfig.name) ? title : `${title} | ${siteConfig.name}`

  return {
    title,
    description,
    keywords,
    alternates: {
      canonical,
      types: { 'application/rss+xml': `${siteConfig.url}/blog/rss` }
    },
    openGraph:
      type === 'article'
        ? {
            type: 'article',
            title: socialTitle,
            description,
            url: canonical,
            siteName: siteConfig.siteName,
            locale: siteConfig.locale,
            publishedTime,
            authors: [siteConfig.url],
            tags: keywords,
            images: [
              {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} — Software Engineer`
              }
            ]
          }
        : {
            type: 'website',
            title: socialTitle,
            description,
            url: canonical,
            siteName: siteConfig.siteName,
            locale: siteConfig.locale,
            images: [
              {
                url: '/opengraph-image',
                width: 1200,
                height: 630,
                alt: `${siteConfig.name} — Software Engineer`
              }
            ]
          },
    twitter: {
      card: 'summary_large_image',
      title: socialTitle,
      description,
      images: ['/twitter-image']
    }
  }
}
