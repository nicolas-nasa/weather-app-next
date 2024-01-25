'use client'
import DarkModeSwitch from '@/components/molecules/darkModeSwitch'
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
    <header className='my-9 flex w-full max-w-full flex-row justify-center gap-7'>
      <h1 className='text-2xl font-bold'> Weather App </h1>
      <DarkModeSwitch
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
    </header>
  )
}
