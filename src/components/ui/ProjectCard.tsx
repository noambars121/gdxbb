import Image from 'next/image';

interface ProjectCardProps {
  imageSrc: string;
  imageAlt: string;
  name: string;
  category: string;
  description: string;
  href: string;
}

export function ProjectCard({
  imageSrc,
  imageAlt,
  name,
  category,
  description,
  href,
}: ProjectCardProps) {
  return (
    <article className="bg-surface rounded-xl overflow-hidden shadow-md border border-brand-line">
      <div className="h-48 w-full overflow-hidden bg-brand-line relative">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={512}
          height={192}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-5">
        <h3 className="text-card-title font-bold text-brand-text">{name}</h3>
        <p className="text-body-sm text-brand-muted mt-1">{category}</p>
        <p className="text-body text-brand-muted mt-3 leading-relaxed">{description}</p>
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 block text-brand-blue text-body-sm font-medium hover:underline"
        >
          ביקור באתר החי ←
        </a>
      </div>
    </article>
  );
}
