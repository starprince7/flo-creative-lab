import RevealWrapper from '../animation/RevealWrapper'
import HeroImageAnimation from './HeroImageAnimation'

const HeroV10 = () => {
  return (
    <section className="pb-16 pt-[118px] md:pb-20 md:pt-[143px] lg:pb-[95px] lg:pt-[120px] xl:pb-[120px]">
      <RevealWrapper className="relative w-full">
        <HeroImageAnimation />
        <div className="container">
          <h1 className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-medium text-backgroundBody max-sm:py-4 md:font-semibold">
            Transforming vision <br />
            into reality
          </h1>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default HeroV10
