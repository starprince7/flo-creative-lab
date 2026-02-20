'use client'

import { gsap } from 'gsap'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { forwardRef, useEffect, useRef, useState } from 'react'

interface MenuItemProps {
  title: string
  url: string
  items?: { title: string; url: string; isActive?: boolean }[]
  isActive?: boolean
}

const menuItems: MenuItemProps[] = [
  {
    title: 'Home',
    url: '/',
    items: [{ title: 'Case Study - Ms Banks ft. Efosa - Silhouette', url: '/flim-making/project/2' }],
    // items: [
    //   { title: 'Case Study - Ms Banks ft. Efosa - Silhouette', url: '/flim-making/project/2' },
    //   { title: 'Homepage 02- Digital Solutions Agency', url: '/home-02' },
    //   { title: 'Homepage 03 -  Portfolio', url: '/home-03' },
    //   { title: 'Homepage 04 -  Photography Studio', url: '/home-04' },
    //   { title: 'Homepage 05 -  SEO Agency', url: '/home-05' },
    //   { title: 'Homepage 06 -  Creative Agency', url: '/home-06' },
    //   { title: 'Homepage 07 -  Design Studio', url: '/home-07' },
    //   { title: 'Homepage 08 -  Business Solutions', url: '/home-08' },
    //   { title: 'Homepage 09 -  Personal Branding', url: '/home-09' },
    //   { title: 'Homepage 10 -  Full Service Agency', url: '/home-10' },
    //   { title: 'Homepage 11 -  Video Production', url: '/home-11' },

    //   { title: 'Homepage 14 -  Film Production Agency', url: '/home-14' },

    // ],
  },
  {
    title: 'Music Videos',
    url: '/flim-making/services/music-videos',
    // items: [
    //   { title: 'About', url: '/about' },
    //   { title: 'About 02', url: '/about-02' },
    // ],
  },
  {
    title: 'Commercials',
    url: '/flim-making/services/commercials',
    items: [
      // { title: 'Services', url: '/services' },
      // { title: 'Services Details', url: '/services/media' },
    ],
  },
  // {
  //   title: 'Blog',
  //   url: '#',
  //   items: [
  //     { title: 'AI Blog', url: '/ai-blog' },
  //     { title: 'SEO Blog', url: '/seo-blog' },
  //     { title: 'Blog Details', url: '/seo-blog/the-evolution-of-minimalist-design' },
  //   ],
  // },
  {
    title: 'About',
    url: '/about',
    items: [
      // { title: 'Design Agency', url: '/design-agency' },
      // { title: 'Digital Agency', url: '/digital-agency/project' },
      // { title: 'Case Study', url: '/portfolio-agency/case-study' },
      // { title: 'Project Details', url: '/design-agency/project-nexus' },
      // { title: 'Project Details 02', url: '/digital-agency/project/project-nexus' },
    ],
  },
  {
    title: 'Contact',
    url: '/contact',
  },
]

interface MenuListProps {
  onItemClick?: () => void
}

