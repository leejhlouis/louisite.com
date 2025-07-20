import clsx from 'clsx'
import { parseStringPromise } from 'xml2js'
import ArticleProps from '@/types/ArticleProps'
import FadeInSection from '@/components/layouts/FadeInSection'
import Heading1 from '@/components/ui/heading/Heading1'
import InlineLink from '@/components/ui/InlineLink'
import BlogCard from '@/components/blog/BlogCard'
import calculateMinRead from '@/utils/calculateMinRead'
import truncateText from '@/utils/truncateText'

const fetchMediumArticles = async (): Promise<ArticleProps[]> => {
  const response = await fetch('https://medium.com/@leejhlouis/feed')
  const rssText = await response.text()
  const rssData = await parseStringPromise(rssText, {
    explicitArray: false,
    mergeAttrs: true
  })

  const items = Array.isArray(rssData.rss.channel.item)
    ? rssData.rss.channel.item
    : [rssData.rss.channel.item]

  return items.map((item: {
    title: string
    link: string
    pubDate: string
    'content:encoded'?: string
  }): ArticleProps => {
    const encodedContent = item['content:encoded'] ?? ''

    return {
      title: item.title,
      link: item.link,
      datePublished: formatDate(item.pubDate),
      minRead: calculateMinRead(stripHtmlTags(encodedContent)),
      preview: truncateText(stripHtmlTags(encodedContent), 125)
    }
  })
}

const stripHtmlTags = (html: string): string => {
  return html.replace(/<\/?[^>]+(>|$)/g, '')
}

const formatDate = (dateString: string): string => {
  const pubDate = new Date(dateString)
  return pubDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}

export default async function BlogSection() {
  const articles = await fetchMediumArticles()

  return (
    <FadeInSection className='min-h-[calc(100vh-320px)]'>
      <Heading1
        className={clsx(
          'animate-fade-in',
          'text-primary-dark dark:text-white',
          'pb-2 pt-2'
        )}
      >
        Blog
      </Heading1>
      <p className='animate-fade-in !delay-200 pb-0'>
        Collection of my writings and thoughts. Subscribe to{' '}
        <InlineLink href='/blog/rss'>RSS feed</InlineLink>.
      </p>
      {articles.length > 0 && (
        <div
          className={clsx(
            'animate-fade-in !delay-300',
            'grid justify-items-center gap-8 md:grid-cols-2',
            'pt-6'
          )}
        >
          {articles.map((article, index) => (
            <BlogCard {...article} key={index} />
          ))}
        </div>
      )}
    </FadeInSection>
  )
}
