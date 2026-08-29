import { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@/styles/main.css'
import BackgroundGradients from '@/components/layouts/BackgroundGradients'
import PageWrapper from '@/components/layouts/PageWrapper'
import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import SiteJsonLd from '@/components/seo/SiteJsonLd'
import { siteConfig } from '@/constants/seo'

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-geist'
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: 'Louis Gustavo | Software Engineer',
    template: '%s | Louis Gustavo'
  },
  description: siteConfig.description,
  applicationName: siteConfig.siteName,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  category: 'technology',
  referrer: 'origin-when-cross-origin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  manifest: '/manifest.json',
  alternates: {
    types: {
      'application/rss+xml': `${siteConfig.url}/blog/rss`
    }
  },
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
      <body className='overflow-x-hidden bg-canvas text-ink antialiased'>
        <SiteJsonLd />
        <BackgroundGradients />
        <div className='bg-light dark:bg-dark relative z-10 min-h-screen'>
          <PageWrapper>
            <Navbar />
            {children}
            <Footer />
          </PageWrapper>
        </div>
      </body>
    </html>
  )
}
