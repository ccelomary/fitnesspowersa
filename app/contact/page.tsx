import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | fitnesspowersa",
  description: "Contact fitnesspowersa in Saudi Arabia and book your free trial."
};

export default function ContactPage() {
  return (
    <section className="container py-20">
      <h1 className="mb-8 text-4xl font-black">Contact fitnesspowersa</h1>
      <div className="grid gap-8 lg:grid-cols-2">
        <ContactForm />
        <iframe
          src="https://www.google.com/maps?q=Riyadh%20Saudi%20Arabia&output=embed"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Fitness Power Saudi map"
          className="h-full min-h-[420px] w-full rounded-2xl border border-white/15"
        />
      </div>
    </section>
  );
}
