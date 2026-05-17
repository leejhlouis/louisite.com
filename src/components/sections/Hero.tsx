import clsx from 'clsx'
import FadeInSection from '@/components/layouts/FadeInSection'
import SlidingInUnderline from '@/components/ui/SlidingInUnderline'
import HighlightText from '@/components/ui/HighlightText'
import InlineLink from '@/components/ui/InlineLink'
import SocialMediaLinks from '@/components/common/SocialMediaLinks'
import Button from '@/components/ui/button/Button'
import { RiArrowDownLine } from '@remixicon/react'

export default function Hero() {
  return (
    <FadeInSection className='flex h-[88vh] min-h-[480px] flex-col justify-between'>
      <div className='-mt-8 flex h-full flex-col justify-center space-y-4 sm:space-y-6'>
        <h2 className={clsx('animate-fade-in', 'text-md sm:text-lg lg:text-xl')}>
          Hey👋, I'm{' '}
          <SlidingInUnderline type='secondary' height='lg'>
            Louis Gustavo
          </SlidingInUnderline>
        </h2>
        <h1
          className={clsx(
            'animate-fade-in !delay-200',
            'text-3xl text-slate-900 dark:text-white sm:text-5xl lg:text-6xl',
            'break-words font-extrabold tracking-tight'
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
          specializing in Spring Boot, Java 21, Next.js.
        </p>
        <div className='flex gap-4'>
          <Button icon={<RiArrowDownLine />} iconPosition='right' href='#projects' variant='filled'>
            View projects
          </Button>
          <Button iconPosition='right' href='#projects' inverted variant='filled'>
            About me
          </Button>
        </div>
        <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
      </div>
    </FadeInSection>
  )
}
