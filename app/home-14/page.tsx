import AboutV13 from '@/components/homepage-14/AboutV13'
import AwardWinningWork from '@/components/homepage-14/AwardWinningWork'
import HeroV14 from '@/components/homepage-14/HeroV14'
import OurWorkShowcase from '@/components/homepage-14/OurWorkShowcase'
import ServicesV13 from '@/components/homepage-14/ServicesV13'
import TestimonialV9 from '@/components/homepage-14/TestimonialV9'
import WhyChooseUsV3 from '@/components/homepage-14/WhyChooseUsV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'

export const metadata = {
  title: 'Fcl',
}

const homepage14 = () => {
  return (
    <LayoutTwo>
      <HeroV14 />
      <AboutV13 />
      <OurWorkShowcase />
      {/* <AwardWinningWork /> */}
      <TestimonialV9 />
    </LayoutTwo>
  )
}

export default homepage14
