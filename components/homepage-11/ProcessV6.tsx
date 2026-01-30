import RevealWrapper from '../animation/RevealWrapper'
import TextAppearAnimation from '../animation/TextAppearAnimation'

const ProcessV6 = () => {
  return (
    <section className="relative overflow-hidden pb-14 pt-14 md:pb-16 md:pt-16 lg:pb-[88px] lg:pt-[88px] xl:pb-[100px] xl:pt-[100px]">
      <div className="container">
        <div className="mb-8 text-center md:mb-14">
          <RevealWrapper className="rv-badge reveal-me">
            <span className="rv-badge-text">Process</span>
          </RevealWrapper>
          <TextAppearAnimation>
            <h2 className="text-appear my-3">
              Our way of,
              <i className="font-instrument"> doing things </i>
            </h2>
          </TextAppearAnimation>
          <TextAppearAnimation>
            <p className="text-appear">Let me know if you need something more tailored!</p>
          </TextAppearAnimation>
        </div>
        <div className="flex flex-col-reverse gap-x-[100px] gap-y-14 md:flex-row">
          <div className="md:w-1/2 [&>*:not(first-child)]:mb-5 [&>*]:border-b">
            <RevealWrapper className="reveal-me">
              <h5 className="lg:-tracking-[-1.08px]">Concept &amp; Planning</h5>
              <p className="py-3 text-base leading-[1.6]">
                We begin by understanding your goals, audience, and vision. Through collaboration, we develop a creative
                concept, plan the production, and finalize the details to ensure everything aligns with your
                expectations.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h5 className="lg:-tracking-[-1.08px]">Production &amp; Filming</h5>
              <p className="py-3 text-base leading-[1.6]">
                With the plan in place, our experienced team gets to work on set. We handle everything from lighting to
                cinematography, capturing the highest quality footage while staying true to the creative vision.
              </p>
            </RevealWrapper>
            <RevealWrapper className="reveal-me">
              <h5 className="lg:-tracking-[-1.08px]">Editing &amp; Finalization</h5>
              <p className="py-3 text-base leading-[1.6]">
                Once filming is complete, we move into editing. Our team refines the footage, adds effects, music, and
                any necessary revisions, ensuring the final video exceeds your expectations. After approval, we deliver
                the polished video ready for distribution.
              </p>
            </RevealWrapper>
          </div>
          <RevealWrapper as="figure" className="reveal-me md:w-1/2">
            <img src="/images/process/process-thumbnail.png" alt="Marketing professional" className="h-full w-full" />
          </RevealWrapper>
        </div>
      </div>
    </section>
  )
}

export default ProcessV6
