import Title from '@/components/common/Title'
import NavLinks from '@/components/common/NavLinks'
import ThemeToggle from '@/components/common/ThemeToggle'
import NavDropdown from '@/components/common/NavDropdown'

export default function Navbar() {
  return (
    <nav
      aria-label='Primary navigation'
      className='fixed top-0 z-50 w-full border-b border-line/70 bg-canvas/20 backdrop-blur-xl'
    >
      <div className='container flex max-w-screen-xl flex-wrap items-center justify-between py-3'>
        <Title size='sm' />
        <div className='flex items-center space-x-2 sm:space-x-4'>
          <div className='hidden sm:block'>
            <NavLinks />
          </div>
          <NavDropdown />
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
