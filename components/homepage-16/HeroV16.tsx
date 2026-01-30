'use client'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import RevealWrapperV2 from '../animation/RevealWrapperV2'
import VideoModal from '../shared/VideoModal'

const HeroV16 = () => {
  const [open, setOpen] = useState(false)
  return (
    <section className="relative overflow-hidden bg-[url('/images/hero-img/hero-gradient-bg.png')] bg-cover bg-no-repeat object-cover pt-[107px] md:pt-[130px] xl:pt-[180px]">
      {/* Gradient Background Wrapper */}
      <div id="hero-gradient-wrapper" className="absolute left-0 top-0 -z-10 h-full w-full blur-[85px] md:blur-[80px]">
        <img
          src="/images/hero-gradient-background.png"
          alt="hero-gradient-background"
          id="hero-gradient"
          className="absolute left-0 top-1/2 max-md:-translate-y-[60%] md:-translate-y-1/2 lg:scale-75 xl:scale-100"
        />
      </div>

      <div className="video-section mx-auto max-w-[1300px] px-4 pb-14 md:px-[30px] md:pb-16 lg:pb-[88px] xl:pb-[100px]">
        <div className="flex flex-col items-end gap-8 lg:flex-row">
          {/* Content */}
          <div className="lg:w-[65%]">
            <RevealWrapper as="h1" className="reveal-me">
              Innovative <br className="hidden lg:block" />
              marketing for <br className="hidden lg:block" />
              <i className="font-instrument">business growth</i>
            </RevealWrapper>
            <RevealWrapper as="p" className="reveal-me">
              From startups to enterprises, we craft marketing strategies that increase visibility, boost conversions,
              and drive revenue.
            </RevealWrapper>
            {/* Hero Buttons */}
            <RevealWrapperV2 as="ul" className="reveal-me mt-7 cursor-pointer md:mt-9 lg:mt-14">
              <li>
                <Link href="/contact" className="rv-button rv-button-primary block md:inline-block">
                  <div className="rv-button-top text-center">
                    <span>Get a Free Strategy Call</span>
                  </div>
                  <div className="rv-button-bottom text-center">
                    <span className="text-nowrap">Get a Free Strategy Call</span>
                  </div>
                </Link>
              </li>
            </RevealWrapperV2>
          </div>
          {/* video */}
          <RevealWrapper className="reveal-me lg:w-[34%]">
            <div className="flex items-center gap-x-5 lg:flex-col xl:flex-row">
              {/* user overlap image */}
              <div className="my-3 flex [&>*:not(:first-child)]:-ml-4">
                <img
                  src="/images/avatar/review-19.png"
                  className="size-12 rounded-[48px] border-2 border-secondary object-cover md:size-[60px] md:rounded-[60px]"
                  alt="User Review"
                />
                <img
                  src="/images/avatar/review-20.png"
                  className="size-12 rounded-[48px] border-2 border-secondary object-cover md:size-[60px] md:rounded-[60px]"
                  alt="User Review"
                />
                <img
                  src="/images/avatar/review-21.png"
                  className="size-12 rounded-[48px] border-2 border-secondary object-cover md:size-[60px] md:rounded-[60px]"
                  alt="User Review"
                />
                <Link href="/team">
                  <figure className="duration-300 ease-in-out hover:scale-105 max-md:size-12">
                    <img src="/images/icons/plus-icon.svg" className="block dark:hidden" alt="Arrow Icon" />
                    <img src="/images/icons/plus-icon-white.svg" alt="Arrow Icon" className="hidden dark:block" />
                  </figure>
                </Link>
              </div>
              <p className="text-[17px] leading-[1.4]">
                Trusted by over + 20K <br />
                people in the World
              </p>
            </div>
            <div className="hero-video-container group relative mt-5 h-full w-full cursor-pointer md:mt-[30px]">
              <button onClick={() => setOpen(true)} className="absolute left-[45%] top-[40%] -translate-x-[45%]">
                <div className="flex size-12 transform items-center justify-center rounded-[48px] bg-secondary transition-transform duration-300 group-hover:scale-105 dark:bg-backgroundBody md:size-[60px] md:rounded-[60px]">
                  <svg xmlns="http://www.w3.org/2000/svg" width={15} height={18} viewBox="0 0 15 18" fill="none">
                    <path
                      d="M14.4886 8.40229L1.47805 0.667204C1.36852 0.601523 1.24296 0.565438 1.1143 0.562672C0.985649 0.559906 0.858564 0.590558 0.74616 0.651467C0.633755 0.712376 0.540101 0.801336 0.474856 0.90917C0.409612 1.017 0.375142 1.13981 0.375 1.26491V16.7351C0.375142 16.8602 0.409612 16.983 0.474856 17.0908C0.540101 17.1987 0.633755 17.2876 0.74616 17.3485C0.858564 17.4094 0.985649 17.4401 1.1143 17.4373C1.24296 17.4346 1.36852 17.3985 1.47805 17.3328L14.4886 9.59771C14.5954 9.53629 14.684 9.44887 14.7454 9.34406C14.8069 9.23925 14.8393 9.12066 14.8393 9C14.8393 8.87934 14.8069 8.76076 14.7454 8.65594C14.684 8.55113 14.5954 8.46371 14.4886 8.40229V8.40229Z"
                      className="fill-backgroundBody dark:fill-[#181818]"
                    />
                  </svg>
                </div>
              </button>
              <img src="/images/hero-img/video-img.png" alt="" />
            </div>
          </RevealWrapper>
        </div>
      </div>
      <VideoModal open={open} setOpen={setOpen} />
    </section>
  )
}

export default HeroV16
