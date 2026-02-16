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

const musicVideos: VideoType[] = [
  {
    id: 'ae_GdPXYvzw',
    title: 'Qing Madi, Chlöe - Vision (Remix)',
    url: 'https://www.youtube.com/embed/ae_GdPXYvzw',
  },
  {
    id: 'xUN6moJ8cSk',
    title: 'Ms Banks ft. Efosa - SILHOUETTE',
    url: 'https://www.youtube.com/embed/xUN6moJ8cSk',
  },
  {
    id: 'yC0b02icKaI',
    title: 'Guchi - Balance',
    url: 'https://www.youtube.com/embed/yC0b02icKaI?si=djCFyp8VdY5sYMjZ',
  },
  {
    id: 'bIgSdyo7t_E',
    title: 'Oxlade - Ololufe ft Sarkodie',
    url: 'https://www.youtube.com/embed/bIgSdyo7t_E?si=eVaGJt_upct-lRPJ',
  },
  {
    id: 'z9T46HqsXXE',
    title: 'Reekado Banks - My Woman ft Phyno',
    url: 'https://www.youtube.com/embed/z9T46HqsXXE?si=2j6fHRZlOSzjAWLf',
  },
  {
    id: 'AzCfHLpx16Q',
    title: 'Iyanya & Fido - Sorry',
    url: 'https://www.youtube.com/embed/AzCfHLpx16Q',
  },
  {
    id: 'QMD9oUuRs-E',
    title: 'Flavour - Her Excellency (Nwunye Odogwu)',
    url: 'https://www.youtube.com/embed/QMD9oUuRs-E',
  },
  {
    id: 'vQujzvga9HU',
    title: "D'Banj - Since '04",
    url: 'https://www.youtube.com/embed/vQujzvga9HU',
  },
  {
    id: 'ozxdtxb5tZE',
    title: 'Joeboy - Taxi Driver',
    url: 'https://www.youtube.com/embed/ozxdtxb5tZE?si=P2AGgk-_C7F9W5mA',
  },
  {
    id: 'IkoIKcuq3ic',
    title: 'Joeboy ft. Qing Madi - Adenuga',
    url: 'https://www.youtube.com/embed/IkoIKcuq3ic?si=GeclfzsOB5NkRrcn',
  },
  {
    id: '5ApZCJF2t3I',
    title: 'Victony - Risk',
    url: 'https://www.youtube.com/embed/5ApZCJF2t3I?si=dxP5Jo3107j0Tk9B',
  },
  {
    id: 'xdsgKgqnttU',
    title: 'Phyno & Fave - Deep',
    url: 'https://www.youtube.com/embed/xdsgKgqnttU?si=VyP4SjnWRVE3meKt',
  },
  {
    id: 'n4n--ZFdVWQ',
    title: 'Alpha P, Olamide & Thisizlondon - W',
    url: 'https://www.youtube.com/embed/n4n--ZFdVWQ?si=S0r7EWvV55L5qAni',
  },
]

const MusicVideosPage = () => {
  return (
    <LayoutTwo>
      <section className="pb-14 pt-28 sm:pt-32 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
        <div className="container">
          <div className="mb-8 text-center md:mb-16">
            <TextAppearAnimation>
              <h1 className="text-appear mb-3">
                Music Videos
                <i className="font-instrument"> Portfolio</i>
              </h1>
            </TextAppearAnimation>
            <TextAppearAnimation>
              <p className="text-appear">A showcase of our award-winning music video productions</p>
            </TextAppearAnimation>
          </div>

          <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
            {musicVideos.map((video) => (
              <RevealWrapper
                key={video.id}
                className="group border px-3.5 pb-7 pt-3.5 dark:border-dark md:px-5 md:pt-5">
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

export default MusicVideosPage
