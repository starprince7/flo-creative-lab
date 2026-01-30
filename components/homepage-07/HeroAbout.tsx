'use client'
import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  spacingTop?: string
}

const HeroAbout = ({ spacingTop }: PropsTypes) => {
  const { revealRef } = useReveal()

  return spacingTop ? (
    <RevealWrapper className={`${spacingTop} container`}>
      <h3 ref={revealRef} className="reveal-text-2 text-secondary dark:text-backgroundBody">
        Rivor Agency: Shaping the Future of Digital Innovation. We are dedicated to empowering blockchain pioneers and
        transforming the realm of digital ownership for today and beyond. images
      </h3>
    </RevealWrapper>
  ) : (
    <RevealWrapper as="section" className="container">
      <h3 ref={revealRef}>
        We specialize in designing cutting-edge web experiences that flawlessly blend creativity with innovative
        technology.
      </h3>
    </RevealWrapper>
  )
}

export default HeroAbout
