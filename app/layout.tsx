import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "fitnesspowersa | Modern Gym in Saudi Arabia",
  description: "Join fitnesspowersa for personal training, classes, offers, and transformation programs in Saudi Arabia.",
  openGraph: {
    title: "fitnesspowersa | Modern Gym in Saudi Arabia",
    description: "Book your free trial and unlock vibrant seasonal offers at fitnesspowersa.",
    type: "website",
    url: "https://fitnesspowersa.vercel.app"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
