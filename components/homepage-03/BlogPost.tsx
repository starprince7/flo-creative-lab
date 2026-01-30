import darkTopArrowIcon from '@/public/images/icons/top-arrow-dark.svg'
import topArrowIcon from '@/public/images/icons/top-arrow.svg'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface blogType {
  slug: string
  content: string
  [key: string]: any
}

const blogs: blogType[] = getMarkDownData('data/portfolio-agency/blog')

const BlogPost = () => {
  return (
    <section className="z-20 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:mb-20 md:flex-row lg:items-center lg:justify-between">
          <TextAppearAnimation>
            <h2 className="text-appear flex-1">
              <span className="font-instrument italic lg:text-[70px]">Insights</span>
              <br className="hidden lg:block" />
              &amp; Stories
            </h2>
          </TextAppearAnimation>
          <div className="flex-1 max-md:w-full lg:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:justify-self-end md:text-right">
                Deep dives into emerging technologies, design trends, and digital transformation strategies.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/seo-blog" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>Explore Our Blogs</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>Explore Our Blogs</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="grid grid-cols-1 justify-items-center gap-6 gap-y-14 max-lg:items-center md:grid-cols-2 md:gap-y-16 lg:grid-cols-3">
          {blogs.map((blog) => (
            <RevealWrapper className="group w-full md:max-w-[355px]" key={blog.slug}>
              <Link href={`/portfolio-agency/blog/${blog?.slug}`} className="w-full">
                <figure className="overflow-hidden">
                  <Image
                    src={blog.thumbnail}
                    width={355}
                    height={345}
                    alt={blog?.title}
                    className="h-full w-full transition-all duration-500 hover:scale-125"
                  />
                </figure>
                <div className="rv-badge mt-6 md:mt-7">
                  <span className="rv-badge-text">{blog.tags}</span>
                </div>
                <div className="blog-title mb-7 mt-4 md:mb-[30px] md:mt-5">
                  <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                    {blog.title}
                  </h3>
                </div>

                <button className="rv-button rv-button-primary2 block w-full md:inline-block md:w-auto">
                  <div className="rv-button-top flex items-center !text-center">
                    <span className="pr-2">4 minute read</span>
                    <Image className="inline dark:hidden" src={topArrowIcon} alt="Arrow Icon" />
                    <Image className="hidden dark:inline" src={darkTopArrowIcon} alt="Arrow Icon" />
                  </div>
                  <div className="rv-button-bottom flex items-center !text-center">
                    <span className="pr-2">4 minute read</span>
                    <Image className="inline" src={topArrowIcon} alt="Arrow Icon" />
                  </div>
                </button>
              </Link>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default BlogPost
