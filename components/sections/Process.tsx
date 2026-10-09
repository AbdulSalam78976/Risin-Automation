
import { Wrap } from "@/components/Wrap";
import { Kick, sectionTitleClass } from "@/components/Kick";

const steps = [
  {
    letter: "E",
    word: "ENGINEERING<br>PHASE 01 / 04",
    n: "PHASE 01",
    title: "Engineering",
    body: "Site surveys, load studies, simulation and GA drawings. We freeze the design basis before a single rupee of procurement is committed — BoQ and specifications included.",
    deliverables: [
      "Design Basis Report",
      "Single-Line Diagrams",
      "BoQ + Tender Pack",
    ],
  },
  {
    letter: "P",
    word: "PROCUREMENT<br>PHASE 02 / 04",
    n: "PHASE 02",
    title: "Procurement",
    body: "Vendor-neutral specification across a qualified OEM network. Factory acceptance tests on every critical item, staged logistics so site never waits on material.",
    deliverables: [
      "Approved Vendor List",
      "FAT Reports",
      "Kit Delivered To Site",
    ],
  },
  {
    letter: "C",
    word: "CONSTRUCTION<br>PHASE 03 / 04",
    n: "PHASE 03",
    title: "Construction",
    body: "Installation, integration and testing & commissioning under a zero-incident target, with ITP/QAP records closed in real time — not reconstructed at handover.",
    deliverables: [
      "Method Statements",
      "ITP / QAP Records",
      "Commissioning Dossier",
    ],
  },
  {
    letter: "M",
    word: "MAINTENANCE<br>PHASE 04 / 04",
    n: "PHASE 04",
    title: "Maintenance",
    body: "24/7 remote monitoring from our ops room, SLA-bound response crews and predictive maintenance that replaces failures with scheduled interventions.",
    deliverables: [
      "SLA Register",
      "CMMS Reporting",
      "Uptime Reviews",
    ],
  },
];

export function Process() {
  return (
    <section
      className="border-b border-navy/10 bg-white py-[clamp(52px,7vh,84px)]"
      id="process"
    >
      <Wrap className="grid grid-cols-1 gap-[clamp(26px,3vw,52px)] min-[961px]:grid-cols-[.88fr_1.12fr]">

        {/* Left Green Panel */}
        <div className="sticky top-[calc(var(--navh)+24px)] self-start bg-[#3E5F44] p-[clamp(22px,2.4vw,32px)] text-white max-[960px]:static">

          <Kick scramble>02 / METHOD</Kick>

          <h2 className={`lines ${sectionTitleClass} text-white`}>
            <span className="ln">
              <span>THE EPCM</span>
            </span>
            <span className="ln">
              <span>OPERATING SYSTEM.</span>
            </span>
          </h2>

          <p className="mt-4 max-w-[440px] text-[15px] leading-relaxed text-white/80">
            Four letters. Zero hand-offs. Every Risin project runs on the
            same disciplined pipeline, so accountability never leaves the
            building — from the first site survey to year ten of maintenance.
          </p>

          {/* Active EPCM Phase */}
          <div className="mt-7 flex items-center gap-5">
            <div
              className="min-w-[1.1ch] font-display text-[clamp(3.4rem,6vw,5.6rem)] font-bold leading-none text-white"
              id="epcmLetter"
            >
              E
            </div>

            <div
              className="border-l border-white/30 pl-4.5 text-[11.5px] uppercase leading-[1.9] tracking-[0.26em] text-white/80"
              id="epcmWord"
              dangerouslySetInnerHTML={{
                __html: "ENGINEERING<br>PHASE 01 / 04",
              }}
            />
          </div>

          {/* EPCM Phase Index */}
          <div className="mt-7 flex flex-col border-t border-white/25 pt-4">
            {steps.map((s) => (
              <div
                key={s.letter}
                className="group flex items-center gap-3 py-1 text-[13px] text-white/80 transition-colors duration-300 hover:text-white"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center border border-white/35 font-display text-[11px] font-semibold text-white transition-colors duration-300 group-hover:border-white group-hover:bg-white group-hover:text-[#3E5F44]">
                  {s.letter}
                </span>
                {s.title}
              </div>
            ))}
          </div>

          {/* Panel Footer */}
          <div className="mt-6 border-t border-white/25 pt-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-white/60">
              RISIN AUTOMATION / EPCM
            </span>
          </div>
        </div>

        {/* Right Side — EPCM Process Cards */}
        <div className="flex flex-col gap-4">
          {steps.map((s) => (
            <article
              className="step reveal relative border border-navy/10 bg-white p-[clamp(20px,2.2vw,30px)] transition-[border-color,transform,box-shadow] duration-300 hover:translate-x-1.5 hover:border-green/40 [&.on]:border-green [&.on]:shadow-[0_10px_30px_rgba(40,167,69,0.1)]"
              data-letter={s.letter}
              data-word={s.word}
              key={s.letter}
            >
              <div className="mb-2.5 flex items-center gap-3.5">
                <span className="grid h-8.5 w-8.5 place-items-center bg-green font-display text-[17px] font-bold text-white">
                  {s.letter}
                </span>

                <span className="text-[11px] tracking-[0.2em] text-steel-dim">
                  {s.n}
                </span>

                <h4 className="text-[19px] text-navy">
                  {s.title}
                </h4>
              </div>

              <p className="text-[14.5px] leading-relaxed text-steel">
                {s.body}
              </p>

              <div className="mt-3.5 flex flex-wrap gap-2">
                {s.deliverables.map((d) => (
                  <span
                    key={d}
                    className="border border-dashed border-navy/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-steel"
                  >
                    {d}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

      </Wrap>
    </section>
  );
}
