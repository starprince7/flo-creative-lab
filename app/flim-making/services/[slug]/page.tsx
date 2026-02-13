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
  const plainService = {
    content: service.content,
    data: service.data,
    excerpt: service.excerpt,
  }

  return (
    <LayoutOne>
      <ServicesHero title={postServices?.title} description={postServices?.description} scale />
      <ServiceContent service={plainService} />
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
    </LayoutOne>
  )
}

export default ServiceDetails
