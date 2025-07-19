import { Metadata } from 'next'
import { Suspense } from 'react'
import Preloader from '@/components/common/Preloader'
import PageWrapper from '@/components/layouts/PageWrapper'
import Navbar from '@/components/layouts/Navbar'
import Hero from '@/components/sections/Hero'
import FeaturedProjects from '@/components/sections/FeaturedProjects'
import Footer from '@/components/layouts/Footer'

export const metadata: Metadata = {
  title: 'Louis Gustavo | Software Engineer',
  description:
    'Louis Gustavo is a Software Engineer at Traveloka specializing in building web interfaces and backend systems using Spring Boot, Next.js, Vue.js, React, Laravel, and more.',
  robots: 'index, follow'
}

export default function Page() {
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
