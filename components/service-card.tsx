import { Dumbbell, Flame, HeartPulse, type LucideIcon } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  strength: Dumbbell,
  transformation: Flame,
  wellness: HeartPulse
};

export function ServiceCard({ icon, title, description }: { icon: keyof typeof icons; title: string; description: string }) {
  const Icon = icons[icon];
  return (
    <div className="rounded-2xl border border-white/10 bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50">
      <Icon className="mb-4 h-8 w-8 text-primary" />
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  );
}
