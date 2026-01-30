'use client'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation02 from '../animation/TextAppearAnimation02'

const data = [
  {
    id: 1,
    reviewText:
      "The team delivered an outstanding promotional video that perfectly captured our brand's essence. Highly recommend!",
    authorName: 'Sarah Johnson',
    authorRole: 'CEO of Bright Solutions',
  },
  {
    id: 2,
    reviewText:
      'Their creativity and attention to detail made our campaign a huge success. Truly a pleasure to work with!',
    authorName: 'Michael Carter',
    authorRole: 'Marketing Director at Innovate Inc.',
  },
  {
    id: 3,
    reviewText:
      'The video they created for us went viral and brought in a ton of new customers. Absolutely thrilled with the results!',
    authorName: 'Emily Davis',
    authorRole: 'Founder of Green Earth',
  },
  {
    id: 4,
    reviewText:
      'Working with this team was a game changer for our business. Their insights and creativity were invaluable!',
    authorName: 'John Smith',
    authorRole: 'Product Manager at Tech Innovations',
  },
  {
    id: 5,
    reviewText:
      'Their professionalism and expertise made the entire process seamless. The final product was beyond our expectations!',
    authorName: 'David Martinez',
    authorRole: 'COO of TechNova',
  },
  {
    id: 6,
    reviewText:
      "The support and guidance we received throughout the project were exceptional. We couldn't have asked for a better partner!",
    authorName: 'Lisa White',
    authorRole: 'Head of Operations at Future Tech',
  },
  {
    id: 7,
    reviewText:
      'The video they produced for us was engaging, creative, and perfectly aligned with our brand. Highly recommend their services!',
    authorName: 'Laura Bennett',
    authorRole: 'Head of Marketing at Stellar Co.',
  },
  {
    id: 8,
    reviewText:
      'Their innovative solutions and proactive approach have helped us achieve our goals faster than we anticipated.',
    authorName: 'Michael Brown',
    authorRole: 'Product Owner, NextGen Solutions',
  },
  {
    id: 9,
    reviewText:
      'The team was incredibly responsive and attentive to our needs, making the collaboration enjoyable and productive.',
    authorName: 'Anna Taylor',
    authorRole: 'Creative Director at Visionary Media',
  },
  {
    id: 10,
    reviewText:
      "Their insights and creativity transformed our vision into reality, and we couldn't be happier with the outcome.",
    authorName: 'James Wilson',
    authorRole: 'CEO of Creative Minds',
  },
]

const TestimonialV9 = () => {
  return (
    <section className="overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-16 flex flex-col items-start justify-center gap-y-3 md:mb-20 md:flex-row md:items-center lg:justify-start">
          <div className="flex-1">
            <TextAppearAnimation02>
              <h2 className="text-appear-2">
                Celebrating excellence in
                <span className="font-instrument italic"> filmmaking</span>
              </h2>
            </TextAppearAnimation02>
          </div>
          <div className="max-md:w-full md:max-w-[470px]">
            <TextAppearAnimation02>
              <p className="text-appear-2 max-w-lg max-md:text-justify md:place-self-end md:text-right">
                Our commitment to excellence has earned us accolades from the industry's most prestigious organizations.
              </p>
            </TextAppearAnimation02>
          </div>
        </div>
      </div>

      <RevealWrapper className="reveal-me relative">
        <Swiper
          spaceBetween={30}
          modules={[Navigation]}
          className="!pl-[20%]"
          navigation={{
            prevEl: '.swiper-prev-btn',
            nextEl: '.swiper-next-btn',
          }}
          pagination={{ clickable: true }}
          slidesPerView={4}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1440: {
              slidesPerView: 4,
              spaceBetween: 24,
            },
          }}>
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="swiper-slide">
                <div className="relative min-h-[370px] max-w-full border p-8 dark:border-dark 2xl:max-w-[360px]">
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width={20} height={15} viewBox="0 0 20 15" fill="none">
                      <path
                        d="M10.875 12.75V4.5C10.8762 3.30691 11.3507 2.16303 12.1944 1.31939C13.038 0.475744 14.1819 0.00124073 15.375 0C15.5739 0 15.7647 0.0790167 15.9053 0.219669C16.046 0.360322 16.125 0.551087 16.125 0.75C16.125 0.948913 16.046 1.13968 15.9053 1.28033C15.7647 1.42098 15.5739 1.5 15.375 1.5C14.5794 1.5 13.8163 1.81607 13.2537 2.37868C12.6911 2.94129 12.375 3.70435 12.375 4.5V5.25H18C18.3978 5.25 18.7794 5.40804 19.0607 5.68934C19.342 5.97064 19.5 6.35218 19.5 6.75V12.75C19.5 13.1478 19.342 13.5294 19.0607 13.8107C18.7794 14.092 18.3978 14.25 18 14.25H12.375C11.9772 14.25 11.5956 14.092 11.3143 13.8107C11.033 13.5294 10.875 13.1478 10.875 12.75ZM1.5 14.25H7.125C7.52282 14.25 7.90436 14.092 8.18566 13.8107C8.46696 13.5294 8.625 13.1478 8.625 12.75V6.75C8.625 6.35218 8.46696 5.97064 8.18566 5.68934C7.90436 5.40804 7.52282 5.25 7.125 5.25H1.5V4.5C1.5 3.70435 1.81607 2.94129 2.37868 2.37868C2.94129 1.81607 3.70435 1.5 4.5 1.5C4.69891 1.5 4.88968 1.42098 5.03033 1.28033C5.17098 1.13968 5.25 0.948913 5.25 0.75C5.25 0.551087 5.17098 0.360322 5.03033 0.219669C4.88968 0.0790167 4.69891 0 4.5 0C3.30691 0.00124073 2.16303 0.475744 1.31939 1.31939C0.475744 2.16303 0.00124168 3.30691 0 4.5V12.75C0 13.1478 0.158035 13.5294 0.439341 13.8107C0.720644 14.092 1.10217 14.25 1.5 14.25Z"
                        className="fill-secondary dark:fill-backgroundBody"
                      />
                    </svg>
                  </span>
                  <p className="mb-20 mt-10 text-lg leading-[1.6]">{item.reviewText}</p>
                  <figcaption className="absolute bottom-8">
                    <h6 className="mb-[2px] text-[22px] leading-[1.2]">{item.authorName}</h6>
                    <p className="text-[15px] leading-[1.6] text-secondary/30 dark:text-backgroundBody/30">
                      {item.authorRole}
                    </p>
                  </figcaption>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="mt-8 flex items-center space-x-2">
            <button className="swiper-prev-btn size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} viewBox="0 0 32 33" fill="none">
                <path
                  d="M27 16.25H5"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M14 7.25L5 16.25L14 25.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button className="swiper-next-btn group size-[72px] border bg-backgroundBody p-5 duration-300 hover:bg-primary active:bg-primary dark:border-dark dark:bg-secondary dark:hover:bg-primary">
              <svg xmlns="http://www.w3.org/2000/svg" width={32} height={33} viewBox="0 0 32 33" fill="none">
                <path
                  d="M5 16.25H27"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18 7.25L27 16.25L18 25.25"
                  className="stroke-secondary dark:stroke-backgroundBody"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </Swiper>
      </RevealWrapper>
    </section>
  )
}

export default TestimonialV9
