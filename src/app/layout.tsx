import { Metadata } from 'next'
import ScrollToTopFAB from '@/components/common/ScrollToTopFAB'
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

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='dark'>
      <body className='bg-gray-50 text-slate-800 dark:bg-gray-950 dark:text-white'>
        <div id='root'>
          <PageWrapper>
            <Navbar />
            {children}
            <Footer />
          </PageWrapper>
        </div>

        <div className='fixed top-0 h-full w-full overflow-hidden'>
          <div className='pointer-events-none absolute inset-0 -z-10'>
            <div className='absolute -left-[210px] -top-[210px] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-indigo-400/30 via-purple-400/30 to-pink-400/30 blur-3xl dark:from-indigo-600/25 dark:via-purple-600/25 dark:to-pink-600/25' />
            <div className='absolute -right-32 top-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-400/20 blur-3xl dark:from-cyan-600/20 dark:to-blue-600/20' />
            <div className='absolute bottom-[-10%] left-1/3 h-[360px] w-[360px] rounded-full bg-gradient-to-br from-orange-300/20 to-rose-300/20 blur-3xl dark:from-orange-500/20 dark:to-rose-500/20' />
          </div>
        </div>
        <ScrollToTopFAB />
      </body>
    </html>
  )
}
