import companyClient1 from '@/public/images/icons/company/client-1.svg'
import companyClient2 from '@/public/images/icons/company/client-2.svg'
import companyClient3 from '@/public/images/icons/company/client-3.svg'
import companyClient4 from '@/public/images/icons/company/client-4.svg'
import companyClient5 from '@/public/images/icons/company/client-5.svg'
import companyClient6 from '@/public/images/icons/company/client-6.svg'
import companyClient7 from '@/public/images/icons/company/client-7.svg'
import companyClient8 from '@/public/images/icons/company/client-8.svg'
import companyClient9 from '@/public/images/icons/company/client-9.svg'
import SectionHeader from '../shared/SectionHeader'

import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import RevealWrapper from '../animation/RevealWrapper'
import SwiperSlider from './SwiperSlider'

const company = [
  {
    id: 1,
    logo: companyClient1,
  },
  {
    id: 2,
    logo: companyClient2,
  },
  {
    id: 3,
    logo: companyClient3,
  },
  {
    id: 4,
    logo: companyClient4,
  },
  {
    id: 5,
    logo: companyClient5,
  },
  {
    id: 6,
    logo: companyClient6,
  },
]
const reverseCompany = [
  {
    id: 1,
    logo: companyClient7,
  },
  {
    id: 2,
    logo: companyClient1,
  },
  {
    id: 3,
    logo: companyClient9,
  },

  {
    id: 4,
    logo: companyClient3,
  },
  {
    id: 5,
    logo: companyClient8,
  },
  {
    id: 6,
    logo: companyClient4,
  },
]

const Clients = () => {
  return (
    <section className="relative mb-14 mt-14 overflow-hidden bg-dark py-20 dark:py-0 md:mb-16 md:mt-16 lg:mb-[88px] lg:mt-[88px] lg:py-[120px] dark:lg:py-0 xl:mb-[100px] xl:mt-[100px]">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-center gap-x-10 gap-y-3 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            headingTitle="Trust in us"
            italicTitle="Have"
            serviceHeadingColor
            description="Our agency is your gateway to discovering extraordinary artworks that speak to your aesthetic sensibilities."
          />
        </div>
      </div>
      <RevealWrapper>
        <Marquee speed={70} pauseOnHover>
          <div className="flex items-center justify-between gap-x-20 py-8 md:gap-x-36">
            {company.map((client) => (
              <div key={client.id} className="first:ml-20 md:first:ml-36">
                <Image src={client.logo} alt="client Logo" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>

      <RevealWrapper>
        <Marquee speed={70} pauseOnHover direction="right">
          <div className="flex items-center justify-between gap-x-20 py-8 md:gap-x-36">
            {reverseCompany.map((client) => (
              <div key={client.id} className="first:ml-20 md:first:ml-36">
                <Image src={client.logo} alt="client Logo" />
              </div>
            ))}
          </div>
        </Marquee>
      </RevealWrapper>
      <SwiperSlider />
    </section>
  )
}

export default Clients
