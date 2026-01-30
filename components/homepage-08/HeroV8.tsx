'use client'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

import heroImg1 from '@/public/images/home-3/hero-v8-img-1.png'
import heroImg2 from '@/public/images/home-3/hero-v8-img-2.png'
import heroImg3 from '@/public/images/home-3/hero-v8-img-3.png'
import heroImg4 from '@/public/images/home-3/hero-v8-img-4.png'

import { useGSAP } from '@gsap/react'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

gsap.registerPlugin(ScrollTrigger)

const HeroV8 = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const imageRef1 = useRef<HTMLImageElement>(null)
  const imageRef2 = useRef<HTMLImageElement>(null)
  const imageRef3 = useRef<HTMLImageElement>(null)
  const imageRef4 = useRef<HTMLImageElement>(null)

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })

      tl.from(imageRef1.current, {
        duration: 0.8,
        x: -100,
        opacity: 0,
      })
        .from(
          imageRef2.current,
          {
            duration: 0.8,
            x: 100,
            opacity: 0,
          },
          '-=0.3', // Start 0.3 seconds before the previous animation ends
        )
        .from(
          imageRef3.current,
          {
            duration: 0.8,
            y: 100,
            opacity: 0,
          },
          '-=0.3',
        )
        .from(
          imageRef4.current,
          {
            duration: 0.8,
            y: -100,
            opacity: 0,
          },
          '-=0.3',
        )
    },
    { scope: sectionRef, dependencies: [] },
  )

  return (
    <section
      className="relative z-20 flex w-full items-center justify-center overflow-hidden max-2xl:pt-40 2xl:min-h-screen"
      ref={sectionRef}>
      <figure className="absolute left-0 top-0 z-0 hidden 2xl:block">
        <Image ref={imageRef1} src={heroImg1} alt="Abstract Top Left" className="h-full w-full object-cover" />
      </figure>

      <figure className="absolute right-0 top-0 z-0 hidden 2xl:block">
        <Image ref={imageRef2} src={heroImg2} alt="Abstract Top Right" className="h-full w-full object-cover" />
      </figure>

      <figure className="absolute bottom-0 left-0 z-0 hidden 2xl:block">
        <Image ref={imageRef3} src={heroImg3} alt="Abstract Bottom Left" className="h-full w-full object-cover" />
      </figure>

      <figure className="absolute bottom-0 right-0 z-0 hidden 2xl:block">
        <Image ref={imageRef4} src={heroImg4} alt="Abstract Bottom Right" className="h-full w-full object-cover" />
      </figure>

      <HeroGradientAnimation />

      <RevealWrapper className="relative z-10 px-4 text-center">
        <h1 className="text-7xl font-medium uppercase sm:text-8xl md:text-[255px] lg:text-[338px] lg:leading-[338px] lg:tracking-[-10.14px]">
          RIVOR
        </h1>
        <h2 className="mt-6 md:mt-10 lg:mt-20">
          Powering <br />
          businesses with <br />
          modern tech
        </h2>
        <ul className="mt-14 flex list-none justify-center">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Get Consultation</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Get Consultation</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default HeroV8
