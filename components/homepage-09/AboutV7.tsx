import RevealWrapper from '../animation/RevealWrapper'

const AboutV7 = () => {
  return (
    <section className="pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <RevealWrapper className="rv-badge mb-3.5 md:mb-6 lg:mb-12">
          <span className="rv-badge-text">About</span>
        </RevealWrapper>
        <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row lg:items-start">
          <RevealWrapper as="h4" className="mx-auto max-lg:max-w-2xl">
            it's about understanding people, solving problems, and creating meaningful connections
          </RevealWrapper>
          <RevealWrapper className="max-w-[500px]">
            <p className="mb-5 md:mb-10">
              Hello, I'm Alexandra Bennett, a passionate UX designer dedicated to shaping digital experiences that
              seamlessly blend aesthetics with functionality. With a background in cognitive psychology and a love for
              cutting-edge technology, I bring a unique perspective to user-centric design.
            </p>
            <p>
              My journey in the design realm is not just about pixels; it's about understanding people, solving
              problems, and creating meaningful connections. I thrive on the intricacies of crafting intuitive
              interfaces that resonate with users.
            </p>
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default AboutV7
