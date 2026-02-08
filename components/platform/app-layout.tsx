'use client'

import { type ReactNode, useState } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { Sidebar } from './sidebar'
import { Navbar } from './navbar'
import { ChatbotButton } from './chatbot-button'
import { cn } from '@/lib/utils'
import { Sheet, SheetContent } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { PanelLeft } from 'lucide-react'

interface AppLayoutProps {
  children: ReactNode
}

export function AppLayout({ children }: AppLayoutProps) {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'
  const isHajj = platform === 'hajj'
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div
      className={cn(
        'flex min-h-screen flex-row overflow-hidden',
        isEntertainment 
          ? 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950' 
          : isHajj 
            ? 'bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50'
            : 'bg-background'
      )}
    >
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
      <Sheet open={isSidebarOpen} onOpenChange={setIsSidebarOpen}>
        <SheetContent
          side="right"
          className="w-64 p-0 lg:hidden"
        >
          <Sidebar />
        </SheetContent>
      </Sheet>
      <div className="flex min-w-0 flex-1 flex-col overflow-hidden">
        <div className="lg:hidden border-b bg-card px-4 py-2">
          <Button
            variant="outline"
            size="icon"
            className="h-9 w-9"
            onClick={() => setIsSidebarOpen(true)}
          >
            <PanelLeft className="h-4 w-4" />
          </Button>
        </div>
        <Navbar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden px-4 md:px-8 py-6">
          <div className="w-full max-w-6xl mx-auto min-w-0">{children}</div>
        </main>
      </div>
      <ChatbotButton />
    </div>
  )
}
