'use client'

import type NavItemsProps from '@/types/NavItemsProps'
import { navItems } from '@/constants'
import Button from '@/components/ui/button/Button'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  const links = navItems.map((item: NavItemsProps) => (
    <li className='flex' key={item.href}>
      <Button active={pathname === item.href} href={item.href} variant='ghost'>
        {item.name}
      </Button>
    </li>
  ))

  return <ul className='flex flex-row items-center gap-2'>{links}</ul>
}
