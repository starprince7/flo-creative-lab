import BlogContent from '@/components/blogpage/BlogContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import { MarkdownData } from '@/interface'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const blogs: MarkdownData[] = getMarkDownData('data/seo-agency/blog')

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const blog = getMarkDownContent('data/seo-agency/blog/', slug)
  const blogData = blog.data

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Blog Details"
        title={blogData.title}
        description={blogData.description}
        spacing="pt-32 md:pt-44 lg:pt-[200px] pb-10 md:pb-16 lg:pb-[88px] xl:pb-[100px] relative overflow-hidden"
      />
      <BlogContent blog={blog} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/18.png' },
            { id: '2', img: '/images/agent/19.png' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default BlogDetails
