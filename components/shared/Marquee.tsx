'use client'
import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface LoopConfig {
  repeat?: number
  paused?: boolean
  speed?: number
  snap?: number | false | ((value: number) => number)
  paddingRight?: string | number
}

interface WithBorderProps {
  withBorder: boolean
}

const Marquee: React.FC<WithBorderProps> = ({ withBorder }) => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }

  return (
    <section className="relative mx-auto w-full max-w-[1920px] max-md:pt-0.5">
      {withBorder ? (
        <div
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative -z-0 overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
          <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.5] scale-y-50 lg:scale-y-[0.3]">
            <Image src={gradientBg} alt="gradient-bg" />
          </div>
          <div className="relative overflow-hidden">
            <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark">
                  <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                  <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
          <RevealWrapper as="p" className="container mb-10 text-wrap text-center lg:mb-20">
            Trusted by over 100+ fast-growing companies all around the world
          </RevealWrapper>

          <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="relative">
            <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
              {data.map((item) => (
                <div
                  key={item.id}
                  className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark">
                  <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                  <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
                </div>
              ))}
            </div>
          </div>
          <RevealWrapper as="ul" className="reveal-me container mt-7 grid justify-self-center max-md:w-full md:mt-14">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href="#" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>View Our Network</span>
                </div>
                <div className="rv-button-bottom">
                  <span>View Our Network</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </div>
      )}
    </section>
  )
}

export default Marquee
