import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

export interface ProjectDataType {
  slug: string
  content: string
  [key: string]: any
}

const projectData: ProjectDataType[] = getMarkDownData('data/service-agency/project')
const projectSorted = projectData.filter((project) => project?.year)
const projectPosts = projectSorted.toSorted((a, b) => a.year - b.year)

const ServiceAgencyProjects = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 sm:items-center md:mb-20 md:flex-row lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear">
                <span className="font-instrument italic">Our latest</span>
                <br className="hidden md:block" />
                projects
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full">
            <TextAppearAnimation>
              <p className="text-appear max-w-md max-md:text-justify md:justify-self-end md:text-right">
                Each project reflects our dedication to excellence, creativity, and innovation.
              </p>
            </TextAppearAnimation>

            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>See More projects</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>See More projects</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center justify-items-center gap-[30px] gap-y-10 md:grid-cols-2 md:items-start">
          {projectPosts.map((project) => (
            <RevealWrapper
              className="underline-hover-effect group w-full border px-3.5 pb-5 pt-3.5 dark:border-dark sm:px-5 sm:pb-7 sm:pt-5"
              key={project.slug}>
              <Link href={`/service-agency/project/${project.slug}`} className="block">
                <figure className="overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    width={508}
                    height={552}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Blog Images"
                  />
                </figure>

                <div className="mb-2.5 mt-[26px] flex items-center justify-between">
                  <p className="text-[13px] font-normal uppercase leading-[14.4px] tracking-[0.96px] text-secondary dark:text-white">
                    {project.date}
                  </p>
                  <p className="text-base leading-8 tracking-[0.48px] text-secondary dark:text-white md:text-[22px]">
                    {project.year}
                  </p>
                </div>

                <div className="blog-title">
                  <h3 className="text-3xl font-normal lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[47px]">
                    {project.title}
                  </h3>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceAgencyProjects
