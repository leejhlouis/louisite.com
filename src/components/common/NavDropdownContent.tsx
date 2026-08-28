'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { navItems } from '@/constants'
import NavItemsProps from '@/types/NavItemsProps'

export default function NavDropdownContent() {
  const pathname = usePathname()

  const links = navItems.map((item: NavItemsProps, index: number) => {
    const isActive = pathname === item.href

    return (
      <Link
        key={index}
        href={item.href}
        className={clsx('w-full', 'hover:color-[inherit] hover:no-underline', {
          'font-bold': isActive,
          'font-normal': !isActive
        })}
      >
        <li
          className={clsx(
            'cursor-pointer',
            'flex w-full px-2 py-1',
            'hover:bg-elevated hover:text-signal'
          )}
        >
          <span>{item.name}</span>
        </li>
      </Link>
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
