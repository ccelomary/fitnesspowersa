"use client";

import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Pricing", href: "#pricing" },
  { label: "Trainers", href: "/trainers" },
  { label: "Contact", href: "/contact" }
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/60 backdrop-blur">
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-bold tracking-wide text-primary">
          fitnesspowersa
        </Link>
        <button className="md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          <Menu />
        </button>
        <ul className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="text-sm text-muted transition hover:text-white">
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact">
              <Button size="sm">Book Free Trial</Button>
            </Link>
          </li>
        </ul>
      </nav>
      {open && (
        <ul className="space-y-3 border-t border-white/10 bg-card p-4 md:hidden">
          {links.map((link) => (
            <li key={link.label}>
              <Link href={link.href} className="block text-sm text-muted" onClick={() => setOpen(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
