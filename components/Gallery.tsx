"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const images = [
  "photo-1517838277536-f5f99be501cd",
  "photo-1534438327276-14e5300c3a48",
  "photo-1581009146145-b5ef050c2e1e",
  "photo-1593079831268-3381b0db4a77",
  "photo-1571019613454-1cb2f99b2d8b",
  "photo-1549576490-b0b4831ef60a"
];

export function Gallery() {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {images.map((id) => (
        <motion.div key={id} whileHover={{ scale: 1.05 }} className="overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={`https://images.unsplash.com/${id}?auto=format&fit=crop&w=700&q=80`}
            alt="Gym gallery"
            width={420}
            height={320}
            className="h-44 w-full object-cover md:h-52"
          />
        </motion.div>
      ))}
    </div>
  );
}
