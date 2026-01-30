import { Blog2Type } from '@/app/seo-blog/page'
import BlogContent from '@/components/blogpage/BlogContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const blogs: Blog2Type[] = getMarkDownData('data/service-agency/blog')

  return blogs.map((post) => ({
    slug: post.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const blog = getMarkDownContent('data/service-agency/blog/', slug)
  const postBlog = blog.data

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Blog Details"
        title={postBlog.title}
        description={postBlog.description}
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
