import clsx from 'clsx'
import FadeInSection from '@/components/layouts/FadeInSection'
import HighlightText from '@/components/ui/HighlightText'
import InlineLink from '@/components/ui/InlineLink'
import SocialMediaLinks from '@/components/common/SocialMediaLinks'
import SystemMap from '@/components/illustrations/SystemMap'
import Button from '@/components/ui/button/Button'
import { RiArrowDownLine } from '@remixicon/react'
import SlidingInUnderline from '@/components/ui/SlidingInUnderline'

export default function Hero() {
  return (
    <FadeInSection className='relative flex min-h-[calc(75vh-4.5rem)] flex-col justify-center overflow-hidden py-16 sm:py-20 lg:min-h-[620px]'>
      <div className='pointer-events-none absolute -right-24 bottom-6 hidden h-52 w-96 rotate-[-5deg] opacity-70 dark:opacity-50 lg:block'>
        <SystemMap variant='orbit' />
      </div>
      <div className='flex max-w-4xl flex-col space-y-6'>
        <p className='animate-fade-in pb-0 font-mono text-sm font-semibold text-muted lg:text-base'>
          Hey, I&apos;m{' '}
          <SlidingInUnderline type='secondary' height='lg'>
            Louis Gustavo
          </SlidingInUnderline>
        </p>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-balance text-4xl text-ink lg:text-6xl',
            'break-words font-bold tracking-tight'
          )}
        >
          3+ years building <HighlightText>web interfaces</HighlightText> and{' '}
          <HighlightText>backend systems.</HighlightText>
        </h1>
        <p className={clsx('animate-fade-in max-w-2xl pb-0 text-muted !delay-300 lg:text-lg')}>
          Software Engineer at{' '}
          <InlineLink href='https://traveloka.com' inverted>
            Traveloka
          </InlineLink>{' '}
          specializing in Spring Boot and Next.js.
        </p>
        <div className='flex flex-wrap gap-3'>
          <Button icon={<RiArrowDownLine />} iconPosition='right' href='#projects' variant='filled'>
            View projects
          </Button>
          <Button iconPosition='right' href='/about' inverted variant='filled'>
            About me
          </Button>
        </div>
        <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
      </div>
    </FadeInSection>
  )
}
