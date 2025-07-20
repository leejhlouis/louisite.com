'use client'

import { lazy } from 'react'
import { useTheme } from 'next-themes'
import useMounted from '@/hooks/useMounted'
import { RiLoaderLine, RiMoonLine, RiSunLine } from '@remixicon/react'

const IconButton = lazy(() => import('@/components/ui/button/IconButton'))

export default function ThemeToggle() {
  const mounted = useMounted()
  const { theme, setTheme } = useTheme()

  const toggleTheme = (): void => {
    const newTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(newTheme)
  }

  if (!mounted) {
    return (
      <IconButton
        className='animate-pulse'
        icon={<RiLoaderLine size={20} />}
        screenReaderText='Loading theme toggle'
      />
    )
  }

  return (
    <IconButton
      className='duration-300'
      icon={theme === 'dark' ? <RiMoonLine size={20} /> : <RiSunLine size={20} />}
      screenReaderText='Toggle theme'
      onClick={toggleTheme}
    />
  )
}
