'use client'

import { ThemeProvider } from 'next-themes'
import ScrollToTopProvider from '@/components/providers/ScrollToTopProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollToTopProvider>
      <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
        {children}
      </ThemeProvider>
    </ScrollToTopProvider>
  )
}
