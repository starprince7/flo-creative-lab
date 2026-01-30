import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'
import TermsPolicyBody from '@/components/shared/TermsPolicyBody'
import getMarkDownData from '@/utils/GetMarkDownData'

export const metadata = {
  title: 'Terms & Conditions',
}
export interface TermsDataType {
  slug: string
  content: string
  [key: string]: any
}

const termsData: TermsDataType[] = getMarkDownData('data/policy')

const FAQPage = () => {
  return (
    <LayoutOne>
      <PageHero title="Terms & " italicTitle="Privacy" badgeTitle="Terms" scale />
      <TermsPolicyBody termsData={termsData} />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/14.png' },
            { id: '2', img: '/images/agent/16.png' },
            { id: '3', img: '/images/agent/19.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default FAQPage
