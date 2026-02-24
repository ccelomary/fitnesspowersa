import { AnimatedSection } from "@/components/animated-section";
import { SectionTitle } from "@/components/section-title";
import { TestimonialCard } from "@/components/testimonial-card";

export function TestimonialsSection() {
  return (
    <AnimatedSection id="testimonials" className="container py-20">
      <SectionTitle
        eyebrow="Testimonials"
        title="Members Who Chose Action"
        subtitle="Every story proves what consistent training and expert guidance can do."
      />
      <div className="grid gap-6 md:grid-cols-3">
        <TestimonialCard quote="I lost 11kg and gained confidence in 4 months." name="Maha S." result="Fat Loss Success" />
        <TestimonialCard quote="The coaching quality and community are unmatched." name="Faisal K." result="Strength Progress" />
        <TestimonialCard quote="I started as a beginner and now I train 5 days weekly." name="Noura A." result="Lifestyle Upgrade" />
      </div>
    </AnimatedSection>
  );
}
