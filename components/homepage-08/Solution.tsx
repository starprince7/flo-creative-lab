import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogType {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlog: BlogType[] = getMarkDownData('data/business-solutions/blog')
const postsBlog = loadedBlog.filter((blog) => blog.blogtype)

const Solution = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Solutions</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Creative solutions for your business challenges.</h2>
          </TextAppearAnimation>
        </div>
        <div className="[&>*:not(:last-child)]:mb-4">
          {postsBlog?.map((blog) => (
            <RevealWrapper
              key={blog.slug}
              className="underline-hover-effect group flex flex-col-reverse items-start border dark:border-dark md:flex-row md:items-center md:gap-x-11 md:gap-y-10 md:pr-5 lg:gap-x-[70px] lg:pr-0">
              <div className="flex-1 pl-5 max-lg:py-6 max-md:pr-5 lg:pl-10">
                <Link href={`/business-solutions/blog/${blog?.slug}`}>
                  <div className="blog-title mb-6">
                    <h3 className="text[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">{blog.title}</h3>
                  </div>
                </Link>
                <p className="border-t pt-2 dark:border-dark md:pt-5">{blog.description}</p>
              </div>
              <figure className="h-full w-full flex-1 overflow-hidden">
                <Link href={`/business-solutions/blog/${blog?.slug}`} className="block">
                  <Image
                    width={509}
                    height={295}
                    src={blog.thumbnail}
                    alt="Blog Images"
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </Link>
              </figure>
            </RevealWrapper>
          ))}
        </div>
        <RevealWrapper as="ul" className="mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/portfolio-agency/case-study" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Start Your Growth Journey</span>
              </div>
              <div className="rv-button-bottom">
                <span>Start Your Growth Journey</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default Solution
