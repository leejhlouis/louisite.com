'use client'
export default function checkDarkTheme(): boolean {
  if (typeof window === 'undefined') {
    return false
  }
  return (
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
  )
}
