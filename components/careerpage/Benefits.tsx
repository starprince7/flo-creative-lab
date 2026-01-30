import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const benefitsData = [
  { id: 1, title: 'Hybrid Work Environment' },
  { id: 2, title: 'Competitive Health Benefits' },
  { id: 3, title: 'Learning & Development Fund' },
  { id: 4, title: 'Performance Bonuses' },
  { id: 5, title: 'Mental Health Support' },
  { id: 6, title: 'Team Building Events' },
  { id: 7, title: 'Professional Certifications' },
  { id: 8, title: 'Modern Tech Stack' },
  { id: 9, title: 'Unlimited PTO Policy' },
]

const Benefits = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <TextAppearAnimation>
          <h2 className="text-appear mb-4 text-center lg:mb-8">Why Join Our Team</h2>
        </TextAppearAnimation>
        <RevealWrapper>
          <p className="text-appear mx-auto max-w-[750px] text-left max-lg:px-5 md:text-center">
            Join a dynamic workspace where innovation meets well-being. We provide comprehensive benefits and a
            supportive environment designed to help you thrive both professionally and personally.
          </p>
        </RevealWrapper>

        {/* Benefits Grid */}
        <div className="mt-10 grid grid-cols-1 items-center justify-center gap-[30px] sm:grid-cols-2 md:mt-[60px] lg:grid-cols-3">
          {benefitsData.map((benefit) => (
            <RevealWrapper key={benefit.id} className="border p-[30px] text-center dark:border-dark">
              {benefit.title}
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Benefits
