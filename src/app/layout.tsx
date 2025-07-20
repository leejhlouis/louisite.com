import { Metadata } from 'next'
import { cookies } from 'next/headers'
import ScrollToTopFAB from '@/components/common/ScrollToTopFAB'
import clsx from 'clsx'
import Providers from '@/app/_lib/providers'
import '@/styles/main.css'
import PageWrapper from '@/components/layouts/PageWrapper'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

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

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies()
  const theme = (cookieStore.get('theme')?.value || 'light') as 'light' | 'dark'

  return (
    <html lang='en' className={clsx('scroll-smooth', theme)} style={{ colorScheme: theme }} data-theme={theme}>
      <head />
      <body className='bg-[#c5d1ff] text-slate-800 dark:bg-[#110627] dark:text-white'>
        <div id='root' className='bg-light dark:bg-dark'>
          <Providers theme={theme}>
            <PageWrapper>
              <Navbar />
              {children}
              <Footer />
            </PageWrapper>
          </Providers>
        </div>
        <ScrollToTopFAB />
      </body>
    </html>
  )
}
