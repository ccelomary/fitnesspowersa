import { Hero } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ServicesSection } from "@/components/sections/services";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { PricingSection } from "@/components/sections/pricing";

export default function IndexPage() {
  return (
    <>
      <Hero />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
    </>
  );
}
