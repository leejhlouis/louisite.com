import Blog from '@/components/sections/Blog'
import { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import { posts } from '@/content/posts'
import { createPageMetadata, siteConfig } from '@/constants/seo'

const description =
  "Read Louis Gustavo's notes on software engineering, web development, and building dependable products."

export const metadata: Metadata = createPageMetadata({
  title: 'Software Engineering Blog',
  description,
  path: '/blog',
  keywords: ['software engineering blog', 'web development', 'Louis Gustavo writing']
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'Blog',
          '@id': `${siteConfig.url}/blog#blog`,
          url: `${siteConfig.url}/blog`,
          name: 'Software Engineering Blog by Louis Gustavo',
          description,
          inLanguage: siteConfig.language,
          author: { '@id': `${siteConfig.url}/#person` },
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          blogPost: posts.map(post => ({
            '@type': 'BlogPosting',
            headline: post.title,
            description: post.description,
            datePublished: post.publishedAt,
            url: `${siteConfig.url}/blog/${post.slug}`,
            keywords: post.tags
          }))
        }}
      />
      <Blog />
    </>
  )
}
