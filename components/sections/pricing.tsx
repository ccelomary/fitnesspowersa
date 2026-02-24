import Link from "next/link";
import { AnimatedSection } from "@/components/animated-section";
import { SectionTitle } from "@/components/section-title";
import { Button } from "@/components/ui/button";

const plans = [
  { name: "Basic", price: "199 SAR", features: ["Gym access", "Fitness assessment", "Standard hours"] },
  { name: "Plus", price: "349 SAR", features: ["Gym + 8 classes", "Monthly check-in", "Nutrition guide"] },
  { name: "Elite", price: "599 SAR", features: ["Unlimited classes", "4 PT sessions", "Priority coach support"] }
];

export function PricingSection() {
  return (
    <AnimatedSection id="pricing" className="container py-20">
      <SectionTitle eyebrow="Pricing" title="Simple Plans. Serious Value." subtitle="Start where you are and scale with your goals." />
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div key={plan.name} className="rounded-2xl border border-white/10 bg-card p-6">
            <h3 className="text-xl font-bold">{plan.name}</h3>
            <p className="my-4 text-3xl font-black text-primary">{plan.price}<span className="text-sm text-muted"> / month</span></p>
            <ul className="mb-6 space-y-2 text-sm text-muted">
              {plan.features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
            <Link href="/contact">
              <Button className="w-full">Contact Us</Button>
            </Link>
          </div>
        ))}
      </div>
    </AnimatedSection>
  );
}
