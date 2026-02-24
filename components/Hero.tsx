"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-amber-800 via-orange-700 to-[#3f2417] py-16 md:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(251,191,36,0.25),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(253,186,116,0.2),transparent_30%)]" />
      <div className="container relative z-10 grid items-center gap-10 md:grid-cols-2">
        <div className="text-white">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-amber-200">
            Saudi Spirit • Desert Strength • Real Results
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-2xl text-4xl font-black leading-tight md:text-6xl"
          >
            Train with Power, Inspired by the Desert Energy of Saudi Arabia.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-5 max-w-xl text-base text-amber-50/90 md:text-lg"
          >
            A bold fitness experience blending vibrant coaching, premium equipment, and seasonal offers—crafted for members who want visible transformation.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-8 flex flex-wrap gap-4">
            <Link href="#pricing">
              <Button size="lg" className="bg-amber-200 text-[#5b321f] hover:bg-amber-100">
                Book a Free Trial
              </Button>
            </Link>
            <Link href="#offers">
              <Button size="lg" variant="secondary" className="border-amber-100/35 bg-black/20 text-white hover:bg-black/35">
                View Latest Offers
              </Button>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 0.25, duration: 0.6 }}
          className="relative"
        >
          <div className="absolute -inset-2 rounded-[2rem] bg-gradient-to-br from-amber-300/45 via-orange-300/20 to-transparent blur-md" />
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-100/25 shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1509316785289-025f5b846b35?auto=format&fit=crop&w=1400&q=80"
              alt="Desert dunes landscape inspiring fitnesspowersa hero design"
              width={900}
              height={1100}
              priority
              className="h-[380px] w-full object-cover md:h-[520px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#3a1f10]/70 via-transparent to-amber-100/10" />
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-amber-100/90">Fitness Power SA</p>
              <p className="mt-2 text-xl font-black text-white">Built in Saudi. Driven by grit.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
