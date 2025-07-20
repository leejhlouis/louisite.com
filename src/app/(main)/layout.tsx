import Navbar from '@/components/layouts/Navbar'
import Footer from '@/components/layouts/Footer'
import '@/styles/main.css'
import PageWrapper from '@/components/layouts/PageWrapper'


export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <PageWrapper>
      <Navbar />
      {children}
      <Footer />
    </PageWrapper>
  )
}
