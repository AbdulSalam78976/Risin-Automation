import { Wrap } from "@/components/Wrap";

export function Quote() {
  return (
    <section className="relative isolate overflow-hidden bg-navy-dark py-[clamp(72px,10vh,110px)] text-white">
      {/* Blueprint grid — drafting paper, not decoration for its own sake. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:48px_48px]"
      />
      {/* Green wash from the top-left, fading out before it reaches the text. */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(70%_90%_at_12%_0%,rgba(40,167,69,0.22),transparent_65%)]"
      />
      {/* Oversized watermark glyph, anchored off the bottom-right corner. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-[0.28em] right-[2%] -z-10 select-none font-display text-[clamp(16rem,34vw,30rem)] leading-none text-white/[0.035]"
      >
        &rdquo;
      </span>
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-green via-green/30 to-transparent" />

      <Wrap className="reveal">
        <div className="font-display text-[90px] leading-[0.6] text-green">&ldquo;</div>
        <blockquote className="mt-6.5 max-w-[920px] font-display text-[clamp(1.3rem,2.8vw,2rem)] font-semibold normal-case leading-[1.35]">
          Risin took a scope that touched entrance automation, power and solar across three
          sites and ran it like a single machine. <b className="text-green">Commissioned on date, on budget</b> —
          and they still pick up the phone when it matters.
        </blockquote>
        <div className="mt-7.5 flex items-center gap-4 text-[11.5px] uppercase tracking-[0.14em] text-white/55 before:h-px before:w-11 before:bg-green">
          DIRECTOR — FACILITIES, BLUE AREA CORPORATE TOWER, ISLAMABAD
        </div>
      </Wrap>
    </section>
  );
}
