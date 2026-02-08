'use client'

import { useState } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { cn } from '@/lib/utils'
import { LogOut } from 'lucide-react'

export default function OrgSettings() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  const [passwordFields, setPasswordFields] = useState({
    current: '',
    new: '',
    confirm: '',
  })

  const handlePasswordChange = (field: string, value: string) => {
    setPasswordFields((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className={cn('text-3xl font-bold', isEntertainment ? 'text-white' : 'text-gray-900')}>
          الإعدادات
        </h1>
        <p className={cn('mt-2', isEntertainment ? 'text-slate-300' : 'text-gray-600')}>
          إدارة إعدادات حسابك والأمان
        </p>
      </div>

      {/* Change Password */}
      <Card className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
        <CardHeader>
          <CardTitle className={cn(isEntertainment && 'text-white')}>تغيير كلمة المرور</CardTitle>
          <CardDescription className={cn(isEntertainment && 'text-slate-400')}>
            قم بتحديث كلمة المرور للحفاظ على أمان الحساب
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Current Password */}
          <div className="space-y-2">
            <Label htmlFor="current-password" className={cn(isEntertainment && 'text-slate-200')}>
              كلمة المرور الحالية
            </Label>
            <Input
              id="current-password"
              type="password"
              value={passwordFields.current}
              onChange={(e) => handlePasswordChange('current', e.target.value)}
              placeholder="أدخل كلمة المرور الحالية"
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* New Password */}
          <div className="space-y-2">
            <Label htmlFor="new-password" className={cn(isEntertainment && 'text-slate-200')}>
              كلمة المرور الجديدة
            </Label>
            <Input
              id="new-password"
              type="password"
              value={passwordFields.new}
              onChange={(e) => handlePasswordChange('new', e.target.value)}
              placeholder="أدخل كلمة المرور الجديدة"
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Confirm Password */}
          <div className="space-y-2">
            <Label htmlFor="confirm-password" className={cn(isEntertainment && 'text-slate-200')}>
              تأكيد كلمة المرور
            </Label>
            <Input
              id="confirm-password"
              type="password"
              value={passwordFields.confirm}
              onChange={(e) => handlePasswordChange('confirm', e.target.value)}
              placeholder="أعد إدخال كلمة المرور الجديدة"
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Save Button */}
          <Button size="lg" className="w-full">
            تحديث كلمة المرور
          </Button>
        </CardContent>
      </Card>

      <Separator className={cn(isEntertainment && 'bg-slate-700')} />

      {/* Logout Section */}
      <Card className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
        <CardHeader>
          <CardTitle className={cn(isEntertainment && 'text-white')}>تسجيل الخروج</CardTitle>
          <CardDescription className={cn(isEntertainment && 'text-slate-400')}>
            قم بتسجيل الخروج من الحساب الحالي
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button variant="destructive" size="lg" className="gap-2 w-full">
            <LogOut className="h-4 w-4" />
            تسجيل الخروج
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
