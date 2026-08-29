import Title from '@/components/common/Title'
import NavLinks from '@/components/common/NavLinks'
import ThemeToggle from '@/components/common/ThemeToggle'
import NavDropdown from '@/components/common/NavDropdown'

export default function Navbar() {
  return (
    <nav
      aria-label='Primary navigation'
      className='fixed top-0 z-50 w-full border-b border-slate-500/10 backdrop-blur-xl dark:border-slate-600/20'
    >
      <div className='container flex flex-wrap items-center justify-between py-4'>
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
