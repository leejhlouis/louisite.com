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
      <body className='bg-[#c5d1ff] text-slate-800 dark:bg-[#110627] dark:text-white'>
        <div id='root' className='bg-light dark:bg-dark'>
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
