import RevealWrapper from '../animation/RevealWrapper'
import HeroGradientAnimation from '../shared/HeroGradientAnimation'

interface PropsType {
  badgeTitle: string
  title: string
  italicTitle?: string
  description?: string
  spacing?: string
  scale?: boolean
}

const ProjectDetailsHero = ({ badgeTitle, title, description, italicTitle, scale }: PropsType) => {
  return (
    <section className="relative overflow-hidden pt-28 max-md:pb-20 sm:pb-28 md:py-[155px] lg:py-[177px]">
      <HeroGradientAnimation scale={scale} />

      <div className="container">
        <RevealWrapper className="text-center">
          {badgeTitle && (
            <div className="rv-badge">
              <span className="rv-badge-text">{badgeTitle}</span>
            </div>
          )}
          {title && (
            <h1 className="mb-4 mt-3.5">
              {title} <i className="font-instrument italic">{italicTitle}</i>
            </h1>
          )}
          {description && (
            <p className="text-appear mx-auto max-w-[470px] text-center lg:max-w-[750px]">{description}</p>
          )}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProjectDetailsHero
