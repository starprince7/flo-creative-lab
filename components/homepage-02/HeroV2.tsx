import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const HeroV2 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-[137px] md:pb-[100px] md:pt-[180px] lg:pb-[120px] lg:pt-[150px]">
      <HeroGradientAnimation />
      <RevealWrapper className="container">
        <p className="flex items-center justify-center gap-5 text-sm font-normal uppercase leading-6 tracking-[3px] lg:justify-start">
          <span>Design Agency</span>
          <span className="inline-block h-[1px] w-[150px] bg-dark dark:bg-[#ffffffb3]"></span>
          <span>Rivor</span>
        </p>
        <h1 className="mt-5 max-lg:text-center sm:mt-10">
          Transforming Ideas into Digital
          <i className="mx-1 font-instrument"> Master pieces </i> that Drive
          <i className="font-instrument"> Success</i>
        </h1>
        <ul className="mt-14 flex list-none justify-start">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Let’s Get Started</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Let’s Get Started</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default HeroV2
