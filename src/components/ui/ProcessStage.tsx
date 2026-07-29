interface ProcessStageProps {
  number: string;
  title: string;
  body: string;
}

export function ProcessStage({ number, title, body }: ProcessStageProps) {
  return (
    <div className="flex flex-col gap-3">
      <span className="text-brand-gold font-extrabold text-h3">{number}</span>
      <h3 className="text-card-title font-bold text-surface">{title}</h3>
      <p className="text-body text-brand-muted leading-relaxed">{body}</p>
    </div>
  );
}
