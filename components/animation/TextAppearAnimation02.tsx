'use client'

import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cloneElement, createElement, FC, isValidElement, ReactElement, ReactNode, useRef } from 'react'
import SplitType from 'split-type'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

interface AnimatedTextProps {
  children: ReactNode
  animationOptions?: Partial<gsap.TweenVars>
}

const TextAppearAnimation02: FC<AnimatedTextProps> = ({ children, animationOptions = {} }) => {
  const elementRef = useRef<HTMLElement>(null)
  const titleTextRef = useRef<SplitType | null>(null)
  const wordsRef = useRef<SplitType[]>([])

  useGSAP(
    () => {
      const element = elementRef.current
      if (!element) return

      titleTextRef.current?.revert()
      wordsRef.current.forEach((word) => word.revert())
      wordsRef.current = []

      const titleText = new SplitType(element, {
        types: 'lines',
        lineClass: 'line',
      })
      titleTextRef.current = titleText

      if (!titleText.lines?.length) {
        console.warn('SplitType failed to create lines')
        return
      }

      const words: SplitType[] = []

      titleText.lines.forEach((line) => {
        const lineText = new SplitType(line, {
          types: 'words',
          wordClass: 'word',
        })
        words.push(lineText)
      })

      wordsRef.current = words

      const allWords = words.flatMap((word) => word.words || [])

      if (!allWords.length) {
        console.warn('SplitType failed to create words')
        return
      }

      gsap.set(allWords, {
        y: 120,
        rotation: 21,
        opacity: 0,
      })

      const tl = gsap.to(allWords, {
        y: 0,
        rotation: 0,
        opacity: 1,
        stagger: 0.02,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 30%',
          scrub: false,
          once: true,
          markers: false,
        },
        ...animationOptions,
      })

      ScrollTrigger.refresh()

      return () => {
        titleTextRef.current?.revert()
        wordsRef.current.forEach((word) => word.revert())
        tl?.scrollTrigger?.kill()
        tl?.kill()
      }
    },
    { dependencies: [animationOptions], scope: elementRef },
  )

  if (isValidElement(children)) {
    return cloneElement(children as ReactElement<any>, {
      ref: elementRef,
      className: `${(children as ReactElement<any>).props.className ?? ''}`.trim(),
    })
  }

  return createElement(
    'span',
    {
      ref: elementRef,
    },
    children,
  )
}

export default TextAppearAnimation02
