'use client'

import heroGradient from '@/public/images/hero-gradient-background-02.png'
import { useGSAP } from '@gsap/react'
import { gsap, Linear } from 'gsap'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

interface PropsType {
  scale?: boolean
}

const HeroGradientAnimationV2 = ({ scale = false }: PropsType) => {
  const [isClient, setIsClient] = useState(false)
  const wrapperRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useGSAP(
    () => {
      if (isClient && wrapperRef.current && bgRef.current) {
        const wrapper = wrapperRef.current
        const bg = bgRef.current

        const wrapperAnimation = gsap.to(wrapper, {
          scale: 0.6,
          repeat: -1,
          duration: 3,
          yoyo: true,
          ease: Linear.easeNone,
        })

        const bgAnimation = gsap.to(bg, {
          repeat: -1,
          duration: 3,
          rotation: 360,
          ease: Linear.easeNone,
        })

        return () => {
          wrapperAnimation.kill()
          bgAnimation.kill()
        }
      }
    },
    { dependencies: [isClient] },
  )

  if (!isClient) {
    return (
      <div className="absolute left-0 top-0 -z-10 h-full w-full blur-[50px]">
        <Image
          src={heroGradient}
          alt="hero-gradient-background"
          priority={true}
          placeholder="blur"
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        />
      </div>
    )
  }

  return (
    <div
      ref={wrapperRef}
      className={`absolute left-0 top-0 -z-10 h-full w-full blur-[50px] ${scale ? 'scale-75' : 'scale-100'}`}>
      <Image
        src={heroGradient}
        alt="hero-gradient-background"
        priority={true}
        placeholder="blur"
        ref={bgRef}
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  )
}

export default HeroGradientAnimationV2
