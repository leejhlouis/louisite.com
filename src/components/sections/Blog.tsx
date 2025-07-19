import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import BlogProps from '@/types/components/BlogProps'
import ArticleProps from '@/types/ArticleProps'

const Heading1 = lazy(() => import('@/components/ui/heading/Heading1'))
const InlineLink = lazy(() => import('@/components/ui/InlineLink'))
const BlogCard = lazy(() => import('@/components/common/BlogCard'))
const Section = lazy(() => import('@/components/layouts/Section'))

export default function Blog({ articles }: BlogProps): JSX.Element {
  const { animationClass } = useFadeInMounted()

  const articlesEntry = articles.map(
    (item: ArticleProps, index: number): JSX.Element => (
      <BlogCard
        {...item}
        key={index}
      />
    )
  )

  return (
    <Section className={clsx(animationClass, 'min-h-[calc(100vh-320px)]')}>
      <Heading1
        className={clsx('animate-fade-in', 'text-primary-dark dark:text-white', 'pb-2 pt-2')}
      >
        Blog
      </Heading1>
      <p className='animate-fade-in !delay-200'>
        Collection of my writings and thoughts. Subscribe to{' '}
        <InlineLink href='/blog/rss'>RSS feed</InlineLink>.
      </p>
      {!!articles?.length && (
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'grid justify-items-center gap-8 md:grid-cols-2',
            'pt-6'
          )}
        >
          {articlesEntry}
        </div>
      )}
    </Section>
  )
}
