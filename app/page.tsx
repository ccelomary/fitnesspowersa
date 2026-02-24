import Image from "next/image";
import { Dumbbell, UserRoundCog, Sparkles, Salad } from "lucide-react";
import { Hero } from "@/components/Hero";
import { OfferCard } from "@/components/OfferCard";
import { ServiceCard } from "@/components/ServiceCard";
import { Gallery } from "@/components/Gallery";
import { PricingCard } from "@/components/PricingCard";
import { Testimonial } from "@/components/Testimonial";
import { ContactForm } from "@/components/ContactForm";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section id="about" className="container py-10 md:py-14">
        <div className="desert-section grid items-center gap-10 md:grid-cols-2">
          <Image
            src="https://images.unsplash.com/photo-1534258936925-c58bed479fcb?auto=format&fit=crop&w=1200&q=80"
            alt="Gym training area"
            width={700}
            height={500}
            className="rounded-2xl border border-amber-100/20"
          />
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-amber-300">About Us</p>
            <h2 className="mt-3 text-3xl font-black text-amber-100 md:text-4xl">High-Energy Fitness Culture Inspired by Real Results</h2>
            <p className="mt-4 text-amber-50/80">
              At fitnesspowersa, every workout is designed to be intense, colorful, and goal-focused. From first-timers to advanced athletes,
              we combine accountability, coaching, and motivation into one premium experience.
            </p>
          </div>
        </div>
      </section>

      <section id="offers" className="container py-10 md:py-14">
        <div className="desert-section">
          <h2 className="desert-title">Limited-Time Offers</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <OfferCard title="Summer Offers" description="Save 25% on all 3-month plans + free body scan." gradient="bg-gradient-to-br from-orange-500/95 to-amber-700/95" />
            <OfferCard title="National Day Deals" description="Exclusive Saudi National Day memberships with bonus PT sessions." gradient="bg-gradient-to-br from-emerald-600/95 to-lime-700/95" />
            <OfferCard title="Seasonal Promo" description="Join with a friend and both get one month of classes free." gradient="bg-gradient-to-br from-amber-600/95 to-orange-800/95" />
          </div>
        </div>
      </section>

      <section id="services" className="container py-10 md:py-14">
        <div className="desert-section">
          <h2 className="desert-title">Services</h2>
          <div className="grid gap-6 md:grid-cols-4">
            <ServiceCard icon={Dumbbell} title="Lift Weights" text="Strength zones with modern equipment and coaching support." />
            <ServiceCard icon={UserRoundCog} title="Personal Training" text="1-on-1 sessions personalized to your body and goals." />
            <ServiceCard icon={Sparkles} title="Group Classes" text="HIIT, conditioning, and energy-packed class schedules." />
            <ServiceCard icon={Salad} title="Nutrition" text="Simple meal strategies to accelerate fat loss and recovery." />
          </div>
        </div>
      </section>

      <section id="gallery" className="container py-10 md:py-14">
        <div className="desert-section">
          <h2 className="desert-title">Gym Gallery</h2>
          <Gallery />
        </div>
      </section>

      <section id="pricing" className="container py-10 md:py-14">
        <div className="desert-section">
          <h2 className="desert-title">Membership Plans</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <PricingCard name="Starter" price="199 SAR" accent="bg-gradient-to-r from-amber-500 to-orange-700" features={["Gym access", "1 onboarding session", "Community support"]} />
            <PricingCard name="Pro" price="349 SAR" accent="bg-gradient-to-r from-orange-500 to-amber-800" features={["Gym + classes", "Monthly coach check-in", "Nutrition starter guide"]} />
            <PricingCard name="Elite" price="599 SAR" accent="bg-gradient-to-r from-amber-300 to-yellow-600 text-[#4b2f16]" features={["Unlimited classes", "4 PT sessions", "Priority support"]} />
          </div>
        </div>
      </section>

      <section id="testimonials" className="container py-10 md:py-14">
        <div className="desert-section">
          <h2 className="desert-title">Member Stories</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Testimonial member="Ahmed R." quote="In 12 weeks, I became stronger, leaner, and more disciplined than ever." />
            <Testimonial member="Maha S." quote="The vibe is amazing—every class feels like a challenge I want to win." />
            <Testimonial member="Noura A." quote="I started as a beginner, now I train confidently and look forward to every session." />
          </div>
        </div>
      </section>

      <section id="contact" className="container py-10 md:py-14">
        <div className="desert-section">
          <h2 className="desert-title">Contact & Free Trial</h2>
          <div className="grid gap-8 lg:grid-cols-2">
            <ContactForm />
            <iframe
              src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Fitness Power Saudi map"
              className="h-full min-h-[420px] w-full rounded-2xl border border-amber-100/20"
            />
          </div>
        </div>
      </section>
    </>
  );
}
