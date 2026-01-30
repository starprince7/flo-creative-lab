import { cn } from '@/utils/cn'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const data = [
  {
    id: 1,
    reviewText: 'Rivor Films transformed our brand’s message into an unforgettable visual',
    authorName: 'Kristin Watson',
    authorRole: 'CEO, Tech Innovators',
    authorImage: '/images/home-ai/team/ai-team-1.png',
    rating: 5,
  },
  {
    id: 2,
    reviewText: 'The team at Rivor Films exceeded our expectations and delivered stunning results.',
    authorName: 'John Doe',
    authorRole: 'Marketing Director, Creative Agency',
    authorImage: '/images/home-ai/team/ai-team-2.png',
    rating: 4,
  },
  {
    id: 3,
    reviewText: 'Working with Rivor Films was a game changer for our project.',
    authorName: 'Alice Smith',
    authorRole: 'Creative Director, Design Studio',
    authorImage: '/images/home-ai/team/ai-team-3.png',
    rating: 5,
  },
  {
    id: 4,
    reviewText: 'The creativity and professionalism of Rivor Films is unmatched.',
    authorName: 'Bob Johnson',
    authorRole: 'Founder, Startup Inc.',
    authorImage: '/images/home-ai/team/ai-team-4.png',
    rating: 3,
  },
  {
    id: 5,
    reviewText: 'The creativity and professionalism of Rivor Films is unmatched.',
    authorName: 'Zaks Johnson',
    authorRole: 'Founder, Startup Inc.',
    authorImage: '/images/home-ai/team/ai-team-5.png',
    rating: 4,
  },
]

const TestimonialV7 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container mb-8 text-center md:mb-14">
        <RevealWrapper className="rv-badge">
          <span className="rv-badge-text">Testimonial</span>
        </RevealWrapper>
        <TextAppearAnimation>
          <h2 className="text-appear my-3">
            Our respected happy
            <i className="font-instrument">clients </i>
            <br />
            <i className="font-instrument">says</i>
          </h2>
        </TextAppearAnimation>
      </div>
      <RevealWrapper>
        <div className="flex items-center gap-4 md:gap-[30px]">
          <Marquee pauseOnHover speed={50} autoFill>
            {data.map((item) => (
              <div
                key={item.id}
                className={cn('relative min-h-[237px] w-96 border p-[30px] first:ml-[30px] dark:border-dark')}>
                <div className="mb-5 flex items-center gap-1">
                  {Array.from({ length: item.rating }).map((_, idx) => (
                    <span key={idx}>
                      <svg xmlns="http://www.w3.org/2000/svg" width={16} height={15} viewBox="0 0 16 15" fill="none">
                        <path
                          d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
                          fill="#12D8CC"
                        />
                      </svg>
                    </span>
                  ))}
                </div>
                <p className="mb-4 h-auto w-full text-wrap text-[17px] leading-[1.6]">{item.reviewText}</p>
                <figcaption className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                  <div>
                    <h6 className="text-[22px] leading-[1.2]">{item.authorName}</h6>
                    <p className="text-[15px] leading-[1.6] text-secondary/30">{item.authorRole}</p>
                  </div>
                  <img src={item.authorImage} alt={item.authorName} className="size-12 object-cover" />
                </figcaption>
              </div>
            ))}
          </Marquee>
        </div>
      </RevealWrapper>
    </section>
  )
}

export default TestimonialV7
