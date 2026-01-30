import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    step: 'Step 01',
    title: 'Strategy Session',
    description: 'Understanding your brand’s goals and target audience.',
  },
  {
    id: 2,
    step: 'Step 02',
    title: 'Content Creation',
    description: 'Designing high-impact posts, reels, and videos.',
  },
  {
    id: 3,
    step: 'Step 03',
    title: 'Execution',
    description: 'Creating engaging brand and digital experiences.',
  },
  {
    id: 4,
    step: 'Step 04',
    title: 'Optimization',
    description: 'Analyzing and refining strategies for maximum results.',
  },
]

const ProcessV8 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              From strategy to execution Our-
              <i className="font-instrument"> Winning formula</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">A strategic roadmap to marketing success</p>
          </TextAppearAnimation>
        </div>
        <div className="flex justify-center gap-[30px] max-xl:flex-wrap">
          {data.map((item) => (
            <RevealWrapper key={item.id} className="reveal-me w-full grow pt-6 sm:w-[48%] xl:grow">
              <div className="relative mx-auto grid min-h-[300px] grid-cols-1 content-between border px-5 pb-[42px] pt-10 text-center dark:border-dark">
                <div className="absolute -top-4 left-1/2 inline-flex -translate-x-1/2 items-center justify-center rounded-[72px] bg-secondary px-4 pb-2 pt-2.5 dark:bg-backgroundBody">
                  <span className="text-xs uppercase leading-[1.2] tracking-[0.96px] text-backgroundBody dark:text-secondary">
                    {item.step}
                  </span>
                </div>
                <h6 className="text-2xl font-normal leading-[1.1] text-black dark:text-white">{item.title}</h6>
                <p className="text-base font-normal leading-[1.3] text-black/70 dark:text-backgroundBody/70">
                  {item.description}
                </p>
              </div>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Start Your Journey</span>
              </div>
              <div className="rv-button-bottom text-nowrap">
                <span>Start Your Journey</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV8
