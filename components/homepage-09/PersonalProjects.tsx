import topArrow from '@/public/images/icons/arrow-Icon.svg'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface projectType {
  slug: string
  content: string
  [key: string]: any
}

const loadedProject: projectType[] = getMarkDownData('data/agency-projects')
const sorted = loadedProject.filter((project) => !project.category)
const projects = sorted.toSorted((a, b) => b.title - a.title)

const PersonalProjects = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-center justify-center md:mb-20 md:flex-row md:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear flex-1">
              Selected <i className="font-instrument">Projects</i>
            </h2>
          </TextAppearAnimation>
          <div>
            <TextAppearAnimation>
              <p className="max-w-md flex-1 md:self-end md:text-right">
                Our user-centered design encourages productivity and boosts revenue.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/design-agency" className="rv-button rv-button-white block md:inline-block">
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
        <div className="[&>*:not(:last-child)]:mb-[30px]">
          {projects.map((project) => (
            <RevealWrapper as="article" className="reveal-me underline-hover-effect group relative" key={project.slug}>
              <Link href={`/personal-projects/${project.slug}`} className="block overflow-hidden">
                <Image
                  width={1330}
                  height={445}
                  src={project.thumbnail}
                  alt={project.alt}
                  className="transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                />
              </Link>

              <div className="absolute bottom-4 left-4 max-w-96 bg-backgroundBody p-2 max-md:right-4 max-md:top-2 sm:p-3 md:bottom-10 md:left-10 md:max-w-[535px] md:p-[30px]">
                <div className="project-title mb-2 md:mb-5">
                  <Link href={`/personal-projects/${project.slug}`}>
                    <h3 className="text-[24px] font-normal text-secondary dark:text-secondary lg:text-5xl lg:leading-[1.2]">
                      {project.title}
                    </h3>
                  </Link>
                </div>
                <p className="text-secondary dark:text-secondary max-sm:text-xs">{project.description}</p>
              </div>

              <figure className="absolute right-10 top-10 h-[55px] w-[55px] cursor-pointer overflow-hidden bg-primary max-md:hidden md:block">
                <Image
                  src={topArrow}
                  alt="Arrow Icon"
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                />
                <Image
                  src={topArrow}
                  alt="Arrow Icon"
                  className="absolute -translate-x-4 translate-y-12 opacity-0 transition-all duration-500 group-hover:translate-x-[19px] group-hover:translate-y-5 group-hover:opacity-100"
                />
              </figure>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default PersonalProjects
