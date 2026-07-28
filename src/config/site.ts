export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  url: string;
  category: string;
  description: string;
  /**
   * Screenshot path under /public. Set only when the real asset file exists
   * (e.g. '/portfolio/santimarzi.webp') — a missing file causes 404s and a
   * broken-image race before hydration. Cards render a typographic fallback
   * while unset.
   */
  image?: string;
  tags: string[];
  /** Featured projects render as primary proof cards (brief v2 Block 4). */
  featured: boolean;
}

const WHATSAPP_MESSAGE =
  'שלום, אני רוצה לבדוק האם האתר שלי באמת בנוי להביא יותר פניות איכותיות. (הגעתי מהאתר GD×BB)';

export const SITE_CONFIG = {
  brandName: 'Gemini Digital × BarsBuild',
  shortName: 'GD × BB',
  categoryLabel: 'סטודיו לאתרי המרה ותשתיות צמיחה',
  contact: {
    whatsapp: '972555073405',
    phoneDisplay: '055-507-3405',
    whatsappMessage: WHATSAPP_MESSAGE,
    email: 'geminidigital.ads@gmail.com',
  },
  links: {
    whatsappUrl: `https://wa.me/972555073405?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
    mailtoUrl: `mailto:geminidigital.ads@gmail.com?subject=${encodeURIComponent('פנייה מהאתר - GD × BB')}`,
  },
  cta: {
    primary: 'בדקו אם האתר שלכם בנוי להביא פניות',
    closing: 'שלחו לנו את האתר לבדיקה',
    sticky: 'בדקו את האתר שלכם ב-WhatsApp',
    email: 'שליחת הודעה באימייל',
    trustMicrocopy: 'שיחת התאמה קצרה · ללא התחייבות · תשובה תוך יום עסקים',
  },
  nav: [
    { label: 'איך זה עובד', href: '#how-it-works' },
    { label: 'פרויקטים', href: '#portfolio' },
  ],
  /**
   * Featured order matters (brief v2 Block 4): Santi Marzi, Pizza Buena,
   * BarsBuild. Cinemus and Graffiti Design are secondary — reachable behind
   * the "עוד פרויקטים" toggle, never as primary cards.
   */
  portfolio: [
    {
      id: 'santimarzi',
      title: 'סנטי מרזי',
      titleEn: 'Santi Marzi',
      url: 'https://santimarzi.vercel.app',
      category: 'מותג אופנה ויוקרה',
      description:
        'אתר מותג יוקרתי עם ארכיטקטורה מהירה, חוויית משתמש אלגנטית והתאמה מושלמת למובייל.',
      tags: ['Next.js', 'E-Commerce', 'UX/UI'],
      featured: true,
    },
    {
      id: 'pizabuenna',
      title: 'פיצה בואנה',
      titleEn: 'Pizza Buena',
      url: 'https://pizabuenna.com',
      category: 'מסעדנות ומזון',
      description:
        'מערכת הזמנות דיגיטלית מהירה עם ממשק תפריט חכם ומסלול ברור מהתפריט לפעולה.',
      tags: ['Online Ordering', 'Mobile-First'],
      featured: true,
    },
    {
      id: 'barsbuild',
      title: 'BarsBuild',
      titleEn: 'BarsBuild',
      url: 'https://barsbuild.me',
      category: 'פלטפורמת פיתוח ואינטגרציה',
      description:
        'אתר בית טכנולוגי המציג פתרונות בנייה ואינטגרציה מותאמים אישית לעסקים.',
      tags: ['Tech Platform', 'Full Stack'],
      featured: true,
    },
    {
      id: 'cinemus',
      title: 'Cinemus',
      titleEn: 'Cinemus',
      url: 'https://cinemus.app',
      category: 'פלטפורמת מדיה ובידור',
      description:
        'אפליקציית ווב מתקדמת לחוויות תוכן אינטראקטיביות עם מעברים חלקים ועיצוב מודרני.',
      tags: ['Web App', 'Interactive'],
      featured: false,
    },
    {
      id: 'graffitidesign',
      title: 'Graffiti Design',
      titleEn: 'Graffiti Design',
      url: 'https://graffitidesign.vercel.app',
      category: 'סטודיו לעיצוב וקריאייטיב',
      description:
        'תיק עבודות דינמי עם טיפוגרפיה נועזת, ביצועי טעינה מיידיים ומבנה נקי.',
      tags: ['Design Studio', 'Creative Showcase'],
      featured: false,
    },
  ] as PortfolioItem[],
};
