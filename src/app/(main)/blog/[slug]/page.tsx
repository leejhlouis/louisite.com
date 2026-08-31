import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getPost, posts } from '@/content/posts'
import Button from '@/components/ui/button/Button'
import Eyebrow from '@/components/ui/Eyebrow'
import { RiArrowLeftLine, RiExternalLinkLine } from '@remixicon/react'
import Section from '@/components/layouts/Section'
import Prose from '@/components/layouts/Prose'
import formatPostDate from '@/utils/formatPostDate'
import JsonLd from '@/components/seo/JsonLd'
import { createPageMetadata, siteConfig } from '@/constants/seo'

export const generateStaticParams = () => posts.map(post => ({ slug: post.slug }))
export const dynamicParams = false

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return {}
  return createPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    type: 'article',
    keywords: post.tags,
    publishedTime: post.publishedAt
  })
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  const Content = post.Component
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          '@id': `${siteConfig.url}/blog/${post.slug}#article`,
          url: `${siteConfig.url}/blog/${post.slug}`,
          headline: post.title,
          description: post.description,
          datePublished: post.publishedAt,
          inLanguage: siteConfig.language,
          keywords: post.tags,
          author: { '@id': `${siteConfig.url}/#person` },
          publisher: { '@id': `${siteConfig.url}/#person` },
          isPartOf: { '@id': `${siteConfig.url}/blog#blog` },
          mainEntityOfPage: `${siteConfig.url}/blog/${post.slug}`,
          ...(post.originalUrl ? { isBasedOn: post.originalUrl } : {})
        }}
      />
      <Section className='md:px-0' maxWidthClass='md:max-w-screen-md'>
        <Button href='/blog' icon={<RiArrowLeftLine size={18} />}>
          All writing
        </Button>
        <header className='mt-12 border-b border-line pb-10'>
          <Eyebrow className='pb-5'>
            {formatPostDate(post.publishedAt)} · {post.readingTime} min read
          </Eyebrow>
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
    </>
  )
}
