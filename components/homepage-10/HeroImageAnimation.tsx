'use client'

import hero from '@/public/images/hero-img/hero-v10.png'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const HeroImageAnimation = () => {
  const imgRef = useRef(null)

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(() => {
    if (!imgRef.current) return

    gsap.to(imgRef.current, {
      ease: 'power2.inOut',
      scale: 0.94,
      duration: 7,
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 15%',
        end: 'top 0%',
        scrub: 1,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill())
    }
  }, [])
  return (
    <figure className="hero-img-container" ref={imgRef}>
      <Image src={hero} alt="hero-img" className="mx-auto min-h-fit w-[98%]" priority />
    </figure>
  )
}

export default HeroImageAnimation
