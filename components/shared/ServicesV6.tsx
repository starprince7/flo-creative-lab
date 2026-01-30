'use client'
import gradientBg from '@/public/images/services-gradient-bg-2.png'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const servicesData = [
  {
    id: 1,
    title: 'User Experience',
    subtitle: 'Understanding users to design intuitive solutions',
    items: [
      'Conducting User Surveys & Interviews',
      'Behavioral Analysis & Heatmaps',
      'Wireframe and Prototype Creation',
      'Design Thinking Workshops',
      'A/B Testing and Performance Metrics',
      'Continuous User Feedback Integration',
    ],
  },
  {
    id: 2,
    title: 'Custom Web Solutions',
    subtitle: 'Transforming ideas into high-performing websites',
    items: [
      'Custom Web Applications',
      'Database Design & Management',
      'Integration with Third-Party Tools',
      'Scalable and Secure Solutions',
      'Advanced Debugging Techniques',
      'Server-Side Rendering Implementation',
    ],
  },
  {
    id: 3,
    title: 'Creative Web Design',
    subtitle: 'Innovative designs that captivate and engage',
    items: [
      'Visual Identity and Branding',
      'Pixel-Perfect Layout Design',
      'Mobile-First Design Strategies',
      'Interactive Components & Animations',
      'High-Fidelity Mockups',
      'Ensuring Cross-Browser Compatibility',
    ],
  },
  {
    id: 4,
    title: 'WordPress ',
    subtitle: 'Simplifying web management with WordPress expertise',
    items: [
      'Bespoke Theme Development',
      'Content-Driven Website Solutions',
      'SEO-Ready Page Structures',
      'Speed Optimization for WordPress',
      'Multi-Language Site Implementation',
      'Regular Backups & Updates',
    ],
  },
]

const ServicesV6 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-[47%] -z-40 -translate-x-1/2 -translate-y-[45%] scale-x-[2.7] scale-y-[3.8] sm:scale-y-[3.3] md:scale-y-[3.2] lg:scale-y-[2.4] xl:scale-x-[2.4] xl:scale-y-[1.2]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>
      <div className="container">
        <div className="mb-8 text-center md:mb-20">
          <RevealWrapper className="rv-badge reveal-me mb-5 md:mb-8">
            <span className="rv-badge-text">Services</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto max-w-[770px]">There is a lot we can do. Here is a few.</h2>
          </TextAppearAnimation>
        </div>
        <RevealWrapper className="mx-auto w-full max-w-[1170px] [&>*:not(:last-child)]:mb-6">
          {servicesData.map((service, index) => (
            <div
              key={service.id}
              className="faq-body-transition overflow-hidden border border-secondary/10 bg-backgroundBody duration-300 dark:border-backgroundBody/10 dark:bg-dark">
              <div
                className={`group relative flex cursor-pointer items-center justify-between px-5 py-5 md:px-10 ${
                  activeIndex === index ? 'active' : ''
                }`}
                onClick={() => toggleAccordion(index)}>
                <h3 className="flex flex-col items-center gap-x-10 gap-y-3 text-[25px] font-normal leading-[25.2px] text-secondary dark:text-white md:flex-row md:text-5xl md:leading-[1.2]">
                  <span className="text-inherit">{service.title}</span>
                  <span className="pr-[2px] text-base text-secondary/70 dark:text-white/70 md:text-xl md:leading-[1.4] md:tracking-[0.4px]">
                    {service.subtitle}
                  </span>
                </h3>
                <div className="accordion-header-iconV5">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 32 32"
                    fill="none"
                    className="absolute left-1/2 top-1/2 size-5 -translate-x-1/2 -translate-y-1/2 transition-all duration-700 ease-team-bezier group-hover:rotate-90 md:size-8">
                    <path d="M5 16H27" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M18 7L27 16L18 25"
                      stroke="black"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}>
                <div className="overflow-hidden">
                  <div className="accordion-body flex flex-col justify-start px-10 pb-10 duration-300 sm:ml-2.5 sm:flex-row sm:gap-10 md:ml-6 lg:gap-x-[73px]">
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(0, Math.ceil(service.items.length / 2)).map((item, idx) => (
                        <li
                          key={idx}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                    <ul className="[&>*:not(:last-child)]:mb-1">
                      {service.items.slice(Math.ceil(service.items.length / 2)).map((item, idx) => (
                        <li
                          key={idx}
                          className="list-disc text-[17px] leading-[1.5] tracking-[0.36px] text-secondary/70 dark:text-backgroundBody/70">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </RevealWrapper>
        <RevealWrapper as="ul" className="reveal-me mt-14 flex justify-center">
          <li className="max-md:w-full">
            <Link
              href="/services"
              className="rv-button rv-button-white block w-full text-center md:inline-block md:w-auto">
              <div className="rv-button-top">
                <span>Explore Services</span>
              </div>
              <div className="rv-button-bottom">
                <span>Explore Services</span>
              </div>
            </Link>
          </li>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ServicesV6
