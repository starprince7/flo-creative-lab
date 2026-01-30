import RevealWrapperV2 from '../animation/RevealWrapperV2'

const SocialProof = () => {
  return (
    <section className="-z-0">
      <RevealWrapperV2 className="container">
        <div className="relative">
          <div className="z-50 flex items-center justify-center">
            <img src="/images/path-images/social-proof.png" alt="social-proof" className="inline-block dark:hidden" />
            <img
              src="/images/path-images/social-proof-dark.png"
              alt="social-proof"
              className="hidden dark:inline-block"
            />
          </div>
        </div>
      </RevealWrapperV2>
    </section>
  )
}

export default SocialProof
