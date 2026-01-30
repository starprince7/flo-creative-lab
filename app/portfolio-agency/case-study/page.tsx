import ProjectServicesV3 from '@/components/projectpage-03/ProjectServicesV3'
import CtaV2 from '@/components/shared/CtaV2'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Case Study',
}

const CaseStudy = () => {
  return (
    <LayoutOne>
      <ProjectServicesV3 />
      <CtaV2 />
    </LayoutOne>
  )
}

export default CaseStudy
