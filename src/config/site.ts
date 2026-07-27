export interface PortfolioItem {
  id: string;
  title: string;
  titleEn: string;
  url: string;
  category: string;
  description: string;
  image?: string;
  tags: string[];
}

export const SITE_CONFIG = {
  brandName: 'Gemini Digital × BarsBuild',
  tagline: 'ארכיטקטורת ואינטגרציית בדיקות, פיתוח וסגירת חוויית משתמש מקצה לקצה',
  contact: {
    whatsapp: '972555073405',
    whatsappMessage: 'שלום, אני מעוניין לשמוע על השירותים של GD × BB',
    email: 'BarsBuild@gmail.com',
  },
  links: {
    whatsappUrl: `https://wa.me/972555073405?text=${encodeURIComponent('שלום, אני מעוניין לשמוע על השירותים של GD × BB')}`,
    mailtoUrl: `mailto:BarsBuild@gmail.com?subject=${encodeURIComponent('פנייה מהאתר - GD × BB')}`,
  },
  portfolio: [
    {
      id: 'santimarzi',
      title: 'סנטי מרזי',
      titleEn: 'Santi Marzi',
      url: 'https://santimarzi.com',
      category: 'מותג אופנה ויוקרה',
      description: 'אתר מותג יוקרתי בעל ארכיטקטורה מהירה, חוויית משתמש אלגנטית והתאמה מושלמת למובייל.',
      image: '/portfolio/santimarzi.png',
      tags: ['Next.js', 'E-Commerce', 'UX/UI', 'High Speed'],
    },
    {
      id: 'pizabuenna',
      title: 'פיצה בואנה',
      titleEn: 'Pizza Buena',
      url: 'https://pizabuenna.com',
      category: 'מסעדנות ומזון',
      description: 'מערכת הזמנות דיגיטלית מהירה, ממשק תפריט חכם וממיר במיוחד המותאם לנייד.',
      image: '/portfolio/pizabuenna.png',
      tags: ['Online Ordering', 'Mobile-First', 'Fast UX'],
    },
    {
      id: 'cinemus',
      title: 'Cinemus',
      titleEn: 'Cinemus',
      url: 'https://cinemus.app',
      category: 'פלטפורמת מדיה ובידור',
      description: 'אפליקציית ווב מתקדמת לחוויות תוכן אינטראקטיביות עם מעברים חלקים ועיצוב כהה מודרני.',
      image: '/portfolio/cinemus.png',
      tags: ['Web App', 'Dark UI', 'Interactive', 'Media'],
    },
    {
      id: 'graffitidesign',
      title: 'Graffiti Design',
      titleEn: 'Graffiti Design',
      url: 'https://graffitidesign.vercel.app',
      category: 'סטודיו לעיצוב וקריאייטיב',
      description: 'תיק עבודות דינמי עם טיפוגרפיה נועזת, ביצועי טעינה מיידיים ומבנה נקי.',
      image: '/portfolio/graffitidesign.png',
      tags: ['Design Studio', 'Vercel', 'Creative Showcase'],
    },
    {
      id: 'bybengg',
      title: 'ByBengg',
      titleEn: 'ByBengg',
      url: 'https://bybengg.vercel.app',
      category: 'מותג לייפסטייל ומוצרים',
      description: 'חנות קטלוג מודרנית עם דגש על תמונות ברזולוציה גבוהה, תגובתיות מהירה ויחס המרה גבוה.',
      image: '/portfolio/bybengg.png',
      tags: ['Product Catalog', 'UX Architecture', 'Performance'],
    },
    {
      id: 'barsbuild',
      title: 'BarsBuild',
      titleEn: 'BarsBuild',
      url: 'https://barsbuild.me',
      category: 'פלטפורמת פיתוח ואינטגרציה',
      description: 'אתר בית טכנולוגי המציג פתרונות בנייה ואינטגרציה מותאמים אישית לעסקים וחברות.',
      image: '/portfolio/barsbuild.png',
      tags: ['Tech Platform', 'Custom Build', 'Full Stack'],
    },
  ] as PortfolioItem[],
};
