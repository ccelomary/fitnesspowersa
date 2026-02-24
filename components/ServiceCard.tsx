import { type LucideIcon } from "lucide-react";

export function ServiceCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-1 hover:border-emerald-300/60">
      <Icon className="mb-3 h-8 w-8 text-fuchsia-300" />
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <p className="mt-2 text-sm text-white/75">{text}</p>
    </article>
  );
}
