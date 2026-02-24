import type { Metadata } from "next";
import { AnimatedSection } from "@/components/animated-section";
import { BookingForm } from "@/components/booking-form";

export const metadata: Metadata = {
  title: "Contact | fitnesspowersa",
  description: "Contact fitnesspowersa and book your free trial session today."
};

export default function ContactContent() {
  return (
    <AnimatedSection className="container py-20">
      <h1 className="mb-4 text-4xl font-black">Contact fitnesspowersa</h1>
      <p className="mb-10 max-w-2xl text-muted">Reach out for memberships, schedules, or personal training guidance.</p>
      <div className="grid gap-8 lg:grid-cols-2">
        <BookingForm />
        <div className="space-y-6">
          <div className="rounded-2xl border border-white/10 bg-card p-6">
            <p className="mb-1 text-sm uppercase tracking-wide text-primary">Location</p>
            <p>Saudi Arabia</p>
            <p className="mt-3 text-sm text-muted">Phone: +966 XX XXX XXXX</p>
            <p className="text-sm text-muted">Email: info@fitnesspowersa.com</p>
          </div>
          <iframe
            src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&output=embed"
            loading="lazy"
            className="h-80 w-full rounded-2xl border border-white/10"
            referrerPolicy="no-referrer-when-downgrade"
            title="Gym location map"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
