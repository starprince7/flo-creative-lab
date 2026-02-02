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
    id: 'QMD9oUuRs-E',
    title: 'Flavour - Her Excellency (Nwunye Odogwu)',
    url: 'https://www.youtube.com/embed/QMD9oUuRs-E',
  },
  {
    id: 'xUN6moJ8cSk',
    title: 'Ms Banks ft. Efosa - SILHOUETTE',
    url: 'https://www.youtube.com/embed/xUN6moJ8cSk',
  },
  {
    id: 'vQujzvga9HU',
    title: "D'Banj - Since '04",
    url: 'https://www.youtube.com/embed/vQujzvga9HU',
  },
  {
    id: 'ae_GdPXYvzw',
    title: 'Qing Madi, Chlöe - Vision (Remix)',
    url: 'https://www.youtube.com/embed/ae_GdPXYvzw',
  },
  {
    id: 'AzCfHLpx16Q',
    title: 'Iyanya & Fido - Sorry',
    url: 'https://www.youtube.com/embed/AzCfHLpx16Q',
  },
  {
    // id: '1oQvc7Pc0jg',
    // title: 'Barry Jhay - See Me See God',
    // url: 'https://www.youtube.com/embed/1oQvc7Pc0jg',
    id: 'TIzz8FuSjN4',
    title: 'Barry Jhay - See Me See God (Visualizer)',
    url: 'https://www.youtube.com/embed/TIzz8FuSjN4',
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
            <h2 className="text-appear mb-3">
              Music, <br />
              Videos
              <i className="font-instrument"> that inspire</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">A legacy of Award-Winning productions</p>
          </TextAppearAnimation>
        </div>

        {/* Projects Grid */}

        {/* Videos Grid */}
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

        <RevealWrapper as="ul" className="flex justify-center">
          <li className="mx-auto block max-md:w-full md:ml-auto md:inline-block md:w-auto">
            <Link href="/about" className="rv-button rv-button-secondary block text-center md:inline-block">
              <div className="rv-button-top">
                <span>See Project</span>
              </div>
              <div className="rv-button-bottom">
                <span>See Project</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default OurWorkShowcase
