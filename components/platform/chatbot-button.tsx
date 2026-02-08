'use client'

import { useState } from 'react'
import { usePlatform } from '@/contexts/platform-context'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { MessageCircle, X, Send } from 'lucide-react'
import { cn } from '@/lib/utils'

export function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)
  const { platform } = usePlatform()
  const isEntertainment = platform === 'entertainment'
  const isHajj = platform === 'hajj'

  return (
    <>
      {/* Chatbot Panel */}
      {isOpen && (
        <Card
          className={cn(
            'fixed bottom-24 left-8 z-50 w-96 shadow-2xl',
            isEntertainment
              ? 'bg-gradient-to-br from-slate-950/98 to-indigo-950/98 border-fuchsia-500/40 backdrop-blur-md shadow-fuchsia-500/20'
              : isHajj
                ? 'bg-gradient-to-br from-white to-emerald-50/30 border-emerald-300 shadow-emerald-500/20'
                : 'border-2'
          )}
        >
          <CardHeader
            className={cn(
              'flex flex-row items-center justify-between border-b',
              isEntertainment 
                ? 'border-fuchsia-500/30' 
                : isHajj
                  ? 'border-emerald-200'
                  : 'border-border'
            )}
          >
            <CardTitle className={cn(
              'text-lg', 
              isEntertainment 
                ? 'text-slate-100' 
                : isHajj
                  ? 'text-emerald-800'
                  : 'text-foreground'
            )}>
              المساعد الذكي
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className={cn(
                isEntertainment 
                  ? 'text-slate-100 hover:bg-slate-800/50' 
                  : isHajj
                    ? 'text-emerald-800 hover:bg-emerald-50'
                    : ''
              )}
            >
              <X className="h-5 w-5" />
            </Button>
          </CardHeader>
          <CardContent className="p-4">
            <div className="space-y-4 mb-4 h-64 overflow-y-auto">
              <div
                className={cn(
                  'rounded-lg p-3 text-sm',
                  isEntertainment 
                    ? 'bg-slate-900/70 text-slate-100' 
                    : isHajj
                      ? 'bg-emerald-50 text-emerald-900'
                      : 'bg-muted text-foreground'
                )}
              >
                مرحباً! أنا المساعد الذكي. كيف يمكنني مساعدتك اليوم؟
              </div>
            </div>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="اكتب رسالتك هنا..."
                className={cn(
                  'flex-1 rounded-lg border px-4 py-2 text-sm outline-none',
                  isEntertainment
                    ? 'bg-slate-900/70 border-fuchsia-500/30 text-slate-100 placeholder:text-slate-400'
                    : isHajj
                      ? 'bg-white border-emerald-200 text-emerald-900 placeholder:text-slate-500'
                      : 'bg-background border-input'
                )}
              />
              <Button
                size="icon"
                className={cn(
                  'shadow-md',
                  isEntertainment
                    ? 'bg-gradient-to-r from-fuchsia-600 to-purple-700 hover:from-fuchsia-700 hover:to-purple-800 shadow-fuchsia-500/30'
                    : isHajj
                      ? 'bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-emerald-500/30'
                      : 'bg-blue-600 hover:bg-blue-700'
                )}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Floating Button */}
      <Button
        size="lg"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed bottom-8 left-8 z-40 h-14 w-14 rounded-full shadow-2xl',
          isEntertainment
            ? 'bg-gradient-to-br from-fuchsia-600 to-purple-700 hover:from-fuchsia-700 hover:to-purple-800 shadow-fuchsia-500/50'
            : isHajj
              ? 'bg-gradient-to-br from-emerald-600 to-teal-700 hover:from-emerald-700 hover:to-teal-800 shadow-emerald-500/40'
              : 'bg-blue-600 hover:bg-blue-700'
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  )
}
