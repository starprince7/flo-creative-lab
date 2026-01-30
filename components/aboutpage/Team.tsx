'use client'
import Image from 'next/image'
import { useState } from 'react'
import teamMembers from '@/data/teamMemberData.json'
import twiterLogo from '@/public/images/icons/x-twitter.svg'
import twiterDarkLogo from '@/public/images/icons/x-twitter-dark.svg'
import youtubeLogo from '@/public/images/icons/youtube.svg'
import youtubeDarkLogo from '@/public/images/icons/youtube-dark.svg'
import facebookLogo from '@/public/images/icons/facebook.svg'
import facebookDarkLogo from '@/public/images/icons/facebook-dark.svg'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'

interface TeamMember {
  id: string
  name: string
  role: string
  image: string
  bio: string
  socialLinks: {
    twitter?: string
    facebook?: string
    youtube?: string
  }
}

const Team = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember>(teamMembers[0])
  const [isTransitioning, setIsTransitioning] = useState(false)

  const handleMemberChange = (member: TeamMember) => {
    if (member.id === selectedMember.id) return

    setIsTransitioning(true)
    setTimeout(() => {
      setSelectedMember(member)
      setIsTransitioning(false)
    }, 300)
  }

  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <RevealWrapper className="container">
        {/* Main profile card */}
        <div
          className={`our-team-details flex flex-col gap-10 gap-x-[30px] border bg-backgroundBody p-5 dark:border-dark dark:bg-dark max-md:items-center max-md:justify-center lg:flex-row lg:p-10 ${isTransitioning ? 'transitioning' : ''}`}>
          <figure className="max-lg:w-full lg:min-h-[372px] lg:min-w-[330px]">
            <Image
              src={selectedMember.image}
              width={330}
              height={372}
              alt={selectedMember.name}
              className="w-full object-cover"
            />
          </figure>

          <div className="flex-1">
            <div className="mb-5 flex flex-col justify-between gap-y-10 md:flex-row lg:mb-10">
              <div>
                <h2 className="mb-3 lg:text-4xl lg:leading-[1.2] lg:-tracking-[1.08px]">{selectedMember.name}</h2>
                <p className="text-lg font-light leading-[20px]">{selectedMember.role}</p>
              </div>

              <ul className="flex gap-5">
                {selectedMember.socialLinks.twitter && (
                  <li>
                    <Link
                      href={selectedMember.socialLinks.twitter}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={twiterLogo} alt="Twitter" width={24} height={24} className="inline dark:hidden" />
                      <Image src={twiterDarkLogo} alt="Twitter" width={24} height={24} className="hidden dark:inline" />
                    </Link>
                  </li>
                )}
                {selectedMember.socialLinks.facebook && (
                  <li>
                    <a
                      href={selectedMember.socialLinks.facebook}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={facebookLogo} alt="Facebook" width={24} height={24} className="inline dark:hidden" />
                      <Image
                        src={facebookDarkLogo}
                        alt="Facebook"
                        width={24}
                        height={24}
                        className="hidden dark:inline"
                      />
                    </a>
                  </li>
                )}
                {selectedMember.socialLinks.youtube && (
                  <li>
                    <a
                      href={selectedMember.socialLinks.youtube}
                      target="_blank"
                      className="transition-transform duration-200 ease-in-out hover:-translate-y-1">
                      <Image src={youtubeLogo} alt="YouTube" width={24} height={24} className="inline dark:hidden" />
                      <Image
                        src={youtubeDarkLogo}
                        alt="YouTube"
                        width={24}
                        height={24}
                        className="hidden dark:inline"
                      />
                    </a>
                  </li>
                )}
              </ul>
            </div>

            <div className="max-w-[730px] border-t pt-5 dark:border-dark lg:pt-10">
              <p>{selectedMember.bio}</p>
            </div>
          </div>
        </div>

        {/* Team member tabs */}
        <div className="mt-[30px] flex justify-center gap-6 max-xl:flex-wrap">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              onClick={() => handleMemberChange(member)}
              className={`tab-member flex h-auto max-w-[350px] items-center gap-5 border p-5 dark:border-dark 2xl:max-w-[370px] ${
                selectedMember.id === member.id ? 'tab-active' : ''
              }`}>
              <figure className="relative h-[130px] w-[130px]">
                <Image src={member.image} alt={member.name} fill className="object-cover" sizes="130px" />
              </figure>
              <div className="text-left">
                <h3 className="mb-3 text-nowrap text-2xl leading-[1.2] tracking-[-0.72px]">{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </RevealWrapper>
    </section>
  )
}

export default Team
