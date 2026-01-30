import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeader from '../shared/SectionHeader'

interface projectType {
  slug: string
  content: string
  [key: string]: any
}

const caseStudies: projectType[] = getMarkDownData('data/portfolio-agency/case-studies').slice(0, 4)

const PortfolioV3 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 md:flex-row md:items-end lg:justify-between">
          <SectionHeader
            italicTitle="Recent"
            headingTitle="Case Studies"
            description="  When presenting recent case studies, it's important to highlight key aspects that showcase your agency's work and impact."
          />
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-9 md:grid-cols-2">
          {caseStudies?.map((project) => (
            <RevealWrapper key={project.slug} className="single-project-item underline-hover-effect">
              <Link href={`/portfolio-agency/case-study/${project.slug}`} className="w-full">
                <figure className="overflow-hidden">
                  <Image
                    src={project?.thumbnail}
                    height={553}
                    width={553}
                    className="h-full w-full transition-all duration-500 hover:scale-125"
                    alt={project?.title}
                  />
                </figure>

                <div className="blog-title mb-1 mt-[30px] text-center">
                  <h3 className="text-center capitalize">{project.title}</h3>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>

        <RevealWrapper as="ul" className="mt-[60px] flex justify-center">
          <li className="mx-auto block w-full md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top !text-center">
                <span>See all projects</span>
              </div>
              <div className="rv-button-bottom !text-center">
                <span>See all projects</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PortfolioV3
