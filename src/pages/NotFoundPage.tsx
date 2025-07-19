import { Suspense } from 'react'
import Preloader from '@/components/common/Preloader'
import NotFound from '@/components/sections/NotFound'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | Louis Gustavo',
  robots: 'noindex, nofollow'
}

export default function NotFoundPage() {
  return (
    <>
      <Suspense fallback={<Preloader />}>
        <NotFound />
      </Suspense>
    </>
  )
}
