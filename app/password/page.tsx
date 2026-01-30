import RevealWrapper from '@/components/animation/RevealWrapper'
import HeroGradientAnimation from '@/components/shared/HeroGradientAnimation'

const PasswordPage = () => {
  return (
    <main className="relative z-10 bg-backgroundBody dark:bg-dark">
      <section className="relative z-50 h-screen overflow-hidden pt-28 max-md:pb-16 sm:pb-28 md:py-[155px] lg:py-[177px]">
        <HeroGradientAnimation scale />
        <div className="container">
          <RevealWrapper className="text-center">
            <div className="rv-badge">
              <span className="rv-badge-text">Password</span>
            </div>

            <h1 className="mb-3 mt-3.5 sm:mb-4 sm:mt-5 lg:mb-7 lg:mt-9">
              <i className="font-instrument">Protected</i> Page
            </h1>
            <p>
              This page is password protected. <br />
              Unlock a world of discovery and secrets within!
            </p>

            <form className="relative mx-auto mt-8 flex w-full max-w-[570px] bg-secondary text-white max-md:max-w-sm md:mt-14">
              <input
                type="password"
                placeholder="Enter Your Password"
                className="block w-full border-none bg-transparent p-5 text-base focus:outline-none md:p-7"
              />
              <button
                type="submit"
                className="absolute right-3 top-3 inline-block cursor-pointer bg-primary p-3 uppercase text-secondary max-md:text-xs md:right-2 md:top-2 md:p-6 md:leading-[15.4px] md:tracking-[1.12px]">
                Subscribe
              </button>
            </form>
          </RevealWrapper>
        </div>
      </section>
    </main>
  )
}

export default PasswordPage
