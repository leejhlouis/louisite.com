import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import ScrollToTopFAB from '@/components/common/ScrollToTopFAB'
import '@/styles/main.css'
import BackgroundGradients from '@/components/layouts/BackgroundGradients'
import PageWrapper from '@/components/layouts/PageWrapper'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

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
    <html lang='en' suppressHydrationWarning className={`${geist.variable} ${geistMono.variable}`}>
      <body className='overflow-x-hidden bg-slate-200 text-default-dark antialiased dark:bg-slate-950 dark:text-default-light'>
        <BackgroundGradients />
        <div className='bg-light dark:bg-dark relative z-10 min-h-screen'>
          <PageWrapper>
            <Navbar />
            {children}
            <Footer />
          </PageWrapper>
        </div>
        <ScrollToTopFAB />
      </body>
    </html>
  )
}
