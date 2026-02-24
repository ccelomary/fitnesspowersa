export function SectionTitle({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
      <h2 className="mb-4 text-3xl font-bold md:text-4xl">{title}</h2>
      <p className="text-muted">{subtitle}</p>
    </div>
  );
}
