import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="container flex flex-col items-center justify-between gap-3 text-sm text-muted md:flex-row">
        <p>© {new Date().getFullYear()} fitnesspowersa. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <Link href="https://www.instagram.com/FitnesspowerSa" target="_blank" rel="noopener noreferrer">
            Instagram
          </Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}
