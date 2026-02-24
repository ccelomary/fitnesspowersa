import { type LucideIcon } from "lucide-react";

export function ServiceCard({ icon: Icon, title, text }: { icon: LucideIcon; title: string; text: string }) {
  return (
    <article className="desert-card p-6 transition hover:-translate-y-1 hover:border-amber-300/50">
      <Icon className="mb-3 h-8 w-8 text-amber-300" />
      <h3 className="text-xl font-bold text-amber-100">{title}</h3>
      <p className="mt-2 text-sm text-amber-50/75">{text}</p>
    </article>
  );
}
