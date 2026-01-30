import RevealWrapper from '../animation/RevealWrapper'

const versionData = [
  {
    id: 1,
    version: 'V.2.0.0',
    description:
      'Major update including new design system, improved performance, and enhanced user experience features.',
  },
  {
    id: 2,
    version: 'V.1.0.0',
    description: 'Initial release of MyAgency with core features and responsive design implementation.',
  },
]

const ChangelogBody = () => {
  return (
    <section className="pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {versionData.map((item) => (
          <RevealWrapper
            key={item.id}
            className="reveal-me mx-auto min-h-[206px] max-w-[970px] border p-10 first:mb-[30px] dark:border-dark">
            <h3 className="mb-5 md:text-[40px] md:leading-[1.2]">{item.version}</h3>
            <p>{item.description}</p>
          </RevealWrapper>
        ))}
      </div>
    </section>
  )
}

export default ChangelogBody
