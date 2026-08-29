import Projects from '@/components/sections/Projects'
import { Metadata } from 'next'
import JsonLd from '@/components/seo/JsonLd'
import { projects } from '@/constants/projects'
import { createPageMetadata, siteConfig } from '@/constants/seo'

const description =
  "Explore Louis Gustavo's software projects across frontend, backend, full-stack, mobile, and project leadership work."

export const metadata: Metadata = createPageMetadata({
  title: 'Software Projects',
  description,
  path: '/projects',
  keywords: ['Louis Gustavo projects', 'software engineering portfolio', 'full-stack projects']
})

export default function Page() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          '@id': `${siteConfig.url}/projects#page`,
          url: `${siteConfig.url}/projects`,
          name: 'Software Projects by Louis Gustavo',
          description,
          inLanguage: siteConfig.language,
          isPartOf: { '@id': `${siteConfig.url}/#website` },
          about: { '@id': `${siteConfig.url}/#person` },
          mainEntity: {
            '@type': 'ItemList',
            numberOfItems: projects.length,
            itemListElement: projects.map((project, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              item: {
                '@type': 'CreativeWork',
                name: project.title,
                url: project.links[0]?.url,
                genre: project.category,
                keywords: [...project.techStacks, ...(project.otherTechStacks ?? [])],
                creator: { '@id': `${siteConfig.url}/#person` }
              }
            }))
          }
        }}
      />
      <Projects />
    </>
  )
}
