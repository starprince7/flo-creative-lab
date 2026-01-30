import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const AboutV13 = () => {
  return (
    <section className="relative pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <HeroGradientAnimation />
      <div className="container">
        <div className="text-center">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">About</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-6">Where Vision Meets Execution</h2>
          </TextAppearAnimation>
          <RevealWrapper as="h5">
            FloCreativeLabs is a premium post production agency partnering with visionary directors, artists, and brands
            to create visually striking content defined by precision, depth, and cinematic excellence.
          </RevealWrapper>
          <RevealWrapper as="p" className="mx-auto mt-3 max-w-3xl">
            With a team of accomplished filmmakers and VFX artists, we transform concepts into powerful visual
            narratives. Every frame is treated with intention—ensuring each project not only looks exceptional but feels
            unforgettable.
          </RevealWrapper>
          <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href="/team" className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>Learn More About Us</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Learn More About Us</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV13
