'use client'

import { usePlatform } from '@/contexts/platform-context'
import type { Job } from '@/lib/mock-data'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { MapPin, Calendar, Briefcase, Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface JobCardProps {
  job: Job
}

export function JobCard({ job }: JobCardProps) {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'
  const isHajj = platform === 'hajj'

  return (
    <Card
      className={cn(
        'group hover:shadow-xl transition-all',
        isEntertainment
          ? 'bg-gradient-to-br from-slate-900/95 to-indigo-950/90 border-fuchsia-500/20 backdrop-blur-sm shadow-lg shadow-fuchsia-500/5'
          : isHajj
            ? 'bg-gradient-to-br from-white via-amber-50/20 to-emerald-50/50 border-emerald-200 shadow-md shadow-emerald-500/10'
            : 'border-2'
      )}
    >
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <CardTitle
                className={cn(
                  'text-xl font-bold',
                  isEntertainment 
                    ? 'text-slate-100' 
                    : isHajj
                      ? 'text-emerald-800'
                      : 'text-foreground'
                )}
              >
                {job.title}
              </CardTitle>
              {job.isRecommended && (
                <div
                  className={cn(
                    'flex items-center gap-1 rounded-full px-2 py-1 text-xs font-semibold shadow-sm',
                    isEntertainment
                      ? 'bg-gradient-to-r from-fuchsia-600 to-purple-600 text-white shadow-fuchsia-500/30'
                      : isHajj
                        ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800'
                        : 'bg-blue-100 text-blue-700'
                  )}
                >
                  <Star className="h-3 w-3" />
                  مقترح لك
                </div>
              )}
            </div>
            <CardDescription
              className={cn(
                'font-semibold',
                isEntertainment 
                  ? 'text-fuchsia-300' 
                  : isHajj
                    ? 'text-teal-700'
                    : 'text-muted-foreground'
              )}
            >
              {job.company}
            </CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="flex flex-wrap gap-4 text-sm">
          <div
            className={cn(
              'flex items-center gap-2',
              isEntertainment 
                ? 'text-slate-300' 
                : isHajj
                  ? 'text-slate-700'
                  : 'text-muted-foreground'
            )}
          >
            <MapPin className="h-4 w-4" />
            {job.location}
          </div>
          <div
            className={cn(
              'flex items-center gap-2',
              isEntertainment 
                ? 'text-slate-300' 
                : isHajj
                  ? 'text-slate-700'
                  : 'text-muted-foreground'
            )}
          >
            <Briefcase className="h-4 w-4" />
            {job.type}
          </div>
          <div
            className={cn(
              'flex items-center gap-2',
              isEntertainment 
                ? 'text-slate-300' 
                : isHajj
                  ? 'text-slate-700'
                  : 'text-muted-foreground'
            )}
          >
            <Calendar className="h-4 w-4" />
            آخر موعد: {job.deadline}
          </div>
        </div>
        <p className={cn(
          'text-sm', 
          isEntertainment 
            ? 'text-slate-200' 
            : isHajj
              ? 'text-slate-600'
              : 'text-muted-foreground'
        )}>
          {job.description}
        </p>
        {job.salary && (
          <p
            className={cn(
              'text-lg font-bold',
              isEntertainment
                ? 'text-fuchsia-400'
                : isHajj
                  ? 'text-emerald-700'
                  : 'text-blue-600'
            )}
          >
            {job.salary}
          </p>
        )}
      </CardContent>
      <CardFooter>
        <Button
          className={cn(
            'w-full font-semibold shadow-md',
            isEntertainment
              ? 'bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-700 hover:to-purple-800 text-white shadow-fuchsia-500/30'
              : isHajj
                ? 'bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-800 text-white shadow-emerald-500/30'
                : 'bg-blue-600 hover:bg-blue-700'
          )}
        >
          التقديم الآن
        </Button>
      </CardFooter>
    </Card>
  )
}
