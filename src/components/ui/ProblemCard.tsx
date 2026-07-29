interface ProblemCardProps {
  title: string;
  body: string;
}

export function ProblemCard({ title, body }: ProblemCardProps) {
  return (
    <div className="bg-surface rounded-xl border border-brand-line p-6 shadow-sm">
      <h3 className="text-card-title font-bold text-brand-text mb-3">{title}</h3>
      <p className="text-body text-brand-muted leading-relaxed">{body}</p>
    </div>
  );
}
