import { Wrap } from "@/components/Wrap";

export function Quote() {
  return (
    <section className="bg-slate py-[clamp(72px,10vh,110px)] text-navy">
      <Wrap className="reveal">
        <div className="font-display text-[90px] leading-[0.6] text-green">&ldquo;</div>
        <blockquote className="mt-6.5 font-display text-[clamp(1.3rem,2.8vw,2rem)] font-semibold normal-case leading-[1.35]">
          Risin took a scope that touched entrance automation, power and solar across three
          sites and ran it like a single machine. <b className="text-green-dark">Commissioned on date, on budget</b> —
          and they still pick up the phone when it matters.
        </blockquote>
        <div className="mt-7.5 flex items-center gap-4 text-[11.5px] uppercase tracking-[0.14em] text-steel before:h-px before:w-11 before:bg-green-dark">
          DIRECTOR — FACILITIES, BLUE AREA CORPORATE TOWER, ISLAMABAD
        </div>
      </Wrap>
    </section>
  );
}
