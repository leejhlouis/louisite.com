import SocialMediaLinks from "@/components/common/SocialMediaLinks";
import HighlightText from "@/components/ui/HighlightText";
import InlineLink from "@/components/ui/InlineLink";
import SlidingInUnderline from "@/components/ui/SlidingInUnderline";
import clsx from "clsx";

export default function HeroContent() {
  return (
    <div className='flex h-3/4 flex-col justify-center space-y-4 sm:space-y-6'>
      <h2 className={clsx('animate-fade-in', 'text-xl sm:text-2xl lg:text-3xl')}>
        Hey👋, I'm{' '}
        <SlidingInUnderline type='secondary' height='lg'>
          Louis Gustavo
        </SlidingInUnderline>
      </h2>
      <h1
        className={clsx(
          'animate-fade-in !delay-200',
          'text-3xl sm:text-5xl lg:text-6xl',
          'break-words font-extrabold tracking-tight'
        )}
      >
        3+ years building <HighlightText>web interfaces</HighlightText> and{' '}
        <HighlightText>backend systems</HighlightText>.
      </h1>
      <p
        className={clsx(
          'animate-fade-in !delay-300',
          'text-muted-dark dark:text-muted',
          'sm:text-lg lg:text-xl',
          'pb-0'
        )}
      >
        Software Engineer <InlineLink href='https://traveloka.com'>@Traveloka</InlineLink>
      </p>
      <SocialMediaLinks className={clsx('animate-fade-in !delay-500', 'mt-6')} />
    </div>
  )
}
