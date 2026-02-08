'use client'

import { useState } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge } from '@/components/ui/badge'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { cn } from '@/lib/utils'
import { Plus, Trash2, Users, Calendar } from 'lucide-react'

interface Job {
  id: number
  title: string
  location: string
  applicants: number
  status: 'نشطة' | 'مغلقة'
}

interface Candidate {
  id: number
  name: string
  email: string
  status: 'قيد الانتظار' | 'مقبول' | 'مرفوض'
}

export default function OrgJobs() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  // Mock jobs data
  const [jobs, setJobs] = useState<Job[]>([
    {
      id: 1,
      title: 'مهندس تطوير',
      location: 'الرياض',
      applicants: 45,
      status: 'نشطة',
    },
    {
      id: 2,
      title: 'متخصص التسويق',
      location: 'الدمام',
      applicants: 32,
      status: 'نشطة',
    },
    {
      id: 3,
      title: 'مدير المشروع',
      location: 'جدة',
      applicants: 28,
      status: 'مغلقة',
    },
  ])

  const [selectedJob, setSelectedJob] = useState<Job | null>(null)
  const [showAddJob, setShowAddJob] = useState(false)
  const [showCandidates, setShowCandidates] = useState(false)
  const [selectedCandidate, setSelectedCandidate] = useState<Candidate | null>(null)
  const [showInterviewDate, setShowInterviewDate] = useState(false)

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    location: '',
    duration: '',
    requirements: '',
  })

  // Mock candidates for selected job
  const [candidates] = useState<Candidate[]>([
    { id: 1, name: 'محمد أحمد', email: 'mohammad@email.com', status: 'قيد الانتظار' },
    { id: 2, name: 'فاطمة علي', email: 'fatima@email.com', status: 'قيد الانتظار' },
    { id: 3, name: 'سارة حسن', email: 'sarah@email.com', status: 'قيد الانتظار' },
    { id: 4, name: 'علي محمود', email: 'ali@email.com', status: 'قيد الانتظار' },
  ])

  const handleAddJob = () => {
    if (formData.title && formData.location) {
      setJobs((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          title: formData.title,
          location: formData.location,
          applicants: 0,
          status: 'نشطة',
        },
      ])
      setFormData({ title: '', description: '', location: '', duration: '', requirements: '' })
      setShowAddJob(false)
    }
  }

  const handleDeleteJob = (id: number) => {
    setJobs((prev) => prev.filter((job) => job.id !== id))
  }

  const handleAcceptCandidate = (candidate: Candidate) => {
    setSelectedCandidate(candidate)
    setShowInterviewDate(true)
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={cn('text-3xl font-bold', isEntertainment ? 'text-white' : 'text-gray-900')}>
            إدارة الوظائف
          </h1>
          <p className={cn('mt-2', isEntertainment ? 'text-slate-300' : 'text-gray-600')}>
            إضافة وحذف الوظائف وعرض المتقدمين
          </p>
        </div>

        {/* Add Job Dialog */}
        <Dialog open={showAddJob} onOpenChange={setShowAddJob}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2">
              <Plus className="h-4 w-4" />
              إضافة وظيفة
            </Button>
          </DialogTrigger>
          <DialogContent className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
            <DialogHeader>
              <DialogTitle className={cn(isEntertainment && 'text-white')}>إضافة وظيفة جديدة</DialogTitle>
              <DialogDescription className={cn(isEntertainment && 'text-slate-400')}>
                أضف وظيفة جديدة للمؤسسة
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="job-title" className={cn(isEntertainment && 'text-slate-200')}>اسم الوظيفة</Label>
                <Input
                  id="job-title"
                  value={formData.title}
                  onChange={(e) => setFormData((prev) => ({ ...prev, title: e.target.value }))}
                  placeholder="مثال: مهندس تطوير"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-description" className={cn(isEntertainment && 'text-slate-200')}>الوصف</Label>
                <Textarea
                  id="job-description"
                  value={formData.description}
                  onChange={(e) => setFormData((prev) => ({ ...prev, description: e.target.value }))}
                  placeholder="وصف الوظيفة"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-location" className={cn(isEntertainment && 'text-slate-200')}>الموقع</Label>
                <Input
                  id="job-location"
                  value={formData.location}
                  onChange={(e) => setFormData((prev) => ({ ...prev, location: e.target.value }))}
                  placeholder="الرياض"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-duration" className={cn(isEntertainment && 'text-slate-200')}>المدة</Label>
                <Input
                  id="job-duration"
                  value={formData.duration}
                  onChange={(e) => setFormData((prev) => ({ ...prev, duration: e.target.value }))}
                  placeholder="6 أشهر"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="job-requirements" className={cn(isEntertainment && 'text-slate-200')}>المتطلبات</Label>
                <Textarea
                  id="job-requirements"
                  value={formData.requirements}
                  onChange={(e) => setFormData((prev) => ({ ...prev, requirements: e.target.value }))}
                  placeholder="المتطلبات والمهارات المطلوبة"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <Button onClick={handleAddJob} className="w-full">
                إضافة الوظيفة
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Jobs Table */}
      <Card className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
        <CardHeader>
          <CardTitle className={cn(isEntertainment && 'text-white')}>قائمة الوظائف</CardTitle>
          <CardDescription className={cn(isEntertainment && 'text-slate-400')}>
            جميع الوظائف المنشورة والمغلقة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className={cn(isEntertainment && 'hover:bg-slate-800/50')}>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>اسم الوظيفة</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الموقع</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>المتقدمين</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الحالة</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {jobs.map((job) => (
                  <TableRow key={job.id} className={cn(isEntertainment && 'hover:bg-slate-800/30')}>
                    <TableCell className={cn('font-medium', isEntertainment && 'text-slate-100')}>
                      {job.title}
                    </TableCell>
                    <TableCell className={cn(isEntertainment && 'text-slate-100')}>{job.location}</TableCell>
                    <TableCell className={cn(isEntertainment && 'text-slate-100')}>{job.applicants}</TableCell>
                    <TableCell>
                      <Badge variant={job.status === 'نشطة' ? 'default' : 'secondary'}>
                        {job.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Dialog open={showCandidates && selectedJob?.id === job.id} onOpenChange={setShowCandidates}>
                          <DialogTrigger asChild>
                            <Button
                              variant="ghost"
                              size="sm"
                              className={cn('gap-2', isEntertainment && 'text-slate-100 hover:text-white hover:bg-slate-800')}
                              onClick={() => setSelectedJob(job)}
                            >
                              <Users className="h-4 w-4" />
                              المتقدمين
                            </Button>
                          </DialogTrigger>
                          <DialogContent className={cn('max-w-2xl', isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
                            <DialogHeader>
                              <DialogTitle className={cn(isEntertainment && 'text-white')}>
                                متقدمي وظيفة {job.title}
                              </DialogTitle>
                              <DialogDescription className={cn(isEntertainment && 'text-slate-400')}>
                                قائمة المتقدمين للوظيفة
                              </DialogDescription>
                            </DialogHeader>
                            <div className="space-y-3 max-h-96 overflow-y-auto">
                              {candidates.map((candidate) => (
                                <div
                                  key={candidate.id}
                                  className={cn(
                                    'flex items-center justify-between p-3 rounded-lg border',
                                    isEntertainment ? 'bg-slate-800 border-slate-700' : 'bg-gray-50'
                                  )}
                                >
                                  <div>
                                    <p className={cn('font-semibold', isEntertainment && 'text-white')}>
                                      {candidate.name}
                                    </p>
                                    <p className={cn('text-sm', isEntertainment ? 'text-slate-400' : 'text-gray-600')}>
                                      {candidate.email}
                                    </p>
                                  </div>
                                  <div className="flex gap-2">
                                    <Button
                                      variant="default"
                                      size="sm"
                                      className="bg-green-600 hover:bg-green-700"
                                      onClick={() => handleAcceptCandidate(candidate)}
                                    >
                                      قبول
                                    </Button>
                                    <Button variant="destructive" size="sm">
                                      رفض
                                    </Button>
                                    <Button variant="outline" size="sm">
                                      عرض السيرة
                                    </Button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleDeleteJob(job.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Interview Date Dialog */}
      <Dialog open={showInterviewDate} onOpenChange={setShowInterviewDate}>
        <DialogContent className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
          <DialogHeader>
            <DialogTitle className={cn(isEntertainment && 'text-white')}>تحديد موعد المقابلة</DialogTitle>
            <DialogDescription className={cn(isEntertainment && 'text-slate-400')}>
              حدد التاريخ والوقت للمقابلة مع {selectedCandidate?.name}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="interview-date" className={cn(isEntertainment && 'text-slate-200')}>
                التاريخ
              </Label>
              <Input
                id="interview-date"
                type="date"
                className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="interview-time" className={cn(isEntertainment && 'text-slate-200')}>
                الوقت
              </Label>
              <Input
                id="interview-time"
                type="time"
                className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
              />
            </div>
            <Button className="w-full gap-2">
              <Calendar className="h-4 w-4" />
              تأكيد المقابلة
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
