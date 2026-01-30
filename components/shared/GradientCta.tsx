import gradientBg from '@/public/images/gradient-bg.png'
import Image from 'next/image'
import CtaImageSlider from './CtaImageSlider'

const GradientCta = () => {
  const renderForm = () => (
    <form className="relative mx-auto mt-8 flex w-full max-w-[570px] overflow-hidden bg-secondary text-white max-md:max-w-sm md:mt-10">
      <input
        type="email"
        placeholder="hello@email.com"
        className="block w-full border-none bg-transparent p-5 text-base focus:outline-none md:p-7"
      />
      <button
        type="submit"
        className="absolute right-3 top-3 inline-block cursor-pointer bg-primary p-3 uppercase text-secondary max-md:text-xs md:right-2 md:top-2 md:p-6 md:leading-[15.4px] md:tracking-[1.12px]">
        Subscribe
      </button>
    </form>
  )

  return (
    <section className="relative overflow-hidden pb-20 pt-14 md:pt-16 lg:pb-28 lg:pt-[88px] xl:pt-[100px]">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-x-[2.5] scale-y-[0.60]">
        <Image src={gradientBg} alt="Gradient Bg" />
      </div>
      <div className="container">
        <div className="reveal-me">
          <h2 className="text-center font-normal xl:text-[96px] xl:leading-[1.4] xl:tracking-[-2.88px]">
            Let's chat!
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/agent/01.jpg' },
                { id: '2', img: '/images/agent/02.jpg' },
                { id: '3', img: '/images/agent/03.jpg' },
              ]}
            />
            with us.
            <i className="block font-instrument italic max-md:inline-block max-sm:pl-1.5">A virtual coffee?</i>
          </h2>
        </div>
        {renderForm()}
      </div>
    </section>
  )
}

export default GradientCta
