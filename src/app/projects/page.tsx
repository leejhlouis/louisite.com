import ProjectPage from '@/pages/ProjectPage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects by Louis Gustavo | Full-stack Development',
  description: "Explore Louis Gustavo's full-stack software projects featuring Spring Boot, Vue.js, Next.js, React, Laravel, and more!"
}

export default function Page() {
  return <ProjectPage />
}
