import { Wrap } from "@/components/Wrap";

const clients = [
  "NOVAPORT TERMINALS",
  "HELIOGRID ENERGY",
  "MERIDIAN BUSINESS PARKS",
  "AXIS LOGISTICS",
  "URBANPATH MOBILITY",
  "VOLTAWORKS INDUSTRIES",
  "CIVIQ INFRA",
  "SUNDROP FOODS",
];

function Track() {
  return (
    <span className="flex w-max">
      {clients.map((c) => (
        <span key={c} className="flex items-center gap-14 whitespace-nowrap pr-14 font-display text-[17px] font-semibold tracking-[0.1em] text-steel-dim">
          {c} <em className="not-italic text-[10px] text-green-dark">◆</em>
        </span>
      ))}
    </span>
  );
}

export function Trust() {
  return (
    <section className="border-b border-navy/10 bg-slate py-[34px]">
      <Wrap>
        <div className="mb-6 text-center font-display text-[10px] uppercase tracking-[0.26em] text-steel-dim">
          Trusted by operators who can&apos;t afford downtime
        </div>
      </Wrap>
      <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="flex w-max animate-[marquee-scroll_44s_linear_infinite_reverse]">
          <Track />
          <Track />
        </div>
      </div>
    </section>
  );
}
