'use client'

import NavDropdownContent from '@/components/common/NavDropdownContent'
import IconButton from '@/components/ui/button/IconButton'
import { RiMenu3Fill } from '@remixicon/react'
import { useEffect, useRef, useState } from 'react'

const MENU_ID = 'mobile-navigation'

export default function NavDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!isOpen) return

    const closeMenu = (event: KeyboardEvent | PointerEvent): void => {
      if (event instanceof KeyboardEvent) {
        if (event.key !== 'Escape') return
        setIsOpen(false)
        buttonRef.current?.focus()
        return
      }

      if (!containerRef.current?.contains(event.target as Node)) setIsOpen(false)
    }

    document.addEventListener('keydown', closeMenu)
    document.addEventListener('pointerdown', closeMenu)

    return () => {
      document.removeEventListener('keydown', closeMenu)
      document.removeEventListener('pointerdown', closeMenu)
    }
  }, [isOpen])

  return (
    <div ref={containerRef} className='relative sm:hidden'>
      <IconButton
        ref={buttonRef}
        icon={<RiMenu3Fill size={20} />}
        screenReaderText={`${isOpen ? 'Close' : 'Open'} navigation menu`}
        aria-expanded={isOpen}
        aria-controls={MENU_ID}
        onClick={() => setIsOpen(current => !current)}
      />
      {isOpen && <NavDropdownContent id={MENU_ID} onNavigate={() => setIsOpen(false)} />}
    </div>
  )
}
