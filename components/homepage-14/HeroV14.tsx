import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const HeroV14 = () => {
  return (
    <section className="relative h-[80vh] w-screen overflow-hidden lg:h-screen">
      <video
        className="absolute left-0 top-0 z-[-1] h-full w-full object-cover"
        poster="https://res.cloudinary.com/starprince-dev/image/upload/v1769757346/flo-creative-lab/poster-qing-madi-vision_xktypi.jpg"
        preload="metadata"
        autoPlay
        loop
        muted>
        <source
          src="https://res.cloudinary.com/starprince-dev/video/upload/w_1920,h_1080,c_fill,q_50,f_auto,vc_auto/v1769755747/flo-creative-lab/vision-snippet-qingmadi-n-chole_o0tnef.mp4"
          type="video/mp4"
        />
        <track src="subtitles/lawyer-hero-video-en.vtt" kind="subtitles" srcLang="en" label="English" />
        <track
          src="subtitles/lawyer-hero-video-captions-en.vtt"
          kind="captions"
          srcLang="en"
          label="English Captions"
        />
        <track
          src="descriptions/lawyer-hero-video-desc.vtt"
          kind="descriptions"
          srcLang="en"
          label="English Descriptions"
        />
        Your browser does not support the video tag.
      </video>
      <RevealWrapper className="container absolute left-1/3 top-2/3 -translate-x-1/3 -translate-y-2/3 lg:top-1/2 lg:-translate-y-1/2">
        <h1 className="mb-3 text-backgroundBody max-md:leading-none">
          Crafting <br className="hidden md:block" />
          unforgettable
          <br className="hidden md:block" />
          <i className="font-instrument text-inherit">cinematic </i>
          <i className="font-instrument text-inherit">experiences</i>
        </h1>
        <p className="max-w-3xl text-backgroundBody/70">
          From award-winning films to high-end commercials, Rivor blends artistry and technology to bring your vision to
          life.
        </p>
        {/* Primary CTA Button */}
        <ul className="mt-7 flex list-none justify-start lg:mt-14">
          <li className="block w-full text-center md:inline-block md:w-auto">
            <Link href="/design-agency" className="rv-button rv-button-primary block md:inline-block">
              <div className="rv-button-top">
                <span>Explore Our Work</span>
              </div>
              <div className="rv-button-bottom">
                <span className="text-nowrap">Explore Our Work</span>
              </div>
            </Link>
          </li>
        </ul>
      </RevealWrapper>
    </section>
  )
}

export default HeroV14
