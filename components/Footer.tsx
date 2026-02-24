import Link from "next/link";
import { Instagram, Phone, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-amber-100/15 bg-[#150d08] py-10">
      <div className="container grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-xl font-black text-amber-100">fitnesspowersa</p>
          <p className="mt-2 text-sm text-amber-50/70">Powerful training. Bold energy. Real transformation.</p>
        </div>
        <div className="text-sm text-amber-50/75">
          <p className="mb-2 font-semibold text-amber-100">Contact</p>
          <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +966 XX XXX XXXX</p>
          <p className="mt-1 flex items-center gap-2"><Mail className="h-4 w-4" /> info@fitnesspowersa.com</p>
        </div>
        <div className="text-sm text-amber-50/75">
          <p className="mb-2 font-semibold text-amber-100">Social</p>
          <Link href="https://www.instagram.com/FitnesspowerSa" target="_blank" className="inline-flex items-center gap-2 hover:text-amber-300">
            <Instagram className="h-4 w-4" /> @fitnesspowersa
          </Link>
        </div>
      </div>
    </footer>
  );
}
