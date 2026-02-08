'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function AdminSettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">الإعدادات</h2>
        <p className="text-muted-foreground">إعدادات لوحة الإدارة</p>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>تفضيلات الإدارة</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">صفحة إعدادات مبدئية للوحة الإدارة.</p>
        </CardContent>
      </Card>
    </div>
  )
}
