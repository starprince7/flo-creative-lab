import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface ProjectType {
  slug: string
  content: string
  [key: string]: any
}

const projects: ProjectType[] = getMarkDownData('data/video-photography/project')

const PortfolioV8 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Our Portfolio</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Stories that captivate, <br className="hidden md:block" />
              <i className="font-instrument"> moments that last</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">
              Each project reflects our dedication to excellence, creativity, and innovation.
            </p>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2">
          {projects.map((blog) => (
            <div key={blog.slug}>
              <RevealWrapper className="reveal-me group border p-5 dark:border-dark">
                <Link href={`/video-photography/project/${blog.slug}`} className="max-md:block">
                  <figure className="overflow-hidden">
                    <img
                      src={blog?.image}
                      className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                      alt={blog?.alt}
                    />
                  </figure>
                  <p className="mb-2.5 mt-5 text-sm font-medium uppercase leading-[1.2] tracking-[0.96px] text-secondary dark:text-backgroundBody md:mt-7">
                    {blog.date}, {blog.year}
                  </p>
                  <div className="blog-title">
                    <h3 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[1.2] lg:tracking-[-1.68px]">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
              </RevealWrapper>
            </div>
          ))}
        </div>

        <RevealWrapper as="ul" className="reveal-me mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>View Our Portfolio</span>
              </div>
              <div className="rv-button-bottom">
                <span>View Our Portfolio</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default PortfolioV8
