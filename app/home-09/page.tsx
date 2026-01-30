import AboutV7 from '@/components/homepage-09/AboutV7'
import HeroV9 from '@/components/homepage-09/HeroV9'
import MarqueCta from '@/components/homepage-09/MarqueCta'
import OurAchievement from '@/components/homepage-09/OurAchievement'
import PersonalProjects from '@/components/homepage-09/PersonalProjects'
import LayoutOne from '@/components/shared/LayoutOne'
import ServicesV8 from '@/components/shared/ServicesV8'

export const metadata = {
  title: 'Personal Branding - Rivor',
}
const page = () => {
  return (
    <LayoutOne>
      <HeroV9 />
      <AboutV7 />
      <PersonalProjects />
      <OurAchievement />
      <ServicesV8 />
      <MarqueCta ShowCtaBtn />
    </LayoutOne>
  )
}

export default page
