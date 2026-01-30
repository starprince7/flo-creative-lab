'use client'
import faqData from '@/data/faq.json'
import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

interface FaqProps {
  bigTitleWithBadge?: boolean
}

const FAQ = ({ bigTitleWithBadge = false }: FaqProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      className={`relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px] ${bigTitleWithBadge ? 'pt-28 sm:pt-32 xl:pt-32' : 'pt-14 md:pt-16 lg:pt-[88px] xl:pt-[100px]'}`}>
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.8] scale-y-[3.4] sm:scale-y-[1.6] md:scale-x-[1.9] md:scale-y-[1.5] lg:scale-x-[1.7] lg:scale-y-[1.5] xl:scale-y-[1.4] 2xl:scale-y-[1]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>
      <div className="container">
        {bigTitleWithBadge ? (
          <>
            <div className="text-center">
              <RevealWrapper className="rv-badge mb-4 lg:mb-6">
                <span className="rv-badge-text">Faq</span>
              </RevealWrapper>
            </div>
            <TextAppearAnimation>
              <h1 className="text-appear mb-10 text-center md:mb-20">
                Frequently Asked <i className="font-instrument italic">Questions</i>
              </h1>
            </TextAppearAnimation>
          </>
        ) : (
          <TextAppearAnimation>
            <h2 className="text-appear mb-10 text-center md:mb-20">
              Frequently Asked <i className="font-instrument italic">Questions</i>
            </h2>
          </TextAppearAnimation>
        )}

        <RevealWrapper className="mx-auto w-full max-w-[900px] [&>*:not(:last-child)]:mb-6">
          {faqData.map((item, index) => (
            <div
              key={item.id}
              className={`faq-body-transition overflow-hidden border bg-backgroundBody duration-[400ms] dark:bg-dark ${
                activeIndex === index ? 'pb-10' : 'pb-0'
              }`}
              style={{
                borderColor: activeIndex === index ? 'black' : 'transparent ',
              }}>
              <div
                className={`relative cursor-pointer py-5 max-md:px-5 md:px-10 md:py-[35px] ${
                  activeIndex === index ? 'open active' : ''
                }`}
                onClick={() => toggleAccordion(index)}>
                <h3 className="text-xl font-normal max-lg:pr-[33px] sm:text-[23px] sm:font-medium md:text-[25px] md:leading-[25.2px] md:tracking-wide">
                  {item.question}
                </h3>
                <div
                  className={`accordion-header-icon transition-transform duration-[400ms] ${
                    activeIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}></div>
              </div>
              <div
                className={`grid transition-all duration-[400ms] ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                  <p className="faq-body-transition duration-[500ms] max-md:px-5 max-md:text-base md:px-10">
                    {item.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>

        <RevealWrapper as="ul" className="mx-auto mt-[56px] flex list-none justify-center">
          <li className="mx-auto block w-[90%] text-center md:inline-block md:w-auto">
            <Link href="/faq" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>See All FAQ</span>
              </div>
              <div className="rv-button-bottom">
                <span>See All FAQ</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default FAQ
