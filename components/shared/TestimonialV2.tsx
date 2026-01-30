import reviewsData from '@/data/testimonials/testimonialV3.json'
import testimonialLogoDark from '@/public/images/icons/testimonial-dark-logo.png'
import testimonialLogo from '@/public/images/icons/testimonial-logo.png'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const TestimonialV2 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">User Review</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">What Our Clients Say</h2>
          </TextAppearAnimation>
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 z-40 h-full w-[25%] bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark-gradient"></div>
        <div className="absolute right-0 top-0 z-40 h-full w-[25%] bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark-gradient"></div>
        <RevealWrapper>
          <Marquee speed={60}>
            <div className="flex justify-center gap-6">
              {reviewsData.map((review) => (
                <div
                  className="max-w-[388px] border p-5 first:ml-6 dark:border-backgroundBody/10 md:max-w-[408px]"
                  key={review.id}>
                  <div className="flex items-center space-x-4 pb-4">
                    <Image
                      src={review.avatar}
                      alt="Wade Warren"
                      width={70}
                      height={70}
                      quality={100}
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-[22px] leading-[28.8px] tracking-wide">{review.name}</h3>
                      <p className="mt-[2px] text-[15px] font-light leading-6">{review.position}</p>
                    </div>
                  </div>
                  <span className="block w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="2"
                      viewBox="0 0 362 2"
                      fill="none"
                      className="w-full">
                      <path
                        className="stroke-secondary dark:stroke-backgroundBody"
                        d="M0 0.785156H362"
                        strokeOpacity="0.1"
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </span>
                  <blockquote className="py-4 text-base text-colorText dark:text-backgroundBody/70 md:text-xl md:leading-7 md:tracking-[0.4px]">
                    {review.quote}
                  </blockquote>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 362 2" fill="none">
                      <path
                        className="stroke-secondary dark:stroke-backgroundBody"
                        d="M0 0.785156H362"
                        strokeOpacity="0.1"
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-1">
                      <Image src={testimonialLogo} alt="Logo" className="inline dark:hidden" />
                      <Image src={testimonialLogoDark} alt="Logo" className="hidden dark:inline" />
                    </div>
                    <span className="text-sm font-light leading-5 text-colorText">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </RevealWrapper>
      </div>

      <RevealWrapper>
        <div className="relative mt-[30px]">
          <div className="absolute left-0 top-0 z-40 h-full w-[25%] bg-gradient-to-r from-backgroundBody to-transparent dark:from-dark-gradient"></div>
          <div className="absolute right-0 top-0 z-40 h-full w-[25%] bg-gradient-to-l from-backgroundBody to-transparent dark:from-dark-gradient"></div>
          <Marquee speed={60} direction="right">
            <div className="flex justify-center gap-6">
              {reviewsData.toReversed()?.map((review) => (
                <div
                  className="max-w-[388px] border p-5 first:ml-6 dark:border-backgroundBody/10 md:max-w-[408px]"
                  key={review.id}>
                  <div className="flex items-center space-x-4 pb-4">
                    <Image
                      src={review.avatar}
                      alt="Wade Warren"
                      width={70}
                      height={70}
                      quality={100}
                      className="h-16 w-16 rounded-full"
                    />
                    <div>
                      <h3 className="text-[22px] leading-[28.8px] tracking-wide">{review.name}</h3>
                      <p className="mt-[2px] text-[15px] font-light leading-6">{review.position}</p>
                    </div>
                  </div>
                  <span className="block w-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="2"
                      viewBox="0 0 362 2"
                      fill="none"
                      className="w-full">
                      <path
                        className="stroke-secondary dark:stroke-backgroundBody"
                        d="M0 0.785156H362"
                        strokeOpacity="0.1"
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </span>
                  <blockquote className="py-4 text-base text-colorText dark:text-backgroundBody/70 md:text-xl md:leading-7 md:tracking-[0.4px]">
                    {review.quote}
                  </blockquote>
                  <div>
                    <svg xmlns="http://www.w3.org/2000/svg" height="2" viewBox="0 0 362 2" fill="none">
                      <path
                        className="stroke-secondary dark:stroke-backgroundBody"
                        d="M0 0.785156H362"
                        strokeOpacity="0.1"
                        strokeDasharray="6 6"
                      />
                    </svg>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div className="flex items-center space-x-1">
                      <Image src={testimonialLogo} alt="Logo" className="inline dark:hidden" />
                      <Image src={testimonialLogoDark} alt="Logo" className="hidden dark:inline" />
                    </div>
                    <span className="text-sm font-light leading-5 text-colorText">{review.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </Marquee>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default TestimonialV2
