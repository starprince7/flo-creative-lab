import React from 'react'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const CareerHero = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[132px] sm:pt-36 md:pb-16 md:pt-40 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[210px]">
      <HeroGradientAnimation />

      <RevealWrapper className="container">
        <div className="text-center">
          <div className="rv-badge">
            <span className="rv-badge-text">Career</span>
          </div>
          <h1 className="mb-5 mt-3.5 font-medium sm:mt-6 md:mb-8 md:mt-7">
            Start building your <i className="font-instrument italic">future</i> here
          </h1>
          <p className="mx-auto max-w-md lg:max-w-[754px]">
            We provide a wide range of growth opportunities, a collaborative work culture, and a supportive team focused
            on your success Get Started
          </p>
        </div>

        <div className="mt-11 flex justify-center md:mt-[76px]">
          <Link href="/contact" className="rv-button rv-button-secondary text-center">
            <div className="rv-button-top">
              <span>Get Started</span>
            </div>
            <div className="rv-button-bottom">
              <span>Get Started</span>
            </div>
          </Link>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default CareerHero
