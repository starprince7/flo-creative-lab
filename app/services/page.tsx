import ServicesV14 from '@/components/homepage-16/ServicesV14'
import Process from '@/components/services-page/Process'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Services ',
}

const ServicesPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Services"
        title="Services "
        italicTitle=""
        scale
        description="Explore our innovative cutting-edge no-code websites designed to captivate and engage your visitors effortlessly"
        spacing="max-md:pt-44 max-sm:pb-10 max-md:pb-16 md:py-44 lg:py-[200px] relative overflow-hidden"
      />
      <ServicesV14 />
      <Process />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/11.png' },
            { id: '2', img: '/images/agent/16.png' },
            { id: '3', img: '/images/agent/17.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>{' '}
    </LayoutOne>
  )
}

export default ServicesPage
