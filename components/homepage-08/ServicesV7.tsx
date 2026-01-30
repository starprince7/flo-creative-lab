import { MarkdownData } from '@/interface'
import getMarkDownData from '@/utils/GetMarkDownData'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ServicesV7 = () => {
  const businessSolutionServices: MarkdownData[] = getMarkDownData('data/business-solutions/services')

  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Our Services And Creative solutions</h2>
          </TextAppearAnimation>
        </div>
        <div className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {businessSolutionServices?.map((service) => (
            <RevealWrapper
              as="a"
              href={`/business-solutions/services/${service.slug}`}
              className="block"
              key={service.slug}>
              <div className="border border-secondary/10 bg-white transition-all duration-300 dark:border-backgroundBody/10 dark:bg-dark">
                <div className="group relative z-10 flex cursor-pointer justify-between px-5 py-5 md:px-10">
                  <div
                    style={{ background: `url(${service.hoverImage})` }}
                    className={`in-expo absolute inset-0 bg-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100`}></div>

                  <h3 className="relative z-10 flex flex-col items-start gap-x-32 gap-y-3 text-[25px] font-normal leading-[25.2px] md:flex-row md:items-center md:text-4xl md:leading-[1.2] lg:text-[42px] xl:text-5xl">
                    <span className="transition-colors duration-700 group-hover:text-white">{service.title}</span>
                    <p className="mt-2 max-w-lg pr-[2px] text-base transition-colors duration-700 group-hover:text-white md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                      {service.description}
                    </p>
                  </h3>

                  <div className="relative z-10 inline-flex size-14 overflow-hidden border bg-backgroundBody transition-all duration-[800ms] ease-faq-body-transition group-hover:border-transparent group-hover:bg-primary dark:border-dark dark:bg-dark lg:size-24">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="in-expo absolute left-1/2 top-1/2 size-6 -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:translate-x-20 group-hover:opacity-0 lg:size-8">
                      <path
                        d="M5 16H27"
                        className="stroke-black transition-colors duration-500 group-hover:stroke-white dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 7L27 16L18 25"
                        className="stroke-black transition-colors duration-500 group-hover:stroke-white dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="none"
                      className="absolute left-1/2 top-1/2 size-6 -translate-x-20 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:-translate-x-1/2 group-hover:opacity-100 lg:size-8">
                      <path
                        d="M5 16H27"
                        className="stroke-black transition-colors duration-500 group-hover:stroke-white dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M18 7L27 16L18 25"
                        className="stroke-black transition-colors duration-500 group-hover:stroke-white dark:stroke-white"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesV7
