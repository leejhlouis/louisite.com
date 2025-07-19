'use client'

import NavDropdownContent from '@/components/common/NavDropdownContent'
import IconButton from '@/components/ui/button/IconButton'
import { useState } from 'react'
import Menu3FillIcon from 'remixicon-react/Menu3FillIcon'

export default function NavDropdown(): JSX.Element {
  const [toggle, setToggle] = useState<boolean>(false)
  const onDropdownButtonClick = (): void => setToggle(!toggle)

  return (
    <div className='relative sm:hidden'>
      <IconButton
        icon={<Menu3FillIcon size={20} />}
        screenReaderText='Toggle dropdown'
        onClick={onDropdownButtonClick}
      />
      {toggle && <NavDropdownContent />}
    </div>
  )
}
