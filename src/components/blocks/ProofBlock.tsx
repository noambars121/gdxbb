import { SectionLabel } from '@/components/ui/SectionLabel';
import { ProjectCard } from '@/components/ui/ProjectCard';

export function ProofBlock() {
  return (
    <section className="bg-paper py-16 lg:py-20 border-t border-brand-line">
      <div className="max-w-5xl mx-auto px-6">
        <SectionLabel text="הוכחות בשטח" light />

        <h2 className="mt-4 text-h2 lg:text-[40px] font-extrabold text-brand-text leading-tight">
          לא תבניות. לא הבטחות.
          <br />
          פרויקטים חיים.
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ProjectCard
            imageSrc="/images/santi-marzi-preview.svg"
            imageAlt="Santi Marzi"
            name="Santi Marzi"
            category="מותג אופנה ויוקרה"
            description="אתר מותג עם חנות מובנית, עיצוב פרמיום, ומסלול רכישה מלא."
            href="https://santimarzi.vercel.app"
          />
          <ProjectCard
            imageSrc="/images/project-2-preview.svg"
            imageAlt="Pizza Buena"
            name="Pizza Buena"
            category="מסעדנות ומזון"
            description="מערכת הזמנות דיגיטלית מהירה עם ממשק תפריט חכם ומסלול ברור מהתפריט לפעולה."
            href="https://pizabuenna.com"
          />
          <ProjectCard
            imageSrc="/images/project-3-preview.svg"
            imageAlt="BarsBuild"
            name="BarsBuild"
            category="פלטפורמת פיתוח ואינטגרציה"
            description="אתר בית טכנולוגי המציג פתרונות בנייה ואינטגרציה מותאמים אישית לעסקים."
            href="https://barsbuild.me"
          />
        </div>

        <div className="mt-10 text-center">
          <a href="#" className="text-brand-blue text-body font-medium hover:underline">
            עוד פרויקטים ←
          </a>
        </div>
      </div>
    </section>
  );
}
