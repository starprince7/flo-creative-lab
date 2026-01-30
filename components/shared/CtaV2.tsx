import bigArrowDarkIcon from '@/public/images/icons/big-arrow-Icon-dark.svg'
import bigArrowIcon from '@/public/images/icons/big-arrow-Icon.svg'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

const CtaV2 = () => {
  return (
    <section className="mt-14 bg-backgroundBody pb-20 pt-16 dark:bg-secondary md:mt-16 md:pb-36 lg:mt-[88px] lg:pt-[100px] xl:mt-[100px]">
      <div className="container flex flex-col justify-center gap-y-10 max-md:items-center sm:justify-between md:flex-row">
        <RevealWrapper
          as="h2"
          className="reveal-me text-[46px] font-normal leading-[1.1] max-lg:leading-[1.33] lg:text-[96px] lg:tracking-[-2.88px]">
          <span className="font-instrument italic max-md:mr-4 lg:text-[100px]">New</span>
          <br className="hidden md:block" />
          Project?
        </RevealWrapper>

        <Link href="/contact">
          <RevealWrapper className="reveal-me group h-44 w-44 bg-secondary p-5 dark:bg-primary lg:h-[230px] lg:w-[230px]">
            <figure className="relative h-full w-full bg-primary dark:bg-secondary">
              <Image
                src={bigArrowIcon}
                alt="Big Arrow Icon"
                className="absolute left-1/2 top-1/2 inline -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-28 group-hover:translate-x-9 group-hover:opacity-0 dark:hidden max-lg:scale-75"
              />

              <Image
                src={bigArrowDarkIcon}
                alt="Big Arrow Icon"
                className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 opacity-100 transition-all duration-500 group-hover:-translate-y-28 group-hover:translate-x-9 group-hover:opacity-0 dark:inline max-lg:scale-75"
              />

              <Image
                src={bigArrowIcon}
                alt="Big Arrow Icon"
                className="absolute -left-2 top-full inline -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:-translate-y-[105px] group-hover:translate-x-[48%] group-hover:opacity-100 dark:hidden max-lg:scale-75 md:group-hover:-translate-y-32 md:group-hover:translate-x-[80%]"
              />

              <Image
                src={bigArrowDarkIcon}
                alt="Big Arrow Icon"
                className="absolute -left-2 top-full hidden -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500 group-hover:-translate-y-[105px] group-hover:translate-x-[48%] group-hover:opacity-100 dark:inline max-lg:scale-75 md:group-hover:-translate-y-32 md:group-hover:translate-x-[80%]"
              />
            </figure>
          </RevealWrapper>
        </Link>
      </div>
    </section>
  )
}

export default CtaV2
