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
      className={`sticky top-0 z-50 transition-all ${scrolled ? "border-b border-amber-100/20 bg-[#1b120d]/80 backdrop-blur-xl" : "bg-transparent"}`}
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 text-lg font-black text-amber-100">
          <Dumbbell className="h-5 w-5 text-amber-300" />
          fitnesspowersa
        </Link>

        <button aria-label="Toggle Menu" className="md:hidden" onClick={() => setOpen((v) => !v)}>
          <Menu className="text-amber-100" />
        </button>

        <ul className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-sm font-medium text-amber-50/85 transition hover:text-amber-300">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="#contact">
              <Button size="sm" className="bg-gradient-to-r from-amber-500 to-orange-700 text-white">
                Join Now
              </Button>
            </Link>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-amber-100/15 bg-[#1b120d]/95 px-4 py-4 md:hidden">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="block text-amber-50/85" onClick={() => setOpen(false)}>
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
