import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogsType {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: BlogsType[] = getMarkDownData('data/business-solutions/blog')
const blogPosts = loadedBlogs.filter((blog) => blog.tags)

const BlogPostsV5 = () => {
  return (
    <section className="z-20 pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Blog</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">Stay ahead with expert insights on business strategies</h2>
          </TextAppearAnimation>
        </div>
        <div className="flex items-start justify-center overflow-hidden max-lg:flex-wrap max-lg:gap-y-5 md:space-x-[30px]">
          {blogPosts.map((blog) => (
            <div
              key={blog.slug}
              className="blog-card group relative min-h-[553px] cursor-pointer border p-2.5 dark:border-dark md:hover:w-[450px]">
              <Link href={`/business-solutions/blog/${blog?.slug}`} className="w-full">
                <figure className="h-[238px] overflow-hidden">
                  <img
                    src={blog.thumbnail}
                    alt={blog.title}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </figure>
              </Link>
              <div className="px-2.5">
                <Link href={`/business-solutions/blog/${blog?.slug}`} className="w-full">
                  <div className="rv-badge mt-7">
                    <span className="rv-badge-text">{blog.tags}</span>
                  </div>
                  <div className="blog-title mb-[30px] mt-3.5">
                    <h3 className="text[25px] md:text-3xl lg:text-[32px] lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {blog.title}
                    </h3>
                  </div>
                </Link>
                <div className="absolute bottom-[22px]">
                  <Link href={`/business-solutions/blog/${blog?.slug}`} className="w-full"></Link>
                  <Link
                    href={`/business-solutions/blog/${blog?.slug}`}
                    className="rv-button rv-button-primary2 w-full md:w-auto">
                    <div className="rv-button-top flex items-center !text-center">
                      <span className="pr-1">Read more</span>
                      <img className="inline dark:hidden" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                      <img className="hidden dark:inline" src="/images/icons/top-arrow-dark.svg" alt="Arrow Icon" />
                    </div>
                    <div className="rv-button-bottom flex items-center !text-center">
                      <span className="pr-1">Read more</span>
                      <img className="inline" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <RevealWrapper as="ul" className="reveal-me mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/ai-blog" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Explore Our Blog</span>
              </div>
              <div className="rv-button-bottom">
                <span>Explore Our Blog</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BlogPostsV5
