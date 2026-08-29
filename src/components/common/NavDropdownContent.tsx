'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navItems } from '@/constants'
import type NavItemsProps from '@/types/NavItemsProps'

export default function NavDropdownContent() {
  const pathname = usePathname()

  const links = navItems.map((item: NavItemsProps) => {
    const isActive = pathname === item.href

    return (
      <li key={item.href}>
        <Link
          href={item.href}
          aria-current={isActive ? 'page' : undefined}
          className={clsx(
            'flex w-full cursor-pointer px-2 py-1 hover:bg-elevated hover:text-signal hover:no-underline',
            { 'font-bold': isActive, 'font-normal': !isActive }
          )}
        >
          <span>{item.name}</span>
        </Link>
      </li>
    )
  })

  return (
    <ul
      className={clsx(
        'absolute right-0',
        'mt-2 py-2',
        'border border-line bg-surface',
        'flex w-36 flex-col rounded-xl p-1 shadow-editorial dark:shadow-editorial-dark'
      )}
    >
      {links}
    </ul>
  )
}
