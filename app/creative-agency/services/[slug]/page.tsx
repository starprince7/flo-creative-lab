import ServiceContent from '@/components/services-page/ServiceContent'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import { ServicesType } from '@/components/shared/ServicesV8'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const services: ServicesType[] = getMarkDownData('data/creative-agency/services')
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const creativeAgencyServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const service = getMarkDownContent('data/creative-agency/services/', slug)
  const singleService = service.data

  return (
    <LayoutOne>
      <PageHero
        badgeTitle="Service Details"
        title={singleService?.title}
        description={singleService?.description}
        scale
      />
      <ServiceContent service={service} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/01.jpg' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/08.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default creativeAgencyServiceDetails
