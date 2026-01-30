import arrowIcon from '@/public/images/icons/arrow-Icon.svg'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

export interface ProjectType {
  slug: string
  content: string
  [key: string]: any
}

const projects: ProjectType[] = getMarkDownData('data/design-agency')

const OurProject = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="max-xs:px-5 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <RevealWrapper className="group relative w-full cursor-pointer max-lg:mx-auto" key={project.slug}>
              <Link href={`/design-agency/${project.slug}`} className="block">
                <figure className="overflow-hidden">
                  <Image
                    className="block h-full w-full transition-all duration-500 hover:scale-125"
                    src={project.thumbnail}
                    width={553}
                    height={622}
                    alt="Services Image"
                  />
                </figure>
                <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-5 pr-2.5 backdrop-blur transition-all duration-500 group-hover:scale-[1.01] lg:pl-10">
                  <h3 className="text-2xl text-white lg:text-[32px]">{project.title}</h3>
                  <figure className="relative cursor-pointer overflow-hidden bg-primary p-7 lg:p-8">
                    <Image
                      src={arrowIcon}
                      alt="Arrow Icon"
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                    />
                    <Image
                      src={arrowIcon}
                      alt="Arrow Icon"
                      className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                    />
                  </figure>
                </div>
              </Link>
            </RevealWrapper>
          ))}

          {/* <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-2.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Code.ai</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div>
          <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-3.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Black Code.ai</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div>
          <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-4.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Graphic.ai</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div>
          <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-5.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Booklet mockup</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div>
          <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-6.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Packaging</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div>
          <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-7.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Business Card</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div>
          <div className="reveal-me group relative cursor-pointer max-lg:mx-auto">
            <a href="/project-details.html">
              <figure className="overflow-hidden">
                <img
                  className="block h-full w-full transition-all duration-500 hover:scale-125"
                  src="/images/services/services-8.png"
                  alt="Services Image"
                />
              </figure>
              <div className="absolute bottom-4 mx-2.5 flex w-[calc(100%-20px)] items-center justify-between bg-secondary/50 py-2.5 pl-10 pr-2.5 backdrop-blur">
                <h3 className="text-[32px] text-white">Clay.ai</h3>
                <figure className="relative cursor-pointer overflow-hidden bg-primary p-8">
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-12 group-hover:translate-x-8 group-hover:opacity-0"
                  />
                  <img
                    src="/images/icons/arrow-Icon.svg"
                    alt="Arrow Icon"
                    className="absolute -translate-x-12 translate-y-8 opacity-0 transition-all duration-500 group-hover:-translate-x-2.5 group-hover:-translate-y-2 group-hover:opacity-100"
                  />
                </figure>
              </div>
            </a>
          </div> */}
        </div>
      </div>
    </section>
  )
}

export default OurProject
