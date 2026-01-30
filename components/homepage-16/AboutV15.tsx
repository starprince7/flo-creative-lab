'use client'
import useReveal from '@/hooks/useReveal'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface PropTypes {
  badge?: string
  title: string
  subTitle: string
  description: string
  buttonText: string
  buttonLink: string
}

const AboutV15 = ({ badge, title, subTitle, description, buttonText, buttonLink }: PropTypes) => {
  const { revealRef } = useReveal()
  return (
    <section className="pb-14 pt-28 md:pb-16 md:pt-32 lg:pb-[88px] lg:pt-44 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <div className="text-center">
          {badge && (
            <RevealWrapper className="rv-badge reveal-me mb-3">
              <span className="rv-badge-text">{badge}</span>
            </RevealWrapper>
          )}
          <TextAppearAnimation>
            <h2 className="text-appear mb-6">{title}</h2>
          </TextAppearAnimation>
          <h5 ref={revealRef}>{subTitle}</h5>
          <RevealWrapper as="p" className="mx-auto mt-3 max-w-3xl">
            {description}
          </RevealWrapper>
          <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
            <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
              <Link href={buttonLink} className="rv-button rv-button-white block md:inline-block">
                <div className="rv-button-top">
                  <span>{buttonText}</span>
                </div>
                <div className="rv-button-bottom">
                  <span>{buttonText}</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV15
