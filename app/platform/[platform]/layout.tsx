import { type ReactNode } from 'react'
import { PlatformProvider } from '@/contexts/platform-context'
import { AppLayout } from '@/components/platform/app-layout'
import type { PlatformType } from '@/lib/themes'

interface PlatformLayoutProps {
  children: ReactNode
  params: Promise<{ platform: PlatformType }>
}

export default async function PlatformLayout({ children, params }: PlatformLayoutProps) {
  const { platform } = await params

  return (
    <PlatformProvider platform={platform}>
      <AppLayout>{children}</AppLayout>
    </PlatformProvider>
  )
}
