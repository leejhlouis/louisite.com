'use client'

import ScrollToTopProvider from '@/components/providers/ScrollToTopProvider'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ScrollToTopProvider>
      {children}
    </ScrollToTopProvider>
  )
}
