import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'
import BlogList from '../shared/BlogList'
import TableOfContent from '../shared/TableOfContent'

interface RestOfTheBlogType {
  slug: string
  content: string
  [key: string]: any
}

const blogs: RestOfTheBlogType[] = getMarkDownData('data/blogs')
const RestBlogData = blogs.filter((blog) => blog.featured === false).slice(0, 3)

const BlogContent = ({ blog }: any) => {
  const headings = blog.content.match(/### .+/g) ?? []
  const tableOfContents = headings.map((heading: string) => heading.replace('### ', ''))
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-20">
        <RevealWrapper as="figure" className="reveal-me w-full 2xl:max-h-[523px]">
          <Image
            src={blog?.data?.thumbnail}
            width={1280}
            height={523}
            alt="Blog Details"
            className="w-full object-cover"
          />
        </RevealWrapper>

        <div className="mt-12 flex flex-col justify-start gap-10 pb-14 md:mt-[60px] md:pb-16 lg:flex-row lg:pb-[88px] xl:pb-[100px]">
          <aside className="min-w-[275px] flex-1">
            <div className="sticky top-24 max-md:mb-10">
              <TableOfContent tableOfContents={tableOfContents}>
                <h3 className="mb-7 mt-10 text-3xl md:text-4xl lg:mt-16 xl:mt-20">Share</h3>
                <ul className="flex items-center gap-5">
                  <li className="relative inline-block h-10 w-10 rounded-full border-2 border-secondary duration-300 hover:bg-primary dark:border-dark">
                    <Link href="https://discord.gg/fSxDJyvJmr" target="_blank">
                      <span className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 dark:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#000000"
                          viewBox="0 0 256 256">
                          <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
                        </svg>
                      </span>
                      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 dark:inline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#fff"
                          viewBox="0 0 256 256">
                          <path d="M104,140a12,12,0,1,1-12-12A12,12,0,0,1,104,140Zm60-12a12,12,0,1,0,12,12A12,12,0,0,0,164,128Zm74.45,64.9-67,29.71a16.17,16.17,0,0,1-21.71-9.1l-8.11-22q-6.72.45-13.63.46t-13.63-.46l-8.11,22a16.18,16.18,0,0,1-21.71,9.1l-67-29.71a15.93,15.93,0,0,1-9.06-18.51L38,58A16.07,16.07,0,0,1,51,46.14l36.06-5.93a16.22,16.22,0,0,1,18.26,11.88l3.26,12.84Q118.11,64,128,64t19.4.93l3.26-12.84a16.21,16.21,0,0,1,18.26-11.88L205,46.14A16.07,16.07,0,0,1,218,58l29.53,116.38A15.93,15.93,0,0,1,238.45,192.9ZM232,178.28,202.47,62s0,0-.08,0L166.33,56a.17.17,0,0,0-.17,0l-2.83,11.14c5,.94,10,2.06,14.83,3.42A8,8,0,0,1,176,86.31a8.09,8.09,0,0,1-2.16-.3A172.25,172.25,0,0,0,128,80a172.25,172.25,0,0,0-45.84,6,8,8,0,1,1-4.32-15.4c4.82-1.36,9.78-2.48,14.82-3.42L89.83,56s0,0-.12,0h0L53.61,61.93a.17.17,0,0,0-.09,0L24,178.33,91,208a.23.23,0,0,0,.22,0L98,189.72a173.2,173.2,0,0,1-20.14-4.32A8,8,0,0,1,82.16,170,171.85,171.85,0,0,0,128,176a171.85,171.85,0,0,0,45.84-6,8,8,0,0,1,4.32,15.41A173.2,173.2,0,0,1,158,189.72L164.75,208a.22.22,0,0,0,.21,0Z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>

                  <li className="relative inline-block h-10 w-10 rounded-full border-2 border-secondary duration-300 hover:bg-primary dark:border-dark">
                    <Link href="https://www.facebook.com/staticmania" target="_blank">
                      <span className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 dark:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#000"
                          viewBox="0 0 256 256">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                        </svg>
                      </span>
                      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 dark:inline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#fff"
                          viewBox="0 0 256 256">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="relative inline-block h-10 w-10 rounded-full border-2 border-secondary duration-300 hover:bg-primary dark:border-dark">
                    <Link href="https://www.linkedin.com/company/staticmania/" target="_blank">
                      <span className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 dark:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#000"
                          viewBox="0 0 256 256">
                          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                        </svg>
                      </span>
                      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 dark:inline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#fff"
                          viewBox="0 0 256 256">
                          <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                  <li className="relative inline-block h-10 w-10 rounded-full border-2 border-secondary duration-300 hover:bg-primary dark:border-dark">
                    <Link href="https://www.instagram.com/staticmania" target="_blank">
                      <span className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 dark:hidden">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#000000"
                          viewBox="0 0 256 256">
                          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                        </svg>
                      </span>
                      <span className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 dark:inline">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#fff"
                          viewBox="0 0 256 256">
                          <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
                        </svg>
                      </span>
                    </Link>
                  </li>
                </ul>
              </TableOfContent>
            </div>
          </aside>
          <article className="career-details-body overflow-hidden">
            <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{blog.content}</ReactMarkdown>
          </article>
        </div>
      </div>
      <div className="container overflow-hidden pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]">
        <BlogList blogData={RestBlogData} />
      </div>
    </section>
  )
}

export default BlogContent
