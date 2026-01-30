import { MarkdownData } from '@/interface'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import BlogList from './BlogList'

const BlogListV2 = () => {
  const blogsData: MarkdownData[] = getMarkDownData('data/seo-agency/blog')

  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div>
          <RevealWrapper as="p" className="text-center text-sm font-normal uppercase leading-6 tracking-[3px]">
            Articles & News
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 mt-3 hidden text-center md:mb-20 md:block">
              Browse our content on <br />
              SEO and marketing
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 mt-3 block text-center md:hidden lg:mb-20">
              Browse our content on SEO and marketing
            </h2>
          </TextAppearAnimation>
        </div>
        <BlogList blogData={blogsData} />
        <RevealWrapper as="ul" className="mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-[90%] text-center md:inline-block md:w-auto">
            <Link href="/seo-blog" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>Read all articles</span>
              </div>
              <div className="rv-button-bottom">
                <span>Read all articles</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default BlogListV2
