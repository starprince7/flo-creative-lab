import Link from 'next/link'
import { FC } from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface BlogDataType {
  slug: string
  content: string
  [key: string]: any
}

interface BlogListProps {
  blogData: BlogDataType[]
}

const BlogList: FC<BlogListProps> = ({ blogData }) => {
  return (
    <RevealWrapper className="grid grid-cols-1 items-stretch justify-items-center gap-6 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
      {blogData.map((item) => (
        <RevealWrapper key={item.slug} className="group mx-auto flex w-full flex-col xl:max-w-[370px]">
          <Link href={`/seo-agency/blog/${item?.slug}`}>
            <figure className="mb-6 overflow-hidden xl:aspect-[370/399]">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="h-full w-full object-cover transition-all duration-500 hover:scale-125"
              />
            </figure>
          </Link>

          <div className="blog-title">
            <Link href={`/seo-agency/blog/${item?.slug}`}>
              <h3 className="text-[27px] leading-tight tracking-tight md:text-3xl lg:text-4xl">{item.title}</h3>
            </Link>
            <p className="font-poppins mb-5 mt-3 text-lg font-normal leading-[1.4] tracking-[0.4px] md:mb-10 md:mt-5">
              {item?.description}
            </p>
            <Link href={`/seo-blog/${item?.slug}`} className="rv-button rv-button-primary2">
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
  )
}

export default BlogList
