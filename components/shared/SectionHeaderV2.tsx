import React from 'react'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface headingProps {
  headingTitle: string
  italicTitle: string
  description: string
  serviceHeadingColor?: boolean
}

const SectionHeaderV2 = ({ headingTitle, italicTitle, description, serviceHeadingColor = false }: headingProps) => {
  return (
    <>
      <TextAppearAnimation>
        <h2 className={`text-appear text-secondary dark:text-backgroundBody`}>
          {headingTitle}
          <i className={`ml-2 font-instrument italic text-secondary dark:text-backgroundBody`}>{italicTitle}</i>
        </h2>
      </TextAppearAnimation>

      <div className="max-md:self-start lg:self-end">
        <TextAppearAnimation>
          <p
            className={`text-appear max-w-[470px] ${serviceHeadingColor ? 'text-backgroundBody/60' : 'text-colorText'}`}>
            {description}
          </p>
        </TextAppearAnimation>
      </div>
    </>
  )
}

export default SectionHeaderV2
