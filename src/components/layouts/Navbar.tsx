import Title from '@/components/common/Title'
import NavLinks from '@/components/common/NavLinks'
import ThemeToggle from '@/components/common/ThemeToggle'
import NavDropdown from '@/components/common/NavDropdown'

export default function Navbar() {
  return (
    <nav className='fixed top-0 z-50 w-full backdrop-blur-xl'>
      <div className='container flex flex-wrap items-center justify-between py-4 xl:max-w-screen-xl'>
        <Title size='sm' />
        <div className='flex items-center space-x-2 sm:space-x-6'>
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
