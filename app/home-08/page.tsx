import AboutV6 from '@/components/homepage-08/AboutV6'
import BlogPostsV5 from '@/components/homepage-08/BlogPostsV5'
import HeroV8 from '@/components/homepage-08/HeroV8'
import ServicesV7 from '@/components/homepage-08/ServicesV7'
import Solution from '@/components/homepage-08/Solution'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import FAQ from '@/components/shared/FAQ'
import LayoutOne from '@/components/shared/LayoutOne'
import Marquee from '@/components/shared/Marquee'
import TestimonialV2 from '@/components/shared/TestimonialV2'

export const metadata = {
  title: 'Business Solutions - Rivor',
}

const page = () => {
  return (
    <LayoutOne>
      <HeroV8 />
      <AboutV6 />
      <Solution />
      <ServicesV7 />
      <TestimonialV2 />
      <Marquee withBorder={false} />
      <BlogPostsV5 />
      <FAQ />
      <CTA buttonText="GET FREE PROPOSAL">
        Let’s Build
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/08.png' },
            { id: '2', img: '/images/agent/02.jpg' },
            { id: '3', img: '/images/agent/05.png' },
          ]}
        />
        Your
        <span className="block font-instrument italic max-md:inline-block sm:mt-10">Business Success Together</span>
      </CTA>
    </LayoutOne>
  )
}

export default page
