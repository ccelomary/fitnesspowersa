import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Trainers | fitnesspowersa",
  description: "Meet certified coaches at fitnesspowersa."
};

const trainers = [
  {
    name: "Omar Al-Harbi",
    role: "Head Strength Coach",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Lina Rahman",
    role: "Transformation Coach",
    image: "https://images.unsplash.com/photo-1584863231364-2edc166de576?auto=format&fit=crop&w=900&q=80"
  },
  {
    name: "Youssef Karim",
    role: "PT Specialist",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=900&q=80"
  }
];

export default function TrainersPage() {
  return (
    <section className="container py-10 md:py-14">
      <div className="desert-section">
        <h1 className="desert-title">Our Trainers</h1>
        <div className="grid gap-6 md:grid-cols-3">
          {trainers.map((trainer) => (
            <article key={trainer.name} className="desert-card overflow-hidden">
              <Image src={trainer.image} alt={trainer.name} width={380} height={320} className="h-64 w-full object-cover" />
              <div className="p-5">
                <h2 className="text-xl font-bold text-amber-100">{trainer.name}</h2>
                <p className="text-sm text-amber-300">{trainer.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
