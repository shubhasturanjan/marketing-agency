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
      // Transform-only entrance. We deliberately do NOT animate opacity —
      // any opacity manipulation risks stranding elements at opacity:0 if
      // the animation is interrupted (React 18 concurrent tearing, useGSAP
      // context cleanup mid-animation, etc.). By only sliding on the Y axis
      // elements are always fully visible; if GSAP fails to run at all the
      // page still renders correctly, just without the entrance motion.
      gsap.from(".reveal-init", {
        y: 24,
        duration: 0.9,
        ease: "power3.out",
        stagger: 0.07,
        delay: 0.1,
        clearProps: "transform",
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
