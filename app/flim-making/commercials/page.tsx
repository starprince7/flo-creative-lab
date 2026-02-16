'use client'
import LayoutTwo from '@/components/shared/LayoutTwo'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import RevealWrapper from '@/components/animation/RevealWrapper'
import TextAppearAnimation from '@/components/animation/TextAppearAnimation'

interface VideoType {
  id: string
  title: string
  url: string
}

const commercialVideos: VideoType[] = [
  {
    id: 'rCEtEpiw2UQ',
    title: '',
    url: 'https://www.youtube.com/embed/rCEtEpiw2UQ',
  },
  {
    id: 'P9lsj69BL5Q',
    title: '',
    url: 'https://www.youtube.com/embed/P9lsj69BL5Q',
  },
  {
    id: 'Nj4bR3sbe_w',
    title: '',
    url: 'https://www.youtube.com/embed/Nj4bR3sbe_w',
  },
  {
    id: 'vFoqwUsexk0',
    title: '',
    url: 'https://www.youtube.com/embed/vFoqwUsexk0',
  },
]



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
              <p className="text-appear">
                Brand stories that captivate and drive results
              </p>
            </TextAppearAnimation>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {commercialVideos.map((video) => (
              <RevealWrapper key={video.id} className="group border px-3.5 pb-7 pt-3.5 dark:border-dark md:px-5 md:pt-5">
                <div className="aspect-video w-full overflow-hidden">
                  <iframe
                    src={video.url}
                    title={video.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="mt-5">
                  <h3 className="text-xl font-normal leading-tight text-secondary dark:text-white lg:text-2xl">
                    {video.title}
                  </h3>
                </div>
              </RevealWrapper>
            ))}
          </div>
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
