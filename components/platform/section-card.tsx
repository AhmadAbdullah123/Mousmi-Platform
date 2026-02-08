'use client'

import { type ReactNode } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface SectionCardProps {
  title: string
  description?: string
  children: ReactNode
  className?: string
}

export function SectionCard({ title, description, children, className }: SectionCardProps) {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'
  const isHajj = platform === 'hajj'

  return (
    <Card
      className={cn(
        'border-2 shadow-md',
        isEntertainment
          ? 'bg-gradient-to-br from-slate-900/95 to-indigo-950/90 border-fuchsia-500/20 backdrop-blur-sm shadow-fuchsia-500/5'
          : isHajj
            ? 'bg-gradient-to-br from-white via-amber-50/20 to-emerald-50/50 border-emerald-200 shadow-emerald-500/10'
            : 'border-blue-200',
        className
      )}
    >
      <CardHeader>
        <CardTitle className={cn(
          'text-xl', 
          isEntertainment 
            ? 'text-slate-100' 
            : isHajj
              ? 'text-emerald-800'
              : 'text-foreground'
        )}>
          {title}
        </CardTitle>
        {description && (
          <CardDescription className={cn(
            isEntertainment 
              ? 'text-fuchsia-300' 
              : isHajj
                ? 'text-teal-700'
                : 'text-muted-foreground'
          )}>
            {description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>{children}</CardContent>
    </Card>
  )
}
