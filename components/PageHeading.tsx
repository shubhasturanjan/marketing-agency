/**
 * PageHeading — consistent eyebrow + title + subtitle block used at the top of
 * every subpage. The eyebrow's neon dot ties into the brand accent system.
 */
export default function PageHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="reveal-init mx-auto max-w-3xl text-center">
      <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3 py-1">
        <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-dot" />
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-400">
          {eyebrow}
        </span>
      </div>
      <h1 className="mt-5 text-balance text-3xl font-bold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mx-auto mt-4 max-w-xl text-balance text-base leading-relaxed text-neutral-400">
          {subtitle}
        </p>
      )}
    </div>
  );
}
