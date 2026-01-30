import CounterAnimation from '@/utils/CounterAnimation'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import SwiperSliderV2 from '../shared/SwiperSliderV2'

const ClientSuccessStories = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-9 flex flex-col items-start justify-center gap-x-10 gap-y-4 md:flex-row lg:mb-16 lg:justify-between">
          <div className="flex-1 md:self-start">
            <TextAppearAnimation>
              <h2 className="text-appear lg:leading-[1.1]">
                <i className="font-instrument">Proven success </i>
                <br className="hidden lg:block" />
                satisfied clients
              </h2>
            </TextAppearAnimation>
          </div>

          <div className="w-full self-start md:max-w-72 md:self-end lg:max-w-[470px]">
            <TextAppearAnimation>
              <p className="text-appear max-w-lg md:place-self-end md:text-right">
                We create more than apps—we create digital experiences.
              </p>
            </TextAppearAnimation>
            <RevealWrapper className="mt-5 justify-self-end max-md:w-full md:mt-10">
              <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
                <Link href="/services" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top">
                    <span>See Our Work</span>
                  </div>
                  <div className="rv-button-bottom">
                    <span>See Our Work</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>

        <div className="mb-14 grid grid-cols-12 justify-items-center gap-8 lg:mb-16">
          <RevealWrapper
            className="col-span-12 flex w-full flex-col items-center justify-center border-y py-5 dark:border-dark sm:min-w-[355px] md:col-span-6 md:flex-row md:items-start md:justify-between lg:col-span-4 lg:min-w-[300px] xl:min-w-[355px]"
            id="counter">
            <h2 className="font-instrument md:min-w-[170px]">
              <CounterAnimation number={10} /> +
            </h2>
            <p className="text-lg">Successful app launches</p>
          </RevealWrapper>
          <RevealWrapper
            className="col-span-12 flex w-full flex-col items-center justify-center border-y py-5 dark:border-dark sm:min-w-[355px] md:col-span-6 md:flex-row md:items-start md:justify-between lg:col-span-4 lg:min-w-[300px] xl:min-w-[355px]"
            id="counter">
            <h2 className="font-instrument md:min-w-[170px]">
              <CounterAnimation number={5} /> +
            </h2>
            <p className="text-lg">Years of experience</p>
          </RevealWrapper>
          <RevealWrapper
            className="col-span-12 flex w-full flex-col items-center justify-center border-y py-5 dark:border-dark sm:min-w-[355px] md:col-span-6 md:flex-row md:items-start md:justify-between lg:col-span-4 lg:min-w-[300px] xl:min-w-[355px]"
            id="counter">
            <h2 className="font-instrument md:min-w-[170px]">
              <CounterAnimation number={5} /> +
            </h2>
            <p className="text-lg">Star rating from global clients</p>
          </RevealWrapper>
        </div>
        <SwiperSliderV2 />
      </div>
    </section>
  )
}

export default ClientSuccessStories
