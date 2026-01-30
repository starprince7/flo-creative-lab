import image01 from '@/public/images/marquee-img/our-work-01.png'
import image02 from '@/public/images/marquee-img/our-work-02.png'
import image03 from '@/public/images/marquee-img/our-work-03.png'
import image04 from '@/public/images/marquee-img/our-work-04.png'
import image05 from '@/public/images/marquee-img/our-work-05.png'
import image06 from '@/public/images/marquee-img/our-work-06.png'
import image07 from '@/public/images/marquee-img/our-work-07.png'
import image08 from '@/public/images/marquee-img/our-work-08.png'
import image09 from '@/public/images/marquee-img/our-work-09.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const WORK_IMAGES = [
  { id: 1, src: image01, alt: 'Client Logo 1' },
  { id: 2, src: image02, alt: 'Client Logo 2' },
  { id: 3, src: image03, alt: 'Client Logo 3' },
  { id: 4, src: image04, alt: 'Client Logo 4' },
  { id: 5, src: image05, alt: 'Client Logo 5' },
  { id: 6, src: image06, alt: 'Client Logo 6' },
  { id: 7, src: image07, alt: 'Client Logo 7' },
  { id: 8, src: image08, alt: 'Client Logo 8' },
  { id: 9, src: image09, alt: 'Client Logo 9' },
]

const OurWork = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Our Work</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">We craft emotionally engaging stories.</h2>
          </TextAppearAnimation>
        </div>
      </div>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center gap-4 md:gap-[30px]">
            {WORK_IMAGES.slice(0, 5).map(({ src, alt, id }) => (
              <div key={id} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px]">
                <Image src={src} alt={alt} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-around gap-4 pt-[30px] md:gap-[30px]">
            {WORK_IMAGES.toReversed().map(({ src, alt, id }) => (
              <div key={id} className="h-72 max-w-60 first:ml-4 md:h-[470px] md:max-w-[370px] md:first:ml-[30px]">
                <Image src={src} alt={alt} />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
    </section>
  )
}

export default OurWork
