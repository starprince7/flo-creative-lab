import { TermsDataType } from '@/app/terms/page'
import { FC } from 'react'
import ReactMarkdown from 'react-markdown'
import rehypeSlug from 'rehype-slug'
import RevealWrapper from '../animation/RevealWrapper'

interface PropsTypes {
  termsData: TermsDataType[]
  heading?: boolean
}
const TermsPolicyBody: FC<PropsTypes> = ({ termsData, heading = false }) => {
  return (
    <section className="relative overflow-hidden pb-14 md:pb-16 lg:pb-[88px] xl:pb-[100px]">
      <div className="container">
        {!heading ? (
          <RevealWrapper>
            <h2 className="mb-5 text-xl sm:text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              The contents of a Terms and Conditions (T&C) agreement can differ based on the specific service or product
              provided. However, for a subscription-based design agency, you'll typically find the following key
              elements:
            </h2>
          </RevealWrapper>
        ) : (
          <RevealWrapper>
            <h2 className="mb-5 text-[25px] md:mb-10 md:text-4xl md:leading-[1.5]">
              Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard
              your information when you use our services. Please read this policy carefully to understand our practices
              regarding your personal data.
            </h2>
          </RevealWrapper>
        )}

        <div className="blog-details-body">
          {termsData.map((terms) => (
            <RevealWrapper key={terms.slug}>
              <ReactMarkdown rehypePlugins={[[rehypeSlug]]}>{terms.content}</ReactMarkdown>
            </RevealWrapper>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TermsPolicyBody
