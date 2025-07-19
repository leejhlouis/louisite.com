import { Suspense } from 'react'
import Preloader from '@/components/common/Preloader'
import PageWrapper from '@/components/layouts/PageWrapper'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Footer from '@/components/layouts/Footer'

export default function HomePage() {
  return (
    <Suspense fallback={<Preloader />}>
      <PageWrapper>
        <Navbar />
        <Hero />
        <FeaturedProjects />
        <Footer />
      </PageWrapper>
    </Suspense>
  )
}
