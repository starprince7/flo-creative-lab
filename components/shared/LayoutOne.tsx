import { Fragment, ReactNode } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'

const LayoutOne = ({
  children,
}: Readonly<{
  children: ReactNode
}>) => {
  return (
    <Fragment>
      <Navbar />
      <main className="relative z-10 bg-backgroundBody dark:bg-dark lg:mb-[600px]">{children}</main>
      <Footer />
    </Fragment>
  )
}

export default LayoutOne
