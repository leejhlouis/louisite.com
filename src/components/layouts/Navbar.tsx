'use client'
import { lazy, useEffect, useState } from 'react'
import useEventListener from '@/hooks/useEventListener'
import Dropdown from '@/components/common/Dropdown'
import Title from '@/components/common/Title'
import IconButton from '@/components/common/reusable/button/IconButton'
import NavLinks from '@/components/common/NavLinks'
import Menu3FillIcon from 'remixicon-react/Menu3FillIcon'

const ThemeSwitcher = lazy(() => import('@/components/common/ThemeSwitcher'))

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean>(false)
  const [toggle, setToggle] = useState<boolean>(false)

  const handleWidthChange = (): void => setIsMobile(window.innerWidth < 640)
  useEventListener('resize', handleWidthChange)

  const onThemeButtonClick = (): void => setToggle(!toggle)

  useEffect(() => {
    // run once on mount
    setIsMobile(window.innerWidth < 640)
  }, [])

  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-xl'>
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <Title size='sm' />
        <div className='flex items-center space-x-2 sm:space-x-6'>
          {!isMobile && <NavLinks />}
          {isMobile && (
            <div className='relative'>
              <IconButton
                icon={<Menu3FillIcon size={20} />}
                screenReaderText='Toggle dropdown'
                onClick={onThemeButtonClick}
              />
              {toggle && <Dropdown />}
            </div>
          )}
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  )
}
