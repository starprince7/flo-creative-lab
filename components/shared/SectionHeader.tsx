import TextAppearAnimation from '../animation/TextAppearAnimation'

interface headingProps {
  headingTitle: string
  italicTitle?: string
  description: string
  serviceHeadingColor?: boolean
  titleChange?: boolean
}

const SectionHeader = ({
  headingTitle,
  italicTitle,
  description,
  serviceHeadingColor = false,
  titleChange = false,
}: headingProps) => {
  return (
    <>
      <TextAppearAnimation>
        {titleChange ? (
          <h2 className="text-appear block">
            <span className="font-instrument italic">Frequently asked </span>
            questions
          </h2>
        ) : (
          <h2
            className={`text-appear flex-1 ${serviceHeadingColor ? 'text-backgroundBody dark:text-backgroundBody' : 'text-secondary dark:text-backgroundBody'}`}>
            <i
              className={`font-instrument italic ${serviceHeadingColor ? 'text-backgroundBody dark:text-backgroundBody' : 'text-secondary dark:text-backgroundBody'} max-md:pr-2`}>
              {italicTitle}
            </i>
            <br className="hidden md:block" /> {headingTitle}
          </h2>
        )}
      </TextAppearAnimation>

      <div className="self-start md:self-end">
        <TextAppearAnimation>
          <p
            className={`text-appear max-w-96 lg:max-w-[470px] ${serviceHeadingColor ? 'text-backgroundBody/60' : 'text-colorText'}`}>
            {description}
          </p>
        </TextAppearAnimation>
      </div>
    </>
  )
}

export default SectionHeader
