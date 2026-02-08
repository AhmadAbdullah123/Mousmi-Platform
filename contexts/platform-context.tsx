'use client'

import { createContext, useContext, type ReactNode } from 'react'
import { type PlatformType, type PlatformTheme, platformThemes } from '@/lib/themes'

interface PlatformContextType {
  platform: PlatformType
  theme: PlatformTheme
}

const PlatformContext = createContext<PlatformContextType | undefined>(undefined)

export function PlatformProvider({
  children,
  platform,
}: {
  children: ReactNode
  platform: PlatformType
}) {
  const theme = platformThemes[platform]

  return (
    <PlatformContext.Provider value={{ platform, theme }}>
      {children}
    </PlatformContext.Provider>
  )
}

export function usePlatform() {
  const context = useContext(PlatformContext)
  if (context === undefined) {
    throw new Error('usePlatform must be used within a PlatformProvider')
  }
  return context
}
