"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import BubbleLogo from "./BubbleLogo";
import { nav, site } from "@/lib/site";

/**
 * Floating capsule header (Mobbin style) — centered, absolutely positioned,
 * rounded-full, neutral-800 border, heavy backdrop-blur so content scrolls
 * behind it, lifted off the page by a soft neon-purple drop shadow.
 */
export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav className="flex w-full max-w-3xl items-center justify-between rounded-full border border-neutral-800 bg-black/60 px-3 py-2.5 pl-5 backdrop-blur-md shadow-[0_0_20px_rgba(157,0,255,0.15)]">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="Neoogle home"
        >
          <BubbleLogo size={34} />
          <span className="text-lg font-semibold tracking-tight text-white">
            Neoogle
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {nav.slice(1).map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
                  active
                    ? "text-white"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        <a
          href={site.booking}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-neon px-5 py-2 text-sm font-medium text-white shadow-neon-glow transition-all duration-300 hover:bg-neon-soft hover:shadow-[0_0_32px_rgba(157,0,255,0.6)]"
        >
          Book a Call
        </a>
      </nav>
    </header>
  );
}
