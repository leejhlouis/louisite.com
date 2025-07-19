import { lazy, Suspense } from 'react'
import Preloader from '@/components/common/Preloader'

const PageWrapper = lazy(() => import('@/components/layouts/PageWrapper'))
const Navbar = lazy(() => import('@/components/layouts/Navbar'))
const Projects = lazy(() => import('@/components/sections/Projects'))
const Footer = lazy(() => import('@/components/layouts/Footer'))

export default function AboutPage() {
  return (
    <Suspense fallback={<Preloader />}>
      <PageWrapper>
        <Navbar />
        <Projects />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
