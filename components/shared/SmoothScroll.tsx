'use client'
import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname, useSearchParams } from 'next/navigation'
import { ReactNode, useEffect } from 'react'

interface SmoothScrollingProps {
  children: ReactNode
}

const SmoothScrollProvider = ({ children }: Readonly<SmoothScrollingProps>) => {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const lenis = useLenis()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [pathname, searchParams, lenis])

  useEffect(() => {
    if (!lenis) return

    const handleClick = (ele: Element) => {
      const href = ele.getAttribute('href')
      if (href?.startsWith('#')) {
        const element = document.getElementById(href.slice(1))
        if (element) {
          lenis.scrollTo(element, { offset: -100 })
        }
      }
    }

    const elements = document.querySelectorAll('.lenis-scroll-to')
    const clickHandler = (e: Event) => handleClick(e.target as Element)

    elements.forEach((ele) => {
      ele.addEventListener('click', clickHandler)
    })

    return () => {
      elements.forEach((ele) => {
        ele.removeEventListener('click', clickHandler)
      })
    }
  }, [lenis, pathname])

  return (
    <ReactLenis root options={{ duration: 1.1 }}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScrollProvider
