import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const AboutHero = () => {
  return (
    <section className="pb-14 pt-28 md:pb-20 md:pt-48 lg:pb-[100px] lg:pt-[200px]">
      <RevealWrapper className="container">
        <div className="flex flex-col items-center justify-end gap-x-20 gap-y-5 sm:flex-row md:gap-y-10">
          <h1 className="font-instrument text-5xl font-normal italic md:text-6xl lg:text-9xl xl:text-[156px] xl:leading-[1.1]">
            About
          </h1>

          <p className="max-w-[470px]">
            We are dedicated to transforming ideas impactful solutions. With a focus on innovation excellence we partner
            with businesses around the globe to help them navigate complex challenges and growth.
          </p>
        </div>

        <h2 className="mb-5 text-6xl sm:text-7xl md:text-8xl lg:text-[156px] xl:text-[236px] xl:leading-[1.1]">
          Company
        </h2>
      </RevealWrapper>
    </section>
  )
}

export default AboutHero
