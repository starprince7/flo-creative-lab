'use client'

import RevealWrapper from '@/components/animation/RevealWrapper'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import Link from 'next/link'
import { FC, useRef } from 'react'

interface LoopConfig {
  repeat?: number
  paused?: boolean
  speed?: number
  snap?: number | false
  paddingRight?: number
}

interface MarqueeCtaProps {
  ShowCtaBtn?: boolean
}

interface CustomTimeline extends gsap.core.Timeline {
  next?: (vars?: gsap.TweenVars) => gsap.core.Tween
  previous?: (vars?: gsap.TweenVars) => gsap.core.Tween
  current?: () => number
  toIndex?: (index: number, vars?: gsap.TweenVars) => gsap.core.Tween
  times?: number[]
}

const MarqueCta: FC<MarqueeCtaProps> = ({ ShowCtaBtn = false }) => {
  const innerRef = useRef<HTMLDivElement>(null)

  const horizontalLoop = (items: Element[], config: LoopConfig = {}): CustomTimeline => {
    items = gsap.utils.toArray<Element>(items)
    const tl = gsap.timeline({
      repeat: config.repeat,
      paused: config.paused,
      defaults: { ease: 'none' },
      onReverseComplete: () => {
        const newTime = (tl.rawTime() ?? 0) + (tl.duration() ?? 0) * 100
        tl.totalTime(newTime)
        return null
      },
    }) as CustomTimeline

    const length = items.length
    const startX = (items[0] as HTMLElement).offsetLeft
    const times: number[] = []
    const widths: number[] = []
    const xPercents: number[] = []
    // Reduced speed for smoother motion
    const pixelsPerSecond = (config.speed || 1) * 100

    // Use direct value without snapping for smoother motion
    const getX = (v: number) => v

    // Set initial positions and get widths
    gsap.set(items, {
      xPercent: (i: number, el: Element) => {
        const width = parseFloat(gsap.getProperty(el, 'width') as string)
        widths[i] = width

        const x = parseFloat(gsap.getProperty(el, 'x') as string)
        const currentXPercent = parseFloat(gsap.getProperty(el, 'xPercent') as string)

        xPercents[i] = getX((x / width) * 100 + currentXPercent)
        return xPercents[i]
      },
    })

    gsap.set(items, { x: 0 })

    const lastItem = items[length - 1] as HTMLElement
    const lastItemScaleX = parseFloat(gsap.getProperty(lastItem, 'scaleX') as string)
    const paddingRight = parseFloat(config.paddingRight?.toString() || '0')

    const totalWidth =
      lastItem.offsetLeft +
      (xPercents[length - 1] / 100) * widths[length - 1] -
      startX +
      lastItem.offsetWidth * lastItemScaleX +
      paddingRight

    // Create the animation for each item
    items.forEach((item, i) => {
      const element = item as HTMLElement
      const curX = (xPercents[i] / 100) * widths[i]
      const distanceToStart = element.offsetLeft + curX - startX
      const elementScaleX = parseFloat(gsap.getProperty(element, 'scaleX') as string)
      const distanceToLoop = distanceToStart + widths[i] * elementScaleX

      tl.to(
        element,
        {
          xPercent: getX(((curX - distanceToLoop) / widths[i]) * 100),
          duration: distanceToLoop / pixelsPerSecond,
          ease: 'none',
        },
        0,
      )
        .fromTo(
          element,
          {
            xPercent: getX(((curX - distanceToLoop + totalWidth) / widths[i]) * 100),
          },
          {
            xPercent: xPercents[i],
            duration: (curX - distanceToLoop + totalWidth - curX) / pixelsPerSecond,
            immediateRender: false,
            ease: 'none',
          },
          distanceToLoop / pixelsPerSecond,
        )
        .add(`label${i}`, distanceToStart / pixelsPerSecond)

      times[i] = distanceToStart / pixelsPerSecond
    })

    tl.times = times
    return tl
  }

  useGSAP(
    () => {
      gsap.registerPlugin(Observer)

      if (!innerRef.current) return

      // Get all elements, combining text and circles for consistent spacing
      const scrollingText = gsap.utils.toArray<Element>('.marquee-item')

      // Create the loop with better settings
      const tl = horizontalLoop(scrollingText, {
        repeat: -1,
        speed: 0.9, // Slower default speed for smoother motion
        snap: false, // Explicitly disable snapping
      })

      // Set initial animation direction
      tl.timeScale(0.5)

      // Create better bidirectional scroll control
      Observer.create({
        onChangeY(self) {
          // Start with a smaller factor for more subtle speed changes
          let factor = 1.5
          if (self.deltaY < 0) {
            factor *= -1
          }

          // Create smoother acceleration/deceleration
          gsap
            .timeline({
              defaults: {
                ease: 'power1.inOut', // Smoother easing
              },
            })
            .to(tl, {
              timeScale: factor,
              duration: 0.4,
              overwrite: true,
            })
            .to(
              tl,
              {
                timeScale: factor * 0.5,
                duration: 1.2,
              },
              '+=0.6',
            )
        },
        // Add touch support
        tolerance: 10,
        preventDefault: true,
      })

      return () => {
        gsap.killTweensOf('.marquee-item')
      }
    },
    { scope: innerRef },
  )

  const Circle = () => (
    <span className="marquee-item flex items-center justify-center">
      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="31" viewBox="0 0 30 31" fill="none">
        <circle cx="15" cy="15.5" r="15" className="fill-black dark:fill-backgroundBody" />
      </svg>
    </span>
  )

  return (
    <div className="relative w-full overflow-hidden pt-5 max-lg:pb-10 md:pt-8 lg:pt-[44px] xl:pt-[50px]">
      <div className="flex flex-nowrap items-center" aria-hidden="true" ref={innerRef}>
        <div className="marquee-inner flex items-center gap-[30px] text-nowrap text-5xl font-normal uppercase leading-tight tracking-[-2px] sm:text-[55px] md:text-[67px] lg:text-[84px] xl:text-8xl xl:leading-[2.40] xl:tracking-[-2.88px]">
          <span className="marquee-item">LET'S WORK TOGETHER</span>
          <Circle />
          <span className="marquee-item">LET'S WORK TOGETHER</span>
          <Circle />
          <span className="marquee-item">LET'S WORK TOGETHER</span>
          <Circle />
          <span className="marquee-item">LET'S WORK TOGETHER</span>
          <Circle />
          <span className="marquee-item">LET'S WORK TOGETHER</span>
          <Circle />
          <span className="marquee-item">LET'S WORK TOGETHER</span>
          <Circle />
        </div>
      </div>
      {ShowCtaBtn && (
        <RevealWrapper className="mb-8 mt-7 flex list-none items-center justify-center md:mb-16 md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Contact with me</span>
              </div>
              <div className="rv-button-bottom">
                <span className="whitespace-nowrap">Contact with me</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      )}
    </div>
  )
}

export default MarqueCta
