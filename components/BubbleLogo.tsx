import Image from "next/image";

/**
 * BubbleLogo — the real Neoogle glass-knot render.
 *
 * Rendered as a plain <Image>. Earlier versions used mix-blend-mode: screen
 * plus a radial mask-image to drop the JPG's black background out and feather
 * the edges. On the Vercel production build the mask was being interpreted in
 * luminance mode, where its `#000` visible color hid the entire image — the
 * hero showed blank while the neighbouring text card rendered fine. Both
 * effects have been removed; the JPG's black ground reads as effectively
 * identical to the card's #0a0a0a→#050505 gradient, so the image integrates
 * cleanly without any compositing tricks that can fail in production.
 *
 * variant "mark" → square logo used in the header, footer, and small marks.
 * variant "hero" → wide render used as the hero visual.
 */
export default function BubbleLogo({
  className = "",
  size = 44,
  animate = true,
  variant = "mark",
}: {
  className?: string;
  size?: number;
  animate?: boolean;
  variant?: "mark" | "hero";
}) {
  const isHero = variant === "hero";
  const src = isHero ? "/logo-hero.jpg" : "/logo-mark.jpg";
  const ratio = isHero ? 1280 / 714 : 1;
  const w = size;
  const h = Math.round(size / ratio);

  // Hero variant: scale down to fit narrow viewports (up to `size` wide, keeps
  // aspect ratio via CSS). Mark variant: stays at a fixed small footprint —
  // never big enough to overflow.
  const wrapperStyle: React.CSSProperties = isHero
    ? { width: "100%", maxWidth: w, aspectRatio: `${w} / ${h}` }
    : { width: w, height: h };

  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={wrapperStyle}
      aria-hidden="true"
    >
      {/* Soft breathing bloom behind the hero mark for extra depth */}
      {animate && isHero && (
        <span className="bubble-halo pointer-events-none absolute inset-0" />
      )}
      <Image
        src={src}
        alt=""
        width={w * 2}
        height={h * 2}
        priority={isHero}
        className={`relative h-full w-full select-none object-contain ${
          animate ? "bubble-drift" : ""
        }`}
      />
    </span>
  );
}
