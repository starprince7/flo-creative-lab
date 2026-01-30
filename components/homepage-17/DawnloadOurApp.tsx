import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const DawnloadOurApp = () => {
  return (
    <section className="mb-14 mt-14 bg-secondary pt-14 max-sm:pb-5 md:mb-16 md:mt-16 md:pt-16 lg:mb-[88px] lg:mt-[88px] lg:pt-[88px] xl:mb-[100px] xl:mt-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="flex flex-col justify-center gap-y-6 md:flex-row md:justify-start">
          <RevealWrapper as="figure" className="flex-1">
            <img src="/images/download-app-thumbnail.png" alt="download-app-thumbnail" />
          </RevealWrapper>
          <div className="flex-1">
            <TextAppearAnimation>
              <h2 className="text-appear text-backgroundBody md:text-right">
                <span className="font-instrument italic">Download our</span>
                <br className="hidden md:block" />
                latest Apps
              </h2>
            </TextAppearAnimation>
            <TextAppearAnimation>
              <p className="text-appear mt-5 text-backgroundBody/70 md:mt-10 md:text-right">
                Download now and see what Rivor can build for you.
              </p>
            </TextAppearAnimation>
            <RevealWrapper
              as="ul"
              className="mt-5 flex flex-col gap-6 justify-self-end max-md:w-full md:mt-10 lg:flex-row">
              <li className="mx-auto block w-[90%] md:ml-auto md:mr-0 md:inline-block md:w-auto">
                <Link href="#" className="rv-button rv-button-primary block md:inline-block">
                  <div className="rv-button-top text-nowrap text-center">
                    <span> Google Play</span>
                  </div>
                  <div className="rv-button-bottom text-nowrap">
                    <span className="text-nowrap"> Google Play</span>
                  </div>
                </Link>
              </li>

              <li className="mx-auto block w-[90%] md:ml-0 md:mr-auto md:inline-block md:w-auto">
                <Link href="#" className="rv-button rv-button-white block md:inline-block">
                  <div className="rv-button-top text-center">
                    <span>App Store</span>
                  </div>
                  <div className="rv-button-bottom text-center">
                    <span>App Store</span>
                  </div>
                </Link>
              </li>
            </RevealWrapper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DawnloadOurApp
