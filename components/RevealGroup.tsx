"use client";

import { useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

/**
 * RevealGroup — runs a single GSAP staggered entrance over any descendant
 * marked with `.reveal-init`. Lets server-rendered pages opt into the same
 * animation without each becoming a client component.
 */
export default function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // gsap.from(): elements are already visible in the DOM. GSAP briefly
      // sets them to opacity:0/y:24, then animates back to the current state.
      // If GSAP never runs (JS error, blocked script, etc.), content stays
      // visible — no more "invisible cards" bug on production builds.
      gsap.from(".reveal-init", {
        opacity: 0,
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.1,
      });
    },
    { scope }
  );

  return (
    <div ref={scope} className={className}>
      {children}
    </div>
  );
}
