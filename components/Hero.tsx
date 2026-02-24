"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-fuchsia-600 via-violet-600 to-emerald-500 py-24">
      <div className="absolute -left-20 top-10 h-56 w-56 rounded-full bg-yellow-300/20 blur-3xl" />
      <div className="absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="container relative z-10 text-white">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-bold uppercase tracking-[0.2em]">
          Power • Performance • Results
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl text-4xl font-black leading-tight md:text-6xl"
        >
          Transform Faster with Saudi’s Most Vibrant Gym Experience.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-5 max-w-2xl text-base text-white/90 md:text-lg"
        >
          Join fitnesspowersa for high-energy workouts, expert coaching, colorful motivation, and offers that keep you committed all year.
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
          <Link href="#pricing">
            <Button size="lg" className="bg-white text-violet-700 hover:bg-white/90">Book a Free Trial</Button>
          </Link>
          <Link href="#offers">
            <Button size="lg" variant="secondary" className="border-white/30 bg-black/20 text-white hover:bg-black/35">
              View Latest Offers
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
