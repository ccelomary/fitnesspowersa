"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="section-gradient overflow-hidden py-20">
      <div className="container grid items-center gap-10 md:grid-cols-2">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
          <p className="mb-4 text-sm uppercase tracking-[0.2em] text-primary">Saudi Arabia’s Performance Gym</p>
          <h1 className="mb-5 text-4xl font-black leading-tight md:text-6xl">Build the Body. Own the Mind. Join fitnesspowersa.</h1>
          <p className="mb-8 max-w-xl text-muted">
            Elite coaching, high-energy classes, and transformation programs built for serious results. Start your trial and turn consistency into visible progress.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link href="/contact">
              <Button size="lg">Join Now</Button>
            </Link>
            <Link href="/contact">
              <Button variant="secondary" size="lg">
                Book a Free Trial
              </Button>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative"
        >
          <Image
            src="https://images.unsplash.com/photo-1549476464-37392f717541?auto=format&fit=crop&w=1200&q=80"
            alt="Athlete training"
            width={680}
            height={800}
            className="animate-float rounded-3xl border border-white/10 object-cover"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
}
