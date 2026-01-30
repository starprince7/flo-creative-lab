import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import ServiceContent from '@/components/services-page/ServiceContent'
import ServicesHero from '@/components/services-page/ServicesHero'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import { ServicesType } from '@/components/shared/ServicesV8'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const services: ServicesType[] = getMarkDownData('data/flim-making/services')
  return services.map((service) => ({
    slug: service.slug,
  }))
}

const ServiceDetails = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const service = getMarkDownContent('data/flim-making/services/', slug)
  const postServices = service.data

  return (
    <LayoutOne>
      <ServicesHero title={postServices?.title} description={postServices?.description} scale />
      <ServiceContent service={service} />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
      <CTA headingClass="xl:text-[88px]" buttonText="Start Your Film Project">
        Let’s Create
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/cta-slides/phone-back.jpg' },
            { id: '2', img: '/images/cta-slides/on-call.jpg' },
            { id: '3', img: '/images/cta-slides/iphone-6.jpg' },
          ]}
        />
        Something
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Extraordinary</span>
      </CTA>
    </LayoutOne>
  )
}

export default ServiceDetails
