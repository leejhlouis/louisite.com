import clsx from 'clsx'
import FadeInSection from '@/components/layouts/FadeInSection'
import SlidingInUnderline from '@/components/ui/SlidingInUnderline'
import HighlightText from '@/components/ui/HighlightText'
import InlineLink from '@/components/ui/InlineLink'
import SocialMediaLinks from '@/components/common/SocialMediaLinks'
import SystemMap from '@/components/illustrations/SystemMap'
import Button from '@/components/ui/button/Button'
import { RiArrowDownLine } from '@remixicon/react'

export default function Hero() {
  return (
    <FadeInSection className='relative flex h-[90vh] min-h-[480px] flex-col justify-between overflow-hidden'>
      <div className='pointer-events-none absolute -right-24 bottom-6 hidden h-52 w-96 rotate-[-5deg] opacity-70 dark:opacity-50 lg:block'>
        <SystemMap variant='orbit' />
      </div>
      <div className='-mt-8 flex h-full flex-col justify-center space-y-6'>
        <h2 className='animate-fade-in font-mono text-base lg:text-lg'>
          Hey👋, I&apos;m{' '}
          <SlidingInUnderline type='secondary' height='lg'>
            Louis Gustavo
          </SlidingInUnderline>
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-4xl text-emphasis-dark dark:text-emphasis-light lg:text-6xl',
            'break-words font-bold tracking-tight'
          )}
        >
          3+ years building <HighlightText>web interfaces</HighlightText> and{' '}
          <HighlightText>backend systems.</HighlightText>
        </h1>
        <p className={clsx('animate-fade-in pb-0 !delay-300 lg:w-3/4')}>
          Software Engineer at{' '}
          <InlineLink href='https://traveloka.com' inverted>
            Traveloka
          </InlineLink>{' '}
          specializing in Spring Boot and Next.js.
        </p>
        <div className='flex gap-4'>
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
