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
            'hover:bg-slate-300/50 hover:dark:bg-slate-950/50'
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
        'bg-slate-200/95 dark:bg-slate-900/95',
        'flex w-32 flex-col rounded-lg shadow-lg'
      )}
    >
      {links}
    </ul>
  )
}
