import communityImg from '@/public/images/community-image.jpg'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const Community = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mb-12 md:mb-20">
              Growing <span className="font-instrument italic">together.</span> <br />
              As a community.
            </h2>
          </TextAppearAnimation>
        </div>

        <div className="grid grid-cols-12 gap-6">
          <RevealWrapper className="col-span-full flex flex-col items-start justify-center gap-x-4 border p-6 dark:border-dark max-md:gap-y-8 md:flex-row md:items-center md:justify-between md:p-10">
            <div className="max-md:block max-md:w-full">
              <h3 className="mb-8 leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
                Join Our Community of <br />
                500+ Designers
              </h3>
              <Link
                href="https://discord.com/invite/Y8n8ST6a"
                target="_blank"
                className="rv-button rv-button-secondary block w-full text-center max-md:mx-auto md:inline-block md:w-auto">
                <div className="rv-button-top">
                  <span>Join Discord</span>
                </div>
                <div className="rv-button-bottom">
                  <span>Join Discord</span>
                </div>
              </Link>
            </div>
            <figure className="max-md:w-full">
              <Image src={communityImg} alt="Community Discussion" className="max-md:w-full" />
            </figure>
          </RevealWrapper>

          <RevealWrapper className="col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="rv-badge">
              <span className="rv-badge-text">Youtube</span>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Design Tips & <br className="hidden md:block" />
              Tutorial Videos
            </h3>
            <Link
              href="https://youtu.be/JGLfyTDgfDc?si=0-iUKu3hv8uewpxg"
              target="_blank"
              className="rv-button rv-button-secondary block w-[90%] max-md:mx-auto md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Subscribe Now</span>
              </div>
              <div className="rv-button-bottom">
                <span>Subscribe Now</span>
              </div>
            </Link>
          </RevealWrapper>

          <RevealWrapper className="col-span-full border pb-10 pt-10 text-center dark:border-dark md:col-span-6 md:pb-[60px]">
            <div className="rv-badge">
              <span className="rv-badge-text">Linkedin</span>
            </div>
            <h3 className="my-5 text-[25px] leading-[1.2] tracking-[-1.08px] md:my-8 lg:text-4xl">
              Stay Updated On <br />
              Latest Design Trends
            </h3>
            <Link
              href="https://www.linkedin.com/company/staticmania"
              target="_blank"
              className="rv-button rv-button-secondary block w-[90%] max-md:mx-auto md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Follow Now</span>
              </div>
              <div className="rv-button-bottom">
                <span>Follow Now</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default Community
