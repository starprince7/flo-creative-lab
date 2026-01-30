'use client'

import useHorizontalScroll from '@/hooks/useHorizontalScroll'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    title: 'Advertising videos',
    description:
      "Could you clarify what you'd like to know or discuss regarding? It can refer to various concepts like representation.",
    image: '/images/services-2/service-item-1.png',
  },
  {
    id: 2,
    title: 'Corporate & brand films',
    description:
      'It implies a combination of capabilities and specialized skills, which could be technical or procedural.',
    image: '/images/services-2/service-item-2.png',
  },
  {
    id: 3,
    title: 'Live streaming',
    description: 'It emphasizes professionalism and the depth of experience across various services or specialties.',
    image: '/images/services-2/service-item-3.png',
  },
  {
    id: 4,
    title: 'Music videos',
    description: 'Music videos that capture the essence of your sound and vision.',
    image: '/images/services-2/service-item-1.png',
  },
  {
    id: 5,
    title: 'Documentary films',
    description: 'Capturing real stories and experiences through the art of filmmaking.',
    image: '/images/services-2/service-item-2.png',
  },
  {
    id: 6,
    title: 'Event coverage',
    description: 'Providing comprehensive coverage of your events with a professional touch.',
    image: '/images/services-2/service-item-3.png',
  },
  {
    id: 7,
    title: 'Promotional videos',
    description: 'Creating compelling promotional videos to showcase your brand and products.',
    image: '/images/services-2/service-item-1.png',
  },
]

const ServicesV10 = () => {
  const { contentRef, triggerRef } = useHorizontalScroll()

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Bringing your <i className="font-instrument">vision to life</i>
            </h2>
          </TextAppearAnimation>

          <RevealWrapper as="p">
            Each project reflects our dedication to excellence, creativity, and innovation.
          </RevealWrapper>
        </div>
        <div ref={triggerRef} className="service-section pt-10">
          <div
            ref={contentRef}
            className="video-section service-wrapper flex w-fit flex-col gap-6 overflow-x-hidden pl-[5%] pr-[30px] max-md:gap-y-10 md:flex-row md:flex-nowrap">
            {data.map((item) => (
              <div key={item.id} className="group w-[370px] cursor-fancy">
                <figure className="hero-video-container overflow-hidden">
                  <Link
                    target="_blank"
                    href="https://www.youtube.com/watch?v=HszQAizu-So"
                    className="hero-video block cursor-fancy">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-auto w-full transition-transform duration-500 group-hover:scale-105"
                    />
                  </Link>
                </figure>
                <h3 className="mb-2.5 mt-[30px] text-2xl leading-[1.1] tracking-normal md:text-[32px]">{item.title}</h3>
                <p className="max-w-[95%] text-base leading-[1.6] tracking-[0.32px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServicesV10
