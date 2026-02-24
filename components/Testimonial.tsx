"use client";

import { motion } from "framer-motion";

export function Testimonial({ quote, member }: { quote: string; member: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="desert-card p-6"
    >
      <p className="text-amber-50/90">“{quote}”</p>
      <p className="mt-4 text-sm font-bold uppercase tracking-wide text-amber-300">{member}</p>
    </motion.article>
  );
}
