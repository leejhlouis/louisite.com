import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/'
      },
      {
        userAgent: [
          'ChatGPT-User',
          'ClaudeBot',
          'Google-Extended',
          'GPTBot',
          'OAI-SearchBot',
          'PerplexityBot'
        ],
        allow: '/'
      }
    ],
    sitemap: 'https://louisite.com/sitemap.xml',
    host: 'https://louisite.com'
  }
}
