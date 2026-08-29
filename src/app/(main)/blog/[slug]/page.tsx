import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPost, posts } from '@/content/posts'
import Button from '@/components/ui/button/Button'
import { RiArrowLeftLine, RiExternalLinkLine } from '@remixicon/react'
import Section from '@/components/layouts/Section'
import Prose from '@/components/layouts/Prose'
import formatPostDate from '@/utils/formatPostDate'

export const generateStaticParams = () => posts.map(post => ({ slug: post.slug }))

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return {
    title: `${post.title} | Louis Gustavo`,
    description: post.description,
    alternates: { canonical: `https://louisite.com/blog/${post.slug}` }
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const Content = post.Component
  return (
    <Section className='md:px-0' maxWidthClass='md:max-w-screen-md'>
      <Button href='/blog' icon={<RiArrowLeftLine size={18} />}>
        All writing
      </Button>
      <header className='mt-12 border-b border-line pb-10'>
        <p className='eyebrow pb-5'>
          {formatPostDate(post.publishedAt)} · {post.readingTime} min read
        </p>
        <h1 className='text-balance text-4xl font-semibold leading-tight tracking-[-0.045em] text-ink sm:text-6xl'>
          {post.title}
        </h1>
        <p className='text-pretty mt-6 pb-0 text-lg leading-8 text-muted'>{post.description}</p>
      </header>
      <Prose className='mt-12'>
        <Content />
      </Prose>
      {post.originalUrl ? (
        <div className='mt-14 border-t border-line pt-8'>
          <a
            href={post.originalUrl}
            target='_blank'
            rel='noreferrer'
            className='inline-flex items-center gap-2 text-sm font-semibold text-muted hover:text-signal'
          >
            Originally published on Medium <RiExternalLinkLine size={17} />
          </a>
        </div>
      ) : null}
    </Section>
  )
}
