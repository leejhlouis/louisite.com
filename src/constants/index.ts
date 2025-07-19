import NavItemsProps from "@/types/NavItemsProps"

const social = {
  mail: 'louisgustavo07@gmail.com',
  github: 'leejhlouis',
  linkedin: 'https://www.linkedin.com/in/louis-gustavo'
}

const navItems: NavItemsProps[] = [
  {
    name: 'Home',
    href: '/',
    isNew: false
  },
  {
    name: 'Blog',
    href: '/blog',
    isNew: true
  },
  {
    name: 'Projects',
    href: '/projects',
    isNew: false
  },
  {
    name: 'About',
    href: '/about',
    isNew: false
  }
]

export {
  social,
  navItems
}
