import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface BlogsType {
  slug: string
  content: string
  [key: string]: any
}

const blogPosts: BlogsType[] = getMarkDownData('data/service-agency/blog')

const BlogPostsV4 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-y-6 md:mb-20 md:flex-row md:items-center md:gap-x-10 lg:justify-between">
          <div className="w-full flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear">
                <span className="font-instrument italic"> Latest</span> <br className="hidden lg:block" />
                blog & news
              </h2>
            </TextAppearAnimation>
          </div>
          <RevealWrapper as="ul" className="max-md:w-full max-md:flex-1 md:w-auto md:self-end">
            <li className="mx-auto block max-md:w-full md:inline-block md:w-auto">
              <Link href="/ai-blog" className="rv-button rv-button-white block text-center md:inline-block">
                <div className="rv-button-top">
                  <span>View Blog</span>
                </div>
                <div className="rv-button-bottom">
                  <span>View Blog</span>
                </div>
              </Link>
            </li>
          </RevealWrapper>
        </div>

        <article className="mt-20 [&>*:not(last-child)]:mb-10">
          {blogPosts.map((blog) => (
            <RevealWrapper
              key={blog.slug}
              className="underline-hover-effect group flex flex-col-reverse items-center justify-center gap-y-7 border-b pb-10 dark:border-dark md:justify-normal lg:flex-row">
              <div className="max-lg:self-center">
                <div className="rv-badge mb-5">
                  <span className="rv-badge-text">{blog.dateTags}</span>
                </div>
                <Link href={`/service-agency/blog/${blog?.slug}`}>
                  <div className="blog-title mb-6 max-w-[770px] lg:mb-10">
                    <h3 className="text-[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                      {blog.title}
                    </h3>
                  </div>
                </Link>

                <Link
                  href={`/service-agency/blog/${blog?.slug}`}
                  className="rv-button rv-button-primary2 block w-full md:inline-block md:w-auto">
                  <div className="rv-button-top flex items-center !text-center">
                    <span className="pr-2">READ MORE</span>
                    <img className="inline dark:hidden" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                    <img className="hidden dark:inline" src="/images/icons/top-arrow-dark.svg" alt="Arrow Icon" />
                  </div>
                  <div className="rv-button-bottom flex items-center !text-center">
                    <span className="pr-2">READ MORE</span>
                    <img className="inline" src="/images/icons/top-arrow.svg" alt="Arrow Icon" />
                  </div>
                </Link>
              </div>

              <Link href={blog.slug} className="max-xl:w-full">
                <figure className="w-full overflow-hidden">
                  <Image
                    width={380}
                    height={260}
                    src={blog.thumbnail}
                    className="h-full w-full transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Blog Images"
                  />
                </figure>
              </Link>
            </RevealWrapper>
          ))}
        </article>
      </div>
    </section>
  )
}

export default BlogPostsV4
