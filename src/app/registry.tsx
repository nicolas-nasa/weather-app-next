'use client'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider as NextThemesProvider } from 'next-themes'
import React from 'react'
import './global.css'

export default function StyledComponentsRegistry({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <NextUIProvider>
      <NextThemesProvider
        attribute='class'
        defaultTheme='dark'
        themes={['light', 'dark']}
      >
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
