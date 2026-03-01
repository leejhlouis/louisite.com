import { lazy } from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import ArticleProps from '@/types/ArticleProps'

const Heading3 = lazy(() => import('@/components/ui/heading/Heading3'))
const Card = lazy(() => import('@/components/ui/Card'))

export default function BlogCard({
  link,
  slug,
  title,
  datePublished,
  minRead,
  preview
}: ArticleProps) {
  const href = slug && slug.length > 0 ? `/blog/${slug}` : link

  return (
    <Link href={href} className='group' target={href === link ? '_blank' : '_self'}>
      <Card>
        <Heading3
          className={clsx(
            'text-primary-dark dark:text-white',
            'group-hover:text-primary-lighter-dark group-hover:dark:text-primary-light',
            'group-hover:font',
            '!pb-2'
          )}
        >
          {title}
        </Heading3>
        <span className='text-sm text-muted-dark dark:text-muted'>
          {datePublished} • {`${minRead} min read`}
        </span>
        <p className='pb-0 pt-4 text-muted-dark dark:text-muted'>
          {preview}
          {'...'}
        </p>
      </Card>
    </Link>
  )
}
