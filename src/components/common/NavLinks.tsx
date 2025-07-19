import Link from 'next/link'
import NavItemsProps from '@/types/NavItemsProps'
import { navItems } from '@/constants'
import PrimaryButton from '@/components/ui/button/PrimaryButton'

export default function NavLinks() {
  const links = navItems.map(
    (item: NavItemsProps, index: number): JSX.Element => (
      <li className='flex' key={index}>
        <Link href={item.href}>
          <PrimaryButton>{item.name}</PrimaryButton>
        </Link>
      </li>
    )
  )

  return <ul className='flex flex-row items-center space-x-4'>{links}</ul>
}
