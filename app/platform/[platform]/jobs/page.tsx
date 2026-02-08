'use client'

import { use } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { PageHeader } from '@/components/platform/page-header'
import { JobCard } from '@/components/platform/job-card'
import { SectionCard } from '@/components/platform/section-card'
import { getMockJobs } from '@/lib/mock-data'
import { Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function JobsPage({
  params,
}: {
  params: Promise<{ platform: string }>
}) {
  const resolvedParams = use(params)
  const { platform } = usePlatform()
  const jobs = getMockJobs(platform)
  const recommendedJobs = jobs.filter((job) => job.isRecommended)
  const otherJobs = jobs.filter((job) => !job.isRecommended)
  const isEntertainment = platform === 'entertainment'

  return (
    <div>
      <PageHeader title="الوظائف المتاحة" description="استعرض الفرص المناسبة لك وقدم بسهولة" />

      {/* Recommended Section */}
      {recommendedJobs.length > 0 && (
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-4">
            <Sparkles
              className={cn(
                'h-6 w-6',
                isEntertainment
                  ? 'text-pink-400'
                  : platform === 'hajj'
                    ? 'text-green-600'
                    : 'text-blue-600'
              )}
            />
            <h2
              className={cn(
                'text-2xl font-bold',
                isEntertainment ? 'text-white' : 'text-foreground'
              )}
            >
              فرص مقترحة لك
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recommendedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      )}

      {/* All Jobs Section */}
      <div>
        <h2
          className={cn(
            'text-2xl font-bold mb-4',
            isEntertainment ? 'text-white' : 'text-foreground'
          )}
        >
          جميع الوظائف
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {otherJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
      </div>
    </div>
  )
}
