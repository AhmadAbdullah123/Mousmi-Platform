export type PlatformType = 'hajj' | 'coop' | 'entertainment'

export interface PlatformTheme {
  name: string
  colors: {
    primary: string
    secondary: string
    accent: string
    background: string
    foreground: string
    card: string
    border: string
  }
  gradients: {
    primary: string
    card: string
  }
}

export const platformThemes: Record<PlatformType, PlatformTheme> = {
  hajj: {
    name: 'منصة الحج والعمرة',
    colors: {
      primary: 'text-emerald-700',
      secondary: 'text-teal-700',
      accent: 'text-amber-600',
      background: 'bg-gradient-to-br from-amber-50 via-stone-50 to-emerald-50',
      foreground: 'text-slate-800',
      card: 'bg-gradient-to-br from-white to-emerald-50/30',
      border: 'border-emerald-200',
    },
    gradients: {
      primary: 'from-emerald-600 via-emerald-700 to-teal-700',
      card: 'from-white via-amber-50/20 to-emerald-50/50',
    },
  },
  coop: {
    name: 'منصة التدريب والتطوع',
    colors: {
      primary: 'text-blue-700',
      secondary: 'text-blue-600',
      accent: 'text-blue-500',
      background: 'bg-blue-50',
      foreground: 'text-blue-900',
      card: 'bg-white',
      border: 'border-blue-200',
    },
    gradients: {
      primary: 'from-blue-500 to-indigo-600',
      card: 'from-blue-50 to-indigo-50',
    },
  },
  entertainment: {
    name: 'منصة المواسم الترفيهية',
    colors: {
      primary: 'text-fuchsia-400',
      secondary: 'text-purple-300',
      accent: 'text-cyan-400',
      background: 'bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950',
      foreground: 'text-slate-100',
      card: 'bg-gradient-to-br from-slate-900/90 to-indigo-950/80',
      border: 'border-fuchsia-500/20',
    },
    gradients: {
      primary: 'from-fuchsia-500 via-purple-600 to-indigo-600',
      card: 'from-slate-900/95 via-purple-950/50 to-indigo-950/90',
    },
  },
}

export const getPlatformRoute = (platform: PlatformType): string => {
  return `/platform/${platform}`
}

export const getOtherPlatforms = (currentPlatform: PlatformType): PlatformType[] => {
  const platforms: PlatformType[] = ['hajj', 'coop', 'entertainment']
  return platforms.filter(p => p !== currentPlatform)
}
