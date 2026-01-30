import testimonialData from '@/data/testimonials/testimonialV2.json'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ClientsV5 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-3">
            <span className="rv-badge-text">Testimonial</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear">
              What startups say <i className="font-instrument">about us</i>
            </h2>
          </TextAppearAnimation>
        </div>
      </div>

      <div className="">
        <RevealWrapper className="reveal-me flex items-center gap-4 max-sm:mb-[1px] md:gap-[30px]">
          <Marquee pauseOnHover speed={110} autoFill>
            {testimonialData?.map((testimonial) => (
              <div
                key={testimonial.id}
                className="relative w-96 border p-[30px] first:ml-[30px] dark:border-dark max-md:min-h-[237px] md:min-h-[230px] md:w-[470px]">
                <p className="w-full text-[19px] leading-normal tracking-normal">{testimonial.feedback}</p>
                <div className="absolute bottom-[30px] mt-[29px] flex items-center gap-4">
                  <Image width={64} height={64} src={testimonial.image} alt="Review Author" />
                  <div className="">
                    <h3 className="text-xl font-medium leading-[1.2] tracking-wide">{testimonial.name}</h3>
                    <p className="mt-[3.5px] text-base font-light leading-5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ClientsV5
