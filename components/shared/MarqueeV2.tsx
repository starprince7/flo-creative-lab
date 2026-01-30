'use client'

import { data } from '@/data/logo/logo'
import useScrollingMarquee from '@/hooks/useScrollingMarquee'
import RevealWrapper from '../animation/RevealWrapper'

const MarqueeV2 = () => {
  const { marqueeRef, pauseMarquee, resumeMarquee } = useScrollingMarquee()

  const handleMouseEnter = () => {
    pauseMarquee()
  }

  const handleMouseLeave = () => {
    resumeMarquee()
  }

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealWrapper
        className="relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
        <div className="w-full overflow-hidden">
          <div ref={marqueeRef} className="z-50 flex w-fit flex-nowrap gap-2.5 whitespace-nowrap">
            {data.map((item) => (
              <div
                key={item.id}
                className="z-50 flex h-24 w-48 flex-shrink-0 items-center justify-center border border-secondary/10 bg-backgroundBody dark:border-backgroundBody/10 dark:bg-dark">
                <img src={item.logo} alt={item.alt} className="inline-block dark:hidden" />
                <img src={item.darkLogo} alt={item.alt} className="hidden dark:inline-block" />
              </div>
            ))}
          </div>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default MarqueeV2
