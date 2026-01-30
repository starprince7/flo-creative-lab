import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface headingProps {
  headingTitle: string
  badgeText?: string
}

const SectionHeaderV4 = ({ headingTitle, badgeText }: headingProps) => {
  return (
    <div className="mb-8 text-center md:mb-20">
      <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
        <span className="rv-badge-text">{badgeText}</span>
      </RevealWrapper>
      <TextAppearAnimation>
        <h2 className="text-appear mx-auto max-w-[770px]">{headingTitle}</h2>
      </TextAppearAnimation>
    </div>
  )
}

export default SectionHeaderV4
