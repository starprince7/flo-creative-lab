import TextAppearAnimation from '../animation/TextAppearAnimation'

interface headingProps {
  headingTitle: string
  italicTitle?: string
  description?: string
}

const SectionHeaderV3 = ({ headingTitle, italicTitle, description }: headingProps) => {
  return (
    <div className="mb-10 flex flex-col justify-center gap-x-10 gap-y-4 max-md:items-center md:flex-row lg:mb-20 lg:justify-start">
      <div className="flex-1 self-start sm:self-center md:self-start">
        <TextAppearAnimation>
          <h2 className="text-appear lg:text-[60px] xl:text-[70px]">
            <i className="font-instrument italic max-sm:pr-2">{italicTitle}</i> <br className="hidden md:block" />{' '}
            {headingTitle}
          </h2>
        </TextAppearAnimation>
      </div>
      <div className="flex-1 self-start sm:self-center md:self-end">
        <TextAppearAnimation>
          <p className="text-appear max-w-96 dark:text-colorText md:max-w-[470px]">{description}</p>
        </TextAppearAnimation>
      </div>
    </div>
  )
}

export default SectionHeaderV3
