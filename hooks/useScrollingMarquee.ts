'use client'

import gsap from 'gsap'
import { useEffect, useRef } from 'react'

interface UseScrollingMarqueeOptions {
  duration?: number
  repeat?: number
  delay?: number
}

const useScrollingMarquee = (options: UseScrollingMarqueeOptions = {}) => {
  const { duration = 30, repeat = -1, delay = 100 } = options

  const marqueeRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const currentScrollRef = useRef<number>(0)
  const scrollTimeoutRef = useRef<number | null>(null)
  const resizeTimeoutRef = useRef<number | null>(null)

  useEffect(() => {
    const initScrollingMarquee = () => {
      const marqueeInner = marqueeRef.current
      if (!marqueeInner) return

      const originalContent = marqueeInner.innerHTML
      marqueeInner.innerHTML = originalContent + originalContent + originalContent

      const contentWidth = marqueeInner.offsetWidth / 3

      animationRef.current = gsap.to(marqueeInner, {
        x: -contentWidth * 2,
        duration,
        ease: 'none',
        repeat,
        onRepeat: () => {
          gsap.set(marqueeInner, { x: -contentWidth })
        },
      })

      const handleScroll = () => {
        if (scrollTimeoutRef.current) {
          window.cancelAnimationFrame(scrollTimeoutRef.current)
        }

        scrollTimeoutRef.current = window.requestAnimationFrame(() => {
          const newScroll = window.pageYOffset
          if (Math.abs(newScroll - currentScrollRef.current) > 1 && animationRef.current) {
            animationRef.current.timeScale(newScroll > currentScrollRef.current ? 1 : -1)
            currentScrollRef.current = newScroll
          }
        })
      }

      const handleResize = () => {
        if (resizeTimeoutRef.current) {
          window.cancelAnimationFrame(resizeTimeoutRef.current)
        }

        resizeTimeoutRef.current = window.requestAnimationFrame(() => {
          if (!marqueeInner || !animationRef.current) return

          const newContentWidth = marqueeInner.offsetWidth / 3

          animationRef.current.vars.x = -newContentWidth * 2
          gsap.set(marqueeInner, { x: -newContentWidth })
          animationRef.current.invalidate().restart()
        })
      }

      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleResize)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleResize)
        if (animationRef.current) {
          animationRef.current.kill()
        }
      }
    }

    const timer = setTimeout(() => {
      const cleanup = initScrollingMarquee()
      return () => {
        if (cleanup) cleanup()
      }
    }, delay)

    return () => {
      clearTimeout(timer)
      if (scrollTimeoutRef.current) {
        window.cancelAnimationFrame(scrollTimeoutRef.current)
      }
      if (resizeTimeoutRef.current) {
        window.cancelAnimationFrame(resizeTimeoutRef.current)
      }
    }
  }, [duration, repeat, delay])

  const pauseMarquee = () => {
    if (animationRef.current) {
      animationRef.current.pause()
    }
  }

  const resumeMarquee = () => {
    if (animationRef.current) {
      animationRef.current.play()
    }
  }

  const reverseMarquee = () => {
    if (animationRef.current) {
      animationRef.current.reversed(!animationRef.current.reversed())
    }
  }

  return {
    marqueeRef,
    pauseMarquee,
    resumeMarquee,
    reverseMarquee,
  }
}

export default useScrollingMarquee
