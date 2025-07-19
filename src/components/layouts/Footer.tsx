'use client'
import { lazy } from 'react'

const PrimaryButton = lazy(() => import('@/components/common/reusable/button/PrimaryButton'))
const NavLinks = lazy(() => import('@/components/common/NavLinks'))
const SocialMediaLinks = lazy(() => import('@/components/common/SocialMediaLinks'))
const Title = lazy(() => import('@/components/common/Title'))
const ArrowUpSLineIcon = lazy(() => import('remixicon-react/ArrowUpSLineIcon'))

export default function Footer(): JSX.Element {
  const scrollToTop = (): void => {
    window.scrollTo(0, 0)
  }

  return (
    <footer className='container py-4 sm:py-6 xl:max-w-screen-xl xl:py-8'>
      <PrimaryButton
        onClick={scrollToTop}
        className='mx-auto mb-6'
        icon={<ArrowUpSLineIcon />}
      >
        Back to top
      </PrimaryButton>
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
