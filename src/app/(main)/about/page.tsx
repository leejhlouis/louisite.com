import type { Metadata } from 'next'
import About from './About.mdx'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata, siteConfig } from '@/constants/seo'

const description =
  'Learn about Louis Gustavo, a Software Engineer at Traveloka with 3+ years of experience building web interfaces and backend systems.'

export const metadata: Metadata = createPageMetadata({
  title: 'About',
  description,
  path: '/about',
  keywords: ['about Louis Gustavo', 'software engineer Indonesia', 'BINUS University graduate']
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'AboutPage',
          '@id': `${siteConfig.url}/about#page`,
          url: `${siteConfig.url}/about`,
          name: 'About Louis Gustavo',
          description,
          inLanguage: siteConfig.language,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          mainEntity: { '@id': `${siteConfig.url}/#person` }
        }}
      />
      <About />
    </>
  )
}
