interface StepItemProps {
  number: string;
  title: string;
  body: string;
}

export function StepItem({ number, title, body }: StepItemProps) {
  return (
    <div className="flex flex-col gap-3 relative">
      <span className="text-brand-blue text-label font-bold tracking-widest">{number}</span>
      <h3 className="text-card-title font-bold text-surface">{title}</h3>
      <p className="text-body text-brand-muted leading-relaxed">{body}</p>
    </div>
  );
}
