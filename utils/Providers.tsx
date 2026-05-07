'use client'
import { ThemeProvider as NextThemesProvider, ThemeProviderProps, useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

function ThemeInitializer() {
  const { setTheme } = useTheme()

  useEffect(() => {
    localStorage.removeItem('theme')
    setTheme('dark')
  }, [setTheme])

  return null
}

export function ThemeModeProvider({ children, ...props }: Readonly<ThemeProviderProps>) {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    setMount(true)
    return () => setMount(false)
  }, [])

  if (!mount) return null

  return (
    <NextThemesProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange {...props}>
      <ThemeInitializer />
      {children}
    </NextThemesProvider>
  )
}
