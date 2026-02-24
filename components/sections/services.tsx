import { AnimatedSection } from "@/components/animated-section";
import { SectionTitle } from "@/components/section-title";
import { ServiceCard } from "@/components/service-card";

export function ServicesSection() {
  return (
    <AnimatedSection id="services" className="container py-20">
      <SectionTitle
        eyebrow="Services"
        title="Programs That Drive Results"
        subtitle="Choose your path and let our coaches build your transformation blueprint."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <ServiceCard icon="strength" title="Strength & Conditioning" description="Progressive plans for strength, endurance, and confidence." />
        <ServiceCard icon="transformation" title="Fat Loss Transformation" description="Structured workouts and check-ins for sustainable results." />
        <ServiceCard icon="wellness" title="Personal Training" description="Private sessions for technique, accountability, and speed." />
      </div>
    </AnimatedSection>
  );
}
