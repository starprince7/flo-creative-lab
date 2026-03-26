import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV14 = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <img src="/images/hero-flo-portfolio.jpeg" alt="hero" className="w-full blur-sm" />
      <RevealWrapper className="container absolute left-1/3 top-2/3 -translate-x-1/3 -translate-y-2/3 lg:top-1/2 lg:-translate-y-1/2">
        <h1 className="mb-3 text-secondary dark:text-backgroundBody max-md:leading-none">
          Shaping <br className="hidden md:block" />
          raw <i className="font-instrument text-inherit">footage</i> through
          <br className="hidden md:block" /> precision <i className="font-instrument text-inherit">editing</i>
        </h1>
        <p className="max-w-3xl text-secondary/70 dark:text-backgroundBody/70">From polished music videos to high-end TV commercials.</p>
        {/* Primary CTA Button */}
        <ul className="mt-7 flex list-none justify-start lg:mt-14">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/about" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Explore Our Work</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Explore Our Work</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default HeroV14
