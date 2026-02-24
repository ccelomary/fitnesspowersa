"use client";

import { motion } from "framer-motion";

export function Testimonial({ quote, member }: { quote: string; member: string }) {
  return (
    <motion.article
      initial={{ opacity: 0, x: -18 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="rounded-2xl border border-white/15 bg-gradient-to-br from-violet-900/60 to-fuchsia-900/50 p-6"
    >
      <p className="text-white/90">“{quote}”</p>
      <p className="mt-4 text-sm font-bold uppercase tracking-wide text-emerald-300">{member}</p>
    </motion.article>
  );
}
