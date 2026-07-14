# Neoogle

Ultra-premium, data-driven **Bento Box** landing page for the Neoogle boutique
marketing agency. Built with **Next.js 14 (App Router)**, **Tailwind CSS**,
**TypeScript**, and **GSAP** for entrance animations.

## Design system

| Token        | Value                                             |
| ------------ | ------------------------------------------------- |
| Background   | Pitch black `#000000`                             |
| Card border  | `neutral-800` (#262626)                           |
| Body text    | `neutral-300` (#d4d4d4)                            |
| Accent       | Neon purple `#9D00FF` — **CTA + interactive dots only** |
| Font         | Inter (headings tracking-tight), JetBrains Mono for terminal |

Key interactions:
- Floating `backdrop-blur` pill navbar (logo left, CTA right).
- Pointer-following neon **border-glow** on every bento card (`components/BentoCard.tsx` + `.bento-card` in `globals.css`).
- GSAP staggered reveal on load via `useGSAP` (`app/page.tsx`).

## Getting started

> Requires **Node.js 18.17+**. If `node -v` fails, install Node first
> (e.g. `brew install node` or from https://nodejs.org).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Structure

```
app/
  layout.tsx          # Global floating header + footer, fonts, metadata
  page.tsx            # Home — bento grid, GSAP entrance
  services/page.tsx   # /services — Offer, Funnels, Ad Architecture
  about/page.tsx      # /about — founder story
  contact/page.tsx    # /contact — phone, YouTube, booking
  globals.css         # Tokens, .bento-card depth + glow, bubble anims
components/
  Navbar.tsx          # Floating capsule header (Mobbin style, client)
  Footer.tsx          # Shared footer with nav + socials
  BubbleLogo.tsx      # Animated "breathing" glass-knot logo mark (SVG + CSS)
  BentoCard.tsx       # Pointer-tracking neon border-glow + shadow depth (client)
  SystemPipeline.tsx  # Terminal-style 3-step process dashboard
  RevealGroup.tsx     # Shared GSAP staggered entrance wrapper (client)
  PageShell.tsx       # Page frame: black ground + grid texture
  PageHeading.tsx     # Eyebrow + title + subtitle block
lib/
  site.ts             # Single source of truth for links, phone, nav
```

## Depth system

Cards carry a two-part shadow — a radiant purple glow
(`0 0 50px rgba(157,0,255,.08)`) plus a deep SaaS drop shadow — and lift on
hover to `0 0 30px rgba(157,0,255,.2)`. Defined once on `.bento-card` in
`globals.css`.

## Logo

`BubbleLogo.tsx` renders the real glass-knot render from `public/`:
- `logo-mark.jpg` (512×512 square) — header, footer, About mark
- `logo-hero.jpg` (1280×714 wide) — hero visual (`variant="hero"`)

Both sit on pure black, so the component applies `mix-blend-mode: screen`
(drops the black ground) plus a radial `mask-image` (feathers the edges so the
image never reads as a box). To replace the art, overwrite those two files —
keep the filenames and the component picks them up. Source PNGs were optimized
with `sips`; re-run if you swap in new high-res renders.
