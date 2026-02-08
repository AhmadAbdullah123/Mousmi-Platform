'use client'

import { usePlatform } from '@/contexts/platform-context'
import { cn } from '@/lib/utils'

interface PageHeaderProps {
  title: string
  description?: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'
  const isHajj = platform === 'hajj'

  return (
    <div className="mb-8">
      <h1
        className={cn(
          'text-3xl font-bold mb-2',
          isEntertainment
            ? 'text-slate-100'
            : isHajj
              ? 'text-emerald-800'
              : 'text-blue-900'
        )}
      >
        {title}
      </h1>
      {description && (
        <p className={cn(
          'text-lg', 
          isEntertainment 
            ? 'text-fuchsia-300' 
            : isHajj
              ? 'text-teal-700'
              : 'text-muted-foreground'
        )}>
          {description}
        </p>
      )}
    </div>
  )
}
