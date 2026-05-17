import { Metadata } from 'next'
import ScrollToTopFAB from '@/components/common/ScrollToTopFAB'
import '@/styles/main.css'
import PageWrapper from '@/components/layouts/PageWrapper'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import BackgroundGradients from '@/components/layouts/BackgroundGradients'

export const metadata: Metadata = {
  title: 'Louis Gustavo | Software Engineer',
  description:
    'Louis Gustavo is a Software Engineer at Traveloka specializing in building web interfaces and backend systems using Spring Boot, Next.js, Vue.js, React, Laravel, and more.',
  icons: {
    icon: '/assets/icons/favicon.ico',
    shortcut: '/assets/icons/favicon-32x32.png',
    apple: '/assets/icons/apple-touch-icon.png',
    other: [
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        url: '/assets/icons/favicon-16x16.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        url: '/assets/icons/favicon-32x32.png'
      }
    ]
  }
}

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark' suppressHydrationWarning>
      <body className='text-default-dark dark:text-default-light overflow-x-hidden scroll-smooth bg-slate-300 dark:bg-slate-950'>
        <PageWrapper>
          <Navbar />
          {children}
          <Footer />
        </PageWrapper>
        <BackgroundGradients />
        <ScrollToTopFAB />
      </body>
    </html>
  )
}
