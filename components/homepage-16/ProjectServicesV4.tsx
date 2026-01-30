import { cn } from '@/utils/cn'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudies: WorkType[] = getMarkDownData('data/marketing/project').reverse()

const ProjectServicesV4 = () => {
  return (
    <section className="pb-14 pt-28 sm:pt-36 md:pb-16 md:pt-[157px] lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {/* Section Header */}
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="w-full md:w-[55%] lg:w-[60%]">
            <TextAppearAnimation>
              <h2 className="text-appear mt-3 md:mt-4">
                Proven strategies, <i className="font-instrument">Real</i>
                <span className="font-instrument italic"> results</span>
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="w-full md:w-[45%] lg:w-[40%]">
            <TextAppearAnimation>
              <p className="text-appear md:text-right">
                We drive growth with data insights and creative marketing, boosting visibility and engagement.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/design-agency" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>View More Case Studies</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>View More Case Studies</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-[1430px] grid-cols-1 gap-x-6 gap-y-14 px-4 md:grid-cols-2 md:px-[30px]">
        {caseStudies.map((item, index) => (
          <RevealWrapper
            key={item.slug}
            className={cn('reveal-me underline-hover-effect group', (index + 1) % 2 === 0 ? 'md:mt-12 lg:mt-20' : '')}>
            <Link href={`/marketing/project/${item.slug}`}>
              <figure className="overflow-hidden">
                <img
                  src={item?.image}
                  className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  alt={item?.title}
                />
              </figure>
              <div className="blog-title mt-[26px] text-center lg:mt-[30px]">
                <h3 className="text-center text-[27px] font-normal capitalize leading-tight md:text-3xl lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[51px]">
                  {item?.title}
                </h3>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default ProjectServicesV4
