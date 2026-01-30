import companyLogo1 from '@/public/images/icons/company/company-1.svg'
import companyLogo2 from '@/public/images/icons/company/company-2.svg'
import companyLogo3 from '@/public/images/icons/company/company-3.svg'
import companyLogo4 from '@/public/images/icons/company/company-4.svg'
import companyLogoDark1 from '@/public/images/icons/company/company-dark-1.svg'
import companyLogoDark2 from '@/public/images/icons/company/company-dark-2.svg'
import companyLogoDark3 from '@/public/images/icons/company/company-dark-3.svg'
import companyLogoDark4 from '@/public/images/icons/company/company-dark-4.svg'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

const companyLogos = [
  {
    id: 1,
    light: companyLogo1,
    dark: companyLogoDark1,
  },
  {
    id: 2,
    light: companyLogo2,
    dark: companyLogoDark2,
  },
  {
    id: 3,
    light: companyLogo3,
    dark: companyLogoDark3,
  },
  {
    id: 4,
    light: companyLogo4,
    dark: companyLogoDark4,
  },
  {
    id: 5,
    light: companyLogo2,
    dark: companyLogoDark2,
  },
  {
    id: 6,
    light: companyLogo3,
    dark: companyLogoDark3,
  },
]

const CompanyLogosMarquee = () => {
  return (
    <div className="flex whitespace-nowrap">
      <Marquee pauseOnHover speed={40}>
        <div className="flex shrink-0 items-center justify-center gap-24 px-12">
          {companyLogos.map((logo) => (
            <div key={logo.id}>
              <Image
                src={logo.light}
                alt={`Company Logo ${logo.id}`}
                width={157}
                height={40}
                className="inline dark:hidden"
              />
              <Image
                src={logo.dark}
                alt={`Company Logo ${logo.id}`}
                width={157}
                height={40}
                className="hidden dark:inline"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  )
}

export default CompanyLogosMarquee
