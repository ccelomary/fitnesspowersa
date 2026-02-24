import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "fitnesspowersa | Modern Gym in Saudi Arabia",
  description:
    "Join fitnesspowersa for strength coaching, fat loss programs, group classes, and personal training in Saudi Arabia.",
  openGraph: {
    title: "fitnesspowersa | Transform Your Body",
    description: "Book your free trial and start a results-driven training journey.",
    type: "website",
    url: "https://fitnesspowersa.vercel.app"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
