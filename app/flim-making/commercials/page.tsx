'use client'
import LayoutTwo from '@/components/shared/LayoutTwo'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'
import VideoShowcaseGrid from '@/components/services-page/VideoShowcaseGrid'
import { commercialVideos } from '@/data/videos'

const CommercialsPage = () => {
  return (
    <LayoutTwo>
      <section className="pb-14 pt-28 sm:pt-32 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
        <div className="container">
          <div className="mb-8 text-center md:mb-16">
            <TextAppearAnimation>
              <h1 className="text-appear mb-3">
                Commercials
                <i className="font-instrument"> Portfolio</i>
              </h1>
            </TextAppearAnimation>
            <TextAppearAnimation>
              <p className="text-appear">Brand stories that captivate and drive results</p>
            </TextAppearAnimation>
          </div>

          <VideoShowcaseGrid videos={commercialVideos} columns="two" />
        </div>
      </section>

      <CTA headingClass="xl:text-[88px]" buttonText="Start Your Project">
        Let's Create
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
    </LayoutTwo>
  )
}

export default CommercialsPage
