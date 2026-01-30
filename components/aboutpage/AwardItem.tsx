interface AwardsProps {
  year: string
  title: string
  organization: string
  achievement: string
}

const AwardItem = ({ year, title, organization, achievement }: AwardsProps) => {
  return (
    <div className="group relative grid h-full grid-cols-12 items-center overflow-hidden px-5 py-10 text-left max-md:text-center">
      <div className="absolute left-0 top-0 h-full w-full origin-bottom scale-y-0 bg-secondary transition-transform duration-500 group-hover:origin-top group-hover:scale-y-100 dark:bg-primary/70"></div>

      <span className="relative z-20 col-span-2 justify-self-center font-instrument text-[19px] font-normal italic leading-[1.4] transition-colors duration-300 group-hover:text-white max-md:col-span-6">
        {year}
      </span>
      <h3 className="relative z-20 col-span-4 transition-colors duration-300 group-hover:text-white max-md:col-span-6 lg:text-5xl lg:leading-[1.2]">
        {title}
      </h3>
      <p className="relative z-20 col-span-3 pr-1 text-secondary transition-colors duration-300 group-hover:text-white dark:text-backgroundBody max-md:col-span-6 lg:text-[21px] lg:leading-[1.4]">
        {organization}
      </p>
      <p className="relative z-20 col-span-2 text-[21px] leading-[1.4] text-secondary transition-colors duration-300 group-hover:text-white dark:text-backgroundBody max-md:col-span-6">
        {achievement}
      </p>
    </div>
  )
}

export default AwardItem
