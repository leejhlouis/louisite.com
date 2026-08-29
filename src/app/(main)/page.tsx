import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata, siteConfig } from '@/constants/seo'

export const metadata: Metadata = {
  ...createPageMetadata({
    title: 'Louis Gustavo | Software Engineer',
    description: siteConfig.description,
    path: '/',
    keywords: [
      'Louis Gustavo',
      'software engineer',
      'Spring Boot developer',
      'Next.js developer',
      'Indonesia software engineer'
    ]
  }),
  title: { absolute: 'Louis Gustavo | Software Engineer' }
}

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ProfilePage',
          '@id': `${siteConfig.url}/#profile`,
          url: siteConfig.url,
          name: 'Louis Gustavo | Software Engineer',
          description: siteConfig.description,
          inLanguage: siteConfig.language,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          mainEntity: { '@id': `${siteConfig.url}/#person` }
        }}
      />
      <Hero />
      <FeaturedProjects />
    </>
  )
}
