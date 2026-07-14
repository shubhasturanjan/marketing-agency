import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Neoogle — Systematic Growth for Year Two Startups",
  description:
    "Neoogle builds systematic, data-driven acquisition engines for high-potential Indian startups entering their second year of growth.",
  openGraph: {
    title: "Neoogle — Systematic Growth for Year Two Startups",
    description:
      "Data-driven acquisition engines for high-potential Indian startups. Boutique speed over agency bureaucracy.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black font-sans antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
