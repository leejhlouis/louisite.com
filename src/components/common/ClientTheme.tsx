'use client'
import { useEffect } from 'react'
import checkDarkTheme from '@/utils/checkDarkTheme'

export default function ClientTheme(): null {
  useEffect(() => {
    if (checkDarkTheme()) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return null
}
