'use client'
import userImg2 from '@/public/images/avatar/review-6.png'
import userImg1 from '@/public/images/avatar/review-8.png'
import userImg3 from '@/public/images/avatar/review-9.png'
import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/pagination'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import RevealWrapper from '../animation/RevealWrapper'

const userReviewData = [
  {
    id: 1,
    tags: ' The skeleton plan of a website can be broken down into three components ',
    title:
      'Exceptional materials. The most durable glass ever in a  The Member Reviews section has additional guidelines from the Community ',
    userImg: userImg1,
    userName: 'Kathryn Murphy',
    position: 'CEO at Vercel',
  },
  {
    id: 2,
    tags: ' The skeleton plan of a website can be broken down into three components',
    title:
      'Exceptional materials. The most durable glass ever in a  smartphone. A beautiful new gold finish, achieved with an atomic-level. ',
    userImg: userImg2,
    userName: 'Zaks Addision',
    position: 'CEO at W3',
  },
  {
    id: 3,
    tags: ' The skeleton plan of a website can be broken down into three components',
    title:
      'Exceptional materials. The most durable glass ever in a  smartphone. A beautiful new gold finish, achieved with an atomic-level. ',
    userImg: userImg3,
    userName: 'John Dewey',
    position: 'W3 Dev',
  },
]

const SwiperSliderV2 = () => {
  return (
    <RevealWrapper className="container pb-6 pt-16 lg:pb-10 lg:pt-[100px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop
        pagination={{
          clickable: true,
          el: '.user-swiper-v2',
        }}
        speed={1500}
        allowTouchMove
        autoplay={{
          delay: 3700,
          disableOnInteraction: false,
        }}>
        {userReviewData.map(({ id, title, tags, userName, position, userImg }) => (
          <SwiperSlide key={id}>
            <div className="flex gap-3 border p-10 dark:border-dark">
              <div className="hidden flex-grow-0 md:block">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M23.8286 6V16.9714C21.3264 16.9714 16.9186 17.1793 16.9184 27.1958V32.4H27.6V54H6V32.4V27.1958C6 19.3208 8.03795 13.4729 12.4905 9.81413C15.5705 7.28323 19.2195 6 23.8286 6ZM50.229 6V16.9714C47.7268 16.9714 43.319 17.1793 43.3187 27.1958V32.4H54.0004V54H32.4004V32.4V27.1958C32.4004 19.3208 34.4383 13.4729 38.8909 9.81413C41.9709 7.28323 45.6199 6 50.229 6Z"
                      className="fill-secondary dark:fill-white"
                      fillOpacity="0.1"
                    />
                  </svg>
                </span>
              </div>
              <div className="flex-1">
                <p className="mb-6 text-base italic text-secondary/70 dark:text-backgroundBody/70 md:mb-[30px] md:text-xl md:leading-[1.5]">
                  {tags}
                </p>
                <h3 className="mb-7 text-xl text-secondary dark:text-backgroundBody md:mb-10 md:text-[30px] md:leading-9">
                  {title}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Image src={userImg} alt="Avatar Img" width={60} quality={100} />
                    <div>
                      <h4 className="text-lg text-secondary dark:text-backgroundBody md:text-2xl md:leading-[1.2]">
                        {userName}
                      </h4>
                      <p className="text-sm font-light leading-5 text-secondary/70 dark:text-backgroundBody/70">
                        {position}
                      </p>
                    </div>
                  </div>
                  <div className="max-xs:hidden self-end">
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M36.1714 54L36.1714 43.0286C38.6736 43.0286 43.0814 42.8207 43.0816 32.8042L43.0816 27.6L32.4 27.6L32.4 6L54 6L54 27.6L54 32.8042C54 40.6792 51.9621 46.5271 47.5095 50.1859C44.4295 52.7168 40.7805 54 36.1714 54ZM9.77104 54L9.77104 43.0286C12.2732 43.0286 16.681 42.8207 16.6812 32.8042L16.6812 27.6L5.99961 27.6L5.99961 6L27.5996 6L27.5996 27.6L27.5996 32.8042C27.5996 40.6792 25.5617 46.5271 21.1091 50.1859C18.0291 52.7168 14.3801 54 9.77104 54Z"
                          className="fill-secondary dark:fill-white"
                          fillOpacity="0.1"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="user-swiper-v2 mt-6 flex justify-center"></div>
      </Swiper>
    </RevealWrapper>
  )
}

export default SwiperSliderV2
