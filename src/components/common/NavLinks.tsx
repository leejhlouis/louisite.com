'use client'

import dynamic from 'next/dynamic'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import NavItemsProps from '@/types/NavItemsProps'
import { navItems } from '@/constants'

// lazy load PrimaryButton, Next-style (only on client)
const PrimaryButton = dynamic(() => import('@/components/common/reusable/button/PrimaryButton'), {
  ssr: false
})

export default function NavLinks(): JSX.Element {
  const pathname = usePathname()

  const links = navItems.map((item: NavItemsProps, index: number): JSX.Element => {
    const isActive = pathname === item.href

    return (
      <li
        className='flex'
        key={index}
      >
        <Link href={item.href}>
          <PrimaryButton active={isActive}>{item.name}</PrimaryButton>
        </Link>
      </li>
    )
  })

  return <ul className='flex flex-row items-center space-x-4'>{links}</ul>
}
