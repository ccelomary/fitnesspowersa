"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Offers", href: "#offers" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" }
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b border-white/20 bg-black/70 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-black text-white">
          <Dumbbell className="h-5 w-5 text-emerald-300" />
          fitnesspowersa
        </Link>

        <button aria-label="Toggle Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <Menu className="text-white" />
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-sm font-medium text-white/85 transition hover:text-emerald-300">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact">
              <Button size="sm" className="bg-gradient-to-r from-fuchsia-500 to-emerald-400 text-white">
                Join Now
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-white/15 bg-black/90 px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="block text-white/85" onClick={() => setOpen(false)}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </motion.header>
  );
}
