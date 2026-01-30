import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const projects: ProjectType[] = getMarkDownData('data/seo-agency/projects')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const SeoProjectDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const singleProject = getMarkDownContent('data/seo-agency/projects/', slug)
  const singleProjectData = singleProject.data

  return (
    <LayoutOne>
      <ProjectDetailsHero
        badgeTitle={singleProjectData.category}
        title={singleProjectData?.title}
        description={singleProjectData?.description}
        scale
      />
      <ProjectContent project={singleProject} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/09.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/10.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default SeoProjectDetails
