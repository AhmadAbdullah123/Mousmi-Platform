'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { CheckCircle2, Users, Building2, Briefcase, ArrowRight, Sparkles, Shield, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Page() {
  const [counters, setCounters] = useState({ individuals: 0, organizations: 0, opportunities: 0 })

  useEffect(() => {
    const targets = { individuals: 1500, organizations: 80, opportunities: 250 }
    const duration = 2000
    const steps = 60
    const interval = duration / steps

    let currentStep = 0
    const timer = setInterval(() => {
      currentStep++
      setCounters({
        individuals: Math.floor((targets.individuals * currentStep) / steps),
        organizations: Math.floor((targets.organizations * currentStep) / steps),
        opportunities: Math.floor((targets.opportunities * currentStep) / steps),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
        setCounters(targets)
      }
    }, interval)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto w-full max-w-6xl px-4 flex min-h-16 flex-wrap items-center justify-between gap-3 py-3 md:h-16 md:flex-nowrap md:py-0">
          <div className="flex items-center gap-4 md:gap-8">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-primary">موسمي</span>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#home" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                الرئيسية
              </a>
              <a href="#platforms" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                المنصات
              </a>
              <a href="#how-it-works" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                كيف يعمل
              </a>
              <a href="#faq" className="text-sm font-semibold text-foreground hover:text-primary transition-colors">
                الأسئلة الشائعة
              </a>
            </nav>
          </div>
          <div className="flex w-full items-center justify-start gap-3 md:w-auto md:justify-end">
            <Link href="/signin" className="w-full sm:w-auto">
              <Button variant="outline" size="sm" className="w-full sm:w-auto">
                تسجيل دخول
              </Button>
            </Link>
            <Link href="/signup" className="w-full sm:w-auto">
              <Button size="sm" className="w-full sm:w-auto font-semibold">
                إنشاء حساب
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-16 md:py-32">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-8 md:gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
                كل فرصك الموسمية، التدريبية، والتطوعية... في منصة واحدة.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                انضم إلى منصة موسمي الموحدة، التي تجمع فرص الحج والعمرة، التدريب والتطوع، والمواسم الترفيهية تحت مظلة واحدة لتسهيل إدارة ومتابعة فرصك بكفاءة.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link href="/signup" className="w-full sm:w-auto">
                  <Button size="lg" className="w-full sm:w-auto text-base font-semibold">
                    ابدأ الآن
                    <ArrowRight className="mr-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="w-full sm:w-auto text-base font-semibold bg-transparent">
                  استعراض المنصات
                </Button>
              </div>
            </div>
            <Card className="bg-gradient-to-br from-primary/5 via-primary/10 to-secondary border-primary/20">
              <CardHeader>
                <div className="flex items-center gap-2 text-primary mb-2">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-sm font-semibold">منصة موحدة للجميع</span>
                </div>
                <CardTitle className="text-xl font-bold">
                  أفراد - مؤسسات - فرص موسمية
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">نسخ الموسمية والتدريبية</p>
                    <p className="text-sm text-muted-foreground">حج وعمرة، تدريب وتطوع، ومواسم ترفيهية</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">مساعد ذكي وتوصيات</p>
                    <p className="text-sm text-muted-foreground">احصل على توصيات مخصصة وفقًا لملفك</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold">إدارة موحدة</p>
                    <p className="text-sm text-muted-foreground">تتبع جميع طلباتك من لوحة تحكم واحدة</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section id="platforms" className="py-20 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              اختر المنصة المناسبة لك أو لمؤسستك
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ثلاث منصات متخصصة متكاملة مع بعضها البعض، توفر أفضل تجربة للأفراد والمؤسسات
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Hajj & Umrah Platform */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-500/50 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-500">
                    <Building2 className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-green-700 bg-green-100 px-3 py-1 rounded-full">
                    نسك
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-green-900">
                  منصة الحج والعمرة
                </CardTitle>
                <CardDescription className="text-base text-green-700 leading-relaxed">
                  الفرص الموسمية المتعلقة بخدمات الحج والعمرة، مع تكامل مع الأنظمة الحكومية لتسهيل الإدارة.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold">
                  الدخول إلى المنصة
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
                <Link href="/platform/hajj/jobs" className="block">
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 font-semibold bg-transparent">
                    الدخول التجريبي (أفراد)
                  </Button>
                </Link>
                <Link href="/platform/hajj/org/dashboard" className="block">
                  <Button variant="outline" className="w-full border-green-600 text-green-700 hover:bg-green-50 font-semibold bg-transparent">
                    الدخول التجريبي (مؤسسة)
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Internships & Volunteering Platform */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-500/50 bg-gradient-to-br from-blue-50 to-indigo-50">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500">
                    <Briefcase className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">
                    مهني
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold text-blue-900">
                  منصة التدريب والتطوع
                </CardTitle>
                <CardDescription className="text-base text-blue-700 leading-relaxed">
                  فرص التدريب والعمل التطوعي للأفراد والمؤسسات، مع نظام توصيات ذكي ومساعد AI متقدم.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold">
                  الدخول إلى المنصة
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
                <Link href="/platform/coop/jobs" className="block">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold bg-transparent">
                    الدخول التجريبي (أفراد)
                  </Button>
                </Link>
                <Link href="/platform/coop/org/dashboard" className="block">
                  <Button variant="outline" className="w-full border-blue-600 text-blue-700 hover:bg-blue-50 font-semibold bg-transparent">
                    الدخول التجريبي (مؤسسة)
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Entertainment Seasons Platform */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-500/50 bg-gradient-to-br from-purple-900 via-pink-800 to-purple-900 text-white md:col-span-2 lg:col-span-1">
              <CardHeader>
                <div className="flex items-center justify-between mb-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-purple-500">
                    <Sparkles className="h-6 w-6 text-white" />
                  </div>
                  <div className="text-xs font-semibold text-pink-100 bg-pink-500/30 px-3 py-1 rounded-full">
                    ترفيهي
                  </div>
                </div>
                <CardTitle className="text-2xl font-bold">
                  منصة المواسم الترفيهية
                </CardTitle>
                <CardDescription className="text-base text-pink-100 leading-relaxed">
                  الفرص الوظيفية المرتبطة بمواسم الترفيه والفعاليات الكبرى، مع دعم كامل للمؤسسات والأفراد.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white font-semibold border-0">
                  الدخول إلى المنصة
                  <ArrowRight className="mr-2 h-4 w-4" />
                </Button>
                <Link href="/platform/entertainment/jobs" className="block">
                  <Button variant="outline" className="w-full border-pink-400 text-pink-100 hover:bg-pink-900/30 font-semibold bg-transparent">
                    الدخول التجريبي (أفراد)
                  </Button>
                </Link>
                <Link href="/platform/entertainment/org/dashboard" className="block">
                  <Button variant="outline" className="w-full border-pink-400 text-pink-100 hover:bg-pink-900/30 font-semibold bg-transparent">
                    الدخول التجريبي (مؤسسة)
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="how-it-works" className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ثلاث خطوات بسيطة لبدء استخدام موسمي
            </h2>
            <p className="text-lg text-muted-foreground">
              سهولة الاستخدام والتوفير والتكامل في خطوات بسيطة
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">إنشاء حساب فرد أو مؤسسة</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  سجل كفرد أو مؤسسة بخطوات بسيطة. المؤسسات تحتاج إلى موافقة الإدارة بعد التحقق من البيانات.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">إكمال الملف ورفع البيانات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  أضف معلومات السيرة الذاتية أو بيانات المؤسسة للحصول على توصيات دقيقة ومخصصة.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-2 hover:border-primary/50 transition-all">
              <CardHeader>
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mb-4">
                  <Zap className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-bold">التقديم والمتابعة في مكان واحد</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  قدّم على الفرص المناسبة وتابع حالة طلباتك من لوحة تحكم موحدة وسهلة الاستخدام.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-blue-600 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              منصة موحدة ومصممة للتوسع والاستقبال
            </h2>
            <p className="text-lg text-primary-foreground/90">
              أرقام تعكس نمو المنصة وثقة المستخدمين والمؤسسات بها
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-white mb-2">
                  +{counters.individuals}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-white/90">
                  فرد مسجل في المنصة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  نساعد الآلاف من الأفراد في إيجاد الفرص المناسبة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-white mb-2">
                  +{counters.organizations}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-white/90">
                  مؤسسة مسجلة ومعتمدة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  شراكات موثوقة مع المؤسسات الرائدة في المملكة
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-white/10 backdrop-blur-sm border-white/20">
              <CardHeader>
                <CardTitle className="text-5xl font-bold text-white mb-2">
                  +{counters.opportunities}
                </CardTitle>
                <CardDescription className="text-lg font-semibold text-white/90">
                  فرصة موسمية وتدريبية متاحة
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-white/80 text-sm">
                  تنوع واسع من الفرص في مختلف المجالات والمناطق
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-primary mb-2">لماذا موسمي؟</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              قيمة حقيقية للأفراد والمؤسسات في نفس الوقت
            </h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold">منصة موحدة للجميع</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  لا حاجة للتنقل بين عدة تطبيقات. كل الفرص الموسمية والتدريبية والتطوعية في مكان واحد.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold">خصائص متخصصة للمؤسسات</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  تمييز خاص للمؤسسات مع إدارة كاملة للموظفين والوظائف والتكامل مع الأنظمة الخارجية.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-xl font-bold">جاهزية للتوسع مع الاحتياج</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  تصميم مرن يسمح بإضافة منصات جديدة بسهولة مع نمو المملكة واحتياجاتها المستقبلية.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold leading-tight">
              خطوات تسجيل مؤسسة في منصة موسمي بكفاءة
            </h2>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              سجّل مؤسستك الآن واحصل على إمكانيات متقدمة لإدارة الوظائف والموظفين والتكامل مع الأنظمة الحكومية والخاصة بكل سهولة.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto text-base font-semibold">
                إنشاء حساب مؤسسة
                <ArrowRight className="mr-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-base font-semibold bg-transparent border-white text-white hover:bg-white/10">
                استعراض المنصات
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-secondary/30">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                إجابات سريعة عن استخدام المنصة
              </h2>
              <p className="text-lg text-muted-foreground">
                كل ما تحتاج معرفته للبدء والتسجيل والاستفادة الكاملة من موسمي
              </p>
            </div>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                  هل يمكن للأفراد التسجيل في جميع المنصات الفرعية بحساب واحد؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  نعم، الأفراد يمكنهم الوصول إلى جميع المنصات الفرعية (الحج والعمرة، التدريب والتطوع، والمواسم الترفيهية) بحساب واحد موحد.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                  كيف تتمكن المؤسسات من الانضمام إلى المنصة؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  على المؤسسات التسجيل باستخدام رقم السجل التجاري، واختيار المنصة المناسبة، ثم يتم مراجعة البيانات من قبل الإدارة قبل تفعيل الحساب.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                  هل يمكن للمؤسسات التبديل بين المنصات الفرعية بعد التسجيل؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  لا، كل مؤسسة مرتبطة بمنصة فرعية واحدة فقط عند التسجيل. إذا دخلت إلى منصة خاطئة، سيتم توجيهك تلقائيًا للمنصة الصحيحة.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                  هل يتمكن الأفراد من رفع السيرة الذاتية والحصول على توصيات (AI)؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  نعم، يمكن للأفراد رفع السيرة الذاتية والحصول على توصيات ذكية من المساعد الذكي AI بناءً على مهاراتهم وتفضيلاتهم.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card border rounded-lg px-6">
                <AccordionTrigger className="text-lg font-semibold text-right hover:no-underline">
                  كيف يتم إدارة المؤسسات من الجانبة؟
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  يمتلك الأدمن صلاحيات كاملة لمراجعة طلبات المؤسسات، الموافقة عليها أو رفضها، وإدارة جميع الحسابات بالنظام.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-card py-12">
        <div className="mx-auto w-full max-w-6xl px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Sparkles className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-2xl font-bold text-primary">موسمي</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                منصة موحدة تجمع الفرص الموسمية والتدريبية والتطوعية في المملكة العربية السعودية.
              </p>
            </div>

            <div>
              <h3 className="font-bold mb-4">المنصات</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">منصة الحج والعمرة</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">منصة التدريب والتطوع</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">منصة المواسم الترفيهية</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">روابط</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">الرئيسية</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">سياسة الخصوصية</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">الشروط والأحكام</a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold mb-4">تواصل</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-primary transition-colors">من نحن</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">اتصل بنا</a>
                </li>
                <li>
                  <a href="#" className="hover:text-primary transition-colors">مساعدة ودعم</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© موسمي 2024 - جميع الحقوق محفوظة</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
