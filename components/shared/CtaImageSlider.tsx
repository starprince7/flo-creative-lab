'use client'

import Image from 'next/image'
import { FC, useEffect, useRef } from 'react'

interface SliderImg {
  id: string
  img: string
}

interface CtaImageSliderProps {
  slides: SliderImg[]
}

const CtaImageSlider: FC<CtaImageSliderProps> = ({ slides }) => {
  const ctaSlider = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let currentSlide = 0
    const totalSlides = slides.length

    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides
      if (ctaSlider.current) {
        ctaSlider.current.style.transform = `translateY(-${currentSlide * 150}px)`
      }
    }

    const intervalId = setInterval(nextSlide, 3000)
    return () => clearInterval(intervalId)
  }, [slides.length])

  return (
    <div className="cta-slider-container translate-y-2 max-sm:mb-5 max-sm:mt-2.5 max-sm:block sm:!mx-5 sm:inline-block sm:translate-y-[20px]">
      <div ref={ctaSlider} className="cta-inline-slider transition-transform duration-500 ease-in-out">
        {slides?.map((slide, index) => (
          <div key={slide.id} className="slide">
            <Image src={slide.img} alt={`cta-slide-img-${index + 1}`} width={240} height={100} priority={index === 0} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CtaImageSlider
