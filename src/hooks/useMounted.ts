'use client'
import { useEffect, useState } from 'react'

export default function useMounted(): boolean {
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect((): void => {
    setTimeout((): void => {
      setMounted(true)
    }, 100)
  }, [])

  return mounted
}
