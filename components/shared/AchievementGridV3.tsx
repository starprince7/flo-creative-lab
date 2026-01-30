import CounterAnimation from '@/utils/CounterAnimation'
import Link from 'next/link'

const stats = [
  { id: 1, label: 'Startups accelerated', value: 81 },
  { id: 2, label: 'Investor ready branding', value: 30, suffix: '+' },
  { id: 3, label: 'Human centered design', value: 99, suffix: '%' },
]

const AchievementGridV3 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="reveal-me flex flex-wrap items-center justify-center gap-[30px]">
          {stats.map(({ id, label, value, suffix }) => (
            <div
              key={id}
              className="flex min-h-[180px] min-w-[280px] flex-col items-center justify-center space-y-3 border p-5 dark:border-dark md:p-[30px] lg:min-h-[212px] lg:min-w-[320px]">
              <h2 className="lg:text-7xl">
                <CounterAnimation number={value} />
                {suffix}
              </h2>
              <p>{label}</p>
            </div>
          ))}
        </div>
        <ul className="reveal-me mt-7 justify-self-center max-md:w-full md:mt-14">
          <li className="mx-auto block w-full text-center md:inline-block md:w-auto">
            <Link href="/team" className="rv-button rv-button-white block md:inline-block">
              <div className="rv-button-top">
                <span>See Our Success Stories</span>
              </div>
              <div className="rv-button-bottom">
                <span>See Our Success Stories</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default AchievementGridV3
