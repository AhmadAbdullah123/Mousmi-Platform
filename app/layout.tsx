import React from "react"
import type { Metadata } from 'next'
import { Cairo } from 'next/font/google'

import './globals.css'

const cairo = Cairo({ 
  subsets: ['arabic'],
  weight: ['400', '600', '700'],
  variable: '--font-cairo',
})

export const metadata: Metadata = {
  title: 'موسمي - منصة الفرص الموسمية',
  description: 'كل فرصك الموسمية، التدريبية، والتطوعية... في منصة واحدة',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} font-sans antialiased min-h-screen overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
