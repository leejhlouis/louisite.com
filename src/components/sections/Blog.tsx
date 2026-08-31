import BlogCard from '@/components/blog/BlogCard'
import { posts } from '@/content/posts'
import FadeInSection from '@/components/layouts/FadeInSection'
import Heading1 from '@/components/ui/heading/Heading1'

export default function BlogSection() {
  return (
    <FadeInSection className='min-h-[calc(100vh-320px)]' maxWidthClass='md:max-w-screen-lg'>
      <Heading1 className='animate-fade-in pb-2 pt-2 text-ink'>Blog</Heading1>
      <p className='animate-fade-in pb-0 text-muted !delay-200'>
        Notes on software engineering and web development.{' '}
        <a href='/blog/rss' className='font-semibold text-signal hover:underline'>
          RSS feed
        </a>
        .
      </p>
      <div className='animate-fade-in mt-8 !delay-300'>
        {posts.map(post => (
          <BlogCard key={post.slug} {...post} />
        ))}
      </div>
    </FadeInSection>
  )
}
