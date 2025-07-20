'use client'

import NavDropdownContent from '@/components/common/NavDropdownContent'
import IconButton from '@/components/ui/button/IconButton'
import { RiMenu3Fill } from '@remixicon/react'
import { useState } from 'react'

export default function NavDropdown() {
  const [toggle, setToggle] = useState<boolean>(false)
  const onDropdownButtonClick = (): void => setToggle(!toggle)

  return (
    <div className='relative sm:hidden'>
      <IconButton
        icon={<RiMenu3Fill size={20} />}
        screenReaderText='Toggle dropdown'
        onClick={onDropdownButtonClick}
      />
      {toggle && <NavDropdownContent />}
    </div>
  )
}
