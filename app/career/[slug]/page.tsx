import CareerDetailsArticle from '@/components/careerpage/CareerDetailsArticle'
import CareerDetailsHero from '@/components/careerpage/CareerDetailsHero'
import { CareerJobType } from '@/components/careerpage/Jobs'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import getMarkDownContent from '@/utils/GetMarkDownContent'
import getMarkDownData from '@/utils/GetMarkDownData'

export async function generateStaticParams() {
  const careers: CareerJobType[] = getMarkDownData('data/career')
  return careers.map((career) => ({
    slug: career.slug,
  }))
}

const CareerDetailsPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const slug = (await params).slug
  const career = getMarkDownContent('data/career/', slug)
  const postCareer = career.data
  const careerContent = career.content
  return (
    <LayoutOne>
      <CareerDetailsHero career={postCareer} />
      <CareerDetailsArticle careerContent={careerContent} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/13.png' },
            { id: '2', img: '/images/agent/14.png' },
            { id: '3', img: '/images/agent/15.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default CareerDetailsPage
