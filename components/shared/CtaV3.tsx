import ContactForm from './ContactForm'
import CtaImageSlider from './CtaImageSlider'

const CtaV3 = () => {
  return (
    <section className="pb-[70px] pt-14 md:pt-16 lg:pb-[120px] lg:pt-[88px] xl:pt-[100px]">
      <div className="container">
        <div className="reveal-me">
          <h2 className="text-center font-normal xl:text-[96px] xl:leading-[1.1] xl:tracking-[-2.88px]">
            Let's
            <CtaImageSlider
              slides={[
                { id: '1', img: '/images/agent/07.png' },
                { id: '2', img: '/images/agent/02.jpg' },
                { id: '3', img: '/images/agent/06.png' },
              ]}
            />
            Create
            <i className="mx-auto mt-3 block font-instrument italic max-md:inline-block max-sm:ml-3 sm:mt-10">
              Something Iconic
            </i>
          </h2>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}

export default CtaV3
