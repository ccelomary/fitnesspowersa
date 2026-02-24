import Image from "next/image";
import { AnimatedSection } from "@/components/animated-section";

const trainers = [
  {
    name: "Omar Al-Harbi",
    role: "Head Strength Coach",
    bio: "Builds athletic strength programs with strict form coaching and measurable progress.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Lina Rahman",
    role: "Fat Loss Specialist",
    bio: "Helps busy professionals create sustainable transformation routines.",
    image: "https://images.unsplash.com/photo-1584863231364-2edc166de576?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Youssef Karim",
    role: "Personal Training Expert",
    bio: "Specializes in 1-on-1 coaching for confidence, technique, and consistency.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  }
];

export default function TrainersContent() {
  return (
    <AnimatedSection className="container py-20">
      <h1 className="mb-4 text-4xl font-black">Meet Our Trainers</h1>
      <p className="mb-10 max-w-2xl text-muted">Expert coaches dedicated to helping you hit your fitness goals faster and safer.</p>
      <div className="grid gap-6 md:grid-cols-3">
        {trainers.map((trainer) => (
          <article key={trainer.name} className="overflow-hidden rounded-2xl border border-white/10 bg-card">
            <Image src={trainer.image} alt={trainer.name} width={420} height={320} className="h-64 w-full object-cover" />
            <div className="p-5">
              <h2 className="text-xl font-bold">{trainer.name}</h2>
              <p className="mb-2 text-sm uppercase tracking-wide text-primary">{trainer.role}</p>
              <p className="text-sm text-muted">{trainer.bio}</p>
            </div>
          </article>
        ))}
      </div>
    </AnimatedSection>
  );
}
