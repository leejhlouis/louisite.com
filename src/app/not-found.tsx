import type { Metadata } from 'next'
import NotFound from '@/components/sections/NotFound'

export const metadata: Metadata = {
  title: 'Page not found',
  robots: { index: false, follow: false }
}

export default function Page() {
  return <NotFound />
}
