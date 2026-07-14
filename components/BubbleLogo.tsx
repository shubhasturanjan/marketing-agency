import Image from "next/image";

/**
 * BubbleLogo — the real Neoogle glass-knot render. The source images sit on a
 * pure-black ground, so `mix-blend-mode: screen` drops the black out entirely
 * and only the glowing knot shows over whatever is behind it (works on the
 * black page, the blurred capsule header, and the cards alike).
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

  return (
    <span
      className={`relative inline-flex items-center justify-center ${className}`}
      style={{ width: w, height: h }}
      aria-hidden="true"
    >
      {/* Soft bloom behind the hero mark for extra depth */}
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
        style={{
          mixBlendMode: "screen",
          // Feather the edges so the image's black ground never reads as a box
          WebkitMaskImage:
            "radial-gradient(ellipse 74% 74% at 50% 50%, #000 60%, transparent 84%)",
          maskImage:
            "radial-gradient(ellipse 74% 74% at 50% 50%, #000 60%, transparent 84%)",
        }}
      />
    </span>
  );
}
