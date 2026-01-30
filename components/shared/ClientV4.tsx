import Image from 'next/image'
import RevealWrapper from '../animation/RevealWrapper'

const LOGOS = [
  { light: '/images/marquee-img/invert.svg', dark: '/images/marquee-img/invert-dark.svg', alt: 'Invert Logo' },
  { light: '/images/marquee-img/greenish.svg', dark: '/images/marquee-img/greenish-dark.svg', alt: 'Greenish Logo' },
  { light: '/images/marquee-img/invert.svg', dark: '/images/marquee-img/invert-dark.svg', alt: 'Invert Logo' },
  { light: '/images/marquee-img/greenish.svg', dark: '/images/marquee-img/greenish-dark.svg', alt: 'Greenish Logo' },
  { light: '/images/marquee-img/invert.svg', dark: '/images/marquee-img/invert-dark.svg', alt: 'Invert Logo' },
  { light: '/images/marquee-img/greenish.svg', dark: '/images/marquee-img/greenish-dark.svg', alt: 'Greenish Logo' },
  { light: '/images/marquee-img/invert.svg', dark: '/images/marquee-img/invert-dark.svg', alt: 'Invert Logo' },
  { light: '/images/marquee-img/greenish.svg', dark: '/images/marquee-img/greenish-dark.svg', alt: 'Greenish Logo' },
]

const ClientV4 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper className="mx-auto grid max-w-4xl border-x border-t dark:border-dark max-md:grid-cols-2 md:grid-cols-4 max-md:[&>*:nth-child(2)]:border-r-0 [&>*:nth-child(4)]:border-r-0 max-md:[&>*:nth-child(6)]:border-r-0 [&>*:nth-child(8)]:border-r-0 [&>*]:border-b [&>*]:border-r dark:[&>*]:border-dark">
          {LOGOS.map(({ light, dark, alt }, index) => (
            <figure key={index} className="px-12 py-8">
              <Image src={light} alt={alt} width={120} height={60} className="inline dark:hidden" />
              <Image src={dark} alt={alt} width={120} height={60} className="hidden dark:inline" />
            </figure>
          ))}
        </RevealWrapper>
      </div>
    </section>
  )
}

export default ClientV4
