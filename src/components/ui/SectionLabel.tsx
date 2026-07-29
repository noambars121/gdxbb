interface SectionLabelProps {
  text: string;
  light?: boolean;
}

export function SectionLabel({ text, light = true }: SectionLabelProps) {
  return (
    <span
      className={`block mb-2 text-label font-medium tracking-widest uppercase ${
        light ? 'text-brand-muted' : 'text-brand-blue opacity-70'
      }`}
    >
      {text}
    </span>
  );
}
