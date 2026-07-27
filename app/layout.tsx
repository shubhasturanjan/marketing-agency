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
  title: "Neoogle | Growth Marketing Agency for High-Growth Startups",
  description:
    "We build high-converting direct-response marketing engines and B2B growth systems designed to scale early-stage startups.",
  openGraph: {
    title: "Neoogle | Growth Marketing Agency for High-Growth Startups",
    description:
      "We build high-converting direct-response marketing engines and B2B growth systems designed to scale early-stage startups.",
    type: "website",
  },
  icons: {
    icon: "/logo-mark.jpg",
    shortcut: "/logo-mark.jpg",
    apple: "/logo-mark.jpg",
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
