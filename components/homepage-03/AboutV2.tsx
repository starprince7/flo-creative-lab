'use client'

import useReveal from '@/hooks/useReveal'
import RevealWrapper from '../animation/RevealWrapper'

const AboutV2 = () => {
  const { revealRef } = useReveal()

  return (
    <section className="relative -z-10 overflow-hidden bg-backgroundBody pb-14 pt-0 dark:bg-dark md:pb-16 lg:pb-[88px] lg:pt-[100px] xl:pb-[100px]">
      <div className="container">
        <div>
          <h3 ref={revealRef} className="text-secondary dark:text-backgroundBody md:text-5xl md:leading-[1.5]">
            Rivor Agency: Shaping the Future of Digital Innovation. We are dedicated to empowering blockchain pioneers
            and transforming the realm of digital ownership for today and beyond.
          </h3>

          <RevealWrapper
            as="form"
            className="relative mt-8 flex w-full max-w-[588px] border bg-secondary text-white dark:border-dark max-md:max-w-sm md:mt-10">
            <input
              type="email"
              placeholder="Your email here"
              className="block w-full border-none bg-transparent p-5 text-base text-backgroundBody focus:outline-none md:p-[30px]"
            />
            <button
              type="submit"
              className="font-poppins absolute right-2 top-3 inline-block cursor-pointer bg-primary p-3 uppercase leading-[15.4px] tracking-[1.12px] text-secondary max-md:text-xs md:top-2 md:p-[26px]">
              Send
            </button>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV2
