import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const ourWork: WorkType[] = getMarkDownData('data/flim-making/project')

const OurWorkShowcase = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">Our Work</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Stories that resonate, <br />
              productions
              <i className="font-instrument"> that inspire</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">A legacy of Award-Winning productions</p>
          </TextAppearAnimation>
        </div>
        <div className="mb-[60px] grid grid-cols-12 items-center justify-items-center gap-[30px] gap-y-10 md:items-start">
          {ourWork.map((item) => (
            <RevealWrapper
              key={item.slug}
              className="underline-hover-effect group col-span-12 border px-3.5 pb-7 pt-3.5 dark:border-dark md:col-span-6 md:px-5 md:pt-5 last:md:col-span-12">
              <Link href={`/flim-making/project/${item.slug}`}>
                <figure className="overflow-hidden">
                  <img
                    src={item?.image}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt={item?.title}
                  />
                </figure>
              </Link>
              <div className="mb-2.5 mt-[26px]">
                <p className="text-[13px] font-normal uppercase leading-[14.4px] tracking-[0.96px] text-secondary dark:text-white">
                  {item?.date}, {item?.year}
                </p>
              </div>
              <Link href={`/flim-making/project/${item.slug}`}>
                <div className="blog-title">
                  <h3 className="text-3xl font-normal lg:text-[42px] lg:leading-[1.2] lg:tracking-[-1.68px] xl:text-[50px]">
                    {item?.title}
                  </h3>
                </div>
              </Link>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper as="ul" className="flex justify-center">
          <li className="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
            <Link href="/design-agency" className="rv-button rv-button-secondary block text-center md:inline-block">
              <div className="rv-button-top">
                <span>See Project</span>
              </div>
              <div className="rv-button-bottom">
                <span>See Project</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurWorkShowcase
