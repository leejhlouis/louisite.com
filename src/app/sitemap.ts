import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/blog'
import { siteConfig } from '@/constants/seo'
import { siteRoutes } from '@/constants/routes'
import { projects } from '@/constants/projects'
import { getProjectCaseStudies } from '@/lib/projectCaseStudies'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [posts, projectCaseStudies] = await Promise.all([getPosts(), getProjectCaseStudies()])
  const pages: MetadataRoute.Sitemap = siteRoutes.map(route => ({
    url: route.href === '/' ? siteConfig.url : `${siteConfig.url}${route.href}`,
    ...route.sitemap
  }))

  const articles: MetadataRoute.Sitemap = posts.map(post => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: post.publishedAt
  }))

  const caseStudySlugs = new Set(projectCaseStudies.map(caseStudy => caseStudy.slug))
  const caseStudies: MetadataRoute.Sitemap = projects
    .filter(project => project.caseStudy && caseStudySlugs.has(project.slug))
    .map(project => ({
      url: `${siteConfig.url}/projects/${project.slug}`,
      lastModified: projectCaseStudies.find(caseStudy => caseStudy.slug === project.slug)!
        .publishedAt
    }))

  return [...pages, ...caseStudies, ...articles]
}
