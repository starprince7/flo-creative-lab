import AboutV10 from '@/components/homepage-11/AboutV10'
import HeroV11 from '@/components/homepage-11/HeroV11'
import InstagramGallery from '@/components/homepage-11/InstagramGallery'
import PortfolioV8 from '@/components/homepage-11/PortfolioV8'
import ProcessV6 from '@/components/homepage-11/ProcessV6'
import ServicesV10 from '@/components/homepage-11/ServicesV10'
import TestimonialV7 from '@/components/homepage-11/TestimonialV7'
import WhyRivor from '@/components/homepage-11/WhyRivor'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutTwo from '@/components/shared/LayoutTwo'
import VideoV2 from '@/components/shared/VideoV2'

export const metadata = {
  title: 'Video Photography Agency - Rivor',
}

const homepage11 = () => {
  return (
    <LayoutTwo>
      <HeroV11 />
      <VideoV2 />
      <AboutV10 />
      <ServicesV10 />
      <PortfolioV8 />
      <TestimonialV7 />
      <WhyRivor />
      <ProcessV6 />
      <InstagramGallery />
      <CTA>
        Let's Talk!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/09.png' },
            { id: '2', img: '/images/agent/10.png' },
            { id: '3', img: '/images/agent/07.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutTwo>
  )
}

export default homepage11
