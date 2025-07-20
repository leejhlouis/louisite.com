import Blog from '@/components/sections/Blog'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog | Software Engineering Insights by Louis Gustavo',
  description:
    "Read Louis Gustavo's blog for software engineering insights. Learn how I built my portfolio with React, TypeScript, and Tailwind CSS.",
  alternates: {
    canonical: 'https://louisite.com/blog'
  }
}

export default function Page() {
  return (
    <Blog />
  )
}
