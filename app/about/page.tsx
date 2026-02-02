import AwardsV2 from '@/components/aboutpage/AwardsV2'
import Team from '@/components/aboutpage/Team'
import About from '@/components/shared/About'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import PageHero from '@/components/shared/PageHero'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <PageHero
        badgeTitle="About"
        title="Creating Cinematic Experiences "
        italicTitle="That Last"
        description="FloCreativeLab was built on a simple belief: great storytelling demands exceptional craft."
      />
      <Video />
      <About />
      <Team />
      <Marquee withBorder={true} />
      {/* <AwardsV2 /> */}
      <CTA>
        Let's chat
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/cta-slides/phone-back.jpg' },
            { id: '2', img: '/images/cta-slides/on-call.jpg' },
            { id: '3', img: '/images/cta-slides/iphone-6.jpg' },
          ]}
        />
        about your
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">project!</i>
      </CTA>{' '}
    </LayoutOne>
  )
}

export default AboutPage
