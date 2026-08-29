import JsonLd from '@/components/seo/JsonLd'
import { siteConfig } from '@/constants/seo'

export default function SiteJsonLd() {
  return (
    <JsonLd
      data={{
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'WebSite',
            '@id': `${siteConfig.url}/#website`,
            url: siteConfig.url,
            name: siteConfig.siteName,
            alternateName: 'Louis Gustavo portfolio',
            description: siteConfig.description,
            inLanguage: siteConfig.language,
            publisher: { '@id': `${siteConfig.url}/#person` }
          },
          {
            '@type': 'Person',
            '@id': `${siteConfig.url}/#person`,
            name: siteConfig.name,
            url: siteConfig.url,
            image: `${siteConfig.url}/assets/icons/android-chrome-512x512.png`,
            jobTitle: 'Software Engineer',
            worksFor: {
              '@type': 'Organization',
              name: 'Traveloka',
              url: 'https://www.traveloka.com'
            },
            alumniOf: {
              '@type': 'CollegeOrUniversity',
              name: 'BINUS University',
              url: 'https://binus.ac.id'
            },
            sameAs: [siteConfig.github, siteConfig.linkedin],
            email: `mailto:${siteConfig.email}`,
            knowsAbout: [
              'Software engineering',
              'Web development',
              'Backend development',
              'Java',
              'Spring Boot',
              'TypeScript',
              'Next.js',
              'React',
              'Vue.js'
            ]
          }
        ]
      }}
    />
  )
}
