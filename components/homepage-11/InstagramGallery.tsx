'use client'
import { useCallback, useEffect, useRef, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

type InstagramItem = {
  id: number
  image: string
  link: string
}

const data: InstagramItem[] = [
  {
    id: 1,
    image: '/images/testimonial/testimonial-1.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 2,
    image: '/images/testimonial/testimonial-2.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 3,
    image: '/images/testimonial/testimonial-3.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 4,
    image: '/images/testimonial/testimonial-4.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 5,
    image: '/images/testimonial/testimonial-5.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 6,
    image: '/images/testimonial/testimonial-1.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 7,
    image: '/images/testimonial/testimonial-2.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
  {
    id: 8,
    image: '/images/testimonial/testimonial-3.png',
    link: 'https://www.instagram.com/staticmania_/',
  },
]

const InstagramGallery = () => {
  const sliderRef = useRef<HTMLDivElement>(null)
  const slideRefs = useRef<(HTMLDivElement | null)[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const updateSlider = useCallback(() => {
    const slides = slideRefs.current.filter(Boolean) as HTMLDivElement[]
    if (!slides.length) return

    const totalSlides = slides.length
    const gap = 20
    const slideWidth = slides[0]?.offsetWidth || 0

    slides.forEach((slide, index) => {
      const offset = index - currentIndex
      const zIndex = totalSlides - Math.abs(offset)

      let xPos = offset * (slideWidth + gap)
      let scale = 1 - Math.abs(offset) * 0.2
      let opacity = 1 - Math.abs(offset) * 0.1
      let zPos = -Math.abs(offset) * 100

      if (offset === 0) {
        scale = 1.2
        zPos = 0
      }

      if (slide) {
        slide.style.transform = `translateX(${xPos}px) translateZ(${zPos}px) scale(${scale})`
        slide.style.opacity = opacity.toString()
        slide.style.zIndex = zIndex.toString()
      }
    })
  }, [currentIndex])

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length)
  }, [])

  const startSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    intervalRef.current = setInterval(nextSlide, 3000)
  }, [nextSlide])

  const stopSlider = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }, [])

  useEffect(() => {
    updateSlider()
    startSlider()

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [updateSlider, startSlider])

  const handleSlideMouseEnter = useCallback(() => {
    stopSlider()
  }, [stopSlider])

  const handleSlideMouseLeave = useCallback(() => {
    startSlider()
  }, [startSlider])

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="mb-8 text-center md:mb-14">
        <RevealWrapper className="rv-badge reveal-me">
          <span className="rv-badge-text">Gallery</span>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear mt-3">
            Follow us on
            <i className="font-instrument"> instagram</i>
          </h2>
        </TextAppearAnimation>
      </div>
      <div className="relative overflow-hidden" ref={sliderRef}>
        <div className="flex h-[500px] items-center justify-center">
          <div className="instagram-slider-container perspective-[1000px] relative flex w-full items-center justify-center">
            <div
              className="slides-wrapper relative flex h-full w-full items-center justify-center"
              style={{ transformStyle: 'preserve-3d' }}>
              {data.map((item, index) => (
                <div
                  key={item.id}
                  ref={(el) => {
                    if (el) slideRefs.current[index] = el
                  }}
                  className="slide absolute w-[320px] cursor-pointer transition-all duration-500 md:w-[400px]"
                  onMouseEnter={handleSlideMouseEnter}
                  onMouseLeave={handleSlideMouseLeave}>
                  <figure className="group relative overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={`Gallery item ${item.id}`}
                      className="h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <a
                      href={item.link}
                      target="_blank"
                      className="absolute left-1/3 top-[55%] cursor-pointer opacity-0 transition-all duration-[400ms] ease-in-out group-hover:left-1/2 group-hover:top-1/2 group-hover:-translate-x-1/2 group-hover:-translate-y-1/2 group-hover:opacity-100">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width={48} height={48} viewBox="0 0 48 48" fill="none">
                          <rect width={48} height={48} fill="#151515" />
                          <path
                            d="M24 31.5C28.1421 31.5 31.5 28.1421 31.5 24C31.5 19.8579 28.1421 16.5 24 16.5C19.8579 16.5 16.5 19.8579 16.5 24C16.5 28.1421 19.8579 31.5 24 31.5Z"
                            stroke="#EDF0F5"
                            strokeMiterlimit={10}
                          />
                          <path
                            d="M32.25 6.75H15.75C10.7794 6.75 6.75 10.7794 6.75 15.75V32.25C6.75 37.2206 10.7794 41.25 15.75 41.25H32.25C37.2206 41.25 41.25 37.2206 41.25 32.25V15.75C41.25 10.7794 37.2206 6.75 32.25 6.75Z"
                            stroke="#EDF0F5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M33.75 16.5C34.9926 16.5 36 15.4926 36 14.25C36 13.0074 34.9926 12 33.75 12C32.5074 12 31.5 13.0074 31.5 14.25C31.5 15.4926 32.5074 16.5 33.75 16.5Z"
                            fill="#EDF0F5"
                          />
                        </svg>
                      </span>
                    </a>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InstagramGallery
