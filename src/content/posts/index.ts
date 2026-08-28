import PortfolioPost, { metadata as portfolioMetadata } from './how-i-built-my-portfolio.mdx'
import type { PostEntry } from '@/types/Post'

export const posts: PostEntry[] = [
  {
    slug: 'how-i-build-my-portfolio-site-with-react-typescript-and-tailwind-css',
    ...portfolioMetadata,
    readingTime: 5,
    Component: PortfolioPost
  }
]

export const getPost = (slug: string): PostEntry | undefined =>
  posts.find(post => post.slug === slug)
