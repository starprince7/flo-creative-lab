import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'
import AwardItem from './AwardItem'

const awards = [
  { year: '2024', title: 'Site of the Year', organization: 'Awwwards', achievement: 'Gold Winner' },
  { year: '2023', title: 'Design Excellence', organization: 'CSS Design Awards', achievement: 'Best UI Design' },
  { year: '2022', title: 'Innovation Award', organization: 'Adobe Design', achievement: 'Grand Prize' },
  { year: '2021', title: 'Best Portfolio', organization: 'Webby Awards', achievement: "People's Choice" },
]

const AwardsV2 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container mb-8 flex flex-col gap-x-8 gap-y-4 md:mb-20 lg:flex-row lg:justify-between">
        <div>
          <RevealWrapper className="rv-badge">
            <span className="rv-badge-text">Excellence in Design</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear mt-3 lg:mt-5">Recognition & Achievements</h2>
          </TextAppearAnimation>
        </div>
        <TextAppearAnimation>
          <p className="text-appear max-w-[470px] lg:self-end">
            Our commitment to exceptional design has earned global recognition and industry accolades.
          </p>
        </TextAppearAnimation>
      </div>

      <RevealWrapper className="divide-y-[1px] dark:divide-dark dark:last:border-dark max-md:last:border-b [&>*:first-child]:border-t dark:[&>*:first-child]:border-dark">
        {awards.map((award) => (
          <AwardItem key={award.year} {...award} />
        ))}
      </RevealWrapper>
    </section>
  )
}

export default AwardsV2
