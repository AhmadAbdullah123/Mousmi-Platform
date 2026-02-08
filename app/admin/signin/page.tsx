'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Sparkles } from 'lucide-react'

const ADMIN_EMAIL = 'admin@mosmi.sa'
const ADMIN_PASSWORD = 'Admin123'

export default function AdminSignInPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSignIn = () => {
    setError('')
    if (email.trim() === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      router.push('/admin/dashboard')
      return
    }
    setError('بيانات الدخول غير صحيحة. استخدم الحساب التجريبي.')
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">موسمي</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">تسجيل دخول الإدارة</h1>
          <p className="text-gray-600">دخول خاص بلوحة التحكم</p>
        </div>

        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle>بيانات الدخول</CardTitle>
            <CardDescription>استخدم بيانات الإدارة التجريبية للدخول</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="admin-email">البريد الإلكتروني</Label>
              <Input
                id="admin-email"
                type="email"
                placeholder="admin@mosmi.sa"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="text-right"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="admin-password">كلمة المرور</Label>
              <Input
                id="admin-password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="text-right"
              />
            </div>
            {error && <p className="text-sm text-red-600">{error}</p>}
            <Button onClick={handleSignIn} size="lg" className="w-full" disabled={!email || !password}>
              تسجيل الدخول
            </Button>
            <div className="rounded-lg border bg-muted/40 p-3 text-xs text-muted-foreground">
              الحساب التجريبي: {ADMIN_EMAIL} / {ADMIN_PASSWORD}
            </div>
          </CardContent>
        </Card>

        <div className="mt-6 text-center">
          <Link href="/" className="text-sm text-blue-600 hover:text-blue-700 font-semibold">
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  )
}
