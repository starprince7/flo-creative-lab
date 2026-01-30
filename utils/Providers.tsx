'use client'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from 'next-themes'
import { useEffect, useState } from 'react'

export function ThemeModeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)

    return () => {
      setMount(false)
    }
  }, [])

  if (!mount) return null

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange {...props}>
      {children}
    </NextThemesProvider>
  )
}
