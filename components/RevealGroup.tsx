import type { ReactNode } from "react";

/**
 * RevealGroup — layout wrapper for a group of `.reveal-init` cards.
 *
 * The entrance animation is now pure CSS (see `.reveal-init` in globals.css):
 * a transform-only rise where opacity is 1 at every frame. This component
 * therefore runs NO JavaScript — content is guaranteed visible on load even
 * if scripts fail, are blocked, or hydration is delayed. Kept as a component
 * so pages don't need to change, and as the single place to reintroduce
 * JS-driven motion later if ever desired.
 */
export default function RevealGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
