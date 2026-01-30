import testimonialData from '@/data/testimonials/testimonialV1.json'
import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Testimonial = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-10 md:mb-20">
          <TextAppearAnimation>
            <h2 className="text-appear text-center">
              Client <i className="font-instrument italic">testimonials</i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear mx-auto mt-1.5 max-w-xl text-center md:mt-6 lg:max-w-3xl">
              "I've been using this service for over a year, and it has significantly improved my workflow. Highly
              recommended for professionals looking for efficiency and reliability
            </p>
          </TextAppearAnimation>
        </div>
        <div className="columns-[300px] gap-6 [&>*:not(:last-child)]:mb-6">
          {testimonialData.map(({ id, name, role, image, feedback }) => (
            <RevealWrapper
              as="div"
              key={id}
              className="reveal-me flex flex-col gap-5 border px-[30px] py-[30px] dark:border-dark">
              <div className="flex items-center gap-[15px]">
                <figure>
                  <Image src={image} alt={`Review by ${name}`} width={50} height={50} />
                </figure>
                <div>
                  <h3 className="text-2xl font-medium leading-[28.8px] tracking-wide">{name}</h3>
                  <p className="mt-[3.5px] text-base font-light leading-5">{role}</p>
                </div>
              </div>
              <p className="text-base italic md:text-[17px] md:leading-6 md:tracking-[0.9px]">{feedback}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonial
