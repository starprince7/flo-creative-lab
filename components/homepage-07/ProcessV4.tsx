import processImg from '@/public/images/process-img-01.png'
import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV4 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Our Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">Our Creative Journey</h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="flex flex-col gap-20 md:flex-row">
          <figure>
            <Image
              src={processImg}
              alt="Process
           Images "
            />
          </figure>

          <div>
            <ul className="relative space-y-10 border-secondary dark:border-backgroundBody md:border-l lg:space-y-28 xl:space-y-[170px]">
              <li className="max-w-max px-10">
                <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[52px] lg:px-6 lg:py-8">
                  <span className="inline-block bg-gradient-to-r from-backgroundBody to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">
                    01
                  </span>
                </div>
                <div className="ml-[30px]">
                  <h3 className="">Book a Call</h3>
                  <p className="mt-5 max-w-[483px]">
                    Choose a date and time to book a discovery session, during which we’ll define the project
                    objectives, timeline, and budget.
                  </p>
                </div>
              </li>
              <li className="max-w-max px-10">
                <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[54px] lg:px-6 lg:py-8">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">
                    02
                  </span>
                </div>
                <div className="ml-[30px]">
                  <h3 className="">Receive an Offer</h3>
                  <p className="mt-5 max-w-[483px]">
                    We’ll send you a bespoke project proposal including deliverables, project roadmap, and a quote in
                    1-2 business days.
                  </p>
                </div>
              </li>
              <li className="max-w-max px-10">
                <div className="absolute left-0 flex items-center justify-center rounded-full border-backgroundBody bg-secondary px-3.5 py-5 text-lg font-bold text-white dark:border-[#151515] md:-left-11 md:border-[18px] lg:-left-[54px] lg:px-6 lg:py-8">
                  <span className="inline-block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-xl font-semibold text-black text-transparent dark:bg-gradient-to-r dark:from-white dark:to-[#BDBDBD] dark:bg-clip-text dark:text-[#FFF] dark:text-transparent">
                    03
                  </span>
                </div>
                <div className="ml-[30px]">
                  <h3 className="">Kickoff the Project</h3>
                  <p className="mt-5 max-w-[483px]">
                    Sign the contract, send the deposit, lean back, and let us do our thing. We’ll invite you to a
                    design review meeting in 5-7 business days.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ProcessV4
