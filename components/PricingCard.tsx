"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function PricingCard({
  name,
  price,
  features,
  accent
}: {
  name: string;
  price: string;
  features: string[];
  accent: string;
}) {
  return (
    <motion.article whileHover={{ y: -6 }} className="desert-card p-6">
      <div className={`rounded-xl px-4 py-2 text-sm font-bold text-white ${accent}`}>{name}</div>
      <p className="mt-5 text-4xl font-black text-amber-300">{price}</p>
      <p className="text-sm text-amber-50/65">per month</p>
      <ul className="my-5 space-y-2 text-sm text-amber-50/80">
        {features.map((feature) => (
          <li key={feature}>• {feature}</li>
        ))}
      </ul>
      <Button className="w-full bg-gradient-to-r from-amber-400 to-orange-700 text-white">Join Now</Button>
    </motion.article>
  );
}
