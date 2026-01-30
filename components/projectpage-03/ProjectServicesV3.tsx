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

const projects: projectType[] = getMarkDownData('data/portfolio-agency/case-studies')

const ProjectServicesV3 = () => {
  return (
    <section className="pb-14 pt-28 sm:pt-36 md:pb-16 md:pt-[157px] lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="mb-20 flex flex-col justify-center gap-x-10 gap-y-3 sm:gap-y-7 md:mb-28 lg:flex-row lg:items-end lg:justify-between xl:mb-32">
          <div>
            <TextAppearAnimation>
              <h2 className="text-appear text-[46px] font-normal leading-[1.1] md:text-7xl md:tracking-[-2.88px] xl:text-[96px]">
                <span className="font-instrument italic">Proud</span>
                <br />
                Case Studies
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="lg:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-[470px]">
                When presenting recent case studies, it's important to highlight key aspects that showcase your agency's
                work and impact. Here's a general structure you might follow.
              </p>
            </TextAppearAnimation>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2">
          {projects?.map((project) => (
            <RevealWrapper key={project.slug} className="single-project-item underline-hover-effect">
              <Link href={`/portfolio-agency/case-study/${project.slug}`} className="block">
                <figure className="overflow-hidden">
                  <Image
                    src={project.thumbnail}
                    height={553}
                    width={553}
                    className="h-full w-full transition-all duration-500 hover:scale-125"
                    alt="Services Img"
                  />
                </figure>
                <div className="blog-title mb-1 mt-[30px] text-center">
                  <h3 className="text-center capitalize">{project.title}</h3>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectServicesV3
