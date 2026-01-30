'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { useRef } from 'react'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

type AnimationOptions = {
  delay?: number
  duration?: number
}

const useRevealAnimation = (options: Partial<AnimationOptions> = {}) => {
  const elementRef = useRef<any>(null)

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element) return

      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 95,
          rotation: 2,
          filter: 'blur(10px)',
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          filter: 'blur(0px)',
          duration: options.duration ?? 0.9,
          delay: options.delay ?? 0,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 86%',
            end: 'top 50%',
            scrub: false,
            once: true,
          },
        },
      )

      ScrollTrigger.refresh()
    },
    { dependencies: [options.delay, options.duration], scope: elementRef },
  )

  return elementRef
}

export default useRevealAnimation
