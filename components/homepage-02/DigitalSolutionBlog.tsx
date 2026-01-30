import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const blogs: BlogType[] = getMarkDownData('data/digital-agency/blog')

const DigitalSolutionBlog = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-4 gap-x-10 md:flex-row lg:mb-24 lg:justify-start">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear lg:text-[70px]">
                <span className="font-instrument italic"> Knowledge</span>
                <br className="hidden md:block" />
                We impart
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="flex-1 md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We champion athletes, storytellers, and brands that shape culture and inspire the world with their
                unique perspectives.
              </p>
            </TextAppearAnimation>
            <RevealWrapper as="ul" className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/ai-blog" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>See Our Blogs</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>See Our Blogs</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="grid grid-cols-1 items-stretch justify-items-center gap-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
          {blogs.map((item) => (
            <RevealWrapper key={item.slug} className="group mx-auto flex w-full flex-col xl:max-w-[370px]">
              <Link href={`/digital-agency/blog/${item?.slug}`}>
                <figure className="mb-6 overflow-hidden xl:aspect-[370/399]">
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    className="h-full w-full object-cover transition-all duration-500 hover:scale-125"
                  />
                </figure>
              </Link>

              <div className="blog-title">
                <Link href={`/digital-agency/blog/${item?.slug}`}>
                  <h3 className="text-[27px] leading-tight tracking-tight md:text-3xl lg:text-4xl">{item.title}</h3>
                </Link>
                <p className="font-poppins mb-5 mt-3 text-lg font-normal leading-[1.4] tracking-[0.4px] md:mb-10 md:mt-5">
                  {item?.description}
                </p>
                <Link href={`/digital-agency/blog/${item?.slug}`} className="rv-button rv-button-primary2">
                  <div className="rv-button-top !text-center">
                    <span className="mr-1">3 minute read</span>
                    <img className="inline dark:hidden" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                    <img className="hidden dark:inline" src="/images/icons/top-arrow-dark.svg" alt="Arrow Icon" />
                  </div>
                  <div className="rv-button-bottom !text-center">
                    <span className="mr-1">3 minute read</span>
                    <img className="inline" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                  </div>
                </Link>
              </div>
            </RevealWrapper>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default DigitalSolutionBlog
