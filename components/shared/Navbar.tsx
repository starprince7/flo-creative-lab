'use client'

import logoDark from '@/public/images/logo-white.png'
import logo from '@/public/images/logo.png'
import { gsap } from 'gsap'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'

import { SocialIcons } from '@/components/navbarCompo/social-icons'
import { MenuList } from '../navbarCompo/menu-list'

export default function Navbar() {
  const pathname = usePathname()
  const [isVisible, setIsVisible] = useState(true)
  const lastScrollY = useRef(0)

  const menuRef = useRef<HTMLElement>(null)
  const menuOverflowRef = useRef<HTMLDivElement>(null)
  const menuItemsRef = useRef<HTMLUListElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)
  const openBtnRef = useRef<HTMLButtonElement>(null)
  const timelineRef = useRef<gsap.core.Timeline | null>(null)
  const scrollPositionRef = useRef(0)
  const isMenuOpenRef = useRef(false)
  const headerRef = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.visibility = 'hidden'
      menuRef.current.style.opacity = '0'
    }
    if (menuOverflowRef.current) {
      menuOverflowRef.current.style.visibility = 'hidden'
      menuOverflowRef.current.style.opacity = '0'
    }
  }, [])

  const openMenu = useCallback(() => {
    if (menuOverflowRef.current && openBtnRef.current && menuRef.current && timelineRef.current) {
      isMenuOpenRef.current = true

      scrollPositionRef.current = window.scrollY

      document.body.style.position = 'fixed'
      document.body.style.top = `-${scrollPositionRef.current}px`
      document.body.style.width = '100%'
      document.body.style.overflow = 'hidden'

      gsap.set(menuOverflowRef.current, { scale: 0.98 })
      openBtnRef.current.classList.add('opacity-0')
      timelineRef.current.timeScale(1).play()
      menuRef.current.style.pointerEvents = 'auto'
    }
  }, [])

  const closeMenu = useCallback(() => {
    if (openBtnRef.current && menuRef.current && timelineRef.current) {
      isMenuOpenRef.current = false

      const scrollY = Number.parseInt(document.body.style.top || '0') * -1
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      document.body.style.overflow = ''
      window.scrollTo(0, Math.abs(scrollY))

      openBtnRef.current.classList.remove('opacity-1')
      gsap.to(openBtnRef.current, {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        duration: 0.5,
        delay: 0.5,
        ease: 'back.out(1.7)',
      })

      timelineRef.current.timeScale(1.2).reverse()
      menuRef.current.style.pointerEvents = 'none'
    }
  }, [])

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpenRef.current) {
      closeMenu()
    }
  }, [pathname, closeMenu])

  useEffect(() => {
    gsap.registerEase('custom', (progress) => (progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)))

    if (
      menuRef.current &&
      menuOverflowRef.current &&
      menuItemsRef.current &&
      closeBtnRef.current &&
      openBtnRef.current
    ) {
      gsap.set(menuRef.current, {
        pointerEvents: 'none',
        autoAlpha: 0,
      })
      gsap.set(menuOverflowRef.current, {
        pointerEvents: 'none',
        autoAlpha: 0,
        y: -30,
        rotate: -1,
        scale: 0.98,
      })
      gsap.set(menuItemsRef.current, {
        autoAlpha: 0,
        y: -10,
        scale: 0.95,
      })
      gsap.set(closeBtnRef.current, {
        autoAlpha: 0,
        y: -10,
        scale: 0.95,
      })

      timelineRef.current = gsap.timeline({
        paused: true,
        defaults: {
          ease: 'custom',
          duration: 0.8,
        },
        onReverseComplete: () => {
          if (menuRef.current) {
            menuRef.current.style.pointerEvents = 'none'
          }
        },
      })

      timelineRef.current
        .to(
          menuRef.current,
          {
            autoAlpha: 1,
            pointerEvents: 'auto',
            duration: 0.5,
            ease: 'power2.out',
          },
          0,
        )
        .to(
          menuOverflowRef.current,
          {
            autoAlpha: 1,
            pointerEvents: 'auto',
            y: 0,
            rotate: 0,
            scale: 1,
            duration: 0.6,
            ease: 'custom',
          },
          0.1,
        )
        .to(
          menuItemsRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            stagger: {
              amount: 0.4,
              ease: 'power2.out',
            },
            duration: 0.7,
            ease: 'custom',
          },
          0.2,
        )
        .to(
          closeBtnRef.current,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 0.5,
            ease: 'back.out(1.7)',
          },
          0.3,
        )
        .to(
          openBtnRef.current,
          {
            autoAlpha: 0,
            y: -10,
            scale: 0.95,
            duration: 0.5,
            delay: 0.3,
            ease: 'back.out(1.7)',
          },
          0.1,
        )
    }

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill()
      }
    }
  }, [])

  useEffect(() => {
    if (isMenuOpenRef.current) {
      closeMenu()
    }
  }, [pathname, closeMenu])

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY.current && window.scrollY > 200) {
        // Scrolling down & past threshold
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }
      lastScrollY.current = window.scrollY
    }

    window.addEventListener('scroll', controlNavbar)
    return () => window.removeEventListener('scroll', controlNavbar)
  }, [])

  return (
    <>
      <header ref={headerRef} className="fixed z-[9999] w-full transition-transform duration-300">
        <div
          className={`pointer-events-none fixed top-0 z-[21] h-[155px] w-full transition duration-300 ease-linear will-change-transform ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div
            className="pointer-events-none absolute inset-0"
            style={{ backdropFilter: 'blur(0px)', WebkitBackdropFilter: 'blur(0px)' }}></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 50%)',
              WebkitMaskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 0) 50%)',
              backdropFilter: 'blur(-7px)',
              WebkitBackdropFilter: 'blur(-7px)',
            }}></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66.66666666666666%)',
              WebkitMaskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 16.666666666666664%, rgba(255, 255, 255, 1) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 66.66666666666666%)',
              backdropFilter: 'blur(2px)',
              WebkitBackdropFilter: 'blur(2px)',
            }}></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 0) 83.33333333333333%)',
              WebkitMaskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 33.33333333333333%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 0) 83.33333333333333%)',
              backdropFilter: 'blur(4px)',
              WebkitBackdropFilter: 'blur(4px)',
            }}></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 0) 100%)',
              WebkitMaskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 1) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 0) 100%)',
              backdropFilter: 'blur(8px)',
              WebkitBackdropFilter: 'blur(8px)',
            }}></div>
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              maskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 116.66666666666666%)',
              WebkitMaskImage:
                'linear-gradient(0deg, rgba(255, 255, 255, 0) 66.66666666666666%, rgba(255, 255, 255, 1) 83.33333333333333%, rgba(255, 255, 255, 1) 100%, rgba(255, 255, 255, 0) 116.66666666666666%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
            }}></div>
        </div>
        <nav
          className={`fixed z-[1000] w-full px-5 pt-1 transition duration-300 ease-linear will-change-transform sm:px-8 sm:pt-5 ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex justify-between">
            <Link href="/" className="relative z-10">
              <h6 className="mb-3 text-backgroundBody max-md:leading-none">
                FCL <br className="hidden md:block" />
                {/* <i className="font-instrument text-inherit">FCL </i> */}
              </h6>
              {/* <Image
                className="inline-block max-h-[68px] w-auto dark:hidden"
                src={logo}
                alt="logo"
                width={136}
                height={68}
                priority
              />
              <Image
                className="hidden max-h-[68px] w-auto dark:inline-block"
                src={logoDark}
                alt="logo"
                width={136}
                height={68}
                priority
              /> */}
            </Link>
            <div className="flex items-center">
              <button
                ref={openBtnRef}
                onClick={openMenu}
                className="menu-open relative h-[68px] w-[68px] cursor-pointer before:absolute before:left-1/2 before:top-[28px] before:h-0.5 before:w-9 before:-translate-x-1/2 before:bg-black before:transition-all before:duration-300 before:content-[''] after:absolute after:bottom-[28px] after:left-1/2 after:h-0.5 after:w-9 after:-translate-x-1/2 after:bg-black after:transition-all after:duration-300 after:content-[''] hover:before:top-[25px] hover:after:bottom-[25px] dark:before:bg-white dark:after:bg-white"
                aria-label="Open Menu"></button>
            </div>
          </div>
        </nav>
      </header>

      <nav
        ref={menuRef}
        data-lenis-prevent="true"
        className="menu fixed right-6 top-0 z-[99999] min-h-screen w-full overflow-y-auto opacity-0 before:absolute before:top-0 before:w-[1px] before:bg-backgroundBody before:bg-opacity-10 before:content-none md:before:left-[40%] md:before:h-screen md:before:content-[''] lg:before:left-[32%] lg:before:h-[calc(100vh-87px)] xl:before:left-[40%] xl:before:h-[calc(100vh-94px)]">
        <button
          ref={closeBtnRef}
          onClick={closeMenu}
          className="menu-close sticky left-[89%] top-9 h-[40px] w-[40px] cursor-pointer text-white sm:left-[90%] md:left-[93%] lg:left-[94.7%] xl:left-[96.5%] 2xl:left-[97%]"
          aria-label="Close Menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 50 50">
            <path
              d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"
              fill="#fff"
            />
          </svg>
        </button>
        <div className="menu-wrapper relative z-[99999] mx-auto flex max-h-[90vh] max-w-[300px] flex-col gap-8 overflow-y-auto overflow-x-hidden pb-4 sm:max-w-[400px] md:top-14 md:max-h-none md:max-w-[580px] md:gap-16 md:overflow-visible md:pt-0 lg:max-w-[900px] xl:max-w-[1030px] 2xl:top-12">
          <MenuList ref={menuItemsRef} onItemClick={closeMenu} />
        </div>
        <div className="menu-footer fixed bottom-0 w-full border-t border-white border-opacity-10 max-lg:hidden lg:block">
          <div className="menu-footer-content mx-auto flex max-w-[300px] flex-col justify-between py-8 sm:max-w-[400px] md:max-w-[600px] md:flex-row lg:max-w-[900px] xl:max-w-[1130px]">
            <p className="mb-4 w-full text-sm text-white md:mb-0 md:w-auto">
              2261 Market Street #5039 San Francisco, CA 94114
            </p>
            <SocialIcons />
          </div>
        </div>
      </nav>

      <div
        ref={menuOverflowRef}
        className="menu-overflow pointer-events-none fixed inset-0 z-[9999] bg-[rgba(10,10,10,0.95)] backdrop-blur-[25px]"></div>
    </>
  )
}