export const MenuList = forwardRef<HTMLUListElement, MenuListProps>((props, ref) => {
  const { onItemClick } = props
  const pathname = usePathname()
  const [activeItems, setActiveItems] = useState<string[]>([])
  const [initialLoad, setInitialLoad] = useState(true)
  const dropdownRefsMap = useRef(new Map<string, HTMLUListElement | null>())

  //  initial active item current path
  useEffect(() => {
    let foundParent = false

    menuItems.forEach((item) => {
      if (item.items) {
        const activeSubItem = item.items.find(
          (subItem) => pathname === subItem.url || pathname.startsWith(subItem.url + '/'),
        )

        if (activeSubItem) {
          setActiveItems([item.title])
          foundParent = true
        }
      }
    })

    // If no parent found but we're on a top-level path
    if (!foundParent) {
      const topLevelMatch = menuItems.find(
        (item) => pathname === item.url || (item.url !== '#' && pathname.startsWith(item.url + '/')),
      )

      if (topLevelMatch) {
        setActiveItems([topLevelMatch.title])
      }
    }

    if (pathname === '/') {
      setActiveItems(['Home'])
    }

    setInitialLoad(false)
  }, [pathname])

  useEffect(() => {
    if (initialLoad && pathname === '/') {
      setActiveItems(['Home'])

      setTimeout(() => {
        const homeDropdown = dropdownRefsMap.current.get('Home')
        if (homeDropdown) {
          gsap.set(homeDropdown, { display: 'block', autoAlpha: 1, x: 0 })
        }
      }, 100)
    }
  }, [initialLoad, pathname])

  // Handle dropdown animations
  useEffect(() => {
    menuItems.forEach((item) => {
      const dropdownRef = dropdownRefsMap.current.get(item.title)
      if (dropdownRef) {
        if (activeItems.includes(item.title)) {
          // Show dropdown
          gsap.set(dropdownRef, { display: 'block', autoAlpha: 0, x: 10 })
          gsap.to(dropdownRef, {
            autoAlpha: 1,
            x: 0,
            duration: 0.2,
            ease: 'power3.in',
            stagger: {
              amount: 0.1,
              ease: 'back.out(1.7)',
            },
          })
        } else {
          // Hide dropdown
          gsap.to(dropdownRef, {
            autoAlpha: 0,
            x: 10,
            duration: 0.1,
            ease: 'power3.out',
            onComplete: () => {
              gsap.set(dropdownRef, {})
            },
          })
        }
      }
    })
  }, [activeItems])

  const handleDropdownClick = (title: string) => {
    if (window.innerWidth > 368) {
      setActiveItems((prev) => (prev.includes(title) ? [] : [title]))
    } else {
      setActiveItems((prev) => (prev.includes(title) ? prev.filter((item) => item !== title) : [...prev, title]))
    }
  }

  const setDropdownRef = (el: HTMLUListElement | null, title: string) => {
    if (el) {
      dropdownRefsMap.current.set(title, el)

      // If this is the Home dropdown and we're on the homepage, make it visible immediately
      if (title === 'Home' && pathname === '/' && initialLoad) {
        gsap.set(el, { display: 'block', autoAlpha: 1, x: 0 })
      }
    }
  }

  const isLinkActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + '/')
  }

  return (
    <ul ref={ref} className="menu-list">
      {menuItems.map((item) => (
        <li
          key={item.title}
          className={`menu-list-item menu-list-item-anchor ${activeItems.includes(item.title) ? 'active' : ''}`}>
          <a
            href={item.url}
            onClick={(e) => {
              // e.preventDefault()
              // handleDropdownClick(item.title)
            }}
            className="menu-list-item-text text-[28px] leading-[70px] text-white md:text-[42px] xl:text-[56px] xl:leading-[90px]">
            {item.title}
          </a>
          {item.items && (
            <ul
              ref={(el) => setDropdownRef(el, item.title)}
              className={`menu-list-item-dropdown relative left-0 h-fit max-h-[60vh] w-full gap-x-4 overflow-y-auto md:absolute md:left-[48%] md:max-h-none md:w-[350px] md:overflow-visible md:pb-0 lg:left-[33%] lg:w-[650px] xl:left-[44%] ${item.title === 'Home' ? '!grid !grid-cols-1 lg:-mt-[70px] lg:!grid-cols-2' : '!grid !grid-cols-1 lg:top-5'} ${activeItems.includes(item.title) || (item.title === 'Home' && pathname === '/' && initialLoad) ? 'block' : 'hidden'} `}>
              {item.items.map((subItem) => (
                <li key={subItem.title}>
                  <Link
                    href={subItem.url}
                    onClick={() => {
                      onItemClick && onItemClick()
                    }}
                    className={`menu-list-item-dropdown-list inline-block pb-1 pl-3 text-base leading-8 text-white md:text-lg md:leading-[50px] ${
                      isLinkActive(subItem.url) ? 'active' : ''
                    }`}>
                    {subItem.title.includes('-') ? (
                      <>
                        {subItem.title.split('-')[0]}-
                        <i className="font-instrument text-inherit">{subItem.title.split('-')[1]}</i>
                      </>
                    ) : (
                      subItem.title
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
})

MenuList.displayName = 'MenuList'
