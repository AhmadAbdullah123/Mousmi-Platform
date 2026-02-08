'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox } from '@/components/ui/checkbox'
import { InputOTP, InputOTPGroup, InputOTPSlot } from '@/components/ui/input-otp'
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/utils'

type AccountType = 'individual' | 'organization'
type SignUpStep = 'role-selection' | 'individual-form' | 'individual-otp' | 'org-step1' | 'org-step2' | 'org-step3' | 'org-pending'
type SubPlatform = 'hajj' | 'coop' | 'entertainment'

export default function SignUpPage() {
  const [accountType, setAccountType] = useState<AccountType>('individual')
  const [step, setStep] = useState<SignUpStep>('role-selection')
  const [otp, setOtp] = useState('')
  const [agreedToTerms, setAgreedToTerms] = useState(false)

  // Individual form state
  const [individualForm, setIndividualForm] = useState({
    nationalId: '',
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  // Organization form state
  const [selectedPlatform, setSelectedPlatform] = useState<SubPlatform>('coop')
  const [commercialRegister, setCommercialRegister] = useState('')
  const [orgForm, setOrgForm] = useState({
    companyName: '',
    website: '',
    location: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  })

  // Individual handlers
  const handleIndividualChange = (field: string, value: string) => {
    setIndividualForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleIndividualSubmit = () => {
    const { nationalId, fullName, email, phone, password, confirmPassword } = individualForm
    if (nationalId && fullName && email && phone && password && confirmPassword && password === confirmPassword) {
      setStep('individual-otp')
    }
  }

  // Organization handlers
  const handleOrgChange = (field: string, value: string) => {
    setOrgForm((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleOrgStep1Submit = () => {
    if (selectedPlatform && commercialRegister) {
      setStep('org-step2')
    }
  }

  const handleOrgStep2Submit = () => {
    const { companyName, email, phone, password, confirmPassword } = orgForm
    if (companyName && email && phone && password && confirmPassword && password === confirmPassword) {
      setStep('org-step3')
    }
  }

  const handleOrgStep3Submit = () => {
    if (agreedToTerms) {
      setStep('org-pending')
    }
  }

  const getSubPlatformLabel = (platform: SubPlatform) => {
    switch (platform) {
      case 'hajj':
        return 'منصة الحج والعمرة'
      case 'coop':
        return 'منصة التدريب والتطوع'
      case 'entertainment':
        return 'منصة المواسم الترفيهية'
    }
  }

  const getSubPlatformColor = (platform: SubPlatform) => {
    switch (platform) {
      case 'hajj':
        return 'bg-green-50 border-green-200 hover:bg-green-100'
      case 'coop':
        return 'bg-blue-50 border-blue-200 hover:bg-blue-100'
      case 'entertainment':
        return 'bg-purple-50 border-purple-200 hover:bg-purple-100'
    }
  }

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Logo Header */}
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-600">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-blue-600">موسمي</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">إنشاء حساب جديد</h1>
          <p className="text-gray-600">انضم إلى موسمي واستكشف فرصاً جديدة</p>
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
                <RadioGroup value={accountType} onValueChange={(value) => setAccountType(value as AccountType)}>
                  {/* Individual Option */}
                  <div 
                    className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors" 
                    onClick={() => setAccountType('individual')}
                  >
                    <RadioGroupItem value="individual" id="individual" />
                    <Label htmlFor="individual" className="flex-1 cursor-pointer">
                      <span className="text-base font-semibold text-gray-900">فرد</span>
                      <p className="text-sm text-gray-600 mt-1">إنشاء حساب شخصي والبحث عن فرص عمل</p>
                    </Label>
                  </div>

                  {/* Organization Option */}
                  <div 
                    className="flex items-center space-x-3 border border-gray-200 rounded-lg p-4 cursor-pointer hover:bg-gray-50 transition-colors"
                    onClick={() => setAccountType('organization')}
                  >
                    <RadioGroupItem value="organization" id="organization" />
                    <Label htmlFor="organization" className="flex-1 cursor-pointer">
                      <span className="text-base font-semibold text-gray-900">مؤسسة</span>
                      <p className="text-sm text-gray-600 mt-1">إنشاء حساب مؤسسي ونشر الفرص الوظيفية</p>
                    </Label>
                  </div>
                </RadioGroup>

                <Button 
                  onClick={() => setStep(accountType === 'individual' ? 'individual-form' : 'org-step1')}
                  size="lg"
                  className="w-full gap-2"
                >
                  ابدأ الآن
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </CardContent>
            </>
          )}

          {/* Individual Form Step */}
          {step === 'individual-form' && (
            <>
              <CardHeader>
                <CardTitle>إنشاء حساب شخصي</CardTitle>
                <CardDescription>أدخل بياناتك الشخصية</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* National ID */}
                  <div className="space-y-2 md:col-span-1">
                    <Label htmlFor="national-id">رقم الهوية الوطنية</Label>
                    <Input
                      id="national-id"
                      placeholder="1234567890"
                      value={individualForm.nationalId}
                      onChange={(e) => handleIndividualChange('nationalId', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Full Name */}
                  <div className="space-y-2">
                    <Label htmlFor="full-name">الاسم الكامل</Label>
                    <Input
                      id="full-name"
                      placeholder="أحمد محمد"
                      value={individualForm.fullName}
                      onChange={(e) => handleIndividualChange('fullName', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="email">البريد الإلكتروني</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="ahmad@example.com"
                      value={individualForm.email}
                      onChange={(e) => handleIndividualChange('email', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">رقم الجوال</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+966501234567"
                      value={individualForm.phone}
                      onChange={(e) => handleIndividualChange('phone', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="password">كلمة المرور</Label>
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={individualForm.password}
                      onChange={(e) => handleIndividualChange('password', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="confirm-password">تأكيد كلمة المرور</Label>
                    <Input
                      id="confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={individualForm.confirmPassword}
                      onChange={(e) => handleIndividualChange('confirmPassword', e.target.value)}
                      className="text-right"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleIndividualSubmit}
                  size="lg"
                  className="w-full"
                >
                  متابعة التحقق
                </Button>

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

          {/* Individual OTP Step */}
          {step === 'individual-otp' && (
            <>
              <CardHeader>
                <CardTitle>التحقق من الهوية</CardTitle>
                <CardDescription>أدخل الرمز المرسل إلى {individualForm.phone}</CardDescription>
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
                  onClick={() => console.log('Account created:', individualForm)}
                  size="lg"
                  className="w-full"
                  disabled={otp.length !== 6}
                >
                  التحقق وإنشاء الحساب
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => setStep('individual-form')}
                  className="w-full"
                >
                  رجوع
                </Button>

                <div className="text-center">
                  <Button variant="link" className="text-blue-600">
                    طلب رمز جديد
                  </Button>
                </div>
              </CardContent>
            </>
          )}

          {/* Organization Step 1 - Platform & Register */}
          {step === 'org-step1' && (
            <>
              <CardHeader>
                <CardTitle>الخطوة 1 من 3</CardTitle>
                <CardDescription>اختر المنصة الفرعية ورقم السجل التجاري</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>اختر اختصاص المؤسسة</Label>
                  <RadioGroup value={selectedPlatform} onValueChange={(value) => setSelectedPlatform(value as SubPlatform)}>
                    {(['hajj', 'coop', 'entertainment'] as SubPlatform[]).map((platform) => (
                      <div
                        key={platform}
                        className={cn('flex items-center space-x-3 border rounded-lg p-4 cursor-pointer transition-colors', getSubPlatformColor(platform))}
                        onClick={() => setSelectedPlatform(platform)}
                      >
                        <RadioGroupItem value={platform} id={platform} />
                        <Label htmlFor={platform} className="flex-1 cursor-pointer font-semibold">
                          {getSubPlatformLabel(platform)}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="commercial-register">رقم السجل التجاري</Label>
                  <Input
                    id="commercial-register"
                    placeholder="1010........."
                    value={commercialRegister}
                    onChange={(e) => setCommercialRegister(e.target.value)}
                    className="text-right"
                  />
                </div>

                <Button 
                  onClick={handleOrgStep1Submit}
                  size="lg"
                  className="w-full"
                  disabled={!selectedPlatform || !commercialRegister}
                >
                  المتابعة
                </Button>

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

          {/* Organization Step 2 - Company Info */}
          {step === 'org-step2' && (
            <>
              <CardHeader>
                <CardTitle>الخطوة 2 من 3</CardTitle>
                <CardDescription>بيانات المؤسسة ({getSubPlatformLabel(selectedPlatform)})</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 text-sm text-blue-700">
                  ملاحظة: يتم ملء بيانات المؤسسة تلقائياً من سجل السجل التجاري
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Company Name */}
                  <div className="space-y-2">
                    <Label htmlFor="company-name">اسم المؤسسة</Label>
                    <Input
                      id="company-name"
                      placeholder="شركة التطوير الرقمي"
                      value={orgForm.companyName}
                      onChange={(e) => handleOrgChange('companyName', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Website */}
                  <div className="space-y-2">
                    <Label htmlFor="website">الموقع الإلكتروني</Label>
                    <Input
                      id="website"
                      placeholder="www.company.com"
                      value={orgForm.website}
                      onChange={(e) => handleOrgChange('website', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Location */}
                  <div className="space-y-2">
                    <Label htmlFor="location">الموقع الجغرافي</Label>
                    <Input
                      id="location"
                      placeholder="الرياض، السعودية"
                      value={orgForm.location}
                      onChange={(e) => handleOrgChange('location', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <Label htmlFor="org-email">البريد الإلكتروني الرسمي</Label>
                    <Input
                      id="org-email"
                      type="email"
                      placeholder="info@company.com"
                      value={orgForm.email}
                      onChange={(e) => handleOrgChange('email', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Phone */}
                  <div className="space-y-2">
                    <Label htmlFor="org-phone">رقم الهاتف</Label>
                    <Input
                      id="org-phone"
                      type="tel"
                      placeholder="+966112345678"
                      value={orgForm.phone}
                      onChange={(e) => handleOrgChange('phone', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <Label htmlFor="org-password">كلمة المرور</Label>
                    <Input
                      id="org-password"
                      type="password"
                      placeholder="••••••••"
                      value={orgForm.password}
                      onChange={(e) => handleOrgChange('password', e.target.value)}
                      className="text-right"
                    />
                  </div>

                  {/* Confirm Password */}
                  <div className="space-y-2">
                    <Label htmlFor="org-confirm-password">تأكيد كلمة المرور</Label>
                    <Input
                      id="org-confirm-password"
                      type="password"
                      placeholder="••••••••"
                      value={orgForm.confirmPassword}
                      onChange={(e) => handleOrgChange('confirmPassword', e.target.value)}
                      className="text-right"
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleOrgStep2Submit}
                  size="lg"
                  className="w-full"
                >
                  المتابعة
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => setStep('org-step1')}
                  className="w-full"
                >
                  العودة
                </Button>
              </CardContent>
            </>
          )}

          {/* Organization Step 3 - Agreement */}
          {step === 'org-step3' && (
            <>
              <CardHeader>
                <CardTitle>الخطوة 3 من 3</CardTitle>
                <CardDescription>تفعيل الحساب والموافقة على الشروط</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-4">
                  <h3 className="font-semibold text-gray-900">ملخص البيانات</h3>
                  <div className="space-y-2 text-sm">
                    <p><span className="font-semibold">المنصة:</span> {getSubPlatformLabel(selectedPlatform)}</p>
                    <p><span className="font-semibold">اسم المؤسسة:</span> {orgForm.companyName || 'لم يتم إدخاله'}</p>
                    <p><span className="font-semibold">البريد الإلكتروني:</span> {orgForm.email || 'لم يتم إدخاله'}</p>
                    <p><span className="font-semibold">رقم الهاتف:</span> {orgForm.phone || 'لم يتم إدخاله'}</p>
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Checkbox 
                      id="terms"
                      checked={agreedToTerms}
                      onCheckedChange={(checked) => setAgreedToTerms(checked as boolean)}
                      className="mt-1"
                    />
                    <Label htmlFor="terms" className="text-sm leading-relaxed cursor-pointer">
                      أتعهد بأن جميع المعلومات المدخلة صحيحة، وفي حال التلاعب سيتم إدراج المؤسسة في القائمة السوداء.
                    </Label>
                  </div>
                </div>

                <Button 
                  onClick={handleOrgStep3Submit}
                  size="lg"
                  className="w-full"
                  disabled={!agreedToTerms}
                >
                  إنشاء الحساب
                </Button>

                <Button 
                  variant="outline"
                  onClick={() => setStep('org-step2')}
                  className="w-full"
                >
                  العودة
                </Button>
              </CardContent>
            </>
          )}

          {/* Organization Pending Verification */}
          {step === 'org-pending' && (
            <>
              <CardHeader>
                <CardTitle className="text-center">تم إنشاء الحساب بنجاح</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-center">
                <div className="flex justify-center">
                  <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                  </div>
                </div>

                <div className="space-y-2">
                  <h2 className="text-xl font-semibold text-gray-900">حسابك قيد المراجعة</h2>
                  <p className="text-gray-600">
                    تم إرسال طلب تفعيل حسابك إلى الفريق الإداري. سيتم مراجعة بياناتك والتحقق منها خلال 24-48 ساعة.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-900">
                    سيصلك بريد إلكتروني عند الموافقة على حسابك. في الوقت نفس يمكنك تسجيل الدخول و استكشاف المنصة.
                  </p>
                </div>

                <div className="space-y-2">
                  <Link href="/signin">
                    <Button size="lg" className="w-full">
                      الذهاب إلى تسجيل الدخول
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" size="lg" className="w-full">
                      العودة إلى الصفحة الرئيسية
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </>
          )}
        </Card>

        {/* Footer Links */}
        {step === 'role-selection' && (
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              لديك حساب بالفعل؟{' '}
              <Link href="/signin" className="text-blue-600 hover:text-blue-700 font-semibold">
                تسجيل الدخول
              </Link>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
