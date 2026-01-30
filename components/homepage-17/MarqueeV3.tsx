'use client'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const data = [
  {
    id: 1,
    logo: '/images/marquee-img/invert.svg',
    darkLogo: '/images/marquee-img/invert-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 2,
    logo: '/images/marquee-img/greenish.svg',
    darkLogo: '/images/marquee-img/greenish-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 3,
    logo: '/images/marquee-img/invert.svg',
    darkLogo: '/images/marquee-img/invert-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 4,
    logo: '/images/marquee-img/greenish.svg',
    darkLogo: '/images/marquee-img/greenish-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 5,
    logo: '/images/marquee-img/invert.svg',
    darkLogo: '/images/marquee-img/invert-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 6,
    logo: '/images/marquee-img/greenish.svg',
    darkLogo: '/images/marquee-img/greenish-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 7,
    logo: '/images/marquee-img/invert.svg',
    darkLogo: '/images/marquee-img/invert-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 8,
    logo: '/images/marquee-img/greenish.svg',
    darkLogo: '/images/marquee-img/greenish-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 9,
    logo: '/images/marquee-img/invert.svg',
    darkLogo: '/images/marquee-img/invert-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 10,
    logo: '/images/marquee-img/greenish.svg',
    darkLogo: '/images/marquee-img/greenish-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 11,
    logo: '/images/marquee-img/invert.svg',
    darkLogo: '/images/marquee-img/invert-dark.svg',
    alt: 'Company Logo',
  },
  {
    id: 12,
    logo: '/images/marquee-img/greenish.svg',
    darkLogo: '/images/marquee-img/greenish-dark.svg',
    alt: 'Company Logo',
  },
]

const MarqueeV3 = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }
  return (
    <section className="relative z-[2000] -mt-[160px] overflow-hidden bg-backgroundBody pb-14 pt-28 dark:bg-secondary sm:-mt-[250px] md:-mt-[350px] md:pb-16 md:pt-32 lg:-mt-[450px] lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div>
        <RevealWrapper as="p" className="reveal-me container mb-8 text-center lg:mb-16">
          Our solutions power businesses worldwide.
        </RevealWrapper>
        <RevealWrapper
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          className="relative overflow-hidden">
          <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap whitespace-nowrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border-y border-r border-y-secondary/10 border-r-secondary/10 bg-backgroundBody dark:border-y-backgroundBody/10 dark:border-r-backgroundBody/10 dark:bg-dark">
                <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
              </div>
            ))}
          </div>
        </RevealWrapper>
        <RevealWrapper as="ul" className="reveal-me container mt-7 grid justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>View Our Network</span>
              </div>
              <div className="rv-button-bottom">
                <span>View Our Network</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default MarqueeV3
