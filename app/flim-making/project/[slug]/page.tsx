import { ProjectType } from '@/components/projectpage/OurProject'
import ProjectContent from '@/components/projectpage/ProjectContent'
import ProjectDetailsHero from '@/components/projectpage/ProjectDetailsHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const projects: ProjectType[] = getMarkDownData('data/flim-making/project')
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

const ProjectDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const project = getMarkDownContent('data/flim-making/project/', slug)
  const postprojects = project.data

  return (
    <LayoutTwo>
      <ProjectDetailsHero
        badgeTitle={postprojects?.category}
        title={postprojects?.title}
        description={postprojects?.description}
        scale
      />
      <ProjectContent project={project} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/cta-slides/phone-back.jpg' },
            { id: '2', img: '/images/cta-slides/on-call.jpg' },
            { id: '3', img: '/images/cta-slides/iphone-6.jpg' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutTwo>
  )
}

export default ProjectDetails
