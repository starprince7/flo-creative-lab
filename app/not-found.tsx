import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'
import Link from 'next/link'

export const metadata = {
  title: '404 || Not Found',
}

const NotFound = () => {
  return (
    <main className="relative z-10 mb-0 bg-backgroundBody dark:bg-dark">
      <section className="relative h-screen overflow-hidden pt-36 md:pt-12 lg:pt-0 2xl:pt-12">
        <HeroGradientAnimation />
        <div className="container">
          <RevealWrapper className="flex flex-col items-center justify-center">
            <h1 className="font-instrument text-[180px] md:text-[490px] md:leading-[1.05]">404</h1>
            <h2 className="mb-8 mt-8 text-[36px] font-normal leading-[1.1] max-lg:leading-[1.33] md:mb-[50px] lg:text-[87px] lg:tracking-[-2.83px]">
              Page not Found
            </h2>
            <Link href="/" className="rv-button rv-button-primary">
              <div className="rv-button-top text-center">
                <span>Back to Homepage</span>
              </div>
              <div className="rv-button-bottom text-center">
                <span className="text-nowrap">Back to Homepage</span>
              </div>
            </Link>
          </RevealWrapper>
        </div>
      </section>
    </main>
  )
}

export default NotFound
