'use client'

import { usePlatform } from '@/contexts/platform-context'
import { Button } from '@/components/ui/button'
import { Bell, User } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Navbar() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  return (
    <header
      className={cn(
        'flex h-16 items-center justify-between border-b px-8',
        isEntertainment
          ? 'bg-purple-950/50 border-pink-500/20 backdrop-blur-sm'
          : 'bg-card border-border'
      )}
    >
      <div>
        <h1 className={cn('text-xl font-bold', isEntertainment ? 'text-white' : 'text-foreground')}>
          مرحباً بك
        </h1>
        <p className={cn('text-sm', isEntertainment ? 'text-pink-300' : 'text-muted-foreground')}>
          استكشف الفرص المتاحة لك
        </p>
      </div>
      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="icon"
          className={cn(
            isEntertainment
              ? 'bg-purple-800/50 border-pink-500/30 text-white hover:bg-purple-700/50'
              : ''
          )}
        >
          <Bell className="h-5 w-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className={cn(
            isEntertainment
              ? 'bg-purple-800/50 border-pink-500/30 text-white hover:bg-purple-700/50'
              : ''
          )}
        >
          <User className="h-5 w-5" />
        </Button>
      </div>
    </header>
  )
}
