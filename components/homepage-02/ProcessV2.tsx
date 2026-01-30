import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const services = [
  {
    id: 1,
    title: 'Discovery',
    description:
      'We start every new client interaction with an in-depth discovery call where we get to know each other, discuss your current and future objectives, and recommend the best course of action.',
    imgSrc: '/path-to-discovery-image.png',
  },
  {
    id: 2,
    title: 'Strategy',
    description:
      "Every end-to-end project of ours begins with a bespoke pre-build strategy. From brand ID consultation to in-depth code reviews we're here to set the stage for success.",
    imgSrc: '/path-to-strategy-image.png',
  },
  {
    id: 3,
    title: 'Build',
    description:
      "Whether we've just finished designing your new site or you're handing off finished designs for us to develop in Webflow, we're here to apply our trusted development process to your project.",
    imgSrc: '/path-to-build-image.png',
  },
  {
    id: 4,
    title: 'Design',
    description:
      'What kind of design are you interested in? It could be anything from graphic design to interior design or even designing a new product. Let me know what you have in mind!',
    imgSrc: '/path-to-design-image.png',
  },
]

const ProcessV2 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.2] max-lg:scale-y-[2.8]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-24 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear">
                <span className="font-instrument font-medium italic"> Services — </span>
                <br className="hidden md:block" />
                We build
              </h2>
            </TextAppearAnimation>
          </div>
          <div className="flex-1 max-md:w-full md:self-end">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We partner with athletes, storytellers, and brands whose vision and voices shape culture and transform
                the world.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>See All Services</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>See All Services</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <RevealWrapper className="grid grid-cols-12 items-center justify-center gap-[1px]">
          {services.map((service) => (
            <div
              key={service.id}
              className="group col-span-full min-h-[400px] bg-backgroundBody px-7 pb-4 pt-7 backdrop-blur transition-all duration-300 ease-in-out hover:bg-primary dark:bg-dark dark:hover:bg-primary max-sm:border-x max-sm:border-t max-sm:border-dark/5 sm:col-span-6 md:px-10 md:pb-16 md:pt-10 lg:col-span-4 xl:col-span-3">
              <h4 className="pb-3 leading-[1.2] transition-colors duration-300 dark:group-hover:text-secondary md:mb-4 md:text-[37xp]">
                {service.title}
              </h4>
              <p className="text-[17px] italic leading-[25.5px] text-[#000000b3] transition-colors duration-300 dark:text-dark-100 dark:group-hover:text-dark-200">
                {service.description}
              </p>
            </div>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV2
