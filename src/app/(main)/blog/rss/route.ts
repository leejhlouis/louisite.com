import { posts } from '@/content/posts'
import { siteConfig } from '@/constants/seo'

const escapeXml = (value: string) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')

export function GET() {
  const items = posts
    .map(
      post => `
    <item>
      <title>${escapeXml(post.title)}</title>
      <description>${escapeXml(post.description)}</description>
      <link>${siteConfig.url}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteConfig.url}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
    </item>`
    )
    .join('')

  const feed = `<?xml version="1.0" encoding="UTF-8" ?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>Louis Gustavo — Writing</title>
        <description>Notes on software engineering, interfaces, and building dependable products.</description>
        <link>${siteConfig.url}/blog</link>
        <atom:link href="${siteConfig.url}/blog/rss" rel="self" type="application/rss+xml" />
        <language>en</language>
        <managingEditor>${siteConfig.email} (Louis Gustavo)</managingEditor>
        <webMaster>${siteConfig.email} (Louis Gustavo)</webMaster>
        ${items}
      </channel>
    </rss>`

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400'
    }
  })
}
