import Link from 'next/link'
import type { PostMetadata } from '@/types/Post'
import Badge from '@/components/ui/Badge'
import formatPostDate from '@/utils/formatPostDate'
import Heading3 from '@/components/ui/heading/Heading3'

export default function BlogCard({
  slug,
  title,
  description,
  publishedAt,
  readingTime,
  tags
}: PostMetadata) {
  return (
    <Link href={`/blog/${slug}`} className='group block py-8 first:border-t-0'>
      <Heading3 className='pb-0 transition-colors group-hover:text-signal'>{title}</Heading3>
      <p className='mt-2 pb-0 text-sm'>
        {formatPostDate(publishedAt)} · {readingTime} min read
      </p>
      <p className='mt-3 pb-0 leading-7 text-muted'>{description}</p>
      <ul className='mt-4 flex flex-wrap gap-2 text-xs'>
        {tags.map(tag => (
          <li key={tag}>
            <Badge>{tag}</Badge>
          </li>
        ))}
      </ul>
    </Link>
  )
}
