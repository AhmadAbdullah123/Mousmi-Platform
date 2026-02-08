'use client'

import { usePlatform } from '@/contexts/platform-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Users, CheckCircle2, XCircle } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function OrgDashboard() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  // Mock statistics data
  const stats = [
    {
      label: 'عدد الوظائف',
      value: '12',
      icon: Briefcase,
      color: 'bg-blue-100 text-blue-700',
    },
    {
      label: 'عدد المتقدمين',
      value: '248',
      icon: Users,
      color: 'bg-purple-100 text-purple-700',
    },
    {
      label: 'المقبولين',
      value: '45',
      icon: CheckCircle2,
      color: 'bg-green-100 text-green-700',
    },
    {
      label: 'المرفوضين',
      value: '18',
      icon: XCircle,
      color: 'bg-red-100 text-red-700',
    },
  ]

  // Mock jobs data
  const jobs = [
    {
      id: 1,
      title: 'مهندس تطوير',
      applicants: 45,
      accepted: 8,
      rejected: 5,
      status: 'نشطة',
    },
    {
      id: 2,
      title: 'متخصص العلاقات العامة',
      applicants: 32,
      accepted: 6,
      rejected: 3,
      status: 'نشطة',
    },
    {
      id: 3,
      title: 'مسؤول الموارد البشرية',
      applicants: 28,
      accepted: 5,
      rejected: 4,
      status: 'مغلقة',
    },
    {
      id: 4,
      title: 'محلل البيانات',
      applicants: 54,
      accepted: 10,
      rejected: 3,
      status: 'نشطة',
    },
    {
      id: 5,
      title: 'مدير المشروع',
      applicants: 39,
      accepted: 7,
      rejected: 2,
      status: 'نشطة',
    },
  ]

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className={cn('text-3xl font-bold', isEntertainment ? 'text-white' : 'text-gray-900')}>
          لوحة التحكم
        </h1>
        <p className={cn('mt-2', isEntertainment ? 'text-slate-300' : 'text-gray-600')}>
          نظرة عامة على المؤسسة والوظائف والمتقدمين
        </p>
      </div>

      {/* Statistics Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = stat.icon
          return (
            <Card key={stat.label} className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className={cn('text-sm font-medium', isEntertainment && 'text-slate-200')}>
                  {stat.label}
                </CardTitle>
                <div className={cn('p-2 rounded-lg', stat.color)}>
                  <Icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent>
                <div className={cn('text-2xl font-bold', isEntertainment && 'text-white')}>
                  {stat.value}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Jobs Summary Table */}
      <Card className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
        <CardHeader>
          <CardTitle className={cn(isEntertainment && 'text-white')}>ملخص الوظائف</CardTitle>
          <CardDescription className={cn(isEntertainment && 'text-slate-400')}>
            قائمة الوظائف النشطة والمغلقة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className={cn(isEntertainment && 'hover:bg-slate-800/50')}>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الوظيفة</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>المتقدمين</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>المقبولين</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>المرفوضين</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الحالة</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الإجراء</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id} className={cn(isEntertainment && 'hover:bg-slate-800/30')}>
                    <TableCell className={cn('font-medium', isEntertainment && 'text-slate-100')}>
                      {job.title}
                    </TableCell>
                    <TableCell className={cn(isEntertainment && 'text-slate-100')}>{job.applicants}</TableCell>
                    <TableCell>
                      <span className="text-green-600 font-semibold">{job.accepted}</span>
                    </TableCell>
                    <TableCell>
                      <span className="text-red-600 font-semibold">{job.rejected}</span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={job.status === 'نشطة' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="outline" size="sm">
                        عرض التفاصيل
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
