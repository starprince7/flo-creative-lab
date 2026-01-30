import { Fragment, ReactNode } from 'react'
import FooterV2 from './FooterV2'
import Navbar from './Navbar'

const LayoutTwo = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <Fragment>
      <Navbar />
      <main className="relative z-10 bg-backgroundBody dark:bg-secondary">{children}</main>
      <FooterV2 />
    </Fragment>
  )
}

export default LayoutTwo
