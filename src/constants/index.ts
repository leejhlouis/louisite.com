import type NavItemsProps from '@/types/NavItemsProps'
import { siteRoutes } from '@/constants/routes'

const social = {
  mail: 'louisgustavo07@gmail.com',
  github: 'leejhlouis',
  linkedin: 'https://www.linkedin.com/in/louis-gustavo'
}

const navItems: NavItemsProps[] = siteRoutes.map(route => ({
  name: route.name,
  href: route.href,
  isNew: route.href === '/blog'
}))

export {
  social,
  navItems
}
