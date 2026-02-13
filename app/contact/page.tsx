import ContactForm from '@/components/contactpage/ContactForm'
import CTA from '@/components/shared/CTA'
import CtaImageSlider from '@/components/shared/CtaImageSlider'
import LayoutOne from '@/components/shared/LayoutOne'
import PageHero from '@/components/shared/PageHero'

export const metadata = {
  title: 'Contact',
}

const ContactPage = () => {
  return (
    <LayoutOne>
      <PageHero
        title="Let's Work Together"
        badgeTitle="Contact"
        description="Ready to bring your vision to life? Let’s shape your next post production
From raw footage to refined excellence."
        scale
        spacing="pt-[130px] md:pt-[180px] pb-20 sm:pb-32 md:pb-36 lg:pb-36 xl:pb-[100px] relative overflow-hidden"
      />
      <ContactForm />
    </LayoutOne>
  )
}

export default ContactPage
