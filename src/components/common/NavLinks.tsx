'use client'
import Link from 'next/link'
import NavItemsProps from '@/types/NavItemsProps'
import { navItems } from '@/constants'
import Button from '@/components/ui/button/Button'
import { usePathname } from 'next/navigation'

export default function NavLinks() {
  const pathname = usePathname()

  const links = navItems.map((item: NavItemsProps, index: number) => (
    <li className='flex' key={index}>
      <Link href={item.href}>
        <Button active={pathname === item.href} variant='ghost'>
          {item.name}
        </Button>
      </Link>
    </li>
  ))

  return <ul className='flex flex-row items-center space-x-8'>{links}</ul>
}
