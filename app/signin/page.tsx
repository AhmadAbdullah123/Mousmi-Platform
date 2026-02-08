'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Sparkles, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

type UserRole = 'individual' | 'organization'
type SignInStep = 'role-selection' | 'credentials' | 'otp-verification'

export default function SignInPage() {
  const [role, setRole] = useState<UserRole>('individual')
  const [step, setStep] = useState<SignInStep>('role-selection')
  const [otp, setOtp] = useState('')

  // Individual form state
  const [phoneNumber, setPhoneNumber] = useState('')

  // Organization form state
  const [orgEmail, setOrgEmail] = useState('')
  const [orgPassword, setOrgPassword] = useState('')

  const handleContinueIndividual = () => {
    if (phoneNumber.trim()) {
      setStep('otp-verification')
    }
  }

  const handleContinueOrganization = () => {
    if (orgEmail.trim() && orgPassword.trim()) {
      setStep('otp-verification')
    }
  }

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // OTP verified - would redirect to dashboard in real app
      console.log('OTP verified:', otp)
    }
  }

  const handleBackToCredentials = () => {
    setStep('credentials')
    setOtp('')
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">موسمي</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">تسجيل الدخول</h1>
          <p className="text-gray-600">اختر نوع الحساب وسجل دخولك</p>
        </div>

        {/* Main Card */}
        <Card className="shadow-lg">
          {/* Role Selection Step */}
          {step === 'role-selection' && (
            <>
              <CardHeader>
                <CardTitle>اختر نوع الحساب</CardTitle>
                <CardDescription>اختر ما إذا كنت فرداً أم مؤسسة</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <RadioGroup value={role} onValueChange={(value) => setRole(value as UserRole)}>
                  {/* Individual Option */}
                  <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors" 
                       onClick={() => setRole('individual')}>
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="flex-1 cursor-pointer">
                      <span className="text-base font-semibold text-gray-900">أفراد</span>
                      <p className="text-sm text-gray-600 mt-1">دخول الأفراد والباحثين عن فرص عمل</p>
                    </Label>
                  </div>

                  {/* Organization Option */}
                  <div className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                       onClick={() => setRole('organization')}>
                    <RadioGroupItem value="organization" id="organization" />
                    <Label htmlFor="organization" className="flex-1 cursor-pointer">
                      <span className="text-base font-semibold text-gray-900">مؤسسة</span>
                      <p className="text-sm text-gray-600 mt-1">دخول المؤسسات والشركات</p>
                    </Label>
                  </div>
                </RadioGroup>

                <Button 
                  onClick={() => setStep('credentials')}
                  size="lg"
                  className="w-full gap-2"
                >
                  المتابعة
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </>
          )}

          {/* Credentials Step */}
          {step === 'credentials' && (
            <>
              <CardHeader>
                <CardTitle>
                  {role === 'individual' ? 'دخول الأفراد' : 'دخول المؤسسات'}
                </CardTitle>
                <CardDescription>
                  {role === 'individual' 
                    ? 'أدخل رقم الهاتف المسجل لديك' 
                    : 'أدخل بيانات تسجيل الدخول الخاصة بك'}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Individual Form */}
                {role === 'individual' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">رقم الهاتف</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+966501234567"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        className="text-right"
                      />
                      <p className="text-xs text-gray-600">سيتم إرسال رمز التحقق إلى رقم الهاتف هذا</p>
                    </div>
                    <Button 
                      onClick={handleContinueIndividual}
                      size="lg"
                      className="w-full"
                      disabled={!phoneNumber.trim()}
                    >
                      المتابعة
                    </Button>
                  </div>
                )}

                {/* Organization Form */}
                {role === 'organization' && (
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="org-email">البريد الإلكتروني</Label>
                      <Input
                        id="org-email"
                        type="email"
                        placeholder="info@company.com"
                        value={orgEmail}
                        onChange={(e) => setOrgEmail(e.target.value)}
                        className="text-right"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="org-password">كلمة المرور</Label>
                      <Input
                        id="org-password"
                        type="password"
                        placeholder="••••••••"
                        value={orgPassword}
                        onChange={(e) => setOrgPassword(e.target.value)}
                        className="text-right"
                      />
                    </div>
                    <Button 
                      onClick={handleContinueOrganization}
                      size="lg"
                      className="w-full"
                      disabled={!orgEmail.trim() || !orgPassword.trim()}
                    >
                      المتابعة
                    </Button>
                  </div>
                )}

                {/* Back Button */}
                <Button 
                  variant="outline"
                  onClick={() => setStep('role-selection')}
                  className="w-full"
                >
                  العودة
                </Button>
              </CardContent>
            </>
          )}

          {/* OTP Verification Step */}
          {step === 'otp-verification' && (
            <>
              <CardHeader>
                <CardTitle>التحقق من الهوية</CardTitle>
                <CardDescription>
                  {role === 'individual' 
                    ? `أدخل الرمز المرسل إلى ${phoneNumber}` 
                    : `أدخل الرمز المرسل إلى ${orgEmail}`}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label className="text-center block">رمز التحقق</Label>
                  <InputOTP 
                    maxLength={6} 
                    value={otp}
                    onChange={setOtp}
                    containerClassName="justify-center gap-3"
                  >
                    <InputOTPGroup>
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InputOTPSlot key={index} index={index} className="h-12 w-12 text-lg" />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                  <p className="text-xs text-gray-600 text-center">أدخل رمز التحقق المكون من 6 أرقام</p>
                </div>

                <Button 
                  onClick={handleVerifyOTP}
                  size="lg"
                  className="w-full"
                  disabled={otp.length !== 6}
                >
                  التحقق والدخول
                </Button>

                <Button 
                  variant="outline"
                  onClick={handleBackToCredentials}
                  className="w-full"
                >
                  رجوع
                </Button>

                <div className="text-center space-y-2">
                  <p className="text-sm text-gray-600">لم تستقبل الرمز؟</p>
                  <Button variant="link" className="text-blue-600 hover:text-blue-700">
                    طلب رمز جديد
                  </Button>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        {/* Footer Links */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">
            ليس لديك حساب؟{' '}
            <Link href="/signup" className="text-blue-600 hover:text-blue-700 font-semibold">
              إنشاء حساب
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
