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
const projects: projectType[] = getMarkDownData('data/design-agency')

const Portfolio = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-6 md:mb-20 md:flex-row md:items-end lg:justify-start">
          <div className="flex-1">
            <RevealWrapper className="rv-badge reveal-me">
              <span className="rv-badge-text">Our Portfolio</span>
            </RevealWrapper>
            <TextAppearAnimation>
              <h2 className="text-appear mt-3 md:mt-5">
                Success Stories in
                <span className="font-instrument italic"> Digital</span> Innovation
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1">
            <TextAppearAnimation>
              <p className="text-appear md:text-right">
                Discover how FloCreativeLabs brings brands to life with impactful digital solutions. Our portfolio
                showcases quality and creativity in every project.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="reveal-me mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/design-agency" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore Our Portfolio</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore Our Portfolio</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6">
          {projects.slice(0, 4).map((project) => (
            <RevealWrapper
              className="reveal-me group relative col-span-12 cursor-pointer md:col-span-6"
              key={project.slug}>
              <Link href={`/design-agency/${project.slug}`} className="h-full w-full">
                <figure className="overflow-hidden md:h-[603px]">
                  <Image
                    width={553}
                    height={603}
                    className="block h-full w-full object-cover transition-all duration-500 group-hover:scale-125"
                    src={project?.thumbnail}
                    alt={project?.title}
                  />
                </figure>
                <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-5 pr-2.5 backdrop-blur transition-all duration-700 sm:pl-10">
                  <h3 className="text-2xl text-white lg:text-[32px]">{project?.title}</h3>
                  <figure className="relative cursor-pointer overflow-hidden bg-primary p-7 lg:p-8">
                    <Image
                      src="/images/icons/arrow-Icon.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                    />
                    <Image
                      src="/images/icons/arrow-Icon.svg"
                      alt="Arrow Icon"
                      width={16}
                      height={16}
                      className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                    />
                  </figure>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio
