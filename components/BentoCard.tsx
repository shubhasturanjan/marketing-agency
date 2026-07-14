"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * BentoCard — structural neutral-800 card with a pointer-following neon
 * border-glow. On mouse move we write the cursor position into --mx/--my CSS
 * vars, which the ::before/::after gradients in globals.css track.
 */
export default function BentoCard({
  children,
  className = "",
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
}) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
    el.style.setProperty("--my", `${e.clientY - rect.top}px`);
  };

  const Component = Tag as "div";

  return (
    <Component
      ref={ref}
      onMouseMove={handleMouseMove}
      className={`bento-card reveal-init ${className}`}
    >
      {children}
    </Component>
  );
}
