import teamMemberV2 from '@/data/teamMemberV2.json'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeader from '../shared/SectionHeader'
import Teams from './Teams'

export interface ITeamMember {
  id: string
  image: string
  title: string
  position: string
}

const TeamGallery = () => {
  return (
    <section className="flex items-center justify-center overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container w-full">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-2 md:mb-20 md:flex-row md:items-center lg:justify-between">
          <SectionHeader
            italicTitle="Team"
            headingTitle="Members"
            description=" Here’s a template to introduce a team 
              member in an engaging and professional 
              way."
          />
        </div>

        <RevealWrapper className="max-lg:hidden lg:block">
          <Teams team={teamMemberV2} />
        </RevealWrapper>

        <div className="max-lg:block lg:hidden">
          <div className="relative grid grid-cols-1 items-center justify-center gap-10 sm:grid-cols-2">
            {teamMemberV2?.map((teamM) => (
              <RevealWrapper key={teamM.id} className="relative">
                <Image
                  src={teamM.image}
                  width={344}
                  height={388}
                  alt="Team member 1"
                  className="h-full w-full object-cover shadow-lg"
                />
                <div className="absolute bottom-0 left-0 right-0 m-5 bg-primary px-4 py-4">
                  <Link href={`/team/${teamM.id}`}>
                    <div className="blog-title mb-1">
                      <h3 className="dark:text-secondary lg:text-4xl lg:leading-[1.2] lg:tracking-[-1.08px]">
                        {teamM.title}
                      </h3>
                    </div>
                  </Link>
                  <p className="text-lg font-light leading-5 text-black/70 dark:text-secondary">{teamM.position}</p>
                </div>
              </RevealWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default TeamGallery
