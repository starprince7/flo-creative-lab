import React from 'react'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'
import RevealWrapper from '../animation/RevealWrapper'

const CareerDetailsHero = ({ career }: any) => {
  return (
    <section className="relative overflow-hidden pb-20 pt-32 sm:pt-36 md:pb-32 md:pt-44 lg:pb-[180px] lg:pt-44 xl:pt-[210px]">
      <HeroGradientAnimation scale />

      <RevealWrapper className="container space-x-1 text-center">
        {career.tags.map((tag: string) => (
          <div className="rv-badge mb-4" key={tag}>
            <span className="rv-badge-text">{tag}</span>
          </div>
        ))}

        <h1 className="mb-1">{career.title}</h1>
      </RevealWrapper>
    </section>
  )
}

export default CareerDetailsHero
