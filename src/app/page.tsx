import HomePage from '@/pages/HomePage'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Louis Gustavo | Software Engineer',
  description:
    'Louis Gustavo is a Software Engineer at Traveloka specializing in building web interfaces and backend systems using Spring Boot, Next.js, Vue.js, React, Laravel, and more.',
  robots: 'index, follow'
}

export default function Page() {
  return <HomePage />
}
