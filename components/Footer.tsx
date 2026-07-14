import Link from "next/link";
import BubbleLogo from "./BubbleLogo";
import { nav, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-neutral-900 px-4 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 text-center">
        <div className="flex items-center gap-2.5">
          <BubbleLogo size={30} animate={false} />
          <span className="text-base font-semibold tracking-tight text-white">
            Neoogle
          </span>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-neutral-400 transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-neutral-500">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neon-soft">
            Instagram
          </a>
          <a href={site.youtube} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-neon-soft">
            YouTube
          </a>
          <a href={site.phoneHref} className="transition-colors hover:text-neon-soft">
            {site.phone}
          </a>
        </div>

        <p className="text-xs text-neutral-600">
          © {new Date().getFullYear()} Neoogle — Systematic growth for Year Two startups.
        </p>
      </div>
    </footer>
  );
}
