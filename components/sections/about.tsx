import { AnimatedSection } from "@/components/animated-section";
import { SectionTitle } from "@/components/section-title";

export function AboutSection() {
  return (
    <AnimatedSection id="about" className="container py-20">
      <SectionTitle
        eyebrow="About"
        title="A Gym Built for Transformation"
        subtitle="From beginners to athletes, our method blends coaching, accountability, and smart programming."
      />
      <div className="grid gap-5 text-muted md:grid-cols-3">
        <p className="rounded-2xl border border-white/10 bg-card p-6">Personalized plans designed around your body type, goals, and schedule.</p>
        <p className="rounded-2xl border border-white/10 bg-card p-6">Expert trainers focused on safe form, measurable gains, and sustainable habits.</p>
        <p className="rounded-2xl border border-white/10 bg-card p-6">A motivating community that pushes you to show up and level up every week.</p>
      </div>
    </AnimatedSection>
  );
}
