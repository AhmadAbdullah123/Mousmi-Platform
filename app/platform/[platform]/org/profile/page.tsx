'use client'

import { useState } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { cn } from '@/lib/utils'

export default function OrgProfile() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  // Mock organization data
  const [profile, setProfile] = useState({
    name: 'شركة التطوير الرقمي',
    email: 'info@company.com',
    phone: '+966501234567',
    website: 'www.company.com',
    location: 'الرياض، السعودية',
  })

  const [isEditing, setIsEditing] = useState(false)

  const handleChange = (field: string, value: string) => {
    setProfile((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className={cn('text-3xl font-bold', isEntertainment ? 'text-white' : 'text-gray-900')}>
          ملف المؤسسة
        </h1>
        <p className={cn('mt-2', isEntertainment ? 'text-slate-300' : 'text-gray-600')}>
          معلومات المؤسسة والبيانات الأساسية
        </p>
      </div>

      {/* Profile Card */}
      <Card className={cn(isEntertainment && 'bg-slate-900 border-fuchsia-500/20')}>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle className={cn(isEntertainment && 'text-white')}>معلومات المؤسسة</CardTitle>
            <CardDescription className={cn(isEntertainment && 'text-slate-400')}>
              تحديث بيانات المؤسسة والمعلومات الأساسية
            </CardDescription>
          </div>
          <Button
            onClick={() => setIsEditing(!isEditing)}
            variant={isEditing ? 'destructive' : 'default'}
            size="sm"
          >
            {isEditing ? 'إلغاء' : 'تعديل'}
          </Button>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* Name */}
          <div className="space-y-2">
            <Label htmlFor="name" className={cn(isEntertainment && 'text-slate-200')}>اسم المؤسسة</Label>
            <Input
              id="name"
              value={profile.name}
              onChange={(e) => handleChange('name', e.target.value)}
              disabled={!isEditing}
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Email */}
          <div className="space-y-2">
            <Label htmlFor="email" className={cn(isEntertainment && 'text-slate-200')}>البريد الإلكتروني</Label>
            <Input
              id="email"
              type="email"
              value={profile.email}
              onChange={(e) => handleChange('email', e.target.value)}
              disabled={!isEditing}
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Phone */}
          <div className="space-y-2">
            <Label htmlFor="phone" className={cn(isEntertainment && 'text-slate-200')}>رقم الهاتف</Label>
            <Input
              id="phone"
              value={profile.phone}
              onChange={(e) => handleChange('phone', e.target.value)}
              disabled={!isEditing}
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Website */}
          <div className="space-y-2">
            <Label htmlFor="website" className={cn(isEntertainment && 'text-slate-200')}>الموقع الإلكتروني</Label>
            <Input
              id="website"
              value={profile.website}
              onChange={(e) => handleChange('website', e.target.value)}
              disabled={!isEditing}
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Location */}
          <div className="space-y-2">
            <Label htmlFor="location" className={cn(isEntertainment && 'text-slate-200')}>الموقع الجغرافي</Label>
            <Input
              id="location"
              value={profile.location}
              onChange={(e) => handleChange('location', e.target.value)}
              disabled={!isEditing}
              className={cn(isEntertainment && 'bg-slate-800 border-slate-700 text-white')}
            />
          </div>

          {/* Save Button */}
          {isEditing && (
            <Button className="w-full" size="lg">
              حفظ التغييرات
            </Button>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
