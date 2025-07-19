import { Metadata } from "next"
import '@/styles/main.css'
import ScrollToTop from "@/components/common/ScrollToTop"
import ScrollToTopFAB from "@/components/common/ScrollToTopFAB"
import ClientTheme from "@/components/common/ClientTheme"

export const metadata: Metadata = {
  title: 'Louis Gustavo | Software Engineer',
  description: 'Louis Gustavo is a Software Engineer at Traveloka specializing in building web interfaces and backend systems using Spring Boot, Next.js, Vue.js, React, Laravel, and more.',
}
 
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body className='bg-[#c5d1ff] text-slate-800 dark:bg-[#110627] dark:text-white'>
        <div id='root' className='bg-light dark:bg-dark'>
          {children}
        </div>
        <ClientTheme />
        <ScrollToTop />
        <ScrollToTopFAB />
      </body>
    </html>
  )
}
