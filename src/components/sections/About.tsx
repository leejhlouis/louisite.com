import { lazy } from 'react'
import clsx from 'clsx'
import useFadeInMounted from '@/hooks/useFadeInMounted'
import ComponentProps from '@/types/components/ComponentProps'

const Heading1 = lazy(() => import('@/components/ui/heading/Heading1'))
const Heading2 = lazy(() => import('@/components/ui/heading/Heading2'))
const Heading3 = lazy(() => import('@/components/ui/heading/Heading3'))
const Badge = lazy(() => import('@/components/ui/Badge'))
const InlineLink = lazy(() => import('@/components/ui/InlineLink'))
const Section = lazy(() => import('@/components/layouts/Section'))
const ReactMarkdown = lazy(() => import('react-markdown'))

export default function About({ children }: ComponentProps): JSX.Element {
  const { animationClass } = useFadeInMounted()

  return (
    <div className={clsx(animationClass)}>
      <Section
        className='[&>*]:animate-fade-in md:px-0 [&_p]:text-muted-dark [&_p]:dark:text-muted'
        maxWidthClass='md:max-w-screen-sm'
      >
        <ReactMarkdown
          components={{
            h1: Heading1,
            h2: Heading2,
            h3: Heading3,
            a: InlineLink,
            ul: ({ children }): JSX.Element => (
              <ul className='mb-8 flex flex-wrap gap-2'>{children}</ul>
            ),
            li: ({ children }): JSX.Element => (
              <li>
                <Badge>{children}</Badge>
              </li>
            )
          }}
        >
          {(localStorage.about as string) ?? children}
        </ReactMarkdown>
      </Section>
    </div>
  )
}
