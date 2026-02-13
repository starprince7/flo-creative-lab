import Team from '@/components/aboutpage/Team'
import About from '@/components/shared/About'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import Video from '@/components/shared/Video'

export const metadata = {
  title: 'About',
}

const AboutPage = () => {
  return (
    <LayoutOne>
      <Video />
      <About />
      <Team />
      <Marquee withBorder={true} />
    </LayoutOne>
  )
}

export default AboutPage
