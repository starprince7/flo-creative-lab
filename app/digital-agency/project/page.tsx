import PortfolioItems from '@/components/projectpage-02/PortfolioItems'
import ProjectHeroV2 from '@/components/projectpage-02/ProjectHeroV2'
import GradientCta from '@/components/shared/GradientCta'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Digital Agency Projects - Rivor',
}

const DigitalAgencyProject = () => {
  return (
    <LayoutOne>
      <ProjectHeroV2 />
      <PortfolioItems />
      <GradientCta />
    </LayoutOne>
  )
}

export default DigitalAgencyProject
