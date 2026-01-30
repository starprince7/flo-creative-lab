import gradientBg from '@/public/images/gradient-bg.png'
import getMarkDownData from '@/utils/GetMarkDownData'
import Image from 'next/image'
import Link from 'next/link'
import RevealWrapper from '../animation/RevealWrapper'
import SectionHeaderV3 from '../shared/SectionHeaderV3'

export interface CareerJobType {
  slug: string
  content: string
  [key: string]: any
}
interface sectionHeaderProps {
  sectionHeader?: boolean
}

const jobsData: CareerJobType[] = getMarkDownData('data/career')

const Jobs = ({ sectionHeader = false }: sectionHeaderProps) => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-1/2 -z-30 -translate-x-1/2 -translate-y-1/2 scale-x-[2.7] scale-y-[6] sm:scale-y-[4] md:scale-y-[3.4] lg:scale-y-[2.8] xl:scale-y-[2.3] 2xl:scale-y-[1.5]">
        <Image src={gradientBg} alt="gradient-bg" />
      </div>

      {sectionHeader ? (
        <div className="container">
          <SectionHeaderV3
            italicTitle="Available"
            headingTitle="Positions"
            description="We champion athletes, storytellers, and brands that
  shape culture and inspire the world with their
  unique perspectives."
          />
        </div>
      ) : (
        <div className="container">
          <RevealWrapper>
            <h2 className="text-appear text-center">Start your professional journey today</h2>
          </RevealWrapper>
        </div>
      )}

      <div className="mt-[60px] max-lg:px-5 [&>*:not(:last-child)]:mb-6">
        {jobsData?.toReversed()?.map((job) => (
          <RevealWrapper
            as="article"
            key={job.slug}
            className="mx-auto flex max-w-[1170px] flex-col items-center justify-center gap-y-7 border bg-backgroundBody p-6 dark:border-dark dark:bg-dark md:flex-row md:justify-between lg:p-10">
            <div className="flex flex-col flex-wrap justify-center md:justify-normal">
              <div className="space-x-1 space-y-3">
                {job.tags.map((tag: string, idx: number) => (
                  <div className="rv-badge" key={tag}>
                    <span className="rv-badge-text">{tag}</span>
                  </div>
                ))}
              </div>
              <h3 className="mb-4 mt-8 text-3xl leading-[25.2px] tracking-wide">{job.title}</h3>
              <p className="max-w-[720px]">{job.description}</p>
            </div>

            <div className="max-md:w-full">
              <Link
                href={`/career/${job.slug}`}
                className="rv-button rv-button-secondary block w-full md:inline-block md:w-auto">
                <div className="rv-button-top text-center">
                  <span>Apply Now</span>
                </div>
                <div className="rv-button-bottom text-center">
                  <span>Apply Now</span>
                </div>
              </Link>
            </div>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default Jobs
