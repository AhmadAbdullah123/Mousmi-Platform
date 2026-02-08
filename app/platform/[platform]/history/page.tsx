'use client'

import { usePlatform } from '@/contexts/platform-context'
import { PageHeader } from '@/components/platform/page-header'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { getMockApplications } from '@/lib/mock-data'
import { CheckCircle, Clock, XCircle, Calendar, Building2 } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function HistoryPage() {
  const { platform } = usePlatform()
  const applications = getMockApplications(platform)
  const isEntertainment = platform === 'entertainment'

  const getStatusIcon = (status: string) => {
    if (status === 'accepted')
      return <CheckCircle className="h-5 w-5 text-green-500" />
    if (status === 'rejected') return <XCircle className="h-5 w-5 text-red-500" />
    return <Clock className="h-5 w-5 text-yellow-500" />
  }

  const getStatusLabel = (status: string) => {
    if (status === 'accepted') return 'مقبول'
    if (status === 'rejected') return 'مرفوض'
    return 'قيد الانتظار'
  }

  const getStatusBadgeStyles = (status: string) => {
    if (status === 'accepted') return 'bg-green-100 text-green-700 border-green-200'
    if (status === 'rejected') return 'bg-red-100 text-red-700 border-red-200'
    return 'bg-yellow-100 text-yellow-700 border-yellow-200'
  }

  return (
    <div>
      <PageHeader
        title="السجل"
        description="تتبع حالة طلباتك وتقديماتك السابقة"
      />

      <div className="space-y-4">
        {applications.map((application) => (
          <Card
            key={application.id}
            className={cn(
              'border-2',
              isEntertainment
                ? 'bg-purple-900/50 border-pink-500/30 backdrop-blur-sm'
                : 'hover:shadow-md transition-shadow'
            )}
          >
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <CardTitle
                    className={cn(
                      'text-xl font-bold mb-2',
                      isEntertainment ? 'text-white' : 'text-foreground'
                    )}
                  >
                    {application.jobTitle}
                  </CardTitle>
                  <div className="flex items-center gap-4 text-sm">
                    <div
                      className={cn(
                        'flex items-center gap-2',
                        isEntertainment ? 'text-pink-300' : 'text-muted-foreground'
                      )}
                    >
                      <Building2 className="h-4 w-4" />
                      {application.company}
                    </div>
                    <div
                      className={cn(
                        'flex items-center gap-2',
                        isEntertainment ? 'text-gray-300' : 'text-muted-foreground'
                      )}
                    >
                      <Calendar className="h-4 w-4" />
                      تاريخ التقديم: {application.appliedDate}
                    </div>
                  </div>
                </div>
                <div
                  className={cn(
                    'flex items-center gap-2 rounded-full border-2 px-4 py-2 text-sm font-semibold',
                    isEntertainment && application.status === 'pending'
                      ? 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30'
                      : isEntertainment && application.status === 'accepted'
                        ? 'bg-green-500/20 text-green-300 border-green-500/30'
                        : isEntertainment && application.status === 'rejected'
                          ? 'bg-red-500/20 text-red-300 border-red-500/30'
                          : getStatusBadgeStyles(application.status)
                  )}
                >
                  {getStatusIcon(application.status)}
                  {getStatusLabel(application.status)}
                </div>
              </div>
            </CardHeader>
          </Card>
        ))}

        {applications.length === 0 && (
          <Card
            className={cn(
              'border-2 text-center py-12',
              isEntertainment
                ? 'bg-purple-900/50 border-pink-500/30 backdrop-blur-sm'
                : ''
            )}
          >
            <CardContent>
              <p
                className={cn(
                  'text-lg',
                  isEntertainment ? 'text-gray-300' : 'text-muted-foreground'
                )}
              >
                لا توجد طلبات سابقة
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  )
}
