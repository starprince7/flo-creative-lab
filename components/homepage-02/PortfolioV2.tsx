import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

interface projectsDataType {
  slug: string
  content: string
  [key: string]: any
}

let projects: projectsDataType[] = getMarkDownData('data/digital-agency/project')
let sortedProjects = projects.toSorted((a, b) => a.year - b.year)

const PortfolioV2 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container grid gap-12 max-lg:gap-y-14 lg:grid-cols-2 xl:gap-10">
        {sortedProjects.slice(0, 4).map((project) => (
          <RevealWrapper
            as="div"
            key={project.slug}
            className="project-item underline-hover-effect group col-span-full flex flex-col gap-x-10 gap-y-6 lg:items-center">
            <Link href={`/digital-agency/project/${project.slug}`} className="overflow-hidden max-lg:w-full">
              <img
                src={project.image}
                alt={project.alt}
                className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
              />
            </Link>
            <Link href={`/digital-agency/project/${project.slug}`} className="project-item-content">
              <p className="font-poppins text-xs font-normal uppercase leading-3 tracking-[5px] text-secondary dark:text-backgroundBody md:leading-6 md:tracking-[8px]">
                {project.category}
              </p>
              <div className="blog-title mb-2 mt-3 md:mt-4 lg:mb-4 lg:mt-5 xl:mt-7">
                <h3 className="text-3xl sm:text-4xl md:text-[40px] lg:text-[56px] lg:leading-[1.2] lg:tracking-[-1.68px]">
                  {project.title}
                </h3>
              </div>
              <p className="text-base leading-[1.4] tracking-[0.48px] text-[#000000b3] dark:text-dark-100 md:text-2xl">
                {project.year}
              </p>
            </Link>
          </RevealWrapper>
        ))}
      </div>

      <RevealWrapper as="ul" className="mt-[60px] flex justify-center">
        <li className="mx-auto block w-[90%] md:inline-block md:w-auto">
          <Link href="/digital-agency/project" className="rv-button rv-button-primary2 block md:inline-block">
            <div className="rv-button-top text-center">
              <span>See all projects </span>
            </div>
            <div className="rv-button-bottom text-center">
              <span>See all projects </span>
            </div>
          </Link>
        </li>
      </RevealWrapper>
    </section>
  )
}

export default PortfolioV2
