import BlogHero from '@/components/blogpage/BlogHero'
import BlogItems from '@/components/blogpage/BlogItems'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Blog-02',
}

export interface Blog2Type {
  slug: string
  content: string
  [key: string]: any
}

const loadedBlogs: Blog2Type[] = getMarkDownData('data/blogs')

const BlogPage02 = () => {
  return (
    <LayoutOne>
      <BlogHero />
      <BlogItems loadedBlogs={loadedBlogs} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/17.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/06.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default BlogPage02
