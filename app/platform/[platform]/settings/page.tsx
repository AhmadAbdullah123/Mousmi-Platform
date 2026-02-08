'use client'

import { usePlatform } from '@/contexts/platform-context'
import { PageHeader } from '@/components/platform/page-header'
import { SectionCard } from '@/components/platform/section-card'
import { Button } from '@/components/ui/button'
import { LogOut, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'

export default function SettingsPage() {
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'

  return (
    <div>
      <PageHeader title="الإعدادات" description="إدارة إعدادات الحساب والأمان" />

      <div className="grid gap-6 max-w-2xl">
        {/* Change Password */}
        <SectionCard title="تغيير كلمة المرور" description="قم بتحديث كلمة المرور الخاصة بك">
          <div className="space-y-4">
            <div>
              <label
                className={cn(
                  'text-sm font-semibold mb-2 block',
                  isEntertainment ? 'text-pink-300' : 'text-muted-foreground'
                )}
              >
                كلمة المرور الحالية
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={cn(
                  'w-full rounded-lg border px-4 py-2 outline-none',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white placeholder:text-gray-400'
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
                كلمة المرور الجديدة
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={cn(
                  'w-full rounded-lg border px-4 py-2 outline-none',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white placeholder:text-gray-400'
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
                تأكيد كلمة المرور الجديدة
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className={cn(
                  'w-full rounded-lg border px-4 py-2 outline-none',
                  isEntertainment
                    ? 'bg-purple-800/50 border-pink-500/30 text-white placeholder:text-gray-400'
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
              <Lock className="ml-2 h-4 w-4" />
              تحديث كلمة المرور
            </Button>
          </div>
        </SectionCard>

        {/* Notifications */}
        <SectionCard title="الإشعارات" description="تخصيص تفضيلات الإشعارات">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={cn(
                    'font-semibold',
                    isEntertainment ? 'text-white' : 'text-foreground'
                  )}
                >
                  إشعارات البريد الإلكتروني
                </p>
                <p
                  className={cn(
                    'text-sm',
                    isEntertainment ? 'text-gray-300' : 'text-muted-foreground'
                  )}
                >
                  تلقي التحديثات عبر البريد الإلكتروني
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded accent-primary"
              />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <p
                  className={cn(
                    'font-semibold',
                    isEntertainment ? 'text-white' : 'text-foreground'
                  )}
                >
                  إشعارات الرسائل النصية
                </p>
                <p
                  className={cn(
                    'text-sm',
                    isEntertainment ? 'text-gray-300' : 'text-muted-foreground'
                  )}
                >
                  تلقي التحديثات عبر الرسائل النصية
                </p>
              </div>
              <input
                type="checkbox"
                defaultChecked
                className="h-5 w-5 rounded accent-primary"
              />
            </div>
          </div>
        </SectionCard>

        {/* Logout */}
        <SectionCard title="إدارة الحساب" description="تسجيل الخروج من الحساب">
          <Button
            variant="destructive"
            className="w-full font-semibold"
          >
            <LogOut className="ml-2 h-4 w-4" />
            تسجيل الخروج
          </Button>
        </SectionCard>
      </div>
    </div>
  )
}
