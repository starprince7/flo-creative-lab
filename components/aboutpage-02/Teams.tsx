'use client'
import Image from 'next/image'
import { FC, useState } from 'react'
import { ITeamMember } from './TeamGallery'
import Link from 'next/link'

interface TeamsProps {
  team: ITeamMember[]
}

const Teams: FC<TeamsProps> = ({ team }) => {
  const [activeIndex, setActiveIndex] = useState(0)

  return (
    <div className="flex h-96 items-center justify-center space-x-4 overflow-hidden">
      {team.map((member, index) => (
        <div
          key={member.id}
          className={`group relative h-96 cursor-pointer transition-all duration-500 ease-in-out ${
            index === activeIndex ? 'w-96' : 'w-40'
          }`}
          onMouseEnter={() => setActiveIndex(index)}>
          <Image
            width={344}
            height={388}
            src={member.image}
            alt={`Team member ${member.title}`}
            className="h-full w-full object-cover shadow-lg transition-all duration-300 ease-in-out"
          />
          <div
            className={`underline-hover-effect absolute bottom-0 left-0 right-0 m-5 bg-primary px-5 py-7 transition-all duration-500 ${index === activeIndex ? 'translate-y-0 opacity-100' : '-translate-y-40 opacity-0'}`}>
            <Link href={`/team/${member.id}`}>
              <div className="project-title mb-1">
                <h3 className="text-4xl leading-tight tracking-tight dark:text-secondary">{member.title}</h3>
              </div>
            </Link>
            <p className="text-lg font-light leading-5 text-black/70 dark:text-secondary">{member.position}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Teams
