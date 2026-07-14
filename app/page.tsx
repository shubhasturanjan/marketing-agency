import Link from "next/link";
import BentoCard from "@/components/BentoCard";
import BubbleLogo from "@/components/BubbleLogo";
import RevealGroup from "@/components/RevealGroup";
import { site } from "@/lib/site";

const pillars = [
  {
    id: "01",
    title: "Websites & Funnels",
    desc: "We build your high-converting digital storefront and offer structure.",
  },
  {
    id: "02",
    title: "Inbound Marketing",
    desc: "We manage your social media, email newsletters, and Google SEO.",
  },
  {
    id: "03",
    title: "Outbound Sales",
    desc: "We source your ideal prospects, send direct messages, and aggressively follow up.",
  },
];

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-black">
      <div className="grid-texture pointer-events-none absolute inset-0" />

      <main className="relative mx-auto max-w-6xl px-4 pb-24 pt-32 sm:pt-36">
        <RevealGroup className="grid auto-rows-[minmax(140px,auto)] grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* ---- Card 1: HERO (full-width split — copy left, knot right) ---- */}
          <BentoCard
            as="section"
            className="relative overflow-hidden p-8 md:col-span-2 lg:col-span-4 lg:p-14"
          >
            {/* Faint decorative arc sweeping through the panel */}
            <div className="pointer-events-none absolute -right-[20%] -top-1/2 h-[200%] w-[70%] rounded-full border border-white/[0.06]" />

            <div className="relative grid items-center gap-10 lg:grid-cols-2">
              <div className="flex flex-col items-start">
                <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-black/40 px-3.5 py-1.5">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]" />
                  <span className="text-xs font-medium text-neutral-300">
                    Available for New Clients
                  </span>
                </div>

                <h1 className="mt-6 text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white lg:text-5xl">
                  We Help High-Potential Startups Move to the Next Level of
                  Marketing.
                </h1>

                <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-neutral-400">
                  We build your website, manage your social media, rank your
                  brand on Google, and handle all your direct outbound messaging
                  to book qualified meetings directly on your calendar. A
                  complete marketing and sales department for your startup,
                  managed by the founder.
                </p>

                <div className="mt-8 flex flex-wrap items-center gap-3">
                  <a
                    href={site.booking}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(157,0,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-soft hover:shadow-[0_10px_40px_rgba(157,0,255,0.7)]"
                  >
                    Book a Call for Free
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                  <Link
                    href="/services"
                    className="rounded-full border border-neutral-700 px-6 py-3.5 text-sm font-medium text-neutral-200 transition-all duration-300 hover:border-neutral-500 hover:text-white"
                  >
                    Our Services
                  </Link>
                </div>
              </div>

              <div className="relative flex items-center justify-center py-4 lg:py-6">
                {/* Purple bloom rising from below, like the reference render */}
                <div className="absolute bottom-[-8%] left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(184,77,255,0.4),rgba(157,0,255,0.12)_45%,transparent_72%)] blur-2xl" />
                <BubbleLogo
                  variant="hero"
                  size={540}
                  className="relative max-w-full animate-float"
                />
              </div>
            </div>
          </BentoCard>

          {/* ---- Card 2: The Core Problem (wide) ---- */}
          <BentoCard
            as="article"
            className="flex flex-col justify-center p-8 md:col-span-2 lg:col-span-4"
          >
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                The Diagnosis
              </span>
            </div>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-white">
              The 12-to-18-Month Scaling Bottleneck
            </h2>
            <p className="mt-4 text-[15px] leading-relaxed text-neutral-400">
              You survived the launch trenches, but your pipeline still relies on
              erratic word-of-mouth. Managing disconnected freelancers or wasting
              your own hours on manual outreach is draining your cash flow.{" "}
              <span className="text-neutral-200">
                If you don&apos;t own a predictable customer acquisition system,
                you don&apos;t own your scale.
              </span>
            </p>
          </BentoCard>

          {/* ---- Card 3: The Deliverables Stack (3-column internal grid) ---- */}
          <BentoCard as="section" className="p-8 md:col-span-2 lg:col-span-4 lg:p-10">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <h2 className="text-2xl font-bold tracking-tight text-white">
                The Hands-Free Scaling Blueprint
              </h2>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                Total Acquisition Ecosystem
              </span>
            </div>

            {/* Neon workflow line linking the three pillars */}
            <div className="mt-8 h-px w-full bg-gradient-to-r from-transparent via-neon/50 to-transparent" />

            <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
              {pillars.map((pillar) => (
                <div key={pillar.id} className="relative">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
                    <span className="font-mono text-xs text-neon">
                      Pillar {pillar.id}
                    </span>
                  </div>
                  <h3 className="mt-3 text-base font-semibold tracking-tight text-white">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>
          </BentoCard>

          {/* ---- Card 4: Who We Partner With (split-row) ---- */}
          <BentoCard as="section" className="p-8 md:col-span-2 lg:col-span-4 lg:p-10">
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Who We Partner With
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-800 md:grid-cols-2">
              {/* The right founder */}
              <div className="bg-[#070707] p-7">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                    This Is You
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-300">
                  You are an Indian startup founder, you have moved past the
                  initial 12-to-18-month launch phase, you have a validated
                  product, and you are ready to hand off your customer
                  acquisition to a dedicated engine.
                </p>
              </div>

              {/* The pain they're done with */}
              <div className="bg-[#070707] p-7">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-neon animate-pulse-dot" />
                  <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                    You&apos;re Done With
                  </span>
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-neutral-300">
                  You are tired of managing unreliable freelancers, wasting hours
                  on manual outreach, or burning cash on broken ad setups. You
                  want a single, clear system that predictably fills your
                  calendar.
                </p>
              </div>
            </div>
          </BentoCard>

          {/* ---- Card 5: The Guarantee (high-visual distinction) ---- */}
          <BentoCard
            as="section"
            className="relative overflow-hidden p-8 md:col-span-2 lg:col-span-4 lg:p-12"
          >
            {/* Distinct ambient purple wash to set this card apart */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,0,255,0.12),transparent_60%)]" />

            <div className="relative mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-neon/30 bg-black/40 px-3.5 py-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-dot" />
                <span className="text-xs font-medium uppercase tracking-[0.15em] text-neon/90">
                  Risk Reversal
                </span>
              </div>

              <h2 className="mt-5 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                The Growth Alliance Guarantee
              </h2>

              <p className="mt-5 text-[15px] leading-relaxed text-neutral-400">
                Traditional agencies lock you into massive retainers whether you
                close deals or not. We refuse to operate that way. Before we
                sign, we mutually lock in a strict performance KPI (e.g.,{" "}
                <span className="text-neutral-200">
                  20 Qualified Sales Meetings per month
                </span>
                ). If we miss that exact mark,{" "}
                <span className="text-white">Neoogle works completely for free.</span>{" "}
                We fund your outbound sourcing, SEO tracking, and campaigns out
                of our own pocket until we hit the target.
              </p>

              <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
                <a
                  href={site.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(157,0,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-soft hover:shadow-[0_10px_40px_rgba(157,0,255,0.7)]"
                >
                  Book a Call for Free
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </a>
                <a
                  href={site.booking}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-neutral-300 underline decoration-neutral-700 underline-offset-4 transition-colors hover:text-white hover:decoration-neon"
                >
                  Lock in your KPI on the scheduling portal →
                </a>
              </div>
            </div>
          </BentoCard>
        </RevealGroup>
      </main>
    </div>
  );
}
