'use client'

import useReveal from '@/hooks/useReveal'
import React from 'react'

interface SpacePropsType {
  littleSpace?: boolean
}

const AboutV5: React.FC<SpacePropsType> = ({ littleSpace }) => {
  const { revealRef } = useReveal()

  return !littleSpace ? (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <h3 ref={revealRef} className="overflow-hidden">
          At Rivor Agency, we blend creativity with functionality to craft designs that resonate with your's brand
          essence. Let's create something beautiful together. we blend creativity with functionality to craft designs
          that resonate with your's brand essence. Let's create something beautiful together.
        </h3>
      </div>
    </section>
  ) : (
    <section className="overflow-hidden pb-14 pt-6 md:pb-16 lg:pb-[88px] lg:pt-11 xl:pb-[100px]">
      <div className="container">
        <h3 ref={revealRef} className="overflow-hidden">
          Rivor Agency is where innovative ideas meet functional design. We create visuals that embody your brand’s
          essence. Let’s build something extraordinary Let’s work together something unforgettable."
        </h3>
      </div>
    </section>
  )
}

export default AboutV5
