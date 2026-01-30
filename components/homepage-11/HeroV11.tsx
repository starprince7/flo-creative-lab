import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const HeroV11 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[120px] sm:pt-[135px] md:pb-[93px] md:pt-[150px] lg:pt-44 xl:pt-[200px]">
      <div className="container">
        <HeroGradientAnimation />
        <TextAppearAnimation>
          <h1 className="text-appear mb-3">
            Where creativity meets
            <span className="font-instrument italic"> cinematic brilliance</span>
          </h1>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear">
            From high-impact commercials to breathtaking films, we produce compelling videos that captivate audiences
            and drive results.
          </p>
        </TextAppearAnimation>
        <RevealWrapper as="ul" className="mt-14 flex list-none justify-start">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Watch Our Work</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Watch Our Work</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default HeroV11
