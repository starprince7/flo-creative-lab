'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

interface MenuItemProps {
  title: string
  url: string
  items?: { title: string; url: string }[]
}

const menuItems: MenuItemProps[] = [
  {
    title: 'Home',
    url: '/',
  },
  {
    title: 'Music Videos',
    url: '/flim-making/services/music-videos',
  },
  {
    title: 'Commercials',
    url: '/flim-making/services/commercials',
  },
  {
    title: 'About',
    url: '/about',
  },
  {
    title: 'Contact',
    url: '/contact',
  },
]

export const HorizontalMenu = () => {
  const pathname = usePathname()
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const isLinkActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + '/')
  }

  return (
    <nav className="hidden lg:block">
      <ul className="flex items-center gap-8 xl:gap-12">
        {menuItems.map((item) => (
          <li
            key={item.title}
            className="group relative"
            onMouseEnter={() => item.items && setActiveDropdown(item.title)}
            onMouseLeave={() => setActiveDropdown(null)}>
            <Link
              href={item.url}
              className={`text-sm font-normal transition-colors duration-200 xl:text-base ${isLinkActive(item.url) ? 'text-white' : 'text-white/70 hover:text-white'}`}>
              {item.title}
            </Link>

            {item.items && item.items.length > 0 && (
              <ul
                className={`absolute left-0 top-full min-w-max overflow-hidden rounded-lg bg-black/90 pt-2 backdrop-blur-xl transition-all duration-200 ${activeDropdown === item.title ? 'visible opacity-100' : 'invisible opacity-0'}`}>
                {item.items.map((subItem) => (
                  <li key={subItem.title}>
                    <Link
                      href={subItem.url}
                      className={`block px-4 py-2 text-sm transition-colors duration-200 ${isLinkActive(subItem.url) ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'}`}>
                      {subItem.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}
