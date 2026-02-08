'use client'

import { type ReactNode } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar'
import { LayoutGrid, Building2, Settings, Sparkles } from 'lucide-react'

interface AdminLayoutProps {
  children: ReactNode
}

const navItems = [
  { label: 'لوحة التحكم', href: '/admin/dashboard', icon: LayoutGrid },
  { label: 'طلبات المؤسسات', href: '/admin/organizations', icon: Building2 },
  { label: 'الإعدادات', href: '/admin/settings', icon: Settings },
]

export default function AdminLayout({ children }: AdminLayoutProps) {
  const pathname = usePathname()

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-background">
        <Sidebar side="right" collapsible="offcanvas" className="border-l">
          <SidebarHeader className="border-b px-4 py-5">
            <div className="flex items-center gap-2">
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary">
                <Sparkles className="h-5 w-5 text-primary-foreground" />
              </div>
              <div>
                <p className="text-sm font-semibold">موسمي</p>
                <p className="text-xs text-muted-foreground">لوحة الإدارة</p>
              </div>
            </div>
          </SidebarHeader>
          <SidebarContent className="px-2 py-4">
            <SidebarMenu>
              {navItems.map((item) => {
                const isActive = pathname === item.href
                const Icon = item.icon
                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton asChild isActive={isActive}>
                      <Link href={item.href}>
                        <Icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                )
              })}
            </SidebarMenu>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="min-w-0 overflow-x-hidden">
          <header className="sticky top-0 z-10 flex items-center gap-3 border-b bg-background/95 px-4 py-3 backdrop-blur lg:px-6">
            <SidebarTrigger className="lg:hidden" />
            <h1 className="text-lg font-semibold">لوحة الإدارة</h1>
          </header>
          <main className="flex-1 px-4 py-6 lg:px-8">
            <div className="w-full max-w-6xl mx-auto min-w-0">{children}</div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}
