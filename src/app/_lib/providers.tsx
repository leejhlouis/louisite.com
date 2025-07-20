'use client'

import { ThemeProvider } from 'next-themes'
import ScrollToTopProvider from '@/components/providers/ScrollToTopProvider'

export default function Providers({
  theme,
  children
}: {
  theme: 'light' | 'dark'
  children: React.ReactNode
}) {
  return (
    <ScrollToTopProvider>
      <ThemeProvider attribute='class' enableSystem={false}>
        {children}
      </ThemeProvider>
    </ScrollToTopProvider>
  )
}
