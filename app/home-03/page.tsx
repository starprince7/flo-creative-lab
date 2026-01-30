import AboutV2 from '@/components/homepage-03/AboutV2'
import BlogPost from '@/components/homepage-03/BlogPost'
import Clients from '@/components/homepage-03/Clients'
import HeroV3 from '@/components/homepage-03/HeroV3'
import PortfolioV3 from '@/components/homepage-03/PortfolioV3'
import ServicesV3 from '@/components/homepage-03/ServicesV3'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'

export const metadata = {
  title: 'Portfolio Agency - Rivor',
}

const homepage3 = () => {
  return (
    <LayoutOne>
      <HeroV3 />
      <AboutV2 />
      <PortfolioV3 />
      <ServicesV3 />
      <BlogPost />
      <Clients />
      <FaqV2 />
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

export default homepage3
