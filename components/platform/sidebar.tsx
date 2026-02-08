'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { usePlatform } from '@/contexts/platform-context'
import { getOtherPlatforms, platformThemes } from '@/lib/themes'
import { Briefcase, User, History, Settings, Sparkles, LayoutGrid, Users } from 'lucide-react'
import { cn } from '@/lib/utils'

type UserRole = 'individual' | 'organization'

export function Sidebar() {
  const { platform, theme } = usePlatform()
  const pathname = usePathname()
  // Determine user role based on current route
  const userRole: UserRole = pathname.includes('/org/') ? 'organization' : 'individual'

  const individualNavItems = [
    { label: 'الوظائف', href: `/platform/${platform}/jobs`, icon: Briefcase },
    { label: 'الملف الشخصي', href: `/platform/${platform}/profile`, icon: User },
    { label: 'السجل', href: `/platform/${platform}/history`, icon: History },
    { label: 'الإعدادات', href: `/platform/${platform}/settings`, icon: Settings },
  ]

  const organizationNavItems = [
    { label: 'لوحة التحكم', href: `/platform/${platform}/org/dashboard`, icon: LayoutGrid },
    { label: 'ملف المؤسسة', href: `/platform/${platform}/org/profile`, icon: User },
    { label: 'إدارة الموظفين', href: `/platform/${platform}/org/employees`, icon: Users },
    { label: 'إدارة الوظائف', href: `/platform/${platform}/org/jobs`, icon: Briefcase },
    { label: 'الإعدادات', href: `/platform/${platform}/org/settings`, icon: Settings },
  ]

  const navItems = userRole === 'organization' ? organizationNavItems : individualNavItems

  const otherPlatforms = getOtherPlatforms(platform)

  const getPlatformButtonStyles = (targetPlatform: string) => {
    if (targetPlatform === 'hajj') {
      return 'bg-gradient-to-r from-emerald-600 via-emerald-700 to-teal-700 hover:from-emerald-700 hover:via-emerald-800 hover:to-teal-800 text-white shadow-md shadow-emerald-500/30'
    }
    if (targetPlatform === 'coop') {
      return 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-md'
    }
    // entertainment
    return 'bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-700 hover:to-purple-800 text-white shadow-lg shadow-fuchsia-500/30'
  }

  const getPlatformLabel = (targetPlatform: string) => {
    if (targetPlatform === 'hajj') return 'الحج والعمرة'
    if (targetPlatform === 'coop') return 'التدريب والتطوع'
    return 'المواسم الترفيهية'
  }

  const isEntertainment = platform === 'entertainment'
  const isHajj = platform === 'hajj'

  return (
    <div
      className={cn(
        'flex h-full w-64 flex-col border-l',
        isEntertainment
          ? 'bg-slate-950/80 border-fuchsia-500/20 backdrop-blur-sm'
          : isHajj
            ? 'bg-gradient-to-b from-stone-100 via-amber-50/50 to-emerald-50/50 border-emerald-200/60 shadow-lg'
            : 'bg-card border-border'
      )}
    >
      {/* Logo */}
      <div className={cn(
        'flex items-center gap-2 border-b p-6',
        isEntertainment 
          ? 'border-fuchsia-500/20' 
          : isHajj 
            ? 'border-emerald-200/60'
            : 'border-border'
      )}>
        <div
          className={cn(
            'flex h-10 w-10 items-center justify-center rounded-full shadow-md',
            isEntertainment 
              ? 'bg-gradient-to-br from-fuchsia-500 to-purple-600 shadow-fuchsia-500/50' 
              : isHajj
                ? 'bg-gradient-to-br from-emerald-600 to-teal-700 shadow-emerald-500/30'
                : 'bg-primary'
          )}
        >
          <Sparkles className="h-5 w-5 text-white" />
        </div>
        <div>
          <h2 className={cn(
            'text-lg font-bold', 
            isEntertainment 
              ? 'text-slate-100' 
              : isHajj 
                ? 'text-emerald-800'
                : 'text-foreground'
          )}>
            موسمي
          </h2>
          <p
            className={cn(
              'text-xs',
              isEntertainment 
                ? 'text-fuchsia-300' 
                : isHajj
                  ? 'text-teal-700'
                  : 'text-muted-foreground'
            )}
          >
            {theme.name}
          </p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 p-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon

          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition-all',
                isActive
                  ? isEntertainment
                    ? 'bg-gradient-to-r from-fuchsia-500/20 to-purple-500/20 text-fuchsia-300 border border-fuchsia-500/40 shadow-md shadow-fuchsia-500/10'
                    : isHajj
                      ? 'bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 shadow-sm'
                      : 'bg-blue-100 text-blue-700'
                  : isEntertainment
                    ? 'text-slate-300 hover:bg-slate-800/50 hover:text-fuchsia-200'
                    : isHajj
                      ? 'text-slate-700 hover:bg-emerald-50/60 hover:text-emerald-700'
                      : 'text-muted-foreground hover:bg-accent hover:text-accent-foreground'
              )}
            >
              <Icon className="h-5 w-5" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Platform Switch Section - Only for Individuals */}
      {userRole === 'individual' && (
        <div
          className={cn(
            'border-t p-4 space-y-3',
            isEntertainment 
              ? 'border-fuchsia-500/20' 
              : isHajj 
                ? 'border-emerald-200/60'
                : 'border-border'
          )}
        >
          <p
            className={cn(
              'text-xs font-semibold',
              isEntertainment 
                ? 'text-fuchsia-300' 
                : isHajj
                  ? 'text-teal-700'
                  : 'text-muted-foreground'
            )}
          >
            التبديل إلى منصة أخرى
          </p>
          {otherPlatforms.map((otherPlatform) => (
            <Link
              key={otherPlatform}
              href={`/platform/${otherPlatform}/jobs`}
              className={cn(
                'flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-all',
                getPlatformButtonStyles(otherPlatform)
              )}
            >
              {getPlatformLabel(otherPlatform)}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}
