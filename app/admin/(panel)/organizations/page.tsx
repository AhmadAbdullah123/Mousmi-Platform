'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

const pendingOrganizations = [
  {
    id: 'ORG-1021',
    name: 'شركة مواسم المدن',
    platform: 'المواسم الترفيهية',
    contact: 'info@seasons.com',
    submittedAt: '2026-02-03',
  },
  {
    id: 'ORG-1022',
    name: 'مركز التدريب المتكامل',
    platform: 'التدريب والتطوع',
    contact: 'contact@training.com',
    submittedAt: '2026-02-04',
  },
  {
    id: 'ORG-1023',
    name: 'شركة مسارات الحج',
    platform: 'الحج والعمرة',
    contact: 'admin@hajj.com',
    submittedAt: '2026-02-06',
  },
]

export default function AdminOrganizationsPage() {
  const [selectedOrg, setSelectedOrg] = useState<(typeof pendingOrganizations)[number] | null>(null)

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold">طلبات المؤسسات</h2>
        <p className="text-muted-foreground">مراجعة الطلبات المعلقة واعتمادها</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>قائمة الطلبات</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="w-full overflow-x-auto rounded-lg border">
            <Table className="min-w-[720px]">
              <TableHeader>
                <TableRow>
                  <TableHead>المعرف</TableHead>
                  <TableHead>اسم المؤسسة</TableHead>
                  <TableHead>المنصة</TableHead>
                  <TableHead>البريد</TableHead>
                  <TableHead>تاريخ التقديم</TableHead>
                  <TableHead className="text-right">الإجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pendingOrganizations.map((org) => (
                  <TableRow key={org.id}>
                    <TableCell>{org.id}</TableCell>
                    <TableCell className="font-medium">{org.name}</TableCell>
                    <TableCell>{org.platform}</TableCell>
                    <TableCell>{org.contact}</TableCell>
                    <TableCell>{org.submittedAt}</TableCell>
                    <TableCell className="text-right">
                      <div className="flex flex-wrap justify-end gap-2">
                        <Button size="sm" variant="outline" onClick={() => setSelectedOrg(org)}>
                          عرض التفاصيل
                        </Button>
                        <Button size="sm">قبول</Button>
                        <Button size="sm" variant="destructive">رفض</Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <Dialog open={!!selectedOrg} onOpenChange={() => setSelectedOrg(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>تفاصيل المؤسسة</DialogTitle>
            <DialogDescription>مراجعة بيانات الطلب قبل اتخاذ القرار.</DialogDescription>
          </DialogHeader>
          {selectedOrg && (
            <div className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">المعرف</span>
                <span className="font-medium">{selectedOrg.id}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">الاسم</span>
                <span className="font-medium">{selectedOrg.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">المنصة</span>
                <span className="font-medium">{selectedOrg.platform}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">البريد</span>
                <span className="font-medium">{selectedOrg.contact}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">تاريخ التقديم</span>
                <span className="font-medium">{selectedOrg.submittedAt}</span>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}
