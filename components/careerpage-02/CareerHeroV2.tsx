import React from 'react'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import RevealWrapper from '../animation/RevealWrapper'

const CareerHeroV2 = () => {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36 md:pb-32 md:pt-44 lg:pb-[180px] lg:pt-44 xl:pt-[210px]">
      <HeroGradientAnimation />

      <RevealWrapper className="container">
        <p className="font-poppins flex flex-col items-center gap-2 text-sm font-normal uppercase leading-6 tracking-[3px] max-lg:justify-center md:flex-row md:gap-5">
          <span>Creative Studio</span>
          <span className="inline-block h-[1px] w-[150px] bg-dark dark:bg-[#ffffffb3]"></span>
          <span>Join Our Team</span>
        </p>

        <h1 className="mt-6 max-lg:text-center lg:mt-10">
          Shape the Future of Digital <br className="hidden md:block" />
          Design as an <span className="font-instrument italic">Innovator</span> with Us
        </h1>
      </RevealWrapper>
    </section>
  )
}

export default CareerHeroV2
