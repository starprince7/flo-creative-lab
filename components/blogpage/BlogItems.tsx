'use client'
import { Blog2Type } from '@/app/seo-blog/page'
import topArrowDark from '@/public/images/icons/top-arrow-dark.svg'
import topArrow from '@/public/images/icons/top-arrow.svg'
import Image from 'next/image'
import Link from 'next/link'
import { FC, useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import Pagination from './Pagination'

interface BlogsProps {
  loadedBlogs: Blog2Type[]
}

const BlogItems: FC<BlogsProps> = ({ loadedBlogs }) => {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 6
  const totalPage = Math.ceil(loadedBlogs.length / itemsPerPage)

  const paginateData = () => {
    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    return loadedBlogs.slice(startIndex, endIndex)
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
    <section className="bg-transparent pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <div className="grid grid-cols-1 items-center justify-items-center gap-x-6 gap-y-[60px] md:grid-cols-2 md:items-start xl:grid-cols-3">
          {currentPageData.map((blog) => (
            <RevealWrapper key={blog.slug} className="group max-w-full md:max-w-[370px]">
              <Link href={`/seo-blog/${blog.slug}`} className="block w-full">
                <figure className="h-[388px] min-w-full overflow-hidden md:aspect-[370/399] md:min-w-[365px]">
                  <Image
                    src={blog.thumbnail}
                    width={360}
                    height={388}
                    alt="Web Design Trends"
                    className="h-full w-full object-cover transition-all duration-500 group-hover:rotate-3 group-hover:scale-125"
                  />
                </figure>
              </Link>
              <Link href={`/seo-blog/${blog.slug}`}>
                <div className="blog-title mb-5 mt-[30px]">
                  <h3 className="text[25px] md:text-3xl lg:text-4xl lg:leading-[1.2] lg:tracking-[-0.72px]">
                    {blog.title}
                  </h3>
                </div>
              </Link>

              <p className="mb-7 md:mb-10">{blog.description}</p>
              <Link
                href={`/seo-blog/${blog.slug}`}
                className="rv-button rv-button-primary2 block w-full md:inline-block md:w-auto">
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
            </RevealWrapper>
          ))}
        </div>

        <Pagination paginateFunction={paginateFunction} />
      </div>
    </section>
  )
}

export default BlogItems
