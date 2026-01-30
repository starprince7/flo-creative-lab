'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useCallback, useLayoutEffect, useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationOptions = {
  delay?: number
  duration?: number
}

const useRevealAnimationV2 = (options: Partial<AnimationOptions> = {}) => {
  const elementRef = useRef<any>(null)
  const animationRef = useRef<gsap.core.Animation | null>(null)
  const optionsRef = useRef(options)

  useLayoutEffect(() => {
    optionsRef.current = options
  }, [options])

  const setupAnimation = useCallback(() => {
    const element = elementRef.current
    if (!element) return

    if (animationRef.current) {
      animationRef.current.kill()
    }

    const ctx = gsap.context(() => {
      animationRef.current = gsap.fromTo(
        element,
        { opacity: 0, y: 95, rotation: 2, filter: 'blur(10px)' },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          filter: 'blur(0px)',
          duration: optionsRef.current.duration ?? 0.9,
          delay: optionsRef.current.delay ?? 0,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 95%',
            end: 'top 50%',
            scrub: false,
            once: true,
          },
        },
      )
    }, element)

    ScrollTrigger.refresh()

    return () => {
      ctx.revert()
      animationRef.current = null
    }
  }, [])

  useLayoutEffect(() => {
    return setupAnimation()
  }, [setupAnimation])

  return elementRef
}

export default useRevealAnimationV2
