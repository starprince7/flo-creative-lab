'use client'
import useReveal from '@/hooks/useReveal'
import CounterAnimation from '@/utils/CounterAnimation'
import RevealWrapper from '../animation/RevealWrapper'
import CircleTextAnimation from '../shared/CircleTextAnimation'

const data = [
  {
    id: 1,
    value: 7,
    label: 'Years of experience',
    suffix: '',
  },
  {
    id: 2,
    value: 80,
    label: 'Projects done',
    suffix: '+',
  },
  {
    id: 3,
    value: 280,
    label: 'Satisfied clients',
    suffix: '+',
  },
  {
    id: 4,
    value: 4,
    label: 'Trusted partners',
    suffix: '',
  },
  {
    id: 5,
    value: 13,
    label: 'Awards',
    suffix: '',
  },
  {
    id: 6,
    value: 10,
    label: 'Professional members',
    suffix: '',
  },
]

const AboutV10 = () => {
  const { revealRef } = useReveal()
  return (
    <section className="about relative !overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper>
          <CircleTextAnimation />
        </RevealWrapper>
        <h4 ref={revealRef} className="mx-auto mb-3 mt-6 md:mt-10">
          FloCreativeLab is a premium post production company delivering world class video editing and visual effects.{' '}
          <br className="hidden md:block" />
          We partner with visionary directors, artists, and brands to produce visually striking content defined by
          <br className="hidden md:block" />
          precision, depth, and cinematic excellence.
        </h4>
        <RevealWrapper as="p" className="max-w-5xl">
          Every frame is treated with intention, ensuring each project not only looks exceptional but feels
          unforgettable.
        </RevealWrapper>

        <div className="mt-20 grid grid-cols-1 justify-items-center gap-8 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item) => (
            <div
              key={item.id}
              className="reveal-me flex min-w-[355px] flex-col items-center justify-center border-t py-7 dark:border-dark sm:flex-row sm:items-start sm:justify-between lg:min-w-[300px] xl:min-w-[355px]"
              id="counter">
              <h2 className="font-instrument sm:min-w-[170px]">
                <CounterAnimation number={item.value} />
                {item.suffix}
              </h2>
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutV10
