import DigitalSolutionBlog from '@/components/homepage-02/DigitalSolutionBlog'
import HeroV2 from '@/components/homepage-02/HeroV2'
import PortfolioV2 from '@/components/homepage-02/PortfolioV2'
import ProcessV2 from '@/components/homepage-02/ProcessV2'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import ClientsV3 from '@/components/shared/ClientsV3'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'Digital Solutions Agency - Rivor',
}

const homepage2 = () => {
  return (
    <LayoutOne>
      <HeroV2 />
      <Video />
      <About marquee />
      <PortfolioV2 />
      <ClientsV3 />
      <ProcessV2 />
      <DigitalSolutionBlog />
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

export default homepage2
