import type { PlatformType } from './themes'

export interface Job {
  id: string
  title: string
  company: string
  location: string
  type: string
  description: string
  requirements: string[]
  salary?: string
  deadline: string
  isRecommended?: boolean
}

export interface Application {
  id: string
  jobTitle: string
  company: string
  appliedDate: string
  status: 'pending' | 'accepted' | 'rejected'
}

export const getMockJobs = (platform: PlatformType): Job[] => {
  if (platform === 'hajj') {
    return [
      {
        id: '1',
        title: 'مرشد حجاج',
        company: 'شركة الحرمين للحج والعمرة',
        location: 'مكة المكرمة',
        type: 'موسمي',
        description: 'مطلوب مرشد حجاج للموسم القادم لمساعدة وتوجيه الحجاج',
        requirements: ['خبرة سابقة', 'إجادة اللغة الإنجليزية', 'صبر وحسن تعامل'],
        salary: '5000 ريال',
        deadline: '2024-05-15',
        isRecommended: true,
      },
      {
        id: '2',
        title: 'منسق خدمات عمرة',
        company: 'مؤسسة النور للعمرة',
        location: 'المدينة المنورة',
        type: 'موسمي',
        description: 'تنسيق وإدارة خدمات المعتمرين وضمان راحتهم',
        requirements: ['مهارات تنظيمية', 'القدرة على العمل تحت الضغط'],
        salary: '4500 ريال',
        deadline: '2024-06-01',
      },
      {
        id: '3',
        title: 'مشرف نقل حجاج',
        company: 'شركة المسار للنقل',
        location: 'جدة',
        type: 'موسمي',
        description: 'الإشراف على عمليات نقل الحجاج بين المشاعر المقدسة',
        requirements: ['خبرة في النقل', 'رخصة قيادة عامة'],
        deadline: '2024-05-20',
        isRecommended: true,
      },
    ]
  }

  if (platform === 'coop') {
    return [
      {
        id: '1',
        title: 'متدرب تطوير برمجيات',
        company: 'شركة التقنية المتقدمة',
        location: 'الرياض',
        type: 'تدريب تعاوني',
        description: 'فرصة تدريب في تطوير تطبيقات الويب والموبايل',
        requirements: ['طالب جامعي', 'معرفة بلغات البرمجة', 'الالتزام بساعات التدريب'],
        salary: '3000 ريال',
        deadline: '2024-07-01',
        isRecommended: true,
      },
      {
        id: '2',
        title: 'متطوع في التوعية المجتمعية',
        company: 'جمعية الخير الاجتماعية',
        location: 'جدة',
        type: 'تطوع',
        description: 'المشاركة في حملات التوعية والأنشطة المجتمعية',
        requirements: ['مهارات تواصل', 'حب العمل التطوعي'],
        deadline: '2024-06-15',
      },
      {
        id: '3',
        title: 'متدرب تسويق رقمي',
        company: 'وكالة الإبداع للتسويق',
        location: 'الدمام',
        type: 'تدريب تعاوني',
        description: 'تعلم استراتيجيات التسويق الرقمي وإدارة الحملات',
        requirements: ['اهتمام بالتسويق', 'مهارات تحليلية'],
        salary: '2500 ريال',
        deadline: '2024-06-30',
        isRecommended: true,
      },
    ]
  }

  // entertainment
  return [
    {
      id: '1',
      title: 'منسق فعاليات موسم الرياض',
      company: 'الهيئة العامة للترفيه',
      location: 'الرياض',
      type: 'موسمي',
      description: 'تنسيق وإدارة الفعاليات الترفيهية خلال موسم الرياض',
      requirements: ['خبرة في إدارة الفعاليات', 'مهارات قيادية', 'طاقة عالية'],
      salary: '6000 ريال',
      deadline: '2024-08-01',
      isRecommended: true,
    },
    {
      id: '2',
      title: 'مشرف ألعاب ترفيهية',
      company: 'مدينة الترفيه الكبرى',
      location: 'جدة',
      type: 'موسمي',
      description: 'الإشراف على الألعاب وضمان سلامة الزوار',
      requirements: ['الالتزام بمعايير السلامة', 'حسن المظهر'],
      salary: '4000 ريال',
      deadline: '2024-07-15',
    },
    {
      id: '3',
      title: 'مصور فعاليات موسمية',
      company: 'استوديو الضوء للإنتاج',
      location: 'الرياض',
      type: 'موسمي',
      description: 'تصوير الفعاليات والحفلات الموسمية',
      requirements: ['خبرة في التصوير', 'معدات احترافية', 'إبداع'],
      salary: '5500 ريال',
      deadline: '2024-07-20',
      isRecommended: true,
    },
  ]
}

export const getMockApplications = (platform: PlatformType): Application[] => {
  if (platform === 'hajj') {
    return [
      {
        id: '1',
        jobTitle: 'مرشد حجاج',
        company: 'شركة الحرمين للحج والعمرة',
        appliedDate: '2024-03-15',
        status: 'pending',
      },
      {
        id: '2',
        jobTitle: 'منسق خدمات عمرة',
        company: 'مؤسسة النور للعمرة',
        appliedDate: '2024-03-10',
        status: 'accepted',
      },
      {
        id: '3',
        jobTitle: 'موظف استقبال',
        company: 'فندق الأجاويد',
        appliedDate: '2024-03-05',
        status: 'rejected',
      },
    ]
  }

  if (platform === 'coop') {
    return [
      {
        id: '1',
        jobTitle: 'متدرب تطوير برمجيات',
        company: 'شركة التقنية المتقدمة',
        appliedDate: '2024-04-01',
        status: 'accepted',
      },
      {
        id: '2',
        jobTitle: 'متدرب تسويق رقمي',
        company: 'وكالة الإبداع للتسويق',
        appliedDate: '2024-03-28',
        status: 'pending',
      },
    ]
  }

  // entertainment
  return [
    {
      id: '1',
      jobTitle: 'منسق فعاليات موسم الرياض',
      company: 'الهيئة العامة للترفيه',
      appliedDate: '2024-04-05',
      status: 'pending',
    },
    {
      id: '2',
      jobTitle: 'مصور فعاليات موسمية',
      company: 'استوديو الضوء للإنتاج',
      appliedDate: '2024-04-02',
      status: 'accepted',
    },
    {
      id: '3',
      jobTitle: 'مشرف ألعاب ترفيهية',
      company: 'مدينة الترفيه الكبرى',
      appliedDate: '2024-03-25',
      status: 'rejected',
    },
  ]
}
