import ChangelogBody from '@/components/changelogPage/ChangelogBody'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

const ChangelogPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Changelog"
        badgeTitle="Changelog"
        description="This page is password protected.
Unlock a world of discovery and secrets within!"
        scale
      />
      <ChangelogBody />
      <CTA>
        Let's chat!
        <CtaImageSlider
          slides={[
            { id: '1', img: '/images/agent/04.png' },
            { id: '2', img: '/images/agent/05.png' },
            { id: '3', img: '/images/agent/06.png' },
          ]}
        />
        with us.
        <i className="block font-instrument italic max-md:inline-block max-sm:pl-2 sm:mt-10">A virtual coffee?</i>
      </CTA>
    </LayoutOne>
  )
}

export default ChangelogPage
