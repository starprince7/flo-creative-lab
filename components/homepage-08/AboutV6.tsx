'use client'

import CounterAnimation from '@/utils/CounterAnimation'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
const stats = [
  { number: 15, suffix: '', label: 'Years of Experience' },
  { number: 50, suffix: '+', label: 'Countries in Services' },
  { number: 30, suffix: '%', label: 'Increase in Productivity' },
]

const AboutV6 = () => {
  return (
    <section className="pb-14 pt-24 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div>
          <TextAppearAnimation>
            <h2 className="text-appear">Trusted by Industry Leaders</h2>
          </TextAppearAnimation>
          <div className="mb-20 mt-8 flex flex-col items-center justify-between gap-y-5 md:mb-28 md:mt-16 md:flex-row md:gap-x-20">
            <RevealWrapper as="figure" className="w-full md:h-[305px] md:w-96">
              <img src="/images/home-3/about-banner.png" alt="about-banner" className="w-full" />
            </RevealWrapper>
            <figcaption>
              <RevealWrapper as="p" className="max-w-xl">
                With years of experience and a track record of success, we’ve helped businesses across multiple
                industries. Industry certifications and recognitions back our expertise.
              </RevealWrapper>
              <RevealWrapper as="ul" className="mt-7 justify-self-start max-md:w-full md:mt-14">
                <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                  <Link href="/design-agency" className="rv-button rv-button-white block md:inline-block">
                    <div className="rv-button-top">
                      <span>View Case Studies</span>
                    </div>
                    <div className="rv-button-bottom">
                      <span>View Case Studies</span>
                    </div>
                  </Link>
                </li>
              </RevealWrapper>
            </figcaption>
          </div>
        </div>

        <div className="flex items-center justify-center gap-[30px] pt-[75px] max-xl:flex-wrap">
          {stats.map((stat) => (
            <RevealWrapper
              key={stat.number}
              className="flex min-h-[210px] min-w-[320px] flex-col items-center justify-center space-y-3 border px-9 py-7 dark:border-dark lg:px-16 lg:py-10">
              <h2 className="lg:text-7xl">
                <CounterAnimation number={stat.number} /> {stat.suffix}
              </h2>
              <p>{stat.label}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutV6
