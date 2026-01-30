'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface HorizontalScrollOptions {
  offset?: number
  duration?: number
  ease?: string
  start?: string
  markers?: boolean
  scrub?: number | boolean
  onAnimationCreated?: (animation: gsap.core.Tween, scrollTrigger: ScrollTrigger) => void
  extraScroll?: number
}

const useHorizontalScroll = (options: HorizontalScrollOptions = {}) => {
  const contentRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLDivElement>(null)

  const {
    offset = 60,
    duration = 2,
    ease = 'none',
    start = 'top top',
    markers = false,
    scrub = 1,
    onAnimationCreated,
    extraScroll = 370,
  } = options

  useGSAP(
    () => {
      const content = contentRef.current
      const trigger = triggerRef.current

      if (!content || !trigger || window.innerWidth < 768) return

      const getScrollAmount = () => {
        const contentWidth = content.scrollWidth
        return -(contentWidth - window.innerWidth + offset + extraScroll)
      }

      const animation = gsap.to(content, {
        x: getScrollAmount(),
        duration,
        ease,
      })

      const scrollTrigger = ScrollTrigger.create({
        trigger,
        start,
        end: () => `+=${Math.abs(getScrollAmount()) + window.innerWidth * 0.1}`,
        pin: true,
        animation,
        scrub,
        invalidateOnRefresh: true,
        markers,
        onRefresh: () => {
          animation.vars.x = getScrollAmount()
        },
      })

      if (onAnimationCreated) {
        onAnimationCreated(animation, scrollTrigger)
      }

      const handleResize = () => {
        ScrollTrigger.refresh()
      }

      window.addEventListener('resize', handleResize)

      return () => {
        animation.kill()
        scrollTrigger.kill()
        window.removeEventListener('resize', handleResize)
      }
    },
    {
      dependencies: [offset, duration, ease, start, markers, scrub, extraScroll, onAnimationCreated],
      scope: triggerRef,
    },
  )

  return {
    contentRef,
    triggerRef,
  }
}

export default useHorizontalScroll
