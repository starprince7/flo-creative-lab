import React from 'react'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const BlogHero = () => {
  return (
    <section className="relative overflow-hidden pb-10 pt-36 lg:pb-20 lg:pt-[240px]">
      <div className="absolute -z-10 h-full w-full blur-[60px] max-lg:-translate-y-1/2 max-md:top-1/2 md:h-[45%] md:w-[45%] md:translate-x-[20%] lg:top-[23%]">
        <HeroGradientAnimation />
      </div>

      <div className="container">
        <div className="mb-20 flex flex-col justify-center gap-x-10 gap-y-4 md:flex-row lg:justify-between">
          <div className="max-sm:self-start">
            <TextAppearAnimation>
              <h1 className="text-appear text-[46px] font-normal leading-[1.1] max-lg:leading-[1.33] lg:text-7xl xl:text-[80px]">
                <i className="font-instrument italic leading-[1.1]"> Insights </i>
                <br className="hidden md:block" />
                we share
              </h1>
            </TextAppearAnimation>
          </div>

          <div className="self-center md:max-w-[470px] lg:self-end">
            <TextAppearAnimation>
              <p className="text-appear">
                We champion athletes, storytellers, and brands that shape culture and inspire the world with their
                unique perspectives.
              </p>
            </TextAppearAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogHero
