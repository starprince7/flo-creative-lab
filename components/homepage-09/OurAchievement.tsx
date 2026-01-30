import CounterAnimation from '@/utils/CounterAnimation'
import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const cardData = [
  { number: 36, label: 'Years of Experience', prefix: '' },
  { number: 118, label: 'Successful Projects', prefix: '+' },
  { number: 13, label: 'Awards Winning', prefix: '' },
]

const OurAchievement = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="text-center">
          <TextAppearAnimation>
            <h2 className="text-appear mx-auto mb-8 md:mb-16">
              Crafting timeless designs for <br /> inspired living
            </h2>
          </TextAppearAnimation>
        </div>
        <div className="flex items-center justify-center gap-[30px] max-xl:flex-wrap">
          {cardData.map((card, index) => (
            <RevealWrapper
              key={index}
              className="flex min-h-[210px] min-w-[320px] flex-col items-center justify-center space-y-3 border px-9 py-7 dark:border-dark lg:px-16 lg:py-10">
              <h2 className="lg:text-7xl">
                {card.prefix} <CounterAnimation number={card.number} />
              </h2>
              <p>{card.label}</p>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurAchievement
