'use client'
import textCircleDarkLogo from '@/public/images/icons/text-circle-dark-logo.png'
import textCircleLogo from '@/public/images/icons/text-circle-logo.png'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

const CircleTextAnimation = () => {
  const textRef = useRef<HTMLDivElement>(null)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (isInitialized) return

    const initCircleText = () => {
      const text = textRef.current
      if (!text) return

      const originalText = 'Building Brands,and Creating Impact'
      const chars = originalText.trim().split('')
      const angleStep = 360 / chars.length // Distribute characters evenly

      const formattedText = chars
        .map((char, i) => {
          const angle = i * angleStep
          // Adjust transform-origin based on container size
          return `<span 
          style="
            position: absolute;
            left: 50%;
            top: 8%;
            transform: rotate(${angle}deg);
            transform-origin: 0 70px;
            display: inline-block;
          "
        >${char}</span>`
        })
        .join('')

      text.innerHTML = formattedText
      setIsInitialized(true)
    }

    requestAnimationFrame(initCircleText)
  }, [isInitialized])

  return (
    <div className="relative mx-auto flex h-[168px] w-[168px] items-center justify-center rounded-full bg-secondary dark:bg-white">
      <Image src={textCircleLogo} alt="text-circle-logo" className="inline dark:hidden" />
      <Image src={textCircleDarkLogo} alt="text-circle-logo" className="hidden dark:inline" />
      <div
        ref={textRef}
        className="text absolute flex h-full w-full items-center justify-center font-satoshi uppercase"
      />
    </div>
  )
}

export default CircleTextAnimation
