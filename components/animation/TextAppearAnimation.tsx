'use client'
import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import { cloneElement, createElement, FC, isValidElement, ReactElement, ReactNode, useEffect, useRef } from 'react'
import SplitType from 'split-type'

interface AnimatedTextProps {
  children: ReactNode
  animationOptions?: Partial<gsap.TweenVars>
}

const TextAppearAnimation: FC<AnimatedTextProps> = ({ children, animationOptions = {} }) => {
  const elementRef = useRef<HTMLElement>(null)
  const titleTextRef = useRef<SplitType | null>(null)
  const wordSplitRefs = useRef<SplitType[]>([])
  const hasAnimatedRef = useRef(false)
  const animationOptionsRef = useRef(animationOptions)

  useEffect(() => {
    animationOptionsRef.current = animationOptions
  }, [animationOptions])

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element) return

      if (hasAnimatedRef.current) return

      const setupSplitType = () => {
        titleTextRef.current?.revert()
        wordSplitRefs.current.forEach((split) => split.revert())
        wordSplitRefs.current = []

        const titleText = new SplitType(element, { types: 'lines', lineClass: 'line' })
        titleTextRef.current = titleText

        const lines = titleText.lines ?? []
        if (!lines.length) {
          console.warn('SplitType failed to create lines')
          return null
        }

        const wordsSplits = lines.map((line) => new SplitType(line, { types: 'words', wordClass: 'word' }))
        wordSplitRefs.current = wordsSplits

        const allWords = wordsSplits.flatMap((split) => split.words || [])
        if (!allWords.length) {
          console.warn('SplitType failed to create words')
          return null
        }

        return allWords
      }

      const createAnimation = (words: HTMLElement[]) => {
        gsap.set(words, { y: 120, rotation: 21, opacity: 0 })

        return gsap.to(words, {
          y: 0,
          rotation: 0,
          opacity: 1,
          stagger: 0.02,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 65%',
            end: 'top 30%',
            scrub: false,
            once: true,
            markers: false,
            onEnter: () => {
              hasAnimatedRef.current = true
            },
          },
          ...animationOptionsRef.current,
        })
      }

      const words = setupSplitType()
      if (!words) return

      const timeline = createAnimation(words)
      ScrollTrigger.refresh()

      return () => {
        if (timeline && typeof timeline.kill === 'function') {
          timeline.kill()
        }
      }
    },
    { scope: elementRef, dependencies: [] },
  )

  useEffect(() => {
    return () => {
      titleTextRef.current?.revert()
      wordSplitRefs.current.forEach((split) => split.revert())
      hasAnimatedRef.current = false

      const element = elementRef.current
      if (element) {
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars.trigger === element) {
            trigger.kill()
          }
        })
      }
    }
  }, [])

  if (isValidElement(children)) {
    return cloneElement(children as ReactElement, {
      ref: elementRef,
      className: `${(children as ReactElement).props.className ?? ''}`.trim(),
    })
  }

  return createElement('span', { ref: elementRef }, children)
}

export default TextAppearAnimation
