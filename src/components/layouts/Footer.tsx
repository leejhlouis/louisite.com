import BackToTop from '@/components/common/BackToTop'
import NavLinks from '@/components/common/NavLinks'
import SocialMediaLinks from '@/components/common/SocialMediaLinks'
import Title from '@/components/common/Title'

export default function Footer(): JSX.Element {
  return (
    <footer className='container py-4 sm:py-6 xl:max-w-screen-xl xl:py-8'>
      <BackToTop />
      <div className='pb-4 pt-8'>
        <Title size='lg' />
      </div>
      <div className='flex flex-col justify-between pb-4 sm:flex-row sm:items-center'>
        <p className='pb-3 font-light sm:pb-0'>Made with ❤️ by Louis.</p>
        <div className='flex flex-col flex-wrap items-start gap-3 sm:flex-row sm:items-center sm:gap-0 sm:space-x-6'>
          <NavLinks />
          <SocialMediaLinks />
        </div>
      </div>
    </footer>
  )
}
