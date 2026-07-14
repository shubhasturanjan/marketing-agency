import type { Metadata } from "next";
import BentoCard from "@/components/BentoCard";
import PageShell from "@/components/PageShell";
import PageHeading from "@/components/PageHeading";
import RevealGroup from "@/components/RevealGroup";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About — Neoogle",
  description:
    "A founder-led, boutique growth partner engineered for speed. Zero agency bloat, deep direct-response and consumer-psychology expertise.",
};

/** Small accent eyebrow used at the top of every card. */
function Eyebrow({ children }: { children: string }) {
  return (
    <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-purple-400">
      {children}
    </span>
  );
}

const socials = [
  {
    label: "Follow the raw journey at @shubhasturanjan →",
    href: site.instagram,
  },
  {
    label: "Watch system breakdowns on YouTube →",
    href: site.youtube,
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <RevealGroup>
        <PageHeading
          eyebrow="About Neoogle"
          title="A founder-led growth partner — not another agency."
          subtitle="Deep direct-response and consumer-psychology expertise, delivered with boutique speed."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* ---- Card 1: The Core Philosophy (col-span-2) ---- */}
          <BentoCard as="section" className="p-8 md:col-span-2">
            <Eyebrow>The Agency Antidote</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Built for Speed. Engineered for Scale.
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Why the traditional agency model is an expensive trap for
              post-Year-One startups.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-neutral-400 md:text-base">
              Most marketing agencies look premium on the outside, but their
              internal structure is fundamentally broken. The moment you sign
              their monthly retainer, the senior strategist who sold you
              vanishes. Your startup&apos;s growth, messaging, and acquisition
              systems are quietly handed off to an uninspired junior intern who
              doesn&apos;t understand your business model. You end up paying for
              corporate overhead, endless account management syncs, and sluggish
              execution loops. Neoogle was built to destroy this cycle. We
              operate strictly as a high-leverage, boutique growth partner. We
              don&apos;t hide behind bloated team lists or vanity presentations.
              We focus entirely on engineering fast, aggressive acquisition
              systems for founders who have crossed the initial 12-to-18-month
              survival mark and are ready to systematically dominate their
              market.
            </p>

            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-neon px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(157,0,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-soft hover:shadow-[0_10px_40px_rgba(157,0,255,0.7)]"
            >
              Book a Call for Free
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </a>
          </BentoCard>

          {/* ---- Card 2: The Obsession (col-span-1) ---- */}
          <BentoCard as="section" className="p-8">
            <Eyebrow>Systematic Mastery</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Devoured 50+ Frameworks so You Don&apos;t Have To.
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Deconstructing human behavior to build high-converting pipelines.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400 md:text-base">
              True marketing isn&apos;t about running aesthetic social media
              grids, burning capital on unoptimized Meta ads, or guessing what
              looks good. It is a rigorous science rooted in direct-response
              copywriting and consumer psychology. I have obsessively
              deconstructed over 50 of the world&apos;s most powerful marketing,
              sales, and behavioral economics frameworks to build the Neoogle
              Total Acquisition Ecosystem. From cognitive biases to advanced
              landing page conversion architectures, everything we deploy is
              engineered to command attention, eliminate friction, and drive
              predictable revenue.
            </p>
          </BentoCard>

          {/* ---- Card 3: The Mission (col-span-1) ---- */}
          <BentoCard as="section" className="p-8">
            <Eyebrow>Boutique Alignment</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight text-white">
              Zero Agency Bloat. Just Pure Execution.
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Your fractional marketing and sales department, handled by the
              founder.
            </p>
            <p className="mt-5 text-sm leading-relaxed text-neutral-400 md:text-base">
              When you partner with Neoogle, you get a dedicated growth operator,
              not a corporate hierarchy. I act as your complete, fractional
              marketing and sales machine. From deep-diving into your primary
              positioning to building custom digital storefronts and launching
              relentless outbound sourcing campaigns, you have a direct line to
              the person executing the work. This structure unlocks hyper-rapid
              strategic testing, absolute alignment, and zero operational lag. We
              don&apos;t talk about scaling—we build the infrastructure that
              forces it to happen.
            </p>
          </BentoCard>

          {/* ---- Card 4: Connect In Public (col-span-2) ---- */}
          <BentoCard as="section" className="p-8 md:col-span-2">
            <Eyebrow>Radical Transparency</Eyebrow>
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Building the Next Generation of Marketing.
            </h2>
            <p className="mt-2 text-sm text-neutral-500">
              Total transparency in an industry full of hidden retainers.
            </p>
            <p className="mt-5 max-w-3xl text-sm leading-relaxed text-neutral-400 md:text-base">
              I believe in absolute transparency and building in public. When you
              partner with Neoogle, you aren&apos;t hiring a black-box agency;
              you are locking in a relentless strategic ally who is fully
              invested in your customer pipeline. Let&apos;s connect across
              platforms where I break down real-world marketing systems daily.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black/40 px-5 py-3.5 text-sm font-medium text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/50 hover:text-white hover:shadow-[0_0_24px_rgba(157,0,255,0.2)]"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                  {s.label}
                </a>
              ))}
              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-xl border border-neutral-800 bg-black/40 px-5 py-3.5 text-sm font-medium text-neutral-200 transition-all duration-300 hover:-translate-y-0.5 hover:border-neon/50 hover:text-white hover:shadow-[0_0_24px_rgba(157,0,255,0.2)]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-neon" />
                Call / WhatsApp Direct: {site.phone}
              </a>
            </div>
          </BentoCard>
        </div>
      </RevealGroup>
    </PageShell>
  );
}
