import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const projects: ProjectType[] = getMarkDownData('data/insurance-agency/blog')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const BlogDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const project = getMarkDownContent('data/insurance-agency/blog/', slug)
  const blog = project.data

  return (
    <LayoutTwo>
      <ProjectDetailsHero badgeTitle={blog?.category} title={blog?.title} description={blog?.description} scale />
      <ProjectContent project={project} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/09.png' },
            { id: '2', img: '/images/agent/10.png' },
            { id: '3', img: '/images/agent/11.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutTwo>
  )
}

export default BlogDetails
