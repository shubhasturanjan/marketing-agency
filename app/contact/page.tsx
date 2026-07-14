import type { Metadata } from "next";
import BentoCard from "@/components/BentoCard";
import PageShell from "@/components/PageShell";
import PageHeading from "@/components/PageHeading";
import RevealGroup from "@/components/RevealGroup";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact — Neoogle",
  description:
    "Book a call, ring the founder directly, or follow the build on YouTube and Instagram.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <RevealGroup>
        <PageHeading
          eyebrow="Contact"
          title="Let's talk about your Year Two."
          subtitle="Book a call, ring me directly, or watch how I think about growth on YouTube."
        />

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Primary booking card */}
          <BentoCard
            as="section"
            className="flex flex-col justify-between p-8 lg:col-span-2 lg:p-10"
          >
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-white">
                Book a free strategy call
              </h2>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
                30 minutes, no pitch deck. We&apos;ll map the single biggest
                lever for your growth and whether Neoogle is the right partner to
                pull it.
              </p>
            </div>
            <a
              href={site.booking}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-neon px-7 py-4 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(157,0,255,0.45)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-neon-soft hover:shadow-[0_10px_40px_rgba(157,0,255,0.7)] sm:w-auto"
            >
              Book a Call for Free →
            </a>
          </BentoCard>

          {/* Direct phone */}
          <BentoCard as="section" className="flex flex-col justify-between p-8">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
              Call directly
            </span>
            <div className="mt-6">
              <a
                href={site.phoneHref}
                className="text-2xl font-bold tracking-tight text-white transition-colors hover:text-neon-soft"
              >
                {site.phone}
              </a>
              <p className="mt-2 text-sm text-neutral-500">
                Founder line. Quick questions welcome.
              </p>
            </div>
          </BentoCard>

          {/* YouTube */}
          <BentoCard
            as="section"
            className="flex flex-col justify-between p-8 md:col-span-1 lg:col-span-2"
          >
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
                Watch the thinking
              </span>
              <h3 className="mt-4 text-lg font-semibold tracking-tight text-white">
                Growth systems, broken down on YouTube
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                See how I approach offers, funnels, and acquisition before you
                ever book a call.
              </p>
            </div>
            <a
              href={site.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 self-start rounded-full border border-neutral-800 px-5 py-2.5 text-sm font-medium text-neutral-200 transition-all duration-300 hover:border-neon/50 hover:text-white hover:shadow-[0_0_24px_rgba(157,0,255,0.2)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-neon animate-pulse-dot" />
              youtube.com/@shubhasturanjan
            </a>
          </BentoCard>

          {/* Instagram */}
          <BentoCard as="section" className="flex flex-col justify-between p-8">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-neutral-500">
              DM me
            </span>
            <div className="mt-6">
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg font-semibold tracking-tight text-white transition-colors hover:text-neon-soft"
              >
                {site.instagramHandle}
              </a>
              <p className="mt-2 text-sm text-neutral-500">
                Fastest for quick questions.
              </p>
            </div>
          </BentoCard>
        </div>
      </RevealGroup>
    </PageShell>
  );
}
