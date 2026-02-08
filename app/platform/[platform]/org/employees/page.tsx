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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { cn } from '@/lib/utils'
import { Plus, Trash2, Edit2 } from 'lucide-react'

interface Employee {
  id: number
  name: string
  email: string
  role: 'CEO' | 'HR'
  status: 'نشط' | 'غير نشط'
}

export default function OrgEmployees() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  // Mock employees data
  const [employees, setEmployees] = useState<Employee[]>([
    {
      id: 1,
      name: 'أحمد محمد',
      email: 'ahmed@company.com',
      role: 'CEO',
      status: 'نشط',
    },
    {
      id: 2,
      name: 'فاطمة علي',
      email: 'fatima@company.com',
      role: 'HR',
      status: 'نشط',
    },
    {
      id: 3,
      name: 'سارة حسن',
      email: 'sarah@company.com',
      role: 'HR',
      status: 'نشط',
    },
  ])

  const [isOpen, setIsOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'HR' as const,
  })

  const handleAddEmployee = () => {
    if (formData.name && formData.email && formData.role) {
      setEmployees((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          name: formData.name,
          email: formData.email,
          role: formData.role,
          status: 'نشط',
        },
      ])
      setFormData({ name: '', email: '', role: 'HR' })
      setIsOpen(false)
    }
  }

  const handleRemoveEmployee = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id))
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className={cn('text-3xl font-bold', isEntertainment ? 'text-white' : 'text-gray-900')}>
            إدارة الموظفين
          </h1>
          <p className={cn('mt-2', isEntertainment ? 'text-slate-300' : 'text-gray-600')}>
            إضافة وحذف وتعديل موظفي المؤسسة
          </p>
        </div>

        {/* Add Employee Dialog */}
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger asChild>
            <Button size="lg" className="gap-2">
              <Plus className="h-4 w-4" />
              إضافة موظف
            </Button>
          </DialogTrigger>
          <DialogContent className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
            <DialogHeader>
              <DialogTitle className={cn(isEntertainment && 'text-white')}>إضافة موظف جديد</DialogTitle>
              <DialogDescription className={cn(isEntertainment && 'text-slate-400')}>
                أضف موظف جديد من فريق العمل الخاص بك
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="emp-name" className={cn(isEntertainment && 'text-slate-200')}>الاسم</Label>
                <Input
                  id="emp-name"
                  value={formData.name}
                  onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                  placeholder="أدخل اسم الموظف"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-email" className={cn(isEntertainment && 'text-slate-200')}>البريد الإلكتروني</Label>
                <Input
                  id="emp-email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))}
                  placeholder="أدخل البريد الإلكتروني"
                  className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="emp-role" className={cn(isEntertainment && 'text-slate-200')}>الدور الوظيفي</Label>
                <Select value={formData.role} onValueChange={(value: any) => setFormData((prev) => ({ ...prev, role: value }))}>
                  <SelectTrigger className={cn(isEntertainment && 'bg-slate-800 border-slate-700')}>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent className={cn(isEntertainment && 'bg-slate-800 border-slate-700')}>
                    <SelectItem value="CEO">المدير التنفيذي</SelectItem>
                    <SelectItem value="HR">متخصص الموارد البشرية</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button onClick={handleAddEmployee} className="w-full">
                إضافة الموظف
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Employees Table */}
      <Card className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
        <CardHeader>
          <CardTitle className={cn(isEntertainment && 'text-white')}>قائمة الموظفين</CardTitle>
          <CardDescription className={cn(isEntertainment && 'text-slate-400')}>
            جميع الموظفين في المؤسسة
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className={cn(isEntertainment && 'hover:bg-slate-800/50')}>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الاسم</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>البريد الإلكتروني</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الدور</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الحالة</TableHead>
                  <TableHead className={cn('text-right', isEntertainment && 'text-slate-300')}>الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {employees.map((employee) => (
                  <TableRow key={employee.id} className={cn(isEntertainment && 'hover:bg-slate-800/30')}>
                    <TableCell className={cn('font-medium', isEntertainment && 'text-slate-100')}>
                      {employee.name}
                    </TableCell>
                    <TableCell className={cn(isEntertainment && 'text-slate-100')}>{employee.email}</TableCell>
                    <TableCell className={cn(isEntertainment && 'text-slate-100')}>
                      <Badge variant="outline" className={cn(isEntertainment && 'border-slate-600 text-slate-100')}>
                        {employee.role === 'CEO' ? 'المدير التنفيذي' : 'متخصص الموارد البشرية'}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant="default">{employee.status}</Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className={cn(isEntertainment && 'text-slate-100 hover:text-white hover:bg-slate-800')}
                        >
                          <Edit2 className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                          onClick={() => handleRemoveEmployee(employee.id)}
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
    </div>
  )
}
