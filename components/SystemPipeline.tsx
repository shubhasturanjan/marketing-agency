/**
 * SystemPipeline — a terminal-style dashboard that visualises the 3-step
 * Neoogle process. Establishes authority through a clear, data-led pipeline
 * rather than case-study claims.
 */
const steps = [
  {
    id: "01",
    label: "Offer Optimization",
    detail: "Passionate offer definition — sharpen what you sell and why it wins.",
  },
  {
    id: "02",
    label: "Strategic Landing Pages",
    detail: "PAS + AIDA structure engineered to convert cold traffic into calls.",
  },
  {
    id: "03",
    label: "Predictive Traffic Systems",
    detail: "Data-led acquisition across Meta & Google, tuned to real signal.",
  },
];

export default function SystemPipeline() {
  return (
    <div className="overflow-hidden rounded-xl border border-neutral-800 bg-black/40">
      {/* Terminal chrome */}
      <div className="flex items-center gap-2 border-b border-neutral-800 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neutral-700" />
        <span className="h-2.5 w-2.5 rounded-full bg-neon animate-pulse-dot" />
        <span className="ml-2 font-mono text-xs text-neutral-500">
          neoogle@growth ~ acquisition-engine
        </span>
      </div>

      {/* Pipeline body */}
      <div className="grid gap-4 p-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <div key={step.id} className="relative">
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-neon" />
              <span className="font-mono text-xs text-neon">STEP {step.id}</span>
            </div>
            <h4 className="mt-2 text-sm font-semibold tracking-tight text-white">
              {step.label}
            </h4>
            <p className="mt-1.5 font-mono text-xs leading-relaxed text-neutral-500">
              {step.detail}
            </p>

            {/* Connector arrow between steps (hidden on the last one) */}
            {i < steps.length - 1 && (
              <span className="absolute -right-3 top-1 hidden text-neutral-700 md:block">
                →
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
