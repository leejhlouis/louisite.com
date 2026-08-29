import Link from 'next/link'
import type { PostMetadata } from '@/types/Post'
import Badge from '@/components/ui/Badge'
import formatPostDate from '@/utils/formatPostDate'

export default function BlogCard({
  slug,
  title,
  description,
  publishedAt,
  readingTime,
  tags
}: PostMetadata) {
  return (
    <Link
      href={`/blog/${slug}`}
      className='group block border-t border-slate-500/20 py-6 first:border-t-0 dark:border-slate-600/30'
    >
      <div>
        <h2 className='text-xl font-semibold text-violet-950 transition-colors group-hover:text-primary-dark dark:text-violet-50 dark:group-hover:text-primary-light sm:text-2xl'>
          {title}
        </h2>
        <p className='mt-2 pb-0 text-sm'>
          {formatPostDate(publishedAt)} · {readingTime} min read
        </p>
        <p className='mt-3 pb-0 leading-7'>{description}</p>
        <ul className='mt-4 flex flex-wrap gap-2 text-xs'>
          {tags.map(tag => (
            <li key={tag}>
              <Badge>{tag}</Badge>
            </li>
          ))}
        </ul>
      </div>
    </Link>
  )
}
