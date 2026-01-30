import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const projects: ProjectType[] = getMarkDownData('data/photography-studio/work')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const WorkDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const project = getMarkDownContent('data/photography-studio/work/', slug)
  const singleWork = project.data

  return (
    <LayoutOne>
      <ProjectDetailsHero
        badgeTitle={singleWork?.tags}
        title={singleWork?.title}
        description={singleWork?.description}
        scale
      />
      <ProjectContent project={project} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/03.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default WorkDetails
