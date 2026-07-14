import type { Metadata } from "next";
import BentoCard from "@/components/BentoCard";
import PageShell from "@/components/PageShell";
import PageHeading from "@/components/PageHeading";
import RevealGroup from "@/components/RevealGroup";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services — Neoogle",
  description:
    "The Total Acquisition Ecosystem: Websites & Funnels, Inbound Marketing, and Outbound Sales — a complete marketing and sales department for your startup.",
};

const pillars = [
  {
    phase: "Phase One",
    title: "Websites & Funnels",
    body: "If your digital storefront is slow or confusing, you are losing money. We completely rebuild your website from scratch using modern, lightning-fast code. We reshape your pricing and packaging so you look like an enterprise leader, and we set up automated landing pages designed strictly to turn random clicks into real business leads.",
  },
  {
    phase: "Phase Two",
    title: "Inbound Marketing",
    body: "We handle your entire digital presence so you don't have to think about it. Our team writes and designs content for your active social media channels, builds high-value email newsletters to nurture your prospects, and optimizes your site so you rank at the top of Google and modern AI search engines when founders look for solutions.",
  },
  {
    phase: "Phase Three",
    title: "Outbound Sales",
    body: "We don't just wait for people to find you; we aggressively hunt for your ideal clients. We find the exact profiles of the decision-makers you want to work with, launch personalized direct outreach campaigns across social platforms, and deploy relentless multi-touchpoint follow-up systems until they reply and book a call.",
  },
];

export default function ServicesPage() {
  return (
    <PageShell>
      <RevealGroup>
        <PageHeading
          eyebrow="Services"
          title="The Total Acquisition Ecosystem"
          subtitle="We replace the need for an expensive, slow in-house marketing team. We build the infrastructure, write the words, and handle the outreach to put qualified meetings on your calendar."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* ---- Pillar cards ---- */}
          {pillars.map((pillar) => (
            <BentoCard key={pillar.phase} as="article" className="p-8">
              <span className="mb-3 block text-xs font-semibold uppercase tracking-wider text-purple-400">
                {pillar.phase}
              </span>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                {pillar.title}
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400">
                {pillar.body}
              </p>
            </BentoCard>
          ))}

          {/* ---- Bottom action card ---- */}
          <BentoCard
            as="section"
            className="relative overflow-hidden p-10 text-center md:col-span-3"
          >
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(157,0,255,0.12),transparent_60%)]" />
            <div className="relative mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready for an Automated Pipeline?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-neutral-400 md:text-base">
                Stop managing multiple freelancers and wasting hours on manual
                outreach. Let us deploy the complete scaling system for you.
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
            </div>
          </BentoCard>
        </div>
      </RevealGroup>
    </PageShell>
  );
}
