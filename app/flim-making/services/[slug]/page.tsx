import WhyChooseUsV6 from '@/components/homepage-17/WhyChooseUsV6'
import ServiceContent from '@/components/services-page/ServiceContent'
import ServicesHero from '@/components/services-page/ServicesHero'
import VideoShowcaseGrid from '@/components/services-page/VideoShowcaseGrid'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FaqV2 from '@/components/shared/FaqV2'
import LayoutOne from '@/components/shared/LayoutOne'
import { ServicesType } from '@/components/shared/ServicesV8'
import { youtubeVideos, commercialVideos } from '@/data/videos'
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
      {slug === 'music-videos' && (
        <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="container">
            <VideoShowcaseGrid videos={youtubeVideos} />
          </div>
        </section>
      )}
      {slug === 'commercials' && (
        <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
          <div className="container">
            <VideoShowcaseGrid videos={commercialVideos} columns="two" />
          </div>
        </section>
      )}
      <WhyChooseUsV6 />
      <FaqV2 titleChange />
    </LayoutOne>
  )
}

export default ServiceDetails
