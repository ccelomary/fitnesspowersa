"use client";

import { motion } from "framer-motion";

export function OfferCard({ title, description, gradient }: { title: string; description: string; gradient: string }) {
  return (
    <motion.article
      whileHover={{ scale: 1.03, rotate: -0.5 }}
      transition={{ duration: 0.25 }}
      className={`desert-card p-6 text-white shadow-xl ${gradient}`}
    >
      <h3 className="text-2xl font-black">{title}</h3>
      <p className="mt-2 text-sm text-white/90">{description}</p>
    </motion.article>
  );
}
