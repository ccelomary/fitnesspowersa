export function TestimonialCard({ quote, name, result }: { quote: string; name: string; result: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-card p-6">
      <p className="mb-4 text-sm text-foreground/90">“{quote}”</p>
      <p className="font-semibold">{name}</p>
      <p className="text-xs uppercase tracking-wide text-primary">{result}</p>
    </article>
  );
}
