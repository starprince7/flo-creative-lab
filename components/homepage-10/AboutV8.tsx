'use client'
import useReveal from '@/hooks/useReveal'
import CounterAnimation from '@/utils/CounterAnimation'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from '../shared/CircleTextAnimation'

const achievementStats = [
  { value: 14, label: 'Years of Experience' },
  { value: 80, label: 'Projects Completed', suffix: '+' },
  { value: 280, label: 'Happy Clients', suffix: '+' },
  { value: 9, label: 'Trusted Partners' },
  { value: 19, label: 'Industry Awards' },
  { value: 39, label: 'Team Members' },
]

const AboutV8 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="about relative pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
        <RevealWrapper>
          <h4 className="mx-auto mb-6 mt-8 md:mb-10 md:mt-[60px]" ref={revealRef}>
            With years of industry expertise, our team of visionaries, storytellers, and design virtuosos come together
            to weave magic that captivates hearts and minds.
          </h4>
        </RevealWrapper>
        <RevealWrapper as="p" className="mx-auto max-w-3xl overflow-hidden text-center">
          With years of experience and a diverse portfolio, we have established ourselves as a leading force in the
          world of video production. At our core, we believe in the transformative power of visual storytelling. Our
          mission is to bring your ideas to life, creating content that not only meets but exceeds your expectations.
        </RevealWrapper>

        <div className="mt-20 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {achievementStats.map((achievement, index) => (
            <RevealWrapper
              key={achievement.label}
              className="flex min-w-[355px] flex-col items-center justify-center border-t py-7 dark:border-dark sm:flex-row sm:items-start sm:justify-between lg:min-w-[300px] xl:min-w-[355px]">
              <h2 className="sm:min-w-[170px]">
                <CounterAnimation number={achievement.value} />
                {achievement.suffix}
              </h2>
              <p className="text-lg">{achievement.label}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutV8
