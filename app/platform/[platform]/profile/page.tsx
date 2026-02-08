'use client'

import { usePlatform } from '@/contexts/platform-context'
import { PageHeader } from '@/components/platform/page-header'
import { SectionCard } from '@/components/platform/section-card'
import { Button } from '@/components/ui/button'
import { FileText, Upload } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function ProfilePage() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  return (
    <div>
      <PageHeader title="الملف الشخصي" description="إدارة بياناتك ومعلوماتك الشخصية" />

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Account Information */}
        <SectionCard title="المعلومات الشخصية" description="البيانات الأساسية للحساب">
          <div className="space-y-4">
            <div>
              <label
                className={cn(
                  'text-sm font-semibold mb-2 block',
                  isEntertainment ? 'text-pink-300' : 'text-muted-foreground'
                )}
              >
                الاسم الكامل
              </label>
              <input
                type="text"
                defaultValue="أحمد محمد العتيبي"
                className={cn(
                  'w-full rounded-lg border px-4 py-2 outline-none',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white'
                    : 'bg-background border-input'
                )}
              />
            </div>
            <div>
              <label
                className={cn(
                  'text-sm font-semibold mb-2 block',
                  isEntertainment ? 'text-pink-300' : 'text-muted-foreground'
                )}
              >
                البريد الإلكتروني
              </label>
              <input
                type="email"
                defaultValue="ahmed.alotaibi@email.com"
                className={cn(
                  'w-full rounded-lg border px-4 py-2 outline-none',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white'
                    : 'bg-background border-input'
                )}
              />
            </div>
            <div>
              <label
                className={cn(
                  'text-sm font-semibold mb-2 block',
                  isEntertainment ? 'text-pink-300' : 'text-muted-foreground'
                )}
              >
                رقم الجوال
              </label>
              <input
                type="tel"
                defaultValue="+966501234567"
                className={cn(
                  'w-full rounded-lg border px-4 py-2 outline-none',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white'
                    : 'bg-background border-input'
                )}
              />
            </div>
            <Button
              className={cn(
                'w-full font-semibold',
                isEntertainment
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
                  : platform === 'hajj'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
              )}
            >
              حفظ التغييرات
            </Button>
          </div>
        </SectionCard>

        {/* CV Section */}
        <SectionCard title="السيرة الذاتية" description="قم برفع سيرتك الذاتية">
          <div className="space-y-4">
            <div
              className={cn(
                'border-2 border-dashed rounded-lg p-8 text-center',
                isEntertainment ? 'border-pink-500/30' : 'border-border'
              )}
            >
              <FileText
                className={cn(
                  'h-12 w-12 mx-auto mb-4',
                  isEntertainment ? 'text-pink-400' : 'text-muted-foreground'
                )}
              />
              <p
                className={cn(
                  'text-sm mb-4',
                  isEntertainment ? 'text-gray-300' : 'text-muted-foreground'
                )}
              >
                قم بسحب وإفلات ملف السيرة الذاتية أو اضغط للاختيار
              </p>
              <Button
                variant="outline"
                className={cn(
                  'font-semibold',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white hover:bg-purple-700/50'
                    : ''
                )}
              >
                <Upload className="ml-2 h-4 w-4" />
                رفع السيرة الذاتية
              </Button>
            </div>
          </div>
        </SectionCard>

        {/* Skills Section */}
        <SectionCard title="المهارات" description="أضف مهاراتك وخبراتك">
          <div className="space-y-3">
            <div className="flex flex-wrap gap-2">
              {['إدارة المشاريع', 'التواصل الفعال', 'العمل الجماعي', 'اللغة الإنجليزية'].map(
                (skill) => (
                  <span
                    key={skill}
                    className={cn(
                      'rounded-full px-4 py-2 text-sm font-semibold',
                      isEntertainment
                        ? 'bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-pink-300 border border-pink-500/30'
                        : platform === 'hajj'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-blue-100 text-blue-700'
                    )}
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
            <Button
              variant="outline"
              className={cn(
                'w-full font-semibold',
                isEntertainment
                  ? 'bg-purple-800/50 border-pink-500/30 text-white hover:bg-purple-700/50'
                  : ''
              )}
            >
              إضافة مهارة جديدة
            </Button>
          </div>
        </SectionCard>

        {/* Bio Section */}
        <SectionCard title="نبذة تعريفية" description="اكتب نبذة مختصرة عنك">
          <div className="space-y-4">
            <textarea
              rows={6}
              defaultValue="خريج جامعي متحمس للعمل في مجال الخدمات الموسمية. لدي خبرة في التعامل مع العملاء والعمل ضمن فريق."
              className={cn(
                'w-full rounded-lg border px-4 py-3 outline-none resize-none',
                isEntertainment
                  ? 'bg-purple-800/50 border-pink-500/30 text-white'
                  : 'bg-background border-input'
              )}
            />
            <Button
              className={cn(
                'w-full font-semibold',
                isEntertainment
                  ? 'bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600'
                  : platform === 'hajj'
                    ? 'bg-green-600 hover:bg-green-700'
                    : 'bg-blue-600 hover:bg-blue-700'
              )}
            >
              حفظ
            </Button>
          </div>
        </SectionCard>
      </div>
    </div>
  )
}
