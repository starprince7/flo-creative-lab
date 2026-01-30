import CounterAnimation from '@/utils/CounterAnimation'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const stats = [
  {
    id: 1,
    value: 250,
    symbol: '+',
    title: 'Projects Delivered',
    description: 'Successfully completed projects for clients worldwide across various industries.',
  },
  {
    id: 2,
    value: 95,
    symbol: '%',
    title: 'Client Satisfaction',
    description: 'Of our clients report exceeding their project goals and expectations.',
  },
  {
    id: 3,
    value: 40,
    symbol: '+',
    title: 'Design Awards',
    description: 'Industry recognitions for outstanding design and innovation.',
  },
  {
    id: 4,
    value: 85,
    symbol: '%',
    title: 'Client Retention',
    description: 'Long-term partnerships built on trust and consistent results.',
  },
]

const Counter = () => {
  return (
    <section className="pb-14 pt-20 md:pb-16 md:pt-28 lg:pb-[88px] lg:pt-36 xl:pb-[100px] xl:pt-[200px]">
      <div className="container">
        <TextAppearAnimation>
          <h2 className="text-appear text-center tracking-[-1.92px]">Creating Impact Through Design Excellence</h2>
        </TextAppearAnimation>
        <TextAppearAnimation>
          <p className="text-appear mx-auto mt-5 max-w-md text-justify lg:mt-7 lg:max-w-[754px]">
            Join a team that's redefining digital experiences through innovative design. Our work spans across
            industries, delivering measurable results for global brands.
          </p>
        </TextAppearAnimation>

        <div className="reveal-me flex justify-items-center gap-7 pt-16 max-xl:flex-wrap xl:pt-20">
          {stats.map((st) => (
            <div className="mx-auto max-w-[280px] max-md:text-center" key={st.id}>
              <h2 className="">
                <CounterAnimation number={st.value} />
                <span className="percent">{st.symbol}</span>
              </h2>
              <h6 className="mb-3 mt-5">{st.title}</h6>
              <p>{st.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Counter
