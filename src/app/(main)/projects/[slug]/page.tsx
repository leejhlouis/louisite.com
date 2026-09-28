import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/seo/JsonLd'
import ProjectCaseStudy from '@/components/projects/ProjectCaseStudy'
import { projects } from '@/constants/projects'
import { createPageMetadata, siteConfig } from '@/constants/seo'
import { getMDXComponents } from '@/mdx-components'
import { getProjectCaseStudies, getProjectCaseStudy } from '@/lib/projectCaseStudies'

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const entries = await getProjectCaseStudies()
  const availableSlugs = new Set(entries.map(entry => entry.slug))

  return projects
    .filter(project => project.caseStudy && availableSlugs.has(project.slug))
    .map(project => ({ slug: project.slug }))
}

export const dynamicParams = false

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug && item.caseStudy)

  if (!project) {
    return {}
  }

  return createPageMetadata({
    title: `${project.title} Case Study`,
    description: `${project.title}: ${typeof project.description === 'string' ? project.description : `A software project by ${siteConfig.name}.`}`,
    path: `/projects/${project.slug}`,
    keywords: [project.title, ...project.techStacks, ...(project.otherTechStacks ?? [])]
  })
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find(item => item.slug === slug && item.caseStudy)
  const caseStudy = await getProjectCaseStudy(slug)

  if (!project || !caseStudy) {
    notFound()
  }

  const description =
    typeof project.description === 'string'
      ? project.description
      : `A software project by ${siteConfig.name}.`
  const Content = caseStudy.Component

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          '@id': `${siteConfig.url}/projects/${project.slug}#project`,
          url: `${siteConfig.url}/projects/${project.slug}`,
          name: project.title,
          description,
          creator: { '@id': `${siteConfig.url}/#person` },
          keywords: [...project.techStacks, ...(project.otherTechStacks ?? [])],
          genre: project.category,
          image: project.illustrations?.map(illustration => `${siteConfig.url}${illustration.src}`)
        }}
      />
      <ProjectCaseStudy project={project}>
        <Content components={getMDXComponents()} />
      </ProjectCaseStudy>
    </>
  )
}
