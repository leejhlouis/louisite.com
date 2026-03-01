import Heading1 from '@/components/ui/heading/Heading1'
import calculateMinRead from '@/utils/calculateMinRead'
import { notFound } from 'next/navigation'
import clsx from 'clsx'
import ArticleProps from '@/types/ArticleProps'
import { fetchMediumFeed, getSlugFromLink, stripHtmlTags, formatDate } from '@/utils/medium'
import InlineLink from '@/components/ui/InlineLink'

type Props = {
  params: {
    slug: string
  }
}

export default async function Page({ params }: Props) {
  const items = await fetchMediumFeed()

  const match = items.find((item: ArticleProps) => getSlugFromLink(item.link) === params.slug)

  if (!match) return notFound()

  const title = match.title
  const content = match['content:encoded'] ?? ''
  const datePublished = formatDate(match.pubDate)
  const minRead = calculateMinRead(stripHtmlTags(content))

  return (
    <div className='mx-auto px-4 py-6 sm:py-12 md:max-w-screen-md md:px-0'>
      <Heading1 className='!pb-2 text-primary-dark dark:text-white'>{title}</Heading1>
      <span className='text-sm dark:text-muted'>
        {datePublished} • {`${minRead} min read`} •{' '}
        <InlineLink href={match.link} className='text-primary-dark dark:text-primary-light'>
          View on Medium
        </InlineLink>
      </span>
      <article
        className={clsx(
          'prose dark:prose-invert mt-6',
          'prose-p:pb-0',
          'prose-a:text-primary-dark dark:prose-a:text-primary-light hover:prose-a:text-primary-lighter-dark hover:dark:prose-a:text-primary-lighter'
        )}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}
