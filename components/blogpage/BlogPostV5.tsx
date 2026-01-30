'use client'
import { BlogType } from '@/app/ai-blog/page'
import topArrowDark from '@/public/images/icons/top-arrow-dark.svg'
import topArrow from '@/public/images/icons/top-arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import Pagination from './Pagination'

interface BlogsProps {
  Blogs: BlogType[]
}

const BlogPostV5: FC<BlogsProps> = ({ Blogs }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 7
  const totalPage = Math.ceil(Blogs.length / itemsPerPage)

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return Blogs.slice(startIndex, endIndex)
  }
  const currentPageData = paginateData()

  const goToNextPage = () => {
    setCurrentPage((nextPage) => nextPage + 1)
  }
  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1)
  }
  const paginateFunction = {
    totalPage,
    currentPage,
    setCurrentPage,
    goToNextPage,
    goToPreviousPage,
  }

  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper className="grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-[60px] md:grid-cols-2 md:items-start xl:grid-cols-3">
          {currentPageData?.slice(0, 3)?.map((blog) => (
            <div key={blog.slug} className="underline-hover-effect group max-w-[370px]">
              <Link href={`/ai-blog/${blog.slug}`} className="block">
                <figure className="h-[388px] overflow-hidden xl:min-w-[360px]">
                  <Image
                    width={360}
                    height={388}
                    src={blog.thumbnail}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Blog Images"
                  />
                </figure>
              </Link>
              <p className="font-poppins mb-5 mt-[30px] text-sm font-normal uppercase leading-[1.1] tracking-[1.12px]">
                {blog.date}
              </p>
              <Link href={`/ai-blog/${blog.slug}`}>
                <div className="blog-title mb-9">
                  <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                    {blog.title}
                  </h3>
                </div>
              </Link>

              <Link
                href={`/ai-blog/${blog.slug}`}
                className="rv-button rv-button-primary2 block w-full md:inline-block md:w-auto">
                <div className="rv-button-top flex items-center text-center">
                  <span className="pr-2">3 minute read</span>
                  <Image className="hidden dark:inline" src={topArrowDark} alt="Arrow Icon" />
                  <Image className="inline dark:hidden" src={topArrow} alt="Arrow Icon" />
                </div>
                <div className="rv-button-bottom flex items-center text-center">
                  <span className="pr-2">3 minute read</span>
                  <Image className="inline" src={topArrow} alt="Arrow Icon" />
                </div>
              </Link>
            </div>
          ))}
        </RevealWrapper>

        <article className="mt-12 md:mt-[70px] [&>*:not(last-child)]:mb-10">
          {currentPageData?.slice(3)?.map((blog) => (
            <RevealWrapper
              key={blog.slug}
              className="underline-hover-effect group flex flex-col-reverse items-center justify-center gap-x-6 gap-y-10 border dark:border-dark md:justify-normal lg:flex-row lg:p-10">
              <div className="flex-1 max-lg:self-center max-lg:px-7 max-lg:pb-7">
                <p className="font-poppins text-sm font-normal uppercase leading-[1.1] tracking-[1.12px]">
                  {blog.date}
                </p>
                <Link href={`/ai-blog/${blog.slug}`}>
                  <div className="blog-title mb-6 mt-5 lg:mb-10">
                    <h3 className="text[27px] md:text-4xl md:leading-[1.2] md:tracking-[-0.72px]">{blog.title}</h3>
                  </div>
                </Link>

                <Link href={`/ai-blog/${blog.slug}`} className="rv-button rv-button-primary2">
                  <div className="rv-button-top flex items-center text-center">
                    <span className="pr-2">3 minute read</span>
                    <Image className="inline dark:hidden" src={topArrow} alt="Arrow Icon" />
                    <Image className="hidden dark:inline" src={topArrowDark} alt="Arrow Icon" />
                  </div>
                  <div className="rv-button-bottom flex items-center text-center">
                    <span className="pr-2">3 minute read</span>
                    <Image className="inline" src={topArrow} alt="Arrow Icon" />
                  </div>
                </Link>
              </div>

              <Link href={`/ai-blog/${blog.slug}`} className="max-lg:w-full">
                <figure className="h-96 w-full overflow-hidden lg:h-[190px] lg:w-[464px] lg:flex-1">
                  <Image
                    src={blog.thumbnail}
                    width={464}
                    height={190}
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                    alt="Blog Images"
                  />
                </figure>
              </Link>
            </RevealWrapper>
          ))}
        </article>

        <Pagination paginateFunction={paginateFunction} />
      </div>
    </section>
  )
}

export default BlogPostV5
