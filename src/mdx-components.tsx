import Heading1 from '@/components/ui/heading/Heading1'
import Heading2 from '@/components/ui/heading/Heading2'
import Heading3 from '@/components/ui/heading/Heading3'
import InlineLink from '@/components/ui/InlineLink'
import type { MDXComponents } from 'mdx/types'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: Heading1,
    h2: Heading2,
    h3: Heading3,
    a: InlineLink,
    ...components
  }
}
