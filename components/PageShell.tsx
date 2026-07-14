import type { ReactNode } from "react";

/**
 * PageShell — shared page frame: pitch-black ground, ambient grid texture,
 * and a centered max-width column with room for the floating header.
 */
export default function PageShell({ children }: { children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="grid-texture pointer-events-none absolute inset-0" />
      <main className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:pt-36">
        {children}
      </main>
    </div>
  );
}
