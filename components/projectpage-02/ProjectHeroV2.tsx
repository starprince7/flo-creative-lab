import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

const ProjectHeroV2 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-[130px] md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[180px]">
      <RevealWrapper className="container">
        <p className="font-poppins flex items-center justify-center gap-2 text-sm font-normal uppercase leading-6 tracking-[3px] md:gap-5">
          <span className="max-sm:whitespace-nowrap">Design Agency</span>

          <span className="inline-block h-[1px] w-[150px] bg-dark dark:bg-[#ffffffb3]"></span>

          <span>Palermo</span>
        </p>

        <h1 className="mt-5 text-center sm:mt-6 md:mt-9 xl:text-nowrap">
          Crafting Tomorrow's
          <span className="ml-5 inline-block font-instrument italic max-sm:mr-3">Solutions,</span>
          <br className="hidden xl:block" />
          Today
        </h1>

        <p className="mt-3 text-center md:mt-7">
          With years of industry expertise, our team of visionaries, storytellers, and design <br />
          virtuosos come together here for you to see.
        </p>
      </RevealWrapper>
    </section>
  )
}

export default ProjectHeroV2
