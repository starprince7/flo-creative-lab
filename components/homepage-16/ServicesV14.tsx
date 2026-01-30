import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import RevealWrapperV2 from '../animation/RevealWrapperV2'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'

interface WorkType {
  slug: string
  content: string
  [key: string]: any
}

const services: WorkType[] = getMarkDownData('data/servicesV3')

const ServicesV14 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="mb-8 text-center md:mb-16">
        <RevealWrapperV2 className="rv-badge reveal-me mb-3">
          <span className="rv-badge-text">Services</span>
        </RevealWrapperV2>
        <TextAppearAnimation02>
          <h2 className="text-appear mb-3">
            Marketing solutions designed for <br />
            <i className="font-instrument"> maximum impact</i>
          </h2>
        </TextAppearAnimation02>
        <TextAppearAnimation>
          <p className="text-appear mx-auto lg:max-w-[770px]">
            Our marketing solutions boost engagement and ROI with targeted campaigns, improving brand visibility through
            SEO and social media.
          </p>
        </TextAppearAnimation>
      </div>
      <div className="mx-auto grid max-w-[1600px] grid-cols-1 gap-[30px] px-4 md:grid-cols-2 md:px-[30px] 2xl:grid-cols-3">
        {services.map((service) => (
          <RevealWrapper
            key={service.slug}
            className="reveal-me group border px-6 py-9 dark:border-dark lg:px-[30px] lg:py-[50px]">
            <Link href={`/marketing/services/${service.slug}`}>
              <figure>
                <Image
                  src={service.logo}
                  alt="Light Logo"
                  className="inline-block dark:hidden"
                  width={60}
                  height={60}
                />
                <Image
                  src={service.logoDark}
                  alt="Light Logo"
                  className="hidden dark:inline-block"
                  width={60}
                  height={60}
                />
              </figure>
              <h5 className="mb-2 mt-4 lg:mb-3 lg:mt-6">{service.title}</h5>
              <p className="mb-20 lg:mb-[106px]">{service.description}</p>
              <div className="flex items-center justify-center overflow-hidden border p-8 transition-colors duration-[400ms] ease-team-bezier group-hover:bg-secondary dark:border-dark dark:group-hover:bg-backgroundBody max-lg:size-16 lg:h-24 lg:w-[92px]">
                <span className="translate-x-4 transition-transform duration-[400ms] group-hover:translate-x-20">
                  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                    <path
                      d="M5.11377 16H27.1138"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.1138 7L27.1138 16L18.1138 25"
                      className="stroke-secondary dark:stroke-backgroundBody"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                <span className="-translate-x-24 transition-transform duration-[400ms] group-hover:-translate-x-[18px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width={33} height={32} viewBox="0 0 33 32" fill="none">
                    <path
                      d="M5.11377 16H27.1138"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M18.1138 7L27.1138 16L18.1138 25"
                      className="stroke-backgroundBody dark:stroke-secondary"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </RevealWrapper>
        ))}
      </div>
      <RevealWrapper as="ul" className="mx-auto mt-7 flex justify-center max-md:w-full max-md:px-4 md:mt-14">
        <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
          <Link href="/services" className="rv-button rv-button-white block md:inline-block">
            <div className="rv-button-top">
              <span>Explore Our Services</span>
            </div>
            <div className="rv-button-bottom">
              <span>Explore Our Services</span>
            </div>
          </Link>
        </li>
      </RevealWrapper>
    </section>
  )
}

export default ServicesV14
