import localFont from 'next/font/local'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  variable: '--font-poppins',
  weight: ['400', '500', '600', '700', '800', '900'],
})

const satoshi = localFont({
  src: [
    {
      path: '../public/fonts/Satoshi-Regular.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Satoshi-Medium.woff',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-satoshi',
})

export { satoshi, poppins }
