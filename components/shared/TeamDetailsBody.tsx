import twitter from '@/public/images/icons/x-twitter.svg'
import twitterDark from '@/public/images/icons/x-twitter-dark.svg'
import facebook from '@/public/images/icons/facebook.svg'
import facebookDark from '@/public/images/icons/facebook-dark.svg'
import youtube from '@/public/images/icons/youtube.svg'
import youtubeDark from '@/public/images/icons/youtube-dark.svg'
import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import RevealWrapper from '../animation/RevealWrapper'

interface TeamDataType {
  image: string
  title: string
  position: string
  description: string
  skills: string[]
  tags: string[]
}

const TeamDetailsBody: React.FC<{ teamData: TeamDataType }> = ({ teamData }) => {
  return (
    <section className="pb-14 pt-32 md:pb-16 md:pt-36 lg:pb-[88px] lg:pt-[200px] xl:pb-[100px]">
      <div className="container">
        <RevealWrapper className="flex flex-col justify-center gap-x-8 gap-y-6 border p-6 dark:border-dark max-lg:items-center md:p-7 lg:flex-row lg:justify-normal lg:p-10">
          <figure className="w-full md:h-[682px] lg:w-[428px]">
            <Image
              src={teamData.image}
              width={682}
              height={428}
              alt="Single Team Member"
              className="aspect-3/2 h-full w-full object-cover"
            />
          </figure>

          <div className="flex-1">
            <h2 className="mb-3 text-3xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">
              {teamData.title}
            </h2>
            <span className="mb-4 inline-block text-lg font-light leading-[20px] text-colorText md:mb-10">
              {teamData.position}
            </span>

            <p className="border-t py-4 dark:border-dark md:py-10">{teamData.description}</p>

            <h3 className="mb-3.5 text-2xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">Skill</h3>
            <ul className="mb-5 md:mb-10">
              {teamData.skills.map((skill: string) => (
                <li className="mr-2 inline-block text-colorText" key={skill}>
                  {skill},
                </li>
              ))}
            </ul>

            <h3 className="mb-3.5 text-2xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">Portfolio</h3>
            <ul className="mb-10 space-x-1 space-y-2">
              {teamData.tags.map((tag: string) => (
                <li className="rv-badge inline-block" key={tag}>
                  <span className="rv-badge-text">{tag}</span>
                </li>
              ))}
            </ul>

            <h3 className="mb-3.5 text-2xl md:mb-5 md:text-4xl md:leading-[1.2] md:tracking-[-1.08px]">Contact</h3>
            <ul className="flex gap-x-5 gap-y-5 md:gap-x-10 md:self-end">
              <li>
                <Link
                  target="_blank"
                  href="https://x.com/home"
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image src={twitter} alt="Twitter" className="inline dark:hidden" />
                  <Image src={twitterDark} alt="Twitter" className="hidden dark:inline" />
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  href="https://www.facebook.com/staticmania"
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image src={facebook} alt="Facebook" className="inline dark:hidden" />
                  <Image src={facebookDark} alt="Facebook" className="hidden dark:inline" />
                </Link>
              </li>

              <li>
                <Link
                  target="_blank"
                  href="https://youtu.be/ceJ82RaW9mM?si=t9f7MrHVZSmeR8Gl"
                  className="transition-transform duration-300 ease-in-out hover:-translate-y-2">
                  <Image src={youtube} alt="YouTube" className="inline dark:hidden" />
                  <Image src={youtubeDark} alt="YouTube" className="hidden dark:inline" />
                </Link>
              </li>
            </ul>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}

export default TeamDetailsBody
