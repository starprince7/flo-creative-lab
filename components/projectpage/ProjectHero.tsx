import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

const ProjectHero = () => {
  return (
    <section className="relative overflow-hidden pt-28 max-md:pb-16 sm:pb-28 md:py-[155px] lg:py-[177px]">
      <HeroGradientAnimation />

      <div className="container">
        <RevealWrapper className="text-center">
          <div className="rv-badge">
            <span className="rv-badge-text">Project</span>
          </div>

          <h1 className="mb-3 mt-3.5 sm:mb-4 sm:mt-5 lg:mb-7 lg:mt-9">
            Quality stuff.
            <span className="font-instrument italic">
              In every <br /> project.
            </span>
          </h1>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProjectHero
