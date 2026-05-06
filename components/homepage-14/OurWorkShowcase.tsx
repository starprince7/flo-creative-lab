import { youtubeVideos, commercialVideos } from '@/data/videos'
import getMarkDownData from '@/utils/GetMarkDownData'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const OurWorkShowcase = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-16">
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
        <div className="mb-8 pt-28 text-center md:mb-16">
          <TextAppearAnimation>
            <h2 className="text-appear mb-3">Commercials</h2>
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
