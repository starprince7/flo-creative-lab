import localFont from 'next/font/local'

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

export { satoshi }
