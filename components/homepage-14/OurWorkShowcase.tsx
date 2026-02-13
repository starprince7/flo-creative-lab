import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

interface VideoType {
  id: string
  title: string
  url: string
}

const youtubeVideos: VideoType[] = [
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
    id: 'ipSBSVZH3p4',
    title: 'DJ OBI, Timaya - PATEK',
    url: 'https://www.youtube.com/embed/ipSBSVZH3p4?si=uPr4BdEodRTJsJgd',
  },
  {
    id: 'n4n--ZFdVWQ',
    title: 'Alpha P, Olamide & Thisizlondon - W',
    url: 'https://www.youtube.com/embed/n4n--ZFdVWQ?si=S0r7EWvV55L5qAni',
  },
]

const commercialVideos: VideoType[] = [
  {
    id: 'rCEtEpiw2UQ',
    title: 'Commercial 1',
    url: 'https://www.youtube.com/embed/rCEtEpiw2UQ',
  },
  {
    id: 'P9lsj69BL5Q',
    title: 'Commercial 2',
    url: 'https://www.youtube.com/embed/P9lsj69BL5Q',
  },
  {
    id: 'Nj4bR3sbe_w',
    title: 'Commercial 3',
    url: 'https://www.youtube.com/embed/Nj4bR3sbe_w',
  },
  {
    id: 'vFoqwUsexk0',
    title: 'Commercial 4',
    url: 'https://www.youtube.com/embed/vFoqwUsexk0',
  },
]

const OurWorkShowcase = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
          <RevealWrapper className="rv-badge mb-3">
            <span className="rv-badge-text">Our Work</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">Music Videos</h2>
          </TextAppearAnimation>
        </div>

        {/* Projects Grid */}

        {/* Music Videos Grid */}
        <div className="mb-[60px] grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {youtubeVideos.map((video) => (
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

        {/* Music Videos CTA */}
        <RevealWrapper as="ul" className="mb-[88px] flex justify-center">
          <li className="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
            <Link
              href="/flim-making/music-videos"
              className="rv-button rv-button-secondary block text-center md:inline-block">
              <div className="rv-button-top">
                <span>See Projects</span>
              </div>
              <div className="rv-button-bottom">
                <span>See Projects</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>

        {/* Commercials Section */}
        <div className="mb-8 text-center md:mb-16">
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">
              Commercials <br />
              <i className="font-instrument">that captivate</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">Brand stories that drive results</p>
          </TextAppearAnimation>
        </div>

        {/* Commercials Videos Grid */}
        <div className="mb-[60px] grid grid-cols-1 gap-[30px] md:grid-cols-2">
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

        {/* Commercials CTA */}
        <RevealWrapper as="ul" className="flex justify-center">
          <li className="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
            <Link
              href="/flim-making/commercials"
              className="rv-button rv-button-secondary block text-center md:inline-block">
              <div className="rv-button-top">
                <span>See Projects</span>
              </div>
              <div className="rv-button-bottom">
                <span>See Projects</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurWorkShowcase
